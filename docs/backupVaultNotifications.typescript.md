# `backupVaultNotifications` Submodule <a name="`backupVaultNotifications` Submodule" id="@cdktf/provider-aws.backupVaultNotifications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupVaultNotifications <a name="BackupVaultNotifications" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications aws_backup_vault_notifications}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.Initializer"></a>

```typescript
import { backupVaultNotifications } from '@cdktf/provider-aws'

new backupVaultNotifications.BackupVaultNotifications(scope: Construct, id: string, config: BackupVaultNotificationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig">BackupVaultNotificationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig">BackupVaultNotificationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.isConstruct"></a>

```typescript
import { backupVaultNotifications } from '@cdktf/provider-aws'

backupVaultNotifications.BackupVaultNotifications.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.isTerraformElement"></a>

```typescript
import { backupVaultNotifications } from '@cdktf/provider-aws'

backupVaultNotifications.BackupVaultNotifications.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.isTerraformResource"></a>

```typescript
import { backupVaultNotifications } from '@cdktf/provider-aws'

backupVaultNotifications.BackupVaultNotifications.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.backupVaultArn">backupVaultArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.backupVaultEventsInput">backupVaultEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.backupVaultNameInput">backupVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.backupVaultEvents">backupVaultEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.backupVaultName">backupVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupVaultArn`<sup>Required</sup> <a name="backupVaultArn" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.backupVaultArn"></a>

```typescript
public readonly backupVaultArn: string;
```

- *Type:* string

---

##### `backupVaultEventsInput`<sup>Optional</sup> <a name="backupVaultEventsInput" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.backupVaultEventsInput"></a>

```typescript
public readonly backupVaultEventsInput: string[];
```

- *Type:* string[]

---

##### `backupVaultNameInput`<sup>Optional</sup> <a name="backupVaultNameInput" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.backupVaultNameInput"></a>

```typescript
public readonly backupVaultNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.snsTopicArnInput"></a>

```typescript
public readonly snsTopicArnInput: string;
```

- *Type:* string

---

##### `backupVaultEvents`<sup>Required</sup> <a name="backupVaultEvents" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.backupVaultEvents"></a>

```typescript
public readonly backupVaultEvents: string[];
```

- *Type:* string[]

---

##### `backupVaultName`<sup>Required</sup> <a name="backupVaultName" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.backupVaultName"></a>

```typescript
public readonly backupVaultName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotifications.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupVaultNotificationsConfig <a name="BackupVaultNotificationsConfig" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.Initializer"></a>

```typescript
import { backupVaultNotifications } from '@cdktf/provider-aws'

const backupVaultNotificationsConfig: backupVaultNotifications.BackupVaultNotificationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.backupVaultEvents">backupVaultEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications#backup_vault_events BackupVaultNotifications#backup_vault_events}. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.backupVaultName">backupVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications#backup_vault_name BackupVaultNotifications#backup_vault_name}. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications#sns_topic_arn BackupVaultNotifications#sns_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications#id BackupVaultNotifications#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupVaultEvents`<sup>Required</sup> <a name="backupVaultEvents" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.backupVaultEvents"></a>

```typescript
public readonly backupVaultEvents: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications#backup_vault_events BackupVaultNotifications#backup_vault_events}.

---

##### `backupVaultName`<sup>Required</sup> <a name="backupVaultName" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.backupVaultName"></a>

```typescript
public readonly backupVaultName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications#backup_vault_name BackupVaultNotifications#backup_vault_name}.

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications#sns_topic_arn BackupVaultNotifications#sns_topic_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.backupVaultNotifications.BackupVaultNotificationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications#id BackupVaultNotifications#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



