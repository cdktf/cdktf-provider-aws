# `dbSnapshotCopy` Submodule <a name="`dbSnapshotCopy` Submodule" id="@cdktf/provider-aws.dbSnapshotCopy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbSnapshotCopy <a name="DbSnapshotCopy" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy aws_db_snapshot_copy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer"></a>

```typescript
import { dbSnapshotCopy } from '@cdktf/provider-aws'

new dbSnapshotCopy.DbSnapshotCopy(scope: Construct, id: string, config: DbSnapshotCopyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig">DbSnapshotCopyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig">DbSnapshotCopyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetCopyTags">resetCopyTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetDestinationRegion">resetDestinationRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetOptionGroupName">resetOptionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetPresignedUrl">resetPresignedUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTargetCustomAvailabilityZone">resetTargetCustomAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.putTimeouts"></a>

```typescript
public putTimeouts(value: DbSnapshotCopyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts">DbSnapshotCopyTimeouts</a>

---

##### `resetCopyTags` <a name="resetCopyTags" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetCopyTags"></a>

```typescript
public resetCopyTags(): void
```

##### `resetDestinationRegion` <a name="resetDestinationRegion" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetDestinationRegion"></a>

```typescript
public resetDestinationRegion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetOptionGroupName` <a name="resetOptionGroupName" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetOptionGroupName"></a>

```typescript
public resetOptionGroupName(): void
```

##### `resetPresignedUrl` <a name="resetPresignedUrl" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetPresignedUrl"></a>

```typescript
public resetPresignedUrl(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTargetCustomAvailabilityZone` <a name="resetTargetCustomAvailabilityZone" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTargetCustomAvailabilityZone"></a>

```typescript
public resetTargetCustomAvailabilityZone(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isConstruct"></a>

```typescript
import { dbSnapshotCopy } from '@cdktf/provider-aws'

dbSnapshotCopy.DbSnapshotCopy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isTerraformElement"></a>

```typescript
import { dbSnapshotCopy } from '@cdktf/provider-aws'

dbSnapshotCopy.DbSnapshotCopy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isTerraformResource"></a>

```typescript
import { dbSnapshotCopy } from '@cdktf/provider-aws'

dbSnapshotCopy.DbSnapshotCopy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.allocatedStorage">allocatedStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.dbSnapshotArn">dbSnapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.encrypted">encrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.snapshotType">snapshotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sourceRegion">sourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference">DbSnapshotCopyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.copyTagsInput">copyTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.destinationRegionInput">destinationRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.optionGroupNameInput">optionGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.presignedUrlInput">presignedUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sourceDbSnapshotIdentifierInput">sourceDbSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetCustomAvailabilityZoneInput">targetCustomAvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetDbSnapshotIdentifierInput">targetDbSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts">DbSnapshotCopyTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.copyTags">copyTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.destinationRegion">destinationRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.optionGroupName">optionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.presignedUrl">presignedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sourceDbSnapshotIdentifier">sourceDbSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetCustomAvailabilityZone">targetCustomAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetDbSnapshotIdentifier">targetDbSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: number;
```

- *Type:* number

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `dbSnapshotArn`<sup>Required</sup> <a name="dbSnapshotArn" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.dbSnapshotArn"></a>

```typescript
public readonly dbSnapshotArn: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.encrypted"></a>

```typescript
public readonly encrypted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `snapshotType`<sup>Required</sup> <a name="snapshotType" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.snapshotType"></a>

```typescript
public readonly snapshotType: string;
```

- *Type:* string

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sourceRegion"></a>

```typescript
public readonly sourceRegion: string;
```

- *Type:* string

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.timeouts"></a>

```typescript
public readonly timeouts: DbSnapshotCopyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference">DbSnapshotCopyTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `copyTagsInput`<sup>Optional</sup> <a name="copyTagsInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.copyTagsInput"></a>

```typescript
public readonly copyTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `destinationRegionInput`<sup>Optional</sup> <a name="destinationRegionInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.destinationRegionInput"></a>

```typescript
public readonly destinationRegionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `optionGroupNameInput`<sup>Optional</sup> <a name="optionGroupNameInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.optionGroupNameInput"></a>

```typescript
public readonly optionGroupNameInput: string;
```

- *Type:* string

---

##### `presignedUrlInput`<sup>Optional</sup> <a name="presignedUrlInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.presignedUrlInput"></a>

```typescript
public readonly presignedUrlInput: string;
```

- *Type:* string

---

##### `sourceDbSnapshotIdentifierInput`<sup>Optional</sup> <a name="sourceDbSnapshotIdentifierInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sourceDbSnapshotIdentifierInput"></a>

```typescript
public readonly sourceDbSnapshotIdentifierInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetCustomAvailabilityZoneInput`<sup>Optional</sup> <a name="targetCustomAvailabilityZoneInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetCustomAvailabilityZoneInput"></a>

```typescript
public readonly targetCustomAvailabilityZoneInput: string;
```

- *Type:* string

---

##### `targetDbSnapshotIdentifierInput`<sup>Optional</sup> <a name="targetDbSnapshotIdentifierInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetDbSnapshotIdentifierInput"></a>

```typescript
public readonly targetDbSnapshotIdentifierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DbSnapshotCopyTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts">DbSnapshotCopyTimeouts</a> | cdktf.IResolvable

---

##### `copyTags`<sup>Required</sup> <a name="copyTags" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.copyTags"></a>

```typescript
public readonly copyTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `destinationRegion`<sup>Required</sup> <a name="destinationRegion" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.destinationRegion"></a>

```typescript
public readonly destinationRegion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `optionGroupName`<sup>Required</sup> <a name="optionGroupName" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.optionGroupName"></a>

```typescript
public readonly optionGroupName: string;
```

- *Type:* string

---

##### `presignedUrl`<sup>Required</sup> <a name="presignedUrl" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.presignedUrl"></a>

```typescript
public readonly presignedUrl: string;
```

- *Type:* string

---

##### `sourceDbSnapshotIdentifier`<sup>Required</sup> <a name="sourceDbSnapshotIdentifier" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sourceDbSnapshotIdentifier"></a>

```typescript
public readonly sourceDbSnapshotIdentifier: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetCustomAvailabilityZone`<sup>Required</sup> <a name="targetCustomAvailabilityZone" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetCustomAvailabilityZone"></a>

```typescript
public readonly targetCustomAvailabilityZone: string;
```

- *Type:* string

---

##### `targetDbSnapshotIdentifier`<sup>Required</sup> <a name="targetDbSnapshotIdentifier" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetDbSnapshotIdentifier"></a>

```typescript
public readonly targetDbSnapshotIdentifier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DbSnapshotCopyConfig <a name="DbSnapshotCopyConfig" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.Initializer"></a>

```typescript
import { dbSnapshotCopy } from '@cdktf/provider-aws'

const dbSnapshotCopyConfig: dbSnapshotCopy.DbSnapshotCopyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.sourceDbSnapshotIdentifier">sourceDbSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#source_db_snapshot_identifier DbSnapshotCopy#source_db_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.targetDbSnapshotIdentifier">targetDbSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#target_db_snapshot_identifier DbSnapshotCopy#target_db_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.copyTags">copyTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#copy_tags DbSnapshotCopy#copy_tags}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.destinationRegion">destinationRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#destination_region DbSnapshotCopy#destination_region}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#id DbSnapshotCopy#id}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#kms_key_id DbSnapshotCopy#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.optionGroupName">optionGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#option_group_name DbSnapshotCopy#option_group_name}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.presignedUrl">presignedUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#presigned_url DbSnapshotCopy#presigned_url}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#tags DbSnapshotCopy#tags}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#tags_all DbSnapshotCopy#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.targetCustomAvailabilityZone">targetCustomAvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#target_custom_availability_zone DbSnapshotCopy#target_custom_availability_zone}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts">DbSnapshotCopyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sourceDbSnapshotIdentifier`<sup>Required</sup> <a name="sourceDbSnapshotIdentifier" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.sourceDbSnapshotIdentifier"></a>

```typescript
public readonly sourceDbSnapshotIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#source_db_snapshot_identifier DbSnapshotCopy#source_db_snapshot_identifier}.

---

##### `targetDbSnapshotIdentifier`<sup>Required</sup> <a name="targetDbSnapshotIdentifier" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.targetDbSnapshotIdentifier"></a>

```typescript
public readonly targetDbSnapshotIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#target_db_snapshot_identifier DbSnapshotCopy#target_db_snapshot_identifier}.

---

##### `copyTags`<sup>Optional</sup> <a name="copyTags" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.copyTags"></a>

```typescript
public readonly copyTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#copy_tags DbSnapshotCopy#copy_tags}.

---

##### `destinationRegion`<sup>Optional</sup> <a name="destinationRegion" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.destinationRegion"></a>

```typescript
public readonly destinationRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#destination_region DbSnapshotCopy#destination_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#id DbSnapshotCopy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#kms_key_id DbSnapshotCopy#kms_key_id}.

---

##### `optionGroupName`<sup>Optional</sup> <a name="optionGroupName" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.optionGroupName"></a>

```typescript
public readonly optionGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#option_group_name DbSnapshotCopy#option_group_name}.

---

##### `presignedUrl`<sup>Optional</sup> <a name="presignedUrl" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.presignedUrl"></a>

```typescript
public readonly presignedUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#presigned_url DbSnapshotCopy#presigned_url}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#tags DbSnapshotCopy#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#tags_all DbSnapshotCopy#tags_all}.

---

##### `targetCustomAvailabilityZone`<sup>Optional</sup> <a name="targetCustomAvailabilityZone" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.targetCustomAvailabilityZone"></a>

```typescript
public readonly targetCustomAvailabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#target_custom_availability_zone DbSnapshotCopy#target_custom_availability_zone}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DbSnapshotCopyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts">DbSnapshotCopyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#timeouts DbSnapshotCopy#timeouts}

---

### DbSnapshotCopyTimeouts <a name="DbSnapshotCopyTimeouts" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts.Initializer"></a>

```typescript
import { dbSnapshotCopy } from '@cdktf/provider-aws'

const dbSnapshotCopyTimeouts: dbSnapshotCopy.DbSnapshotCopyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#create DbSnapshotCopy#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot_copy#create DbSnapshotCopy#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbSnapshotCopyTimeoutsOutputReference <a name="DbSnapshotCopyTimeoutsOutputReference" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.Initializer"></a>

```typescript
import { dbSnapshotCopy } from '@cdktf/provider-aws'

new dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts">DbSnapshotCopyTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DbSnapshotCopyTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts">DbSnapshotCopyTimeouts</a> | cdktf.IResolvable

---



