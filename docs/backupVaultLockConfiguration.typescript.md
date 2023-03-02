# `backupVaultLockConfiguration` Submodule <a name="`backupVaultLockConfiguration` Submodule" id="@cdktf/provider-aws.backupVaultLockConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupVaultLockConfiguration <a name="BackupVaultLockConfiguration" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration aws_backup_vault_lock_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer"></a>

```typescript
import { backupVaultLockConfiguration } from '@cdktf/provider-aws'

new backupVaultLockConfiguration.BackupVaultLockConfiguration(scope: Construct, id: string, config: BackupVaultLockConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig">BackupVaultLockConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig">BackupVaultLockConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.resetChangeableForDays">resetChangeableForDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.resetMaxRetentionDays">resetMaxRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.resetMinRetentionDays">resetMinRetentionDays</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetChangeableForDays` <a name="resetChangeableForDays" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.resetChangeableForDays"></a>

```typescript
public resetChangeableForDays(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxRetentionDays` <a name="resetMaxRetentionDays" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.resetMaxRetentionDays"></a>

```typescript
public resetMaxRetentionDays(): void
```

##### `resetMinRetentionDays` <a name="resetMinRetentionDays" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.resetMinRetentionDays"></a>

```typescript
public resetMinRetentionDays(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.isConstruct"></a>

```typescript
import { backupVaultLockConfiguration } from '@cdktf/provider-aws'

backupVaultLockConfiguration.BackupVaultLockConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.isTerraformElement"></a>

```typescript
import { backupVaultLockConfiguration } from '@cdktf/provider-aws'

backupVaultLockConfiguration.BackupVaultLockConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.isTerraformResource"></a>

```typescript
import { backupVaultLockConfiguration } from '@cdktf/provider-aws'

backupVaultLockConfiguration.BackupVaultLockConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.backupVaultArn">backupVaultArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.backupVaultNameInput">backupVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.changeableForDaysInput">changeableForDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.maxRetentionDaysInput">maxRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.minRetentionDaysInput">minRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.backupVaultName">backupVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.changeableForDays">changeableForDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.maxRetentionDays">maxRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.minRetentionDays">minRetentionDays</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupVaultArn`<sup>Required</sup> <a name="backupVaultArn" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.backupVaultArn"></a>

```typescript
public readonly backupVaultArn: string;
```

- *Type:* string

---

##### `backupVaultNameInput`<sup>Optional</sup> <a name="backupVaultNameInput" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.backupVaultNameInput"></a>

```typescript
public readonly backupVaultNameInput: string;
```

- *Type:* string

---

##### `changeableForDaysInput`<sup>Optional</sup> <a name="changeableForDaysInput" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.changeableForDaysInput"></a>

```typescript
public readonly changeableForDaysInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxRetentionDaysInput`<sup>Optional</sup> <a name="maxRetentionDaysInput" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.maxRetentionDaysInput"></a>

```typescript
public readonly maxRetentionDaysInput: number;
```

- *Type:* number

---

##### `minRetentionDaysInput`<sup>Optional</sup> <a name="minRetentionDaysInput" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.minRetentionDaysInput"></a>

```typescript
public readonly minRetentionDaysInput: number;
```

- *Type:* number

---

##### `backupVaultName`<sup>Required</sup> <a name="backupVaultName" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.backupVaultName"></a>

```typescript
public readonly backupVaultName: string;
```

- *Type:* string

---

##### `changeableForDays`<sup>Required</sup> <a name="changeableForDays" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.changeableForDays"></a>

```typescript
public readonly changeableForDays: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxRetentionDays`<sup>Required</sup> <a name="maxRetentionDays" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.maxRetentionDays"></a>

```typescript
public readonly maxRetentionDays: number;
```

- *Type:* number

---

##### `minRetentionDays`<sup>Required</sup> <a name="minRetentionDays" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.minRetentionDays"></a>

```typescript
public readonly minRetentionDays: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupVaultLockConfigurationConfig <a name="BackupVaultLockConfigurationConfig" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.Initializer"></a>

```typescript
import { backupVaultLockConfiguration } from '@cdktf/provider-aws'

const backupVaultLockConfigurationConfig: backupVaultLockConfiguration.BackupVaultLockConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.backupVaultName">backupVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#backup_vault_name BackupVaultLockConfiguration#backup_vault_name}. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.changeableForDays">changeableForDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#changeable_for_days BackupVaultLockConfiguration#changeable_for_days}. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#id BackupVaultLockConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.maxRetentionDays">maxRetentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#max_retention_days BackupVaultLockConfiguration#max_retention_days}. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.minRetentionDays">minRetentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#min_retention_days BackupVaultLockConfiguration#min_retention_days}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupVaultName`<sup>Required</sup> <a name="backupVaultName" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.backupVaultName"></a>

```typescript
public readonly backupVaultName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#backup_vault_name BackupVaultLockConfiguration#backup_vault_name}.

---

##### `changeableForDays`<sup>Optional</sup> <a name="changeableForDays" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.changeableForDays"></a>

```typescript
public readonly changeableForDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#changeable_for_days BackupVaultLockConfiguration#changeable_for_days}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#id BackupVaultLockConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxRetentionDays`<sup>Optional</sup> <a name="maxRetentionDays" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.maxRetentionDays"></a>

```typescript
public readonly maxRetentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#max_retention_days BackupVaultLockConfiguration#max_retention_days}.

---

##### `minRetentionDays`<sup>Optional</sup> <a name="minRetentionDays" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.minRetentionDays"></a>

```typescript
public readonly minRetentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#min_retention_days BackupVaultLockConfiguration#min_retention_days}.

---



