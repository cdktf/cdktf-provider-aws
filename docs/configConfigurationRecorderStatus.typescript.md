# `configConfigurationRecorderStatus` Submodule <a name="`configConfigurationRecorderStatus` Submodule" id="@cdktf/provider-aws.configConfigurationRecorderStatus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConfigurationRecorderStatus <a name="ConfigConfigurationRecorderStatus" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status aws_config_configuration_recorder_status}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.Initializer"></a>

```typescript
import { configConfigurationRecorderStatus } from '@cdktf/provider-aws'

new configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus(scope: Construct, id: string, config: ConfigConfigurationRecorderStatusConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig">ConfigConfigurationRecorderStatusConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig">ConfigConfigurationRecorderStatusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.isConstruct"></a>

```typescript
import { configConfigurationRecorderStatus } from '@cdktf/provider-aws'

configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.isTerraformElement"></a>

```typescript
import { configConfigurationRecorderStatus } from '@cdktf/provider-aws'

configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.isTerraformResource"></a>

```typescript
import { configConfigurationRecorderStatus } from '@cdktf/provider-aws'

configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatus.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfigurationRecorderStatusConfig <a name="ConfigConfigurationRecorderStatusConfig" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.Initializer"></a>

```typescript
import { configConfigurationRecorderStatus } from '@cdktf/provider-aws'

const configConfigurationRecorderStatusConfig: configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status#is_enabled ConfigConfigurationRecorderStatus#is_enabled}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status#name ConfigConfigurationRecorderStatus#name}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status#id ConfigConfigurationRecorderStatus#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status#is_enabled ConfigConfigurationRecorderStatus#is_enabled}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status#name ConfigConfigurationRecorderStatus#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configConfigurationRecorderStatus.ConfigConfigurationRecorderStatusConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status#id ConfigConfigurationRecorderStatus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



