# `connectInstanceStorageConfig` Submodule <a name="`connectInstanceStorageConfig` Submodule" id="@cdktf/provider-aws.connectInstanceStorageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectInstanceStorageConfig <a name="ConnectInstanceStorageConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config aws_connect_instance_storage_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktf/provider-aws'

new connectInstanceStorageConfig.ConnectInstanceStorageConfig(scope: Construct, id: string, config: ConnectInstanceStorageConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig">ConnectInstanceStorageConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig">ConnectInstanceStorageConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putStorageConfig">putStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putStorageConfig` <a name="putStorageConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putStorageConfig"></a>

```typescript
public putStorageConfig(value: ConnectInstanceStorageConfigStorageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig">ConnectInstanceStorageConfigStorageConfig</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isConstruct"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktf/provider-aws'

connectInstanceStorageConfig.ConnectInstanceStorageConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformElement"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktf/provider-aws'

connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformResource"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktf/provider-aws'

connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageConfig">storageConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference">ConnectInstanceStorageConfigStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageConfigInput">storageConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig">ConnectInstanceStorageConfigStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `storageConfig`<sup>Required</sup> <a name="storageConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageConfig"></a>

```typescript
public readonly storageConfig: ConnectInstanceStorageConfigStorageConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference">ConnectInstanceStorageConfigStorageConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `storageConfigInput`<sup>Optional</sup> <a name="storageConfigInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageConfigInput"></a>

```typescript
public readonly storageConfigInput: ConnectInstanceStorageConfigStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig">ConnectInstanceStorageConfigStorageConfig</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectInstanceStorageConfigConfig <a name="ConnectInstanceStorageConfigConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktf/provider-aws'

const connectInstanceStorageConfigConfig: connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#instance_id ConnectInstanceStorageConfig#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#resource_type ConnectInstanceStorageConfig#resource_type}. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.storageConfig">storageConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig">ConnectInstanceStorageConfigStorageConfig</a></code> | storage_config block. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#id ConnectInstanceStorageConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#instance_id ConnectInstanceStorageConfig#instance_id}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#resource_type ConnectInstanceStorageConfig#resource_type}.

---

##### `storageConfig`<sup>Required</sup> <a name="storageConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.storageConfig"></a>

```typescript
public readonly storageConfig: ConnectInstanceStorageConfigStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig">ConnectInstanceStorageConfigStorageConfig</a>

storage_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#storage_config ConnectInstanceStorageConfig#storage_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#id ConnectInstanceStorageConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectInstanceStorageConfigStorageConfig <a name="ConnectInstanceStorageConfigStorageConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktf/provider-aws'

const connectInstanceStorageConfigStorageConfig: connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.property.storageType">storageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#storage_type ConnectInstanceStorageConfig#storage_type}. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.property.kinesisFirehoseConfig">kinesisFirehoseConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig</a></code> | kinesis_firehose_config block. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.property.kinesisStreamConfig">kinesisStreamConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig</a></code> | kinesis_stream_config block. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.property.kinesisVideoStreamConfig">kinesisVideoStreamConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig</a></code> | kinesis_video_stream_config block. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.property.s3Config">s3Config</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config">ConnectInstanceStorageConfigStorageConfigS3Config</a></code> | s3_config block. |

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#storage_type ConnectInstanceStorageConfig#storage_type}.

---

##### `kinesisFirehoseConfig`<sup>Optional</sup> <a name="kinesisFirehoseConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.property.kinesisFirehoseConfig"></a>

```typescript
public readonly kinesisFirehoseConfig: ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig</a>

kinesis_firehose_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#kinesis_firehose_config ConnectInstanceStorageConfig#kinesis_firehose_config}

---

##### `kinesisStreamConfig`<sup>Optional</sup> <a name="kinesisStreamConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.property.kinesisStreamConfig"></a>

```typescript
public readonly kinesisStreamConfig: ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig</a>

kinesis_stream_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#kinesis_stream_config ConnectInstanceStorageConfig#kinesis_stream_config}

---

##### `kinesisVideoStreamConfig`<sup>Optional</sup> <a name="kinesisVideoStreamConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.property.kinesisVideoStreamConfig"></a>

```typescript
public readonly kinesisVideoStreamConfig: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig</a>

kinesis_video_stream_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#kinesis_video_stream_config ConnectInstanceStorageConfig#kinesis_video_stream_config}

---

##### `s3Config`<sup>Optional</sup> <a name="s3Config" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig.property.s3Config"></a>

```typescript
public readonly s3Config: ConnectInstanceStorageConfigStorageConfigS3Config;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config">ConnectInstanceStorageConfigStorageConfigS3Config</a>

s3_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#s3_config ConnectInstanceStorageConfig#s3_config}

---

### ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig <a name="ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktf/provider-aws'

const connectInstanceStorageConfigStorageConfigKinesisFirehoseConfig: connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig.property.firehoseArn">firehoseArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#firehose_arn ConnectInstanceStorageConfig#firehose_arn}. |

---

##### `firehoseArn`<sup>Required</sup> <a name="firehoseArn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig.property.firehoseArn"></a>

```typescript
public readonly firehoseArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#firehose_arn ConnectInstanceStorageConfig#firehose_arn}.

---

### ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig <a name="ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktf/provider-aws'

const connectInstanceStorageConfigStorageConfigKinesisStreamConfig: connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig.property.streamArn">streamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#stream_arn ConnectInstanceStorageConfig#stream_arn}. |

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#stream_arn ConnectInstanceStorageConfig#stream_arn}.

---

### ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig <a name="ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktf/provider-aws'

const connectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig: connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#prefix ConnectInstanceStorageConfig#prefix}. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.property.retentionPeriodHours">retentionPeriodHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#retention_period_hours ConnectInstanceStorageConfig#retention_period_hours}. |

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#prefix ConnectInstanceStorageConfig#prefix}.

---

##### `retentionPeriodHours`<sup>Required</sup> <a name="retentionPeriodHours" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.property.retentionPeriodHours"></a>

```typescript
public readonly retentionPeriodHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#retention_period_hours ConnectInstanceStorageConfig#retention_period_hours}.

---

### ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig <a name="ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktf/provider-aws'

const connectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig: connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.encryptionType">encryptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}. |

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}.

