# `snapshotCreateVolumePermission` Submodule <a name="`snapshotCreateVolumePermission` Submodule" id="@cdktf/provider-aws.snapshotCreateVolumePermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnapshotCreateVolumePermission <a name="SnapshotCreateVolumePermission" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission aws_snapshot_create_volume_permission}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer"></a>

```typescript
import { snapshotCreateVolumePermission } from '@cdktf/provider-aws'

new snapshotCreateVolumePermission.SnapshotCreateVolumePermission(scope: Construct, id: string, config: SnapshotCreateVolumePermissionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig">SnapshotCreateVolumePermissionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig">SnapshotCreateVolumePermissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.putTimeouts"></a>

```typescript
public putTimeouts(value: SnapshotCreateVolumePermissionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts">SnapshotCreateVolumePermissionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isConstruct"></a>

```typescript
import { snapshotCreateVolumePermission } from '@cdktf/provider-aws'

snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformElement"></a>

```typescript
import { snapshotCreateVolumePermission } from '@cdktf/provider-aws'

snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformResource"></a>

```typescript
import { snapshotCreateVolumePermission } from '@cdktf/provider-aws'

snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference">SnapshotCreateVolumePermissionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts">SnapshotCreateVolumePermissionTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.timeouts"></a>

```typescript
public readonly timeouts: SnapshotCreateVolumePermissionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference">SnapshotCreateVolumePermissionTimeoutsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: SnapshotCreateVolumePermissionTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts">SnapshotCreateVolumePermissionTimeouts</a> | cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SnapshotCreateVolumePermissionConfig <a name="SnapshotCreateVolumePermissionConfig" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.Initializer"></a>

```typescript
import { snapshotCreateVolumePermission } from '@cdktf/provider-aws'

const snapshotCreateVolumePermissionConfig: snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#account_id SnapshotCreateVolumePermission#account_id}. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#snapshot_id SnapshotCreateVolumePermission#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#id SnapshotCreateVolumePermission#id}. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts">SnapshotCreateVolumePermissionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#account_id SnapshotCreateVolumePermission#account_id}.

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#snapshot_id SnapshotCreateVolumePermission#snapshot_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#id SnapshotCreateVolumePermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SnapshotCreateVolumePermissionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts">SnapshotCreateVolumePermissionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#timeouts SnapshotCreateVolumePermission#timeouts}

---

### SnapshotCreateVolumePermissionTimeouts <a name="SnapshotCreateVolumePermissionTimeouts" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts.Initializer"></a>

```typescript
import { snapshotCreateVolumePermission } from '@cdktf/provider-aws'

const snapshotCreateVolumePermissionTimeouts: snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#create SnapshotCreateVolumePermission#create}. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#delete SnapshotCreateVolumePermission#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#create SnapshotCreateVolumePermission#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#delete SnapshotCreateVolumePermission#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SnapshotCreateVolumePermissionTimeoutsOutputReference <a name="SnapshotCreateVolumePermissionTimeoutsOutputReference" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.Initializer"></a>

```typescript
import { snapshotCreateVolumePermission } from '@cdktf/provider-aws'

new snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts">SnapshotCreateVolumePermissionTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SnapshotCreateVolumePermissionTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts">SnapshotCreateVolumePermissionTimeouts</a> | cdktf.IResolvable

---



