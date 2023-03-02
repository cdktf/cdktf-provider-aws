# `codepipelineCustomActionType` Submodule <a name="`codepipelineCustomActionType` Submodule" id="@cdktf/provider-aws.codepipelineCustomActionType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodepipelineCustomActionType <a name="CodepipelineCustomActionType" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type aws_codepipeline_custom_action_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer"></a>

```typescript
import { codepipelineCustomActionType } from '@cdktf/provider-aws'

new codepipelineCustomActionType.CodepipelineCustomActionType(scope: Construct, id: string, config: CodepipelineCustomActionTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig">CodepipelineCustomActionTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig">CodepipelineCustomActionTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putConfigurationProperty">putConfigurationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putInputArtifactDetails">putInputArtifactDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putOutputArtifactDetails">putOutputArtifactDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetConfigurationProperty">resetConfigurationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putConfigurationProperty` <a name="putConfigurationProperty" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putConfigurationProperty"></a>

```typescript
public putConfigurationProperty(value: IResolvable | CodepipelineCustomActionTypeConfigurationProperty[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putConfigurationProperty.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty">CodepipelineCustomActionTypeConfigurationProperty</a>[]

---

##### `putInputArtifactDetails` <a name="putInputArtifactDetails" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putInputArtifactDetails"></a>

```typescript
public putInputArtifactDetails(value: CodepipelineCustomActionTypeInputArtifactDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putInputArtifactDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

---

##### `putOutputArtifactDetails` <a name="putOutputArtifactDetails" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putOutputArtifactDetails"></a>

```typescript
public putOutputArtifactDetails(value: CodepipelineCustomActionTypeOutputArtifactDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putOutputArtifactDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

---

##### `putSettings` <a name="putSettings" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings"></a>

```typescript
public putSettings(value: CodepipelineCustomActionTypeSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

---

##### `resetConfigurationProperty` <a name="resetConfigurationProperty" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetConfigurationProperty"></a>

```typescript
public resetConfigurationProperty(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isConstruct"></a>

```typescript
import { codepipelineCustomActionType } from '@cdktf/provider-aws'

codepipelineCustomActionType.CodepipelineCustomActionType.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformElement"></a>

```typescript
import { codepipelineCustomActionType } from '@cdktf/provider-aws'

codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformResource"></a>

```typescript
import { codepipelineCustomActionType } from '@cdktf/provider-aws'

codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationProperty">configurationProperty</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList">CodepipelineCustomActionTypeConfigurationPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetails">inputArtifactDetails</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference">CodepipelineCustomActionTypeInputArtifactDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetails">outputArtifactDetails</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference">CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference">CodepipelineCustomActionTypeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationPropertyInput">configurationPropertyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty">CodepipelineCustomActionTypeConfigurationProperty</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetailsInput">inputArtifactDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetailsInput">outputArtifactDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.settingsInput">settingsInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configurationProperty`<sup>Required</sup> <a name="configurationProperty" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationProperty"></a>

```typescript
public readonly configurationProperty: CodepipelineCustomActionTypeConfigurationPropertyList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList">CodepipelineCustomActionTypeConfigurationPropertyList</a>

---

##### `inputArtifactDetails`<sup>Required</sup> <a name="inputArtifactDetails" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetails"></a>

```typescript
public readonly inputArtifactDetails: CodepipelineCustomActionTypeInputArtifactDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference">CodepipelineCustomActionTypeInputArtifactDetailsOutputReference</a>

---

##### `outputArtifactDetails`<sup>Required</sup> <a name="outputArtifactDetails" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetails"></a>

```typescript
public readonly outputArtifactDetails: CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference">CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.settings"></a>

```typescript
public readonly settings: CodepipelineCustomActionTypeSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference">CodepipelineCustomActionTypeSettingsOutputReference</a>

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `configurationPropertyInput`<sup>Optional</sup> <a name="configurationPropertyInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationPropertyInput"></a>

```typescript
public readonly configurationPropertyInput: IResolvable | CodepipelineCustomActionTypeConfigurationProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty">CodepipelineCustomActionTypeConfigurationProperty</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputArtifactDetailsInput`<sup>Optional</sup> <a name="inputArtifactDetailsInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetailsInput"></a>

```typescript
public readonly inputArtifactDetailsInput: CodepipelineCustomActionTypeInputArtifactDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

---

##### `outputArtifactDetailsInput`<sup>Optional</sup> <a name="outputArtifactDetailsInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetailsInput"></a>

```typescript
public readonly outputArtifactDetailsInput: CodepipelineCustomActionTypeOutputArtifactDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.settingsInput"></a>

```typescript
public readonly settingsInput: CodepipelineCustomActionTypeSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodepipelineCustomActionTypeConfig <a name="CodepipelineCustomActionTypeConfig" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.Initializer"></a>

```typescript
import { codepipelineCustomActionType } from '@cdktf/provider-aws'

const codepipelineCustomActionTypeConfig: codepipelineCustomActionType.CodepipelineCustomActionTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#category CodepipelineCustomActionType#category}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.inputArtifactDetails">inputArtifactDetails</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a></code> | input_artifact_details block. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.outputArtifactDetails">outputArtifactDetails</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a></code> | output_artifact_details block. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.providerName">providerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#provider_name CodepipelineCustomActionType#provider_name}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#version CodepipelineCustomActionType#version}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.configurationProperty">configurationProperty</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty">CodepipelineCustomActionTypeConfigurationProperty</a>[]</code> | configuration_property block. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#id CodepipelineCustomActionType#id}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#tags CodepipelineCustomActionType#tags}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#tags_all CodepipelineCustomActionType#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#category CodepipelineCustomActionType#category}.

---

##### `inputArtifactDetails`<sup>Required</sup> <a name="inputArtifactDetails" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.inputArtifactDetails"></a>

```typescript
public readonly inputArtifactDetails: CodepipelineCustomActionTypeInputArtifactDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

input_artifact_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#input_artifact_details CodepipelineCustomActionType#input_artifact_details}

---

##### `outputArtifactDetails`<sup>Required</sup> <a name="outputArtifactDetails" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.outputArtifactDetails"></a>

```typescript
public readonly outputArtifactDetails: CodepipelineCustomActionTypeOutputArtifactDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

output_artifact_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#output_artifact_details CodepipelineCustomActionType#output_artifact_details}

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#provider_name CodepipelineCustomActionType#provider_name}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#version CodepipelineCustomActionType#version}.

---

##### `configurationProperty`<sup>Optional</sup> <a name="configurationProperty" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.configurationProperty"></a>

```typescript
public readonly configurationProperty: IResolvable | CodepipelineCustomActionTypeConfigurationProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty">CodepipelineCustomActionTypeConfigurationProperty</a>[]

configuration_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#configuration_property CodepipelineCustomActionType#configuration_property}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#id CodepipelineCustomActionType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.settings"></a>

```typescript
public readonly settings: CodepipelineCustomActionTypeSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#settings CodepipelineCustomActionType#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#tags CodepipelineCustomActionType#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#tags_all CodepipelineCustomActionType#tags_all}.

---

### CodepipelineCustomActionTypeConfigurationProperty <a name="CodepipelineCustomActionTypeConfigurationProperty" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.Initializer"></a>

```typescript
import { codepipelineCustomActionType } from '@cdktf/provider-aws'

const codepipelineCustomActionTypeConfigurationProperty: codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.key">key</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#key CodepipelineCustomActionType#key}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#name CodepipelineCustomActionType#name}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#required CodepipelineCustomActionType#required}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.secret">secret</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#secret CodepipelineCustomActionType#secret}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#description CodepipelineCustomActionType#description}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.queryable">queryable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#queryable CodepipelineCustomActionType#queryable}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#type CodepipelineCustomActionType#type}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.key"></a>

```typescript
public readonly key: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#key CodepipelineCustomActionType#key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#name CodepipelineCustomActionType#name}.

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#required CodepipelineCustomActionType#required}.

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.secret"></a>

```typescript
public readonly secret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#secret CodepipelineCustomActionType#secret}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#description CodepipelineCustomActionType#description}.

---

##### `queryable`<sup>Optional</sup> <a name="queryable" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.queryable"></a>

```typescript
public readonly queryable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#queryable CodepipelineCustomActionType#queryable}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#type CodepipelineCustomActionType#type}.

---

### CodepipelineCustomActionTypeInputArtifactDetails <a name="CodepipelineCustomActionTypeInputArtifactDetails" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.Initializer"></a>

```typescript
import { codepipelineCustomActionType } from '@cdktf/provider-aws'

const codepipelineCustomActionTypeInputArtifactDetails: codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.maximumCount">maximumCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.minimumCount">minimumCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}. |

---

##### `maximumCount`<sup>Required</sup> <a name="maximumCount" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.maximumCount"></a>

```typescript
public readonly maximumCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}.

---

##### `minimumCount`<sup>Required</sup> <a name="minimumCount" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.minimumCount"></a>

```typescript
public readonly minimumCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}.

---

### CodepipelineCustomActionTypeOutputArtifactDetails <a name="CodepipelineCustomActionTypeOutputArtifactDetails" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.Initializer"></a>

```typescript
import { codepipelineCustomActionType } from '@cdktf/provider-aws'

const codepipelineCustomActionTypeOutputArtifactDetails: codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.maximumCount">maximumCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.minimumCount">minimumCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}. |