---

### ConnectInstanceStorageConfigStorageConfigS3Config <a name="ConnectInstanceStorageConfigStorageConfigS3Config" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktf/provider-aws'

const connectInstanceStorageConfigStorageConfigS3Config: connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#bucket_name ConnectInstanceStorageConfig#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#bucket_prefix ConnectInstanceStorageConfig#bucket_prefix}. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig</a></code> | encryption_config block. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#bucket_name ConnectInstanceStorageConfig#bucket_name}.

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#bucket_prefix ConnectInstanceStorageConfig#bucket_prefix}.

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}

---

### ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig <a name="ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktf/provider-aws'

const connectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig: connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig.property.encryptionType">encryptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}. |

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference <a name="ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktf/provider-aws'

new connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArnInput">firehoseArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArn">firehoseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `firehoseArnInput`<sup>Optional</sup> <a name="firehoseArnInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArnInput"></a>

```typescript
public readonly firehoseArnInput: string;
```

- *Type:* string

---

##### `firehoseArn`<sup>Required</sup> <a name="firehoseArn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArn"></a>

```typescript
public readonly firehoseArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig</a>

---


### ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference <a name="ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktf/provider-aws'

new connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.streamArnInput"></a>

```typescript
public readonly streamArnInput: string;
```

- *Type:* string

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig</a>

---


### ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference <a name="ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktf/provider-aws'

new connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionTypeInput"></a>

```typescript
public readonly encryptionTypeInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

---


### ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference <a name="ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktf/provider-aws'

new connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.putEncryptionConfig"></a>

```typescript
public putEncryptionConfig(value: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHoursInput">retentionPeriodHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHours">retentionPeriodHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference</a>

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfigInput"></a>

```typescript
public readonly encryptionConfigInput: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `retentionPeriodHoursInput`<sup>Optional</sup> <a name="retentionPeriodHoursInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHoursInput"></a>

```typescript
public readonly retentionPeriodHoursInput: number;
```

- *Type:* number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `retentionPeriodHours`<sup>Required</sup> <a name="retentionPeriodHours" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHours"></a>

```typescript
public readonly retentionPeriodHours: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig</a>

---


### ConnectInstanceStorageConfigStorageConfigOutputReference <a name="ConnectInstanceStorageConfigStorageConfigOutputReference" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktf/provider-aws'

new connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putKinesisFirehoseConfig">putKinesisFirehoseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putKinesisStreamConfig">putKinesisStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putKinesisVideoStreamConfig">putKinesisVideoStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putS3Config">putS3Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resetKinesisFirehoseConfig">resetKinesisFirehoseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resetKinesisStreamConfig">resetKinesisStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resetKinesisVideoStreamConfig">resetKinesisVideoStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resetS3Config">resetS3Config</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKinesisFirehoseConfig` <a name="putKinesisFirehoseConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putKinesisFirehoseConfig"></a>

