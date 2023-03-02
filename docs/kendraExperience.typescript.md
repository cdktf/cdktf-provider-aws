# `kendraExperience` Submodule <a name="`kendraExperience` Submodule" id="@cdktf/provider-aws.kendraExperience"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraExperience <a name="KendraExperience" id="@cdktf/provider-aws.kendraExperience.KendraExperience"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience aws_kendra_experience}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer"></a>

```typescript
import { kendraExperience } from '@cdktf/provider-aws'

new kendraExperience.KendraExperience(scope: Construct, id: string, config: KendraExperienceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig">KendraExperienceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig">KendraExperienceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraExperience.KendraExperience.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.kendraExperience.KendraExperience.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kendraExperience.KendraExperience.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraExperience.KendraExperience.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.kendraExperience.KendraExperience.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.kendraExperience.KendraExperience.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.kendraExperience.KendraExperience.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.kendraExperience.KendraExperience.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.kendraExperience.KendraExperience.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperience.putConfiguration"></a>

```typescript
public putConfiguration(value: KendraExperienceConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraExperience.KendraExperience.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.kendraExperience.KendraExperience.putTimeouts"></a>

```typescript
public putTimeouts(value: KendraExperienceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraExperience.KendraExperience.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts">KendraExperienceTimeouts</a>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperience.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.kendraExperience.KendraExperience.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.kendraExperience.KendraExperience.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.kendraExperience.KendraExperience.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.kendraExperience.KendraExperience.isConstruct"></a>

```typescript
import { kendraExperience } from '@cdktf/provider-aws'

kendraExperience.KendraExperience.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraExperience.KendraExperience.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.kendraExperience.KendraExperience.isTerraformElement"></a>

```typescript
import { kendraExperience } from '@cdktf/provider-aws'

kendraExperience.KendraExperience.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraExperience.KendraExperience.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.kendraExperience.KendraExperience.isTerraformResource"></a>

```typescript
import { kendraExperience } from '@cdktf/provider-aws'

kendraExperience.KendraExperience.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraExperience.KendraExperience.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference">KendraExperienceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList">KendraExperienceEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.experienceId">experienceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference">KendraExperienceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.configurationInput">configurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.indexIdInput">indexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts">KendraExperienceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.indexId">indexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.configuration"></a>

```typescript
public readonly configuration: KendraExperienceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference">KendraExperienceConfigurationOutputReference</a>

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.endpoints"></a>

```typescript
public readonly endpoints: KendraExperienceEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList">KendraExperienceEndpointsList</a>

---

##### `experienceId`<sup>Required</sup> <a name="experienceId" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.experienceId"></a>

```typescript
public readonly experienceId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.timeouts"></a>

```typescript
public readonly timeouts: KendraExperienceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference">KendraExperienceTimeoutsOutputReference</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.configurationInput"></a>

```typescript
public readonly configurationInput: KendraExperienceConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexIdInput`<sup>Optional</sup> <a name="indexIdInput" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.indexIdInput"></a>

```typescript
public readonly indexIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: KendraExperienceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts">KendraExperienceTimeouts</a> | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KendraExperienceConfig <a name="KendraExperienceConfig" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.Initializer"></a>

```typescript
import { kendraExperience } from '@cdktf/provider-aws'

const kendraExperienceConfig: kendraExperience.KendraExperienceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.indexId">indexId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#index_id KendraExperience#index_id}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#name KendraExperience#name}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#role_arn KendraExperience#role_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#description KendraExperience#description}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#id KendraExperience#id}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts">KendraExperienceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#index_id KendraExperience#index_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#name KendraExperience#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#role_arn KendraExperience#role_arn}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.configuration"></a>

```typescript
public readonly configuration: KendraExperienceConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#configuration KendraExperience#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#description KendraExperience#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#id KendraExperience#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KendraExperienceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts">KendraExperienceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#timeouts KendraExperience#timeouts}

---

### KendraExperienceConfiguration <a name="KendraExperienceConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration.Initializer"></a>

```typescript
import { kendraExperience } from '@cdktf/provider-aws'

const kendraExperienceConfiguration: kendraExperience.KendraExperienceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration.property.contentSourceConfiguration">contentSourceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a></code> | content_source_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration.property.userIdentityConfiguration">userIdentityConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a></code> | user_identity_configuration block. |

---

##### `contentSourceConfiguration`<sup>Optional</sup> <a name="contentSourceConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration.property.contentSourceConfiguration"></a>

```typescript
public readonly contentSourceConfiguration: KendraExperienceConfigurationContentSourceConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a>

content_source_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#content_source_configuration KendraExperience#content_source_configuration}

---

##### `userIdentityConfiguration`<sup>Optional</sup> <a name="userIdentityConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration.property.userIdentityConfiguration"></a>

```typescript
public readonly userIdentityConfiguration: KendraExperienceConfigurationUserIdentityConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a>

user_identity_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#user_identity_configuration KendraExperience#user_identity_configuration}

---

### KendraExperienceConfigurationContentSourceConfiguration <a name="KendraExperienceConfigurationContentSourceConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.Initializer"></a>

```typescript
import { kendraExperience } from '@cdktf/provider-aws'

const kendraExperienceConfigurationContentSourceConfiguration: kendraExperience.KendraExperienceConfigurationContentSourceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.property.dataSourceIds">dataSourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#data_source_ids KendraExperience#data_source_ids}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.property.directPutContent">directPutContent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#direct_put_content KendraExperience#direct_put_content}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.property.faqIds">faqIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#faq_ids KendraExperience#faq_ids}. |

---

##### `dataSourceIds`<sup>Optional</sup> <a name="dataSourceIds" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.property.dataSourceIds"></a>

```typescript
public readonly dataSourceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#data_source_ids KendraExperience#data_source_ids}.

---

##### `directPutContent`<sup>Optional</sup> <a name="directPutContent" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.property.directPutContent"></a>

```typescript
public readonly directPutContent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#direct_put_content KendraExperience#direct_put_content}.

---

##### `faqIds`<sup>Optional</sup> <a name="faqIds" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.property.faqIds"></a>

```typescript
public readonly faqIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#faq_ids KendraExperience#faq_ids}.

---

### KendraExperienceConfigurationUserIdentityConfiguration <a name="KendraExperienceConfigurationUserIdentityConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration.Initializer"></a>

```typescript
import { kendraExperience } from '@cdktf/provider-aws'

const kendraExperienceConfigurationUserIdentityConfiguration: kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration.property.identityAttributeName">identityAttributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#identity_attribute_name KendraExperience#identity_attribute_name}. |

---

##### `identityAttributeName`<sup>Required</sup> <a name="identityAttributeName" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration.property.identityAttributeName"></a>

```typescript
public readonly identityAttributeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#identity_attribute_name KendraExperience#identity_attribute_name}.

---

### KendraExperienceEndpoints <a name="KendraExperienceEndpoints" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpoints.Initializer"></a>

```typescript
import { kendraExperience } from '@cdktf/provider-aws'

const kendraExperienceEndpoints: kendraExperience.KendraExperienceEndpoints = { ... }
```


### KendraExperienceTimeouts <a name="KendraExperienceTimeouts" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.Initializer"></a>

```typescript
import { kendraExperience } from '@cdktf/provider-aws'

const kendraExperienceTimeouts: kendraExperience.KendraExperienceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#create KendraExperience#create}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#delete KendraExperience#delete}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#update KendraExperience#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#create KendraExperience#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#delete KendraExperience#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#update KendraExperience#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KendraExperienceConfigurationContentSourceConfigurationOutputReference <a name="KendraExperienceConfigurationContentSourceConfigurationOutputReference" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.Initializer"></a>

```typescript
import { kendraExperience } from '@cdktf/provider-aws'

new kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resetDataSourceIds">resetDataSourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resetDirectPutContent">resetDirectPutContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resetFaqIds">resetFaqIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataSourceIds` <a name="resetDataSourceIds" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resetDataSourceIds"></a>

```typescript
public resetDataSourceIds(): void
```

##### `resetDirectPutContent` <a name="resetDirectPutContent" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resetDirectPutContent"></a>

```typescript
public resetDirectPutContent(): void
```

##### `resetFaqIds` <a name="resetFaqIds" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resetFaqIds"></a>

```typescript
public resetFaqIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.dataSourceIdsInput">dataSourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.directPutContentInput">directPutContentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.faqIdsInput">faqIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.dataSourceIds">dataSourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.directPutContent">directPutContent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.faqIds">faqIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSourceIdsInput`<sup>Optional</sup> <a name="dataSourceIdsInput" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.dataSourceIdsInput"></a>

```typescript
public readonly dataSourceIdsInput: string[];
```

- *Type:* string[]

---

##### `directPutContentInput`<sup>Optional</sup> <a name="directPutContentInput" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.directPutContentInput"></a>

```typescript
public readonly directPutContentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `faqIdsInput`<sup>Optional</sup> <a name="faqIdsInput" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.faqIdsInput"></a>

```typescript
public readonly faqIdsInput: string[];
```

- *Type:* string[]

---

##### `dataSourceIds`<sup>Required</sup> <a name="dataSourceIds" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.dataSourceIds"></a>

```typescript
public readonly dataSourceIds: string[];
```

- *Type:* string[]

---

##### `directPutContent`<sup>Required</sup> <a name="directPutContent" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.directPutContent"></a>

```typescript
public readonly directPutContent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `faqIds`<sup>Required</sup> <a name="faqIds" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.faqIds"></a>

```typescript
public readonly faqIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraExperienceConfigurationContentSourceConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a>

---


### KendraExperienceConfigurationOutputReference <a name="KendraExperienceConfigurationOutputReference" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.Initializer"></a>

```typescript
import { kendraExperience } from '@cdktf/provider-aws'

new kendraExperience.KendraExperienceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.putContentSourceConfiguration">putContentSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.putUserIdentityConfiguration">putUserIdentityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resetContentSourceConfiguration">resetContentSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resetUserIdentityConfiguration">resetUserIdentityConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContentSourceConfiguration` <a name="putContentSourceConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.putContentSourceConfiguration"></a>

```typescript
public putContentSourceConfiguration(value: KendraExperienceConfigurationContentSourceConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.putContentSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a>

---

##### `putUserIdentityConfiguration` <a name="putUserIdentityConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.putUserIdentityConfiguration"></a>

```typescript
public putUserIdentityConfiguration(value: KendraExperienceConfigurationUserIdentityConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.putUserIdentityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a>

---

##### `resetContentSourceConfiguration` <a name="resetContentSourceConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resetContentSourceConfiguration"></a>

```typescript
public resetContentSourceConfiguration(): void
```

##### `resetUserIdentityConfiguration` <a name="resetUserIdentityConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resetUserIdentityConfiguration"></a>

```typescript
public resetUserIdentityConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.contentSourceConfiguration">contentSourceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference">KendraExperienceConfigurationContentSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.userIdentityConfiguration">userIdentityConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference">KendraExperienceConfigurationUserIdentityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.contentSourceConfigurationInput">contentSourceConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.userIdentityConfigurationInput">userIdentityConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentSourceConfiguration`<sup>Required</sup> <a name="contentSourceConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.contentSourceConfiguration"></a>

```typescript
public readonly contentSourceConfiguration: KendraExperienceConfigurationContentSourceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference">KendraExperienceConfigurationContentSourceConfigurationOutputReference</a>

---

##### `userIdentityConfiguration`<sup>Required</sup> <a name="userIdentityConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.userIdentityConfiguration"></a>

```typescript
public readonly userIdentityConfiguration: KendraExperienceConfigurationUserIdentityConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference">KendraExperienceConfigurationUserIdentityConfigurationOutputReference</a>

---

##### `contentSourceConfigurationInput`<sup>Optional</sup> <a name="contentSourceConfigurationInput" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.contentSourceConfigurationInput"></a>

```typescript
public readonly contentSourceConfigurationInput: KendraExperienceConfigurationContentSourceConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a>

---

##### `userIdentityConfigurationInput`<sup>Optional</sup> <a name="userIdentityConfigurationInput" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.userIdentityConfigurationInput"></a>

```typescript
public readonly userIdentityConfigurationInput: KendraExperienceConfigurationUserIdentityConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraExperienceConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a>

---


### KendraExperienceConfigurationUserIdentityConfigurationOutputReference <a name="KendraExperienceConfigurationUserIdentityConfigurationOutputReference" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.Initializer"></a>

```typescript
import { kendraExperience } from '@cdktf/provider-aws'

new kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.identityAttributeNameInput">identityAttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.identityAttributeName">identityAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityAttributeNameInput`<sup>Optional</sup> <a name="identityAttributeNameInput" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.identityAttributeNameInput"></a>

```typescript
public readonly identityAttributeNameInput: string;
```

- *Type:* string

---

##### `identityAttributeName`<sup>Required</sup> <a name="identityAttributeName" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.identityAttributeName"></a>

```typescript
public readonly identityAttributeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraExperienceConfigurationUserIdentityConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a>

---


### KendraExperienceEndpointsList <a name="KendraExperienceEndpointsList" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer"></a>

```typescript
import { kendraExperience } from '@cdktf/provider-aws'

new kendraExperience.KendraExperienceEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.get"></a>

```typescript
public get(index: number): KendraExperienceEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### KendraExperienceEndpointsOutputReference <a name="KendraExperienceEndpointsOutputReference" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer"></a>

```typescript
import { kendraExperience } from '@cdktf/provider-aws'

new kendraExperience.KendraExperienceEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpoints">KendraExperienceEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraExperienceEndpoints;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpoints">KendraExperienceEndpoints</a>

---


### KendraExperienceTimeoutsOutputReference <a name="KendraExperienceTimeoutsOutputReference" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.Initializer"></a>

```typescript
import { kendraExperience } from '@cdktf/provider-aws'

new kendraExperience.KendraExperienceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts">KendraExperienceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraExperienceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts">KendraExperienceTimeouts</a> | cdktf.IResolvable

---