---

##### `maximumCount`<sup>Required</sup> <a name="maximumCount" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.maximumCount"></a>

```typescript
public readonly maximumCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}.

---

##### `minimumCount`<sup>Required</sup> <a name="minimumCount" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.minimumCount"></a>

```typescript
public readonly minimumCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}.

---

### CodepipelineCustomActionTypeSettings <a name="CodepipelineCustomActionTypeSettings" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.Initializer"></a>

```typescript
import { codepipelineCustomActionType } from '@cdktf/provider-aws'

const codepipelineCustomActionTypeSettings: codepipelineCustomActionType.CodepipelineCustomActionTypeSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.entityUrlTemplate">entityUrlTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#entity_url_template CodepipelineCustomActionType#entity_url_template}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.executionUrlTemplate">executionUrlTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#execution_url_template CodepipelineCustomActionType#execution_url_template}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.revisionUrlTemplate">revisionUrlTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#revision_url_template CodepipelineCustomActionType#revision_url_template}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.thirdPartyConfigurationUrl">thirdPartyConfigurationUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#third_party_configuration_url CodepipelineCustomActionType#third_party_configuration_url}. |

---

##### `entityUrlTemplate`<sup>Optional</sup> <a name="entityUrlTemplate" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.entityUrlTemplate"></a>

```typescript
public readonly entityUrlTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#entity_url_template CodepipelineCustomActionType#entity_url_template}.

