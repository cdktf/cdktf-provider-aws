# `comprehendDocumentClassifier` Submodule <a name="`comprehendDocumentClassifier` Submodule" id="@cdktf/provider-aws.comprehendDocumentClassifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComprehendDocumentClassifier <a name="ComprehendDocumentClassifier" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier aws_comprehend_document_classifier}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer"></a>

```typescript
import { comprehendDocumentClassifier } from '@cdktf/provider-aws'

new comprehendDocumentClassifier.ComprehendDocumentClassifier(scope: Construct, id: string, config: ComprehendDocumentClassifierConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig">ComprehendDocumentClassifierConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig">ComprehendDocumentClassifierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig">putInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putOutputDataConfig">putOutputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetModelKmsKeyId">resetModelKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetOutputDataConfig">resetOutputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVersionName">resetVersionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVersionNamePrefix">resetVersionNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVolumeKmsKeyId">resetVolumeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putInputDataConfig` <a name="putInputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig"></a>

```typescript
public putInputDataConfig(value: ComprehendDocumentClassifierInputDataConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a>

---

##### `putOutputDataConfig` <a name="putOutputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putOutputDataConfig"></a>

```typescript
public putOutputDataConfig(value: ComprehendDocumentClassifierOutputDataConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putOutputDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putTimeouts"></a>

```typescript
public putTimeouts(value: ComprehendDocumentClassifierTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts">ComprehendDocumentClassifierTimeouts</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putVpcConfig"></a>

```typescript
public putVpcConfig(value: ComprehendDocumentClassifierVpcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetModelKmsKeyId` <a name="resetModelKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetModelKmsKeyId"></a>

```typescript
public resetModelKmsKeyId(): void
```

##### `resetOutputDataConfig` <a name="resetOutputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetOutputDataConfig"></a>

```typescript
public resetOutputDataConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersionName` <a name="resetVersionName" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVersionName"></a>

```typescript
public resetVersionName(): void
```

##### `resetVersionNamePrefix` <a name="resetVersionNamePrefix" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVersionNamePrefix"></a>

```typescript
public resetVersionNamePrefix(): void
```

##### `resetVolumeKmsKeyId` <a name="resetVolumeKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVolumeKmsKeyId"></a>

```typescript
public resetVolumeKmsKeyId(): void
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVpcConfig"></a>

```typescript
public resetVpcConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isConstruct"></a>

```typescript
import { comprehendDocumentClassifier } from '@cdktf/provider-aws'

comprehendDocumentClassifier.ComprehendDocumentClassifier.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformElement"></a>

```typescript
import { comprehendDocumentClassifier } from '@cdktf/provider-aws'

comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformResource"></a>

```typescript
import { comprehendDocumentClassifier } from '@cdktf/provider-aws'

comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference">ComprehendDocumentClassifierInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.outputDataConfig">outputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference">ComprehendDocumentClassifierOutputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference">ComprehendDocumentClassifierTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference">ComprehendDocumentClassifierVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dataAccessRoleArnInput">dataAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.inputDataConfigInput">inputDataConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelKmsKeyIdInput">modelKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.outputDataConfigInput">outputDataConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts">ComprehendDocumentClassifierTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNameInput">versionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNamePrefixInput">versionNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.volumeKmsKeyIdInput">volumeKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.vpcConfigInput">vpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelKmsKeyId">modelKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionName">versionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNamePrefix">versionNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `inputDataConfig`<sup>Required</sup> <a name="inputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.inputDataConfig"></a>

```typescript
public readonly inputDataConfig: ComprehendDocumentClassifierInputDataConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference">ComprehendDocumentClassifierInputDataConfigOutputReference</a>

---

##### `outputDataConfig`<sup>Required</sup> <a name="outputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.outputDataConfig"></a>

```typescript
public readonly outputDataConfig: ComprehendDocumentClassifierOutputDataConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference">ComprehendDocumentClassifierOutputDataConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.timeouts"></a>

```typescript
public readonly timeouts: ComprehendDocumentClassifierTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference">ComprehendDocumentClassifierTimeoutsOutputReference</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: ComprehendDocumentClassifierVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference">ComprehendDocumentClassifierVpcConfigOutputReference</a>

---

##### `dataAccessRoleArnInput`<sup>Optional</sup> <a name="dataAccessRoleArnInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dataAccessRoleArnInput"></a>

```typescript
public readonly dataAccessRoleArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputDataConfigInput`<sup>Optional</sup> <a name="inputDataConfigInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.inputDataConfigInput"></a>

```typescript
public readonly inputDataConfigInput: ComprehendDocumentClassifierInputDataConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a>

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `modelKmsKeyIdInput`<sup>Optional</sup> <a name="modelKmsKeyIdInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelKmsKeyIdInput"></a>

```typescript
public readonly modelKmsKeyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputDataConfigInput`<sup>Optional</sup> <a name="outputDataConfigInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.outputDataConfigInput"></a>

```typescript
public readonly outputDataConfigInput: ComprehendDocumentClassifierOutputDataConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ComprehendDocumentClassifierTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts">ComprehendDocumentClassifierTimeouts</a> | cdktf.IResolvable

---

##### `versionNameInput`<sup>Optional</sup> <a name="versionNameInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNameInput"></a>

```typescript
public readonly versionNameInput: string;
```

- *Type:* string

---

##### `versionNamePrefixInput`<sup>Optional</sup> <a name="versionNamePrefixInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNamePrefixInput"></a>

```typescript
public readonly versionNamePrefixInput: string;
```

- *Type:* string

---

##### `volumeKmsKeyIdInput`<sup>Optional</sup> <a name="volumeKmsKeyIdInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.volumeKmsKeyIdInput"></a>

```typescript
public readonly volumeKmsKeyIdInput: string;
```

- *Type:* string

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: ComprehendDocumentClassifierVpcConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a>

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dataAccessRoleArn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `modelKmsKeyId`<sup>Required</sup> <a name="modelKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelKmsKeyId"></a>

```typescript
public readonly modelKmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

---

##### `versionNamePrefix`<sup>Required</sup> <a name="versionNamePrefix" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNamePrefix"></a>

```typescript
public readonly versionNamePrefix: string;
```

- *Type:* string

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="volumeKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.volumeKmsKeyId"></a>

```typescript
public readonly volumeKmsKeyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComprehendDocumentClassifierConfig <a name="ComprehendDocumentClassifierConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.Initializer"></a>

```typescript
import { comprehendDocumentClassifier } from '@cdktf/provider-aws'

const comprehendDocumentClassifierConfig: comprehendDocumentClassifier.ComprehendDocumentClassifierConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#data_access_role_arn ComprehendDocumentClassifier#data_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.languageCode">languageCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#language_code ComprehendDocumentClassifier#language_code}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#name ComprehendDocumentClassifier#name}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#id ComprehendDocumentClassifier#id}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#mode ComprehendDocumentClassifier#mode}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.modelKmsKeyId">modelKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#model_kms_key_id ComprehendDocumentClassifier#model_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.outputDataConfig">outputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a></code> | output_data_config block. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#tags ComprehendDocumentClassifier#tags}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#tags_all ComprehendDocumentClassifier#tags_all}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts">ComprehendDocumentClassifierTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.versionName">versionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#version_name ComprehendDocumentClassifier#version_name}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.versionNamePrefix">versionNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#version_name_prefix ComprehendDocumentClassifier#version_name_prefix}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#volume_kms_key_id ComprehendDocumentClassifier#volume_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a></code> | vpc_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.dataAccessRoleArn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#data_access_role_arn ComprehendDocumentClassifier#data_access_role_arn}.

---

##### `inputDataConfig`<sup>Required</sup> <a name="inputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.inputDataConfig"></a>

```typescript
public readonly inputDataConfig: ComprehendDocumentClassifierInputDataConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#input_data_config ComprehendDocumentClassifier#input_data_config}

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#language_code ComprehendDocumentClassifier#language_code}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#name ComprehendDocumentClassifier#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#id ComprehendDocumentClassifier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#mode ComprehendDocumentClassifier#mode}.

---

##### `modelKmsKeyId`<sup>Optional</sup> <a name="modelKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.modelKmsKeyId"></a>

```typescript
public readonly modelKmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#model_kms_key_id ComprehendDocumentClassifier#model_kms_key_id}.

---

##### `outputDataConfig`<sup>Optional</sup> <a name="outputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.outputDataConfig"></a>

```typescript
public readonly outputDataConfig: ComprehendDocumentClassifierOutputDataConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a>

output_data_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#output_data_config ComprehendDocumentClassifier#output_data_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#tags ComprehendDocumentClassifier#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#tags_all ComprehendDocumentClassifier#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComprehendDocumentClassifierTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts">ComprehendDocumentClassifierTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#timeouts ComprehendDocumentClassifier#timeouts}

---

##### `versionName`<sup>Optional</sup> <a name="versionName" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#version_name ComprehendDocumentClassifier#version_name}.

---

##### `versionNamePrefix`<sup>Optional</sup> <a name="versionNamePrefix" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.versionNamePrefix"></a>

```typescript
public readonly versionNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#version_name_prefix ComprehendDocumentClassifier#version_name_prefix}.

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="volumeKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.volumeKmsKeyId"></a>

```typescript
public readonly volumeKmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#volume_kms_key_id ComprehendDocumentClassifier#volume_kms_key_id}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: ComprehendDocumentClassifierVpcConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#vpc_config ComprehendDocumentClassifier#vpc_config}

---

### ComprehendDocumentClassifierInputDataConfig <a name="ComprehendDocumentClassifierInputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.Initializer"></a>

```typescript
import { comprehendDocumentClassifier } from '@cdktf/provider-aws'

const comprehendDocumentClassifierInputDataConfig: comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.augmentedManifests">augmentedManifests</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests">ComprehendDocumentClassifierInputDataConfigAugmentedManifests</a>[]</code> | augmented_manifests block. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.dataFormat">dataFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#data_format ComprehendDocumentClassifier#data_format}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.labelDelimiter">labelDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#label_delimiter ComprehendDocumentClassifier#label_delimiter}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.s3Uri">s3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.testS3Uri">testS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#test_s3_uri ComprehendDocumentClassifier#test_s3_uri}. |

---

##### `augmentedManifests`<sup>Optional</sup> <a name="augmentedManifests" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.augmentedManifests"></a>

```typescript
public readonly augmentedManifests: IResolvable | ComprehendDocumentClassifierInputDataConfigAugmentedManifests[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests">ComprehendDocumentClassifierInputDataConfigAugmentedManifests</a>[]

augmented_manifests block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#augmented_manifests ComprehendDocumentClassifier#augmented_manifests}

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#data_format ComprehendDocumentClassifier#data_format}.

---

##### `labelDelimiter`<sup>Optional</sup> <a name="labelDelimiter" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.labelDelimiter"></a>

```typescript
public readonly labelDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#label_delimiter ComprehendDocumentClassifier#label_delimiter}.

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}.

---

##### `testS3Uri`<sup>Optional</sup> <a name="testS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.testS3Uri"></a>

```typescript
public readonly testS3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#test_s3_uri ComprehendDocumentClassifier#test_s3_uri}.

---

### ComprehendDocumentClassifierInputDataConfigAugmentedManifests <a name="ComprehendDocumentClassifierInputDataConfigAugmentedManifests" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.Initializer"></a>

```typescript
import { comprehendDocumentClassifier } from '@cdktf/provider-aws'

const comprehendDocumentClassifierInputDataConfigAugmentedManifests: comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.attributeNames">attributeNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#attribute_names ComprehendDocumentClassifier#attribute_names}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.s3Uri">s3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.annotationDataS3Uri">annotationDataS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#annotation_data_s3_uri ComprehendDocumentClassifier#annotation_data_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.documentType">documentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#document_type ComprehendDocumentClassifier#document_type}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.sourceDocumentsS3Uri">sourceDocumentsS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#source_documents_s3_uri ComprehendDocumentClassifier#source_documents_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.split">split</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#split ComprehendDocumentClassifier#split}. |

---

##### `attributeNames`<sup>Required</sup> <a name="attributeNames" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.attributeNames"></a>

```typescript
public readonly attributeNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#attribute_names ComprehendDocumentClassifier#attribute_names}.

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}.

---

##### `annotationDataS3Uri`<sup>Optional</sup> <a name="annotationDataS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.annotationDataS3Uri"></a>

```typescript
public readonly annotationDataS3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#annotation_data_s3_uri ComprehendDocumentClassifier#annotation_data_s3_uri}.

---

##### `documentType`<sup>Optional</sup> <a name="documentType" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.documentType"></a>

```typescript
public readonly documentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#document_type ComprehendDocumentClassifier#document_type}.

---

##### `sourceDocumentsS3Uri`<sup>Optional</sup> <a name="sourceDocumentsS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.sourceDocumentsS3Uri"></a>

```typescript
public readonly sourceDocumentsS3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#source_documents_s3_uri ComprehendDocumentClassifier#source_documents_s3_uri}.

---

##### `split`<sup>Optional</sup> <a name="split" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.split"></a>

```typescript
public readonly split: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#split ComprehendDocumentClassifier#split}.

---

### ComprehendDocumentClassifierOutputDataConfig <a name="ComprehendDocumentClassifierOutputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.Initializer"></a>

```typescript
import { comprehendDocumentClassifier } from '@cdktf/provider-aws'

const comprehendDocumentClassifierOutputDataConfig: comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.property.s3Uri">s3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#kms_key_id ComprehendDocumentClassifier#kms_key_id}. |

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#kms_key_id ComprehendDocumentClassifier#kms_key_id}.

---

### ComprehendDocumentClassifierTimeouts <a name="ComprehendDocumentClassifierTimeouts" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.Initializer"></a>

```typescript
import { comprehendDocumentClassifier } from '@cdktf/provider-aws'

const comprehendDocumentClassifierTimeouts: comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#create ComprehendDocumentClassifier#create}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#delete ComprehendDocumentClassifier#delete}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#update ComprehendDocumentClassifier#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#create ComprehendDocumentClassifier#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#delete ComprehendDocumentClassifier#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#update ComprehendDocumentClassifier#update}.

---

### ComprehendDocumentClassifierVpcConfig <a name="ComprehendDocumentClassifierVpcConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.Initializer"></a>

```typescript
import { comprehendDocumentClassifier } from '@cdktf/provider-aws'

const comprehendDocumentClassifierVpcConfig: comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#security_group_ids ComprehendDocumentClassifier#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.property.subnets">subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#subnets ComprehendDocumentClassifier#subnets}. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#security_group_ids ComprehendDocumentClassifier#security_group_ids}.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#subnets ComprehendDocumentClassifier#subnets}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList <a name="ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer"></a>

```typescript
import { comprehendDocumentClassifier } from '@cdktf/provider-aws'

new comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.get"></a>

```typescript
public get(index: number): ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests">ComprehendDocumentClassifierInputDataConfigAugmentedManifests</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComprehendDocumentClassifierInputDataConfigAugmentedManifests[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests">ComprehendDocumentClassifierInputDataConfigAugmentedManifests</a>[]

---


### ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference <a name="ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer"></a>

```typescript
import { comprehendDocumentClassifier } from '@cdktf/provider-aws'

new comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetAnnotationDataS3Uri">resetAnnotationDataS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetDocumentType">resetDocumentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetSourceDocumentsS3Uri">resetSourceDocumentsS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetSplit">resetSplit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotationDataS3Uri` <a name="resetAnnotationDataS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetAnnotationDataS3Uri"></a>

```typescript
public resetAnnotationDataS3Uri(): void
```

##### `resetDocumentType` <a name="resetDocumentType" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetDocumentType"></a>

```typescript
public resetDocumentType(): void
```

##### `resetSourceDocumentsS3Uri` <a name="resetSourceDocumentsS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetSourceDocumentsS3Uri"></a>

```typescript
public resetSourceDocumentsS3Uri(): void
```

##### `resetSplit` <a name="resetSplit" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetSplit"></a>

```typescript
public resetSplit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3UriInput">annotationDataS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNamesInput">attributeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.documentTypeInput">documentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3UriInput">sourceDocumentsS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.splitInput">splitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3Uri">annotationDataS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNames">attributeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.documentType">documentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3Uri">sourceDocumentsS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.split">split</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests">ComprehendDocumentClassifierInputDataConfigAugmentedManifests</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `annotationDataS3UriInput`<sup>Optional</sup> <a name="annotationDataS3UriInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3UriInput"></a>

```typescript
public readonly annotationDataS3UriInput: string;
```

- *Type:* string

---

##### `attributeNamesInput`<sup>Optional</sup> <a name="attributeNamesInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNamesInput"></a>

```typescript
public readonly attributeNamesInput: string[];
```

- *Type:* string[]

---

##### `documentTypeInput`<sup>Optional</sup> <a name="documentTypeInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.documentTypeInput"></a>

```typescript
public readonly documentTypeInput: string;
```

- *Type:* string

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3UriInput"></a>

```typescript
public readonly s3UriInput: string;
```

- *Type:* string

---

##### `sourceDocumentsS3UriInput`<sup>Optional</sup> <a name="sourceDocumentsS3UriInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3UriInput"></a>

```typescript
public readonly sourceDocumentsS3UriInput: string;
```

- *Type:* string

---

##### `splitInput`<sup>Optional</sup> <a name="splitInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.splitInput"></a>

```typescript
public readonly splitInput: string;
```

- *Type:* string

---

##### `annotationDataS3Uri`<sup>Required</sup> <a name="annotationDataS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3Uri"></a>

```typescript
public readonly annotationDataS3Uri: string;
```

- *Type:* string

---

##### `attributeNames`<sup>Required</sup> <a name="attributeNames" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNames"></a>

```typescript
public readonly attributeNames: string[];
```

- *Type:* string[]

---

##### `documentType`<sup>Required</sup> <a name="documentType" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.documentType"></a>

```typescript
public readonly documentType: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `sourceDocumentsS3Uri`<sup>Required</sup> <a name="sourceDocumentsS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3Uri"></a>

```typescript
public readonly sourceDocumentsS3Uri: string;
```

- *Type:* string

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.split"></a>

```typescript
public readonly split: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComprehendDocumentClassifierInputDataConfigAugmentedManifests | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests">ComprehendDocumentClassifierInputDataConfigAugmentedManifests</a> | cdktf.IResolvable

---


### ComprehendDocumentClassifierInputDataConfigOutputReference <a name="ComprehendDocumentClassifierInputDataConfigOutputReference" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer"></a>

```typescript
import { comprehendDocumentClassifier } from '@cdktf/provider-aws'

new comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putAugmentedManifests">putAugmentedManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetAugmentedManifests">resetAugmentedManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDataFormat">resetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetLabelDelimiter">resetLabelDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetS3Uri">resetS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetTestS3Uri">resetTestS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAugmentedManifests` <a name="putAugmentedManifests" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putAugmentedManifests"></a>

```typescript
public putAugmentedManifests(value: IResolvable | ComprehendDocumentClassifierInputDataConfigAugmentedManifests[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putAugmentedManifests.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests">ComprehendDocumentClassifierInputDataConfigAugmentedManifests</a>[]

---

##### `resetAugmentedManifests` <a name="resetAugmentedManifests" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetAugmentedManifests"></a>

```typescript
public resetAugmentedManifests(): void
```

##### `resetDataFormat` <a name="resetDataFormat" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDataFormat"></a>

```typescript
public resetDataFormat(): void
```

##### `resetLabelDelimiter` <a name="resetLabelDelimiter" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetLabelDelimiter"></a>

```typescript
public resetLabelDelimiter(): void
```

##### `resetS3Uri` <a name="resetS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetS3Uri"></a>

```typescript
public resetS3Uri(): void
```

##### `resetTestS3Uri` <a name="resetTestS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetTestS3Uri"></a>

```typescript
public resetTestS3Uri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifests">augmentedManifests</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList">ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifestsInput">augmentedManifestsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests">ComprehendDocumentClassifierInputDataConfigAugmentedManifests</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormatInput">dataFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiterInput">labelDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3UriInput">testS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormat">dataFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiter">labelDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3Uri">testS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `augmentedManifests`<sup>Required</sup> <a name="augmentedManifests" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifests"></a>

```typescript
public readonly augmentedManifests: ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList;
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList">ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList</a>

---

##### `augmentedManifestsInput`<sup>Optional</sup> <a name="augmentedManifestsInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifestsInput"></a>

```typescript
public readonly augmentedManifestsInput: IResolvable | ComprehendDocumentClassifierInputDataConfigAugmentedManifests[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests">ComprehendDocumentClassifierInputDataConfigAugmentedManifests</a>[]

---

##### `dataFormatInput`<sup>Optional</sup> <a name="dataFormatInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormatInput"></a>

```typescript
public readonly dataFormatInput: string;
```

- *Type:* string

---

##### `labelDelimiterInput`<sup>Optional</sup> <a name="labelDelimiterInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiterInput"></a>

```typescript
public readonly labelDelimiterInput: string;
```

- *Type:* string

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.s3UriInput"></a>

```typescript
public readonly s3UriInput: string;
```

- *Type:* string

---

##### `testS3UriInput`<sup>Optional</sup> <a name="testS3UriInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3UriInput"></a>

```typescript
public readonly testS3UriInput: string;
```

- *Type:* string

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

---

##### `labelDelimiter`<sup>Required</sup> <a name="labelDelimiter" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiter"></a>

```typescript
public readonly labelDelimiter: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `testS3Uri`<sup>Required</sup> <a name="testS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3Uri"></a>

```typescript
public readonly testS3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComprehendDocumentClassifierInputDataConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a>

---


### ComprehendDocumentClassifierOutputDataConfigOutputReference <a name="ComprehendDocumentClassifierOutputDataConfigOutputReference" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer"></a>

```typescript
import { comprehendDocumentClassifier } from '@cdktf/provider-aws'

new comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.outputS3Uri">outputS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outputS3Uri`<sup>Required</sup> <a name="outputS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.outputS3Uri"></a>

```typescript
public readonly outputS3Uri: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3UriInput"></a>

```typescript
public readonly s3UriInput: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComprehendDocumentClassifierOutputDataConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a>

---


### ComprehendDocumentClassifierTimeoutsOutputReference <a name="ComprehendDocumentClassifierTimeoutsOutputReference" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.Initializer"></a>

```typescript
import { comprehendDocumentClassifier } from '@cdktf/provider-aws'

new comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts">ComprehendDocumentClassifierTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComprehendDocumentClassifierTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts">ComprehendDocumentClassifierTimeouts</a> | cdktf.IResolvable

---


### ComprehendDocumentClassifierVpcConfigOutputReference <a name="ComprehendDocumentClassifierVpcConfigOutputReference" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer"></a>

```typescript
import { comprehendDocumentClassifier } from '@cdktf/provider-aws'

new comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComprehendDocumentClassifierVpcConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a>

---



