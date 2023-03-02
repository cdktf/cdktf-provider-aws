# `dbInstanceAutomatedBackupsReplication` Submodule <a name="`dbInstanceAutomatedBackupsReplication` Submodule" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbInstanceAutomatedBackupsReplication <a name="DbInstanceAutomatedBackupsReplication" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication aws_db_instance_automated_backups_replication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer"></a>

```typescript
import { dbInstanceAutomatedBackupsReplication } from '@cdktf/provider-aws'

new dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication(scope: Construct, id: string, config: DbInstanceAutomatedBackupsReplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig">DbInstanceAutomatedBackupsReplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig">DbInstanceAutomatedBackupsReplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetPreSignedUrl">resetPreSignedUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetRetentionPeriod">resetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.putTimeouts"></a>

```typescript
public putTimeouts(value: DbInstanceAutomatedBackupsReplicationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetPreSignedUrl` <a name="resetPreSignedUrl" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetPreSignedUrl"></a>

```typescript
public resetPreSignedUrl(): void
```

##### `resetRetentionPeriod` <a name="resetRetentionPeriod" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetRetentionPeriod"></a>

```typescript
public resetRetentionPeriod(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isConstruct"></a>

```typescript
import { dbInstanceAutomatedBackupsReplication } from '@cdktf/provider-aws'

dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformElement"></a>

```typescript
import { dbInstanceAutomatedBackupsReplication } from '@cdktf/provider-aws'

dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformResource"></a>

```typescript
import { dbInstanceAutomatedBackupsReplication } from '@cdktf/provider-aws'

dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference">DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.preSignedUrlInput">preSignedUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.sourceDbInstanceArnInput">sourceDbInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.preSignedUrl">preSignedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.retentionPeriod">retentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.sourceDbInstanceArn">sourceDbInstanceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.timeouts"></a>

```typescript
public readonly timeouts: DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference">DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `preSignedUrlInput`<sup>Optional</sup> <a name="preSignedUrlInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.preSignedUrlInput"></a>

```typescript
public readonly preSignedUrlInput: string;
```

- *Type:* string

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.retentionPeriodInput"></a>

```typescript
public readonly retentionPeriodInput: number;
```

- *Type:* number

---

##### `sourceDbInstanceArnInput`<sup>Optional</sup> <a name="sourceDbInstanceArnInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.sourceDbInstanceArnInput"></a>

```typescript
public readonly sourceDbInstanceArnInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DbInstanceAutomatedBackupsReplicationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `preSignedUrl`<sup>Required</sup> <a name="preSignedUrl" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.preSignedUrl"></a>

```typescript
public readonly preSignedUrl: string;
```

- *Type:* string

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: number;
```

- *Type:* number

---

##### `sourceDbInstanceArn`<sup>Required</sup> <a name="sourceDbInstanceArn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.sourceDbInstanceArn"></a>

```typescript
public readonly sourceDbInstanceArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DbInstanceAutomatedBackupsReplicationConfig <a name="DbInstanceAutomatedBackupsReplicationConfig" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.Initializer"></a>

```typescript
import { dbInstanceAutomatedBackupsReplication } from '@cdktf/provider-aws'

const dbInstanceAutomatedBackupsReplicationConfig: dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.sourceDbInstanceArn">sourceDbInstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#source_db_instance_arn DbInstanceAutomatedBackupsReplication#source_db_instance_arn}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#id DbInstanceAutomatedBackupsReplication#id}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#kms_key_id DbInstanceAutomatedBackupsReplication#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.preSignedUrl">preSignedUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#pre_signed_url DbInstanceAutomatedBackupsReplication#pre_signed_url}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.retentionPeriod">retentionPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#retention_period DbInstanceAutomatedBackupsReplication#retention_period}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sourceDbInstanceArn`<sup>Required</sup> <a name="sourceDbInstanceArn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.sourceDbInstanceArn"></a>

```typescript
public readonly sourceDbInstanceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#source_db_instance_arn DbInstanceAutomatedBackupsReplication#source_db_instance_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#id DbInstanceAutomatedBackupsReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#kms_key_id DbInstanceAutomatedBackupsReplication#kms_key_id}.

---

##### `preSignedUrl`<sup>Optional</sup> <a name="preSignedUrl" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.preSignedUrl"></a>

```typescript
public readonly preSignedUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#pre_signed_url DbInstanceAutomatedBackupsReplication#pre_signed_url}.

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#retention_period DbInstanceAutomatedBackupsReplication#retention_period}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DbInstanceAutomatedBackupsReplicationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#timeouts DbInstanceAutomatedBackupsReplication#timeouts}

---

### DbInstanceAutomatedBackupsReplicationTimeouts <a name="DbInstanceAutomatedBackupsReplicationTimeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts.Initializer"></a>

```typescript
import { dbInstanceAutomatedBackupsReplication } from '@cdktf/provider-aws'

const dbInstanceAutomatedBackupsReplicationTimeouts: dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#create DbInstanceAutomatedBackupsReplication#create}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#delete DbInstanceAutomatedBackupsReplication#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#create DbInstanceAutomatedBackupsReplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#delete DbInstanceAutomatedBackupsReplication#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference <a name="DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.Initializer"></a>

```typescript
import { dbInstanceAutomatedBackupsReplication } from '@cdktf/provider-aws'

new dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DbInstanceAutomatedBackupsReplicationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a> | cdktf.IResolvable

---