---

##### `executionUrlTemplate`<sup>Optional</sup> <a name="executionUrlTemplate" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.executionUrlTemplate"></a>

```typescript
public readonly executionUrlTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#execution_url_template CodepipelineCustomActionType#execution_url_template}.

---

##### `revisionUrlTemplate`<sup>Optional</sup> <a name="revisionUrlTemplate" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.revisionUrlTemplate"></a>

```typescript
public readonly revisionUrlTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#revision_url_template CodepipelineCustomActionType#revision_url_template}.

---

##### `thirdPartyConfigurationUrl`<sup>Optional</sup> <a name="thirdPartyConfigurationUrl" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.thirdPartyConfigurationUrl"></a>

```typescript
public readonly thirdPartyConfigurationUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#third_party_configuration_url CodepipelineCustomActionType#third_party_configuration_url}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodepipelineCustomActionTypeConfigurationPropertyList <a name="CodepipelineCustomActionTypeConfigurationPropertyList" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer"></a>

```typescript
import { codepipelineCustomActionType } from '@cdktf/provider-aws'

new codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.get"></a>

```typescript
public get(index: number): CodepipelineCustomActionTypeConfigurationPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty">CodepipelineCustomActionTypeConfigurationProperty</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineCustomActionTypeConfigurationProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty">CodepipelineCustomActionTypeConfigurationProperty</a>[]

---


### CodepipelineCustomActionTypeConfigurationPropertyOutputReference <a name="CodepipelineCustomActionTypeConfigurationPropertyOutputReference" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer"></a>

```typescript
import { codepipelineCustomActionType } from '@cdktf/provider-aws'

new codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resetQueryable">resetQueryable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetQueryable` <a name="resetQueryable" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resetQueryable"></a>

```typescript
public resetQueryable(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.keyInput">keyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.queryableInput">queryableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.secretInput">secretInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.key">key</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.queryable">queryable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.secret">secret</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty">CodepipelineCustomActionTypeConfigurationProperty</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryableInput`<sup>Optional</sup> <a name="queryableInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.queryableInput"></a>

```typescript
public readonly queryableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.key"></a>

```typescript
public readonly key: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queryable`<sup>Required</sup> <a name="queryable" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.queryable"></a>

```typescript
public readonly queryable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.secret"></a>

```typescript
public readonly secret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineCustomActionTypeConfigurationProperty | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty">CodepipelineCustomActionTypeConfigurationProperty</a> | cdktf.IResolvable

---


### CodepipelineCustomActionTypeInputArtifactDetailsOutputReference <a name="CodepipelineCustomActionTypeInputArtifactDetailsOutputReference" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer"></a>

```typescript
import { codepipelineCustomActionType } from '@cdktf/provider-aws'

new codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCountInput">maximumCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCountInput">minimumCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCount">maximumCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCount">minimumCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumCountInput`<sup>Optional</sup> <a name="maximumCountInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCountInput"></a>

```typescript
public readonly maximumCountInput: number;
```

- *Type:* number

---

##### `minimumCountInput`<sup>Optional</sup> <a name="minimumCountInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCountInput"></a>

```typescript
public readonly minimumCountInput: number;
```

- *Type:* number

---

##### `maximumCount`<sup>Required</sup> <a name="maximumCount" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCount"></a>

```typescript
public readonly maximumCount: number;
```

- *Type:* number

---

##### `minimumCount`<sup>Required</sup> <a name="minimumCount" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCount"></a>

```typescript
public readonly minimumCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineCustomActionTypeInputArtifactDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

---


### CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference <a name="CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer"></a>

```typescript
import { codepipelineCustomActionType } from '@cdktf/provider-aws'

new codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCountInput">maximumCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCountInput">minimumCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCount">maximumCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCount">minimumCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumCountInput`<sup>Optional</sup> <a name="maximumCountInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCountInput"></a>

```typescript
public readonly maximumCountInput: number;
```

- *Type:* number

---

##### `minimumCountInput`<sup>Optional</sup> <a name="minimumCountInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCountInput"></a>

```typescript
public readonly minimumCountInput: number;
```

- *Type:* number

---

##### `maximumCount`<sup>Required</sup> <a name="maximumCount" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCount"></a>

```typescript
public readonly maximumCount: number;
```

- *Type:* number

---

##### `minimumCount`<sup>Required</sup> <a name="minimumCount" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCount"></a>

```typescript
public readonly minimumCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineCustomActionTypeOutputArtifactDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

---


### CodepipelineCustomActionTypeSettingsOutputReference <a name="CodepipelineCustomActionTypeSettingsOutputReference" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer"></a>

```typescript
import { codepipelineCustomActionType } from '@cdktf/provider-aws'

new codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetEntityUrlTemplate">resetEntityUrlTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetExecutionUrlTemplate">resetExecutionUrlTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetRevisionUrlTemplate">resetRevisionUrlTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetThirdPartyConfigurationUrl">resetThirdPartyConfigurationUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntityUrlTemplate` <a name="resetEntityUrlTemplate" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetEntityUrlTemplate"></a>

```typescript
public resetEntityUrlTemplate(): void
```

##### `resetExecutionUrlTemplate` <a name="resetExecutionUrlTemplate" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetExecutionUrlTemplate"></a>

```typescript
public resetExecutionUrlTemplate(): void
```

##### `resetRevisionUrlTemplate` <a name="resetRevisionUrlTemplate" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetRevisionUrlTemplate"></a>

```typescript
public resetRevisionUrlTemplate(): void
```

##### `resetThirdPartyConfigurationUrl` <a name="resetThirdPartyConfigurationUrl" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetThirdPartyConfigurationUrl"></a>

```typescript
public resetThirdPartyConfigurationUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplateInput">entityUrlTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplateInput">executionUrlTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplateInput">revisionUrlTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrlInput">thirdPartyConfigurationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplate">entityUrlTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplate">executionUrlTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplate">revisionUrlTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrl">thirdPartyConfigurationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityUrlTemplateInput`<sup>Optional</sup> <a name="entityUrlTemplateInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplateInput"></a>

```typescript
public readonly entityUrlTemplateInput: string;
```

- *Type:* string

---

##### `executionUrlTemplateInput`<sup>Optional</sup> <a name="executionUrlTemplateInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplateInput"></a>

```typescript
public readonly executionUrlTemplateInput: string;
```

- *Type:* string

---

##### `revisionUrlTemplateInput`<sup>Optional</sup> <a name="revisionUrlTemplateInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplateInput"></a>

```typescript
public readonly revisionUrlTemplateInput: string;
```

- *Type:* string

---

##### `thirdPartyConfigurationUrlInput`<sup>Optional</sup> <a name="thirdPartyConfigurationUrlInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrlInput"></a>

```typescript
public readonly thirdPartyConfigurationUrlInput: string;
```

- *Type:* string

---

##### `entityUrlTemplate`<sup>Required</sup> <a name="entityUrlTemplate" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplate"></a>

```typescript
public readonly entityUrlTemplate: string;
```

- *Type:* string

---

##### `executionUrlTemplate`<sup>Required</sup> <a name="executionUrlTemplate" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplate"></a>

```typescript
public readonly executionUrlTemplate: string;
```

- *Type:* string

---

##### `revisionUrlTemplate`<sup>Required</sup> <a name="revisionUrlTemplate" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplate"></a>

```typescript
public readonly revisionUrlTemplate: string;
```

- *Type:* string

---

##### `thirdPartyConfigurationUrl`<sup>Required</sup> <a name="thirdPartyConfigurationUrl" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrl"></a>

```typescript
public readonly thirdPartyConfigurationUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineCustomActionTypeSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

---