```typescript
public putKinesisFirehoseConfig(value: ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putKinesisFirehoseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig</a>

---

##### `putKinesisStreamConfig` <a name="putKinesisStreamConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putKinesisStreamConfig"></a>

```typescript
public putKinesisStreamConfig(value: ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putKinesisStreamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig</a>

---

##### `putKinesisVideoStreamConfig` <a name="putKinesisVideoStreamConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putKinesisVideoStreamConfig"></a>

```typescript
public putKinesisVideoStreamConfig(value: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putKinesisVideoStreamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig</a>

---

##### `putS3Config` <a name="putS3Config" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putS3Config"></a>

```typescript
public putS3Config(value: ConnectInstanceStorageConfigStorageConfigS3Config): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.putS3Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config">ConnectInstanceStorageConfigStorageConfigS3Config</a>

---

##### `resetKinesisFirehoseConfig` <a name="resetKinesisFirehoseConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resetKinesisFirehoseConfig"></a>

```typescript
public resetKinesisFirehoseConfig(): void
```

##### `resetKinesisStreamConfig` <a name="resetKinesisStreamConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resetKinesisStreamConfig"></a>

```typescript
public resetKinesisStreamConfig(): void
```

##### `resetKinesisVideoStreamConfig` <a name="resetKinesisVideoStreamConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resetKinesisVideoStreamConfig"></a>

```typescript
public resetKinesisVideoStreamConfig(): void
```

##### `resetS3Config` <a name="resetS3Config" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.resetS3Config"></a>

```typescript
public resetS3Config(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisFirehoseConfig">kinesisFirehoseConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference">ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisStreamConfig">kinesisStreamConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference">ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisVideoStreamConfig">kinesisVideoStreamConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.s3Config">s3Config</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference">ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisFirehoseConfigInput">kinesisFirehoseConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisStreamConfigInput">kinesisStreamConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisVideoStreamConfigInput">kinesisVideoStreamConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.s3ConfigInput">s3ConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config">ConnectInstanceStorageConfigStorageConfigS3Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig">ConnectInstanceStorageConfigStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kinesisFirehoseConfig`<sup>Required</sup> <a name="kinesisFirehoseConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisFirehoseConfig"></a>

```typescript
public readonly kinesisFirehoseConfig: ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference">ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference</a>

---

##### `kinesisStreamConfig`<sup>Required</sup> <a name="kinesisStreamConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisStreamConfig"></a>

```typescript
public readonly kinesisStreamConfig: ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference">ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference</a>

---

##### `kinesisVideoStreamConfig`<sup>Required</sup> <a name="kinesisVideoStreamConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisVideoStreamConfig"></a>

```typescript
public readonly kinesisVideoStreamConfig: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference</a>

---

##### `s3Config`<sup>Required</sup> <a name="s3Config" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.s3Config"></a>

```typescript
public readonly s3Config: ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference">ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference</a>

---

##### `kinesisFirehoseConfigInput`<sup>Optional</sup> <a name="kinesisFirehoseConfigInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisFirehoseConfigInput"></a>

```typescript
public readonly kinesisFirehoseConfigInput: ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig</a>

---

##### `kinesisStreamConfigInput`<sup>Optional</sup> <a name="kinesisStreamConfigInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisStreamConfigInput"></a>

```typescript
public readonly kinesisStreamConfigInput: ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig</a>

---

##### `kinesisVideoStreamConfigInput`<sup>Optional</sup> <a name="kinesisVideoStreamConfigInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisVideoStreamConfigInput"></a>

```typescript
public readonly kinesisVideoStreamConfigInput: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig</a>

---

##### `s3ConfigInput`<sup>Optional</sup> <a name="s3ConfigInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.s3ConfigInput"></a>

```typescript
public readonly s3ConfigInput: ConnectInstanceStorageConfigStorageConfigS3Config;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config">ConnectInstanceStorageConfigStorageConfigS3Config</a>

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectInstanceStorageConfigStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfig">ConnectInstanceStorageConfigStorageConfig</a>

---


### ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference <a name="ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktf/provider-aws'

new connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionTypeInput"></a>

```typescript
public readonly encryptionTypeInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig</a>

---


### ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference <a name="ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktf/provider-aws'

new connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.putEncryptionConfig"></a>

```typescript
public putEncryptionConfig(value: ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig</a>

---

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.resetEncryptionConfig"></a>

```typescript
public resetEncryptionConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config">ConnectInstanceStorageConfigStorageConfigS3Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.bucketPrefixInput"></a>

```typescript
public readonly bucketPrefixInput: string;
```

- *Type:* string

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.encryptionConfigInput"></a>

```typescript
public readonly encryptionConfigInput: ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig</a>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectInstanceStorageConfigStorageConfigS3Config;
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstanceStorageConfig.ConnectInstanceStorageConfigStorageConfigS3Config">ConnectInstanceStorageConfigStorageConfigS3Config</a>

---



