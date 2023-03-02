# `backupPlan` Submodule <a name="`backupPlan` Submodule" id="@cdktf/provider-aws.backupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupPlan <a name="BackupPlan" id="@cdktf/provider-aws.backupPlan.BackupPlan"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_plan aws_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer"></a>

```typescript
import { backupPlan } from '@cdktf/provider-aws'

new backupPlan.BackupPlan(scope: Construct, id: string, config: BackupPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig">BackupPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig">BackupPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.putAdvancedBackupSetting">putAdvancedBackupSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.resetAdvancedBackupSetting">resetAdvancedBackupSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupPlan.BackupPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.backupPlan.BackupPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.backupPlan.BackupPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupPlan.BackupPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.backupPlan.BackupPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.backupPlan.BackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.backupPlan.BackupPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.backupPlan.BackupPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.backupPlan.BackupPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAdvancedBackupSetting` <a name="putAdvancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlan.putAdvancedBackupSetting"></a>

```typescript
public putAdvancedBackupSetting(value: IResolvable | BackupPlanAdvancedBackupSetting[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupPlan.BackupPlan.putAdvancedBackupSetting.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting">BackupPlanAdvancedBackupSetting</a>[]

---

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.backupPlan.BackupPlan.putRule"></a>

```typescript
public putRule(value: IResolvable | BackupPlanRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupPlan.BackupPlan.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule">BackupPlanRule</a>[]

---

##### `resetAdvancedBackupSetting` <a name="resetAdvancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlan.resetAdvancedBackupSetting"></a>

```typescript
public resetAdvancedBackupSetting(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.backupPlan.BackupPlan.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.backupPlan.BackupPlan.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.backupPlan.BackupPlan.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.backupPlan.BackupPlan.isConstruct"></a>

```typescript
import { backupPlan } from '@cdktf/provider-aws'

backupPlan.BackupPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupPlan.BackupPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformElement"></a>

```typescript
import { backupPlan } from '@cdktf/provider-aws'

backupPlan.BackupPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformResource"></a>

```typescript
import { backupPlan } from '@cdktf/provider-aws'

backupPlan.BackupPlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.advancedBackupSetting">advancedBackupSetting</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList">BackupPlanAdvancedBackupSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList">BackupPlanRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.advancedBackupSettingInput">advancedBackupSettingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting">BackupPlanAdvancedBackupSetting</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule">BackupPlanRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `advancedBackupSetting`<sup>Required</sup> <a name="advancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.advancedBackupSetting"></a>

```typescript
public readonly advancedBackupSetting: BackupPlanAdvancedBackupSettingList;
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList">BackupPlanAdvancedBackupSettingList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.rule"></a>

```typescript
public readonly rule: BackupPlanRuleList;
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList">BackupPlanRuleList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `advancedBackupSettingInput`<sup>Optional</sup> <a name="advancedBackupSettingInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.advancedBackupSettingInput"></a>

```typescript
public readonly advancedBackupSettingInput: IResolvable | BackupPlanAdvancedBackupSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting">BackupPlanAdvancedBackupSetting</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | BackupPlanRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule">BackupPlanRule</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupPlanAdvancedBackupSetting <a name="BackupPlanAdvancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.Initializer"></a>

```typescript
import { backupPlan } from '@cdktf/provider-aws'

const backupPlanAdvancedBackupSetting: backupPlan.BackupPlanAdvancedBackupSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.property.backupOptions">backupOptions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#backup_options BackupPlan#backup_options}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#resource_type BackupPlan#resource_type}. |

---

##### `backupOptions`<sup>Required</sup> <a name="backupOptions" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.property.backupOptions"></a>

```typescript
public readonly backupOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#backup_options BackupPlan#backup_options}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#resource_type BackupPlan#resource_type}.

---

### BackupPlanConfig <a name="BackupPlanConfig" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.Initializer"></a>

```typescript
import { backupPlan } from '@cdktf/provider-aws'

const backupPlanConfig: backupPlan.BackupPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#name BackupPlan#name}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule">BackupPlanRule</a>[]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.advancedBackupSetting">advancedBackupSetting</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting">BackupPlanAdvancedBackupSetting</a>[]</code> | advanced_backup_setting block. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#id BackupPlan#id}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags BackupPlan#tags}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags_all BackupPlan#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#name BackupPlan#name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | BackupPlanRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule">BackupPlanRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#rule BackupPlan#rule}

---

##### `advancedBackupSetting`<sup>Optional</sup> <a name="advancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.advancedBackupSetting"></a>

```typescript
public readonly advancedBackupSetting: IResolvable | BackupPlanAdvancedBackupSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting">BackupPlanAdvancedBackupSetting</a>[]

advanced_backup_setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#advanced_backup_setting BackupPlan#advanced_backup_setting}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#id BackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags BackupPlan#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags_all BackupPlan#tags_all}.

---

### BackupPlanRule <a name="BackupPlanRule" id="@cdktf/provider-aws.backupPlan.BackupPlanRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.Initializer"></a>

```typescript
import { backupPlan } from '@cdktf/provider-aws'

const backupPlanRule: backupPlan.BackupPlanRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.ruleName">ruleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#rule_name BackupPlan#rule_name}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.targetVaultName">targetVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#target_vault_name BackupPlan#target_vault_name}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.completionWindow">completionWindow</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#completion_window BackupPlan#completion_window}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.copyAction">copyAction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction">BackupPlanRuleCopyAction</a>[]</code> | copy_action block. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.enableContinuousBackup">enableContinuousBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#enable_continuous_backup BackupPlan#enable_continuous_backup}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a></code> | lifecycle block. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.recoveryPointTags">recoveryPointTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#recovery_point_tags BackupPlan#recovery_point_tags}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.schedule">schedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#schedule BackupPlan#schedule}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.startWindow">startWindow</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#start_window BackupPlan#start_window}. |

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#rule_name BackupPlan#rule_name}.

---

##### `targetVaultName`<sup>Required</sup> <a name="targetVaultName" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.targetVaultName"></a>

```typescript
public readonly targetVaultName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#target_vault_name BackupPlan#target_vault_name}.

---

##### `completionWindow`<sup>Optional</sup> <a name="completionWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.completionWindow"></a>

```typescript
public readonly completionWindow: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#completion_window BackupPlan#completion_window}.

---

##### `copyAction`<sup>Optional</sup> <a name="copyAction" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.copyAction"></a>

```typescript
public readonly copyAction: IResolvable | BackupPlanRuleCopyAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction">BackupPlanRuleCopyAction</a>[]

copy_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#copy_action BackupPlan#copy_action}

---

##### `enableContinuousBackup`<sup>Optional</sup> <a name="enableContinuousBackup" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.enableContinuousBackup"></a>

```typescript
public readonly enableContinuousBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#enable_continuous_backup BackupPlan#enable_continuous_backup}.

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: BackupPlanRuleLifecycle;
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a>

lifecycle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#lifecycle BackupPlan#lifecycle}

---

##### `recoveryPointTags`<sup>Optional</sup> <a name="recoveryPointTags" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.recoveryPointTags"></a>

```typescript
public readonly recoveryPointTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#recovery_point_tags BackupPlan#recovery_point_tags}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#schedule BackupPlan#schedule}.

---

##### `startWindow`<sup>Optional</sup> <a name="startWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.startWindow"></a>

```typescript
public readonly startWindow: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#start_window BackupPlan#start_window}.

---

### BackupPlanRuleCopyAction <a name="BackupPlanRuleCopyAction" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction.Initializer"></a>

```typescript
import { backupPlan } from '@cdktf/provider-aws'

const backupPlanRuleCopyAction: backupPlan.BackupPlanRuleCopyAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction.property.destinationVaultArn">destinationVaultArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#destination_vault_arn BackupPlan#destination_vault_arn}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a></code> | lifecycle block. |

---

##### `destinationVaultArn`<sup>Required</sup> <a name="destinationVaultArn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction.property.destinationVaultArn"></a>

```typescript
public readonly destinationVaultArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#destination_vault_arn BackupPlan#destination_vault_arn}.

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction.property.lifecycle"></a>

```typescript
public readonly lifecycle: BackupPlanRuleCopyActionLifecycle;
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a>

lifecycle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#lifecycle BackupPlan#lifecycle}

---

### BackupPlanRuleCopyActionLifecycle <a name="BackupPlanRuleCopyActionLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.Initializer"></a>

```typescript
import { backupPlan } from '@cdktf/provider-aws'

const backupPlanRuleCopyActionLifecycle: backupPlan.BackupPlanRuleCopyActionLifecycle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.coldStorageAfter">coldStorageAfter</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#cold_storage_after BackupPlan#cold_storage_after}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.deleteAfter">deleteAfter</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#delete_after BackupPlan#delete_after}. |

---

##### `coldStorageAfter`<sup>Optional</sup> <a name="coldStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.coldStorageAfter"></a>

```typescript
public readonly coldStorageAfter: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#cold_storage_after BackupPlan#cold_storage_after}.

---

##### `deleteAfter`<sup>Optional</sup> <a name="deleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.deleteAfter"></a>

```typescript
public readonly deleteAfter: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#delete_after BackupPlan#delete_after}.

---

### BackupPlanRuleLifecycle <a name="BackupPlanRuleLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle.Initializer"></a>

```typescript
import { backupPlan } from '@cdktf/provider-aws'

const backupPlanRuleLifecycle: backupPlan.BackupPlanRuleLifecycle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.coldStorageAfter">coldStorageAfter</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#cold_storage_after BackupPlan#cold_storage_after}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.deleteAfter">deleteAfter</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#delete_after BackupPlan#delete_after}. |

---

##### `coldStorageAfter`<sup>Optional</sup> <a name="coldStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.coldStorageAfter"></a>

```typescript
public readonly coldStorageAfter: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#cold_storage_after BackupPlan#cold_storage_after}.

---

##### `deleteAfter`<sup>Optional</sup> <a name="deleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.deleteAfter"></a>

```typescript
public readonly deleteAfter: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#delete_after BackupPlan#delete_after}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupPlanAdvancedBackupSettingList <a name="BackupPlanAdvancedBackupSettingList" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer"></a>

```typescript
import { backupPlan } from '@cdktf/provider-aws'

new backupPlan.BackupPlanAdvancedBackupSettingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.get"></a>

```typescript
public get(index: number): BackupPlanAdvancedBackupSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting">BackupPlanAdvancedBackupSetting</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupPlanAdvancedBackupSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting">BackupPlanAdvancedBackupSetting</a>[]

---


### BackupPlanAdvancedBackupSettingOutputReference <a name="BackupPlanAdvancedBackupSettingOutputReference" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer"></a>

```typescript
import { backupPlan } from '@cdktf/provider-aws'

new backupPlan.BackupPlanAdvancedBackupSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.backupOptionsInput">backupOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.backupOptions">backupOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting">BackupPlanAdvancedBackupSetting</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupOptionsInput`<sup>Optional</sup> <a name="backupOptionsInput" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.backupOptionsInput"></a>

```typescript
public readonly backupOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `backupOptions`<sup>Required</sup> <a name="backupOptions" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.backupOptions"></a>

```typescript
public readonly backupOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPlanAdvancedBackupSetting | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting">BackupPlanAdvancedBackupSetting</a> | cdktf.IResolvable

---


### BackupPlanRuleCopyActionLifecycleOutputReference <a name="BackupPlanRuleCopyActionLifecycleOutputReference" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer"></a>

```typescript
import { backupPlan } from '@cdktf/provider-aws'

new backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resetColdStorageAfter">resetColdStorageAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resetDeleteAfter">resetDeleteAfter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColdStorageAfter` <a name="resetColdStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resetColdStorageAfter"></a>

```typescript
public resetColdStorageAfter(): void
```

##### `resetDeleteAfter` <a name="resetDeleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resetDeleteAfter"></a>

```typescript
public resetDeleteAfter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfterInput">coldStorageAfterInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfterInput">deleteAfterInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfter">coldStorageAfter</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfter">deleteAfter</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coldStorageAfterInput`<sup>Optional</sup> <a name="coldStorageAfterInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfterInput"></a>

```typescript
public readonly coldStorageAfterInput: number;
```

- *Type:* number

---

##### `deleteAfterInput`<sup>Optional</sup> <a name="deleteAfterInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfterInput"></a>

```typescript
public readonly deleteAfterInput: number;
```

- *Type:* number

---

##### `coldStorageAfter`<sup>Required</sup> <a name="coldStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfter"></a>

```typescript
public readonly coldStorageAfter: number;
```

- *Type:* number

---

##### `deleteAfter`<sup>Required</sup> <a name="deleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfter"></a>

```typescript
public readonly deleteAfter: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPlanRuleCopyActionLifecycle;
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a>

---


### BackupPlanRuleCopyActionList <a name="BackupPlanRuleCopyActionList" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer"></a>

```typescript
import { backupPlan } from '@cdktf/provider-aws'

new backupPlan.BackupPlanRuleCopyActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.get"></a>

```typescript
public get(index: number): BackupPlanRuleCopyActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction">BackupPlanRuleCopyAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupPlanRuleCopyAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction">BackupPlanRuleCopyAction</a>[]

---


### BackupPlanRuleCopyActionOutputReference <a name="BackupPlanRuleCopyActionOutputReference" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer"></a>

```typescript
import { backupPlan } from '@cdktf/provider-aws'

new backupPlan.BackupPlanRuleCopyActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.putLifecycle">putLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resetLifecycle">resetLifecycle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLifecycle` <a name="putLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.putLifecycle"></a>

```typescript
public putLifecycle(value: BackupPlanRuleCopyActionLifecycle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.putLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a>

---

##### `resetLifecycle` <a name="resetLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resetLifecycle"></a>

```typescript
public resetLifecycle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference">BackupPlanRuleCopyActionLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.destinationVaultArnInput">destinationVaultArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.lifecycleInput">lifecycleInput</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.destinationVaultArn">destinationVaultArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction">BackupPlanRuleCopyAction</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lifecycle`<sup>Required</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.lifecycle"></a>

```typescript
public readonly lifecycle: BackupPlanRuleCopyActionLifecycleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference">BackupPlanRuleCopyActionLifecycleOutputReference</a>

---

##### `destinationVaultArnInput`<sup>Optional</sup> <a name="destinationVaultArnInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.destinationVaultArnInput"></a>

```typescript
public readonly destinationVaultArnInput: string;
```

- *Type:* string

---

##### `lifecycleInput`<sup>Optional</sup> <a name="lifecycleInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.lifecycleInput"></a>

```typescript
public readonly lifecycleInput: BackupPlanRuleCopyActionLifecycle;
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a>

---

##### `destinationVaultArn`<sup>Required</sup> <a name="destinationVaultArn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.destinationVaultArn"></a>

```typescript
public readonly destinationVaultArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPlanRuleCopyAction | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction">BackupPlanRuleCopyAction</a> | cdktf.IResolvable

---


### BackupPlanRuleLifecycleOutputReference <a name="BackupPlanRuleLifecycleOutputReference" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer"></a>

```typescript
import { backupPlan } from '@cdktf/provider-aws'

new backupPlan.BackupPlanRuleLifecycleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resetColdStorageAfter">resetColdStorageAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resetDeleteAfter">resetDeleteAfter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColdStorageAfter` <a name="resetColdStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resetColdStorageAfter"></a>

```typescript
public resetColdStorageAfter(): void
```

##### `resetDeleteAfter` <a name="resetDeleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resetDeleteAfter"></a>

```typescript
public resetDeleteAfter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.coldStorageAfterInput">coldStorageAfterInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.deleteAfterInput">deleteAfterInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.coldStorageAfter">coldStorageAfter</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.deleteAfter">deleteAfter</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coldStorageAfterInput`<sup>Optional</sup> <a name="coldStorageAfterInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.coldStorageAfterInput"></a>

```typescript
public readonly coldStorageAfterInput: number;
```

- *Type:* number

---

##### `deleteAfterInput`<sup>Optional</sup> <a name="deleteAfterInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.deleteAfterInput"></a>

```typescript
public readonly deleteAfterInput: number;
```

- *Type:* number

---

##### `coldStorageAfter`<sup>Required</sup> <a name="coldStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.coldStorageAfter"></a>

```typescript
public readonly coldStorageAfter: number;
```

- *Type:* number

---

##### `deleteAfter`<sup>Required</sup> <a name="deleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.deleteAfter"></a>

```typescript
public readonly deleteAfter: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPlanRuleLifecycle;
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a>

---


### BackupPlanRuleList <a name="BackupPlanRuleList" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer"></a>

```typescript
import { backupPlan } from '@cdktf/provider-aws'

new backupPlan.BackupPlanRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.get"></a>

```typescript
public get(index: number): BackupPlanRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule">BackupPlanRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupPlanRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule">BackupPlanRule</a>[]

---


### BackupPlanRuleOutputReference <a name="BackupPlanRuleOutputReference" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer"></a>

```typescript
import { backupPlan } from '@cdktf/provider-aws'

new backupPlan.BackupPlanRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putCopyAction">putCopyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putLifecycle">putLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetCompletionWindow">resetCompletionWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetCopyAction">resetCopyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetEnableContinuousBackup">resetEnableContinuousBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetLifecycle">resetLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetRecoveryPointTags">resetRecoveryPointTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetStartWindow">resetStartWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCopyAction` <a name="putCopyAction" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putCopyAction"></a>

```typescript
public putCopyAction(value: IResolvable | BackupPlanRuleCopyAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putCopyAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction">BackupPlanRuleCopyAction</a>[]

---

##### `putLifecycle` <a name="putLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putLifecycle"></a>

```typescript
public putLifecycle(value: BackupPlanRuleLifecycle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a>

---

##### `resetCompletionWindow` <a name="resetCompletionWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetCompletionWindow"></a>

```typescript
public resetCompletionWindow(): void
```

##### `resetCopyAction` <a name="resetCopyAction" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetCopyAction"></a>

```typescript
public resetCopyAction(): void
```

##### `resetEnableContinuousBackup` <a name="resetEnableContinuousBackup" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetEnableContinuousBackup"></a>

```typescript
public resetEnableContinuousBackup(): void
```

##### `resetLifecycle` <a name="resetLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetLifecycle"></a>

```typescript
public resetLifecycle(): void
```

##### `resetRecoveryPointTags` <a name="resetRecoveryPointTags" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetRecoveryPointTags"></a>

```typescript
public resetRecoveryPointTags(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetStartWindow` <a name="resetStartWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetStartWindow"></a>

```typescript
public resetStartWindow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.copyAction">copyAction</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList">BackupPlanRuleCopyActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference">BackupPlanRuleLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.completionWindowInput">completionWindowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.copyActionInput">copyActionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction">BackupPlanRuleCopyAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.enableContinuousBackupInput">enableContinuousBackupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.lifecycleInput">lifecycleInput</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.recoveryPointTagsInput">recoveryPointTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.startWindowInput">startWindowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetVaultNameInput">targetVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.completionWindow">completionWindow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.enableContinuousBackup">enableContinuousBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.recoveryPointTags">recoveryPointTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.startWindow">startWindow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetVaultName">targetVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule">BackupPlanRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `copyAction`<sup>Required</sup> <a name="copyAction" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.copyAction"></a>

```typescript
public readonly copyAction: BackupPlanRuleCopyActionList;
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList">BackupPlanRuleCopyActionList</a>

---

##### `lifecycle`<sup>Required</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.lifecycle"></a>

```typescript
public readonly lifecycle: BackupPlanRuleLifecycleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference">BackupPlanRuleLifecycleOutputReference</a>

---

##### `completionWindowInput`<sup>Optional</sup> <a name="completionWindowInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.completionWindowInput"></a>

```typescript
public readonly completionWindowInput: number;
```

- *Type:* number

---

##### `copyActionInput`<sup>Optional</sup> <a name="copyActionInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.copyActionInput"></a>

```typescript
public readonly copyActionInput: IResolvable | BackupPlanRuleCopyAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction">BackupPlanRuleCopyAction</a>[]

---

##### `enableContinuousBackupInput`<sup>Optional</sup> <a name="enableContinuousBackupInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.enableContinuousBackupInput"></a>

```typescript
public readonly enableContinuousBackupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lifecycleInput`<sup>Optional</sup> <a name="lifecycleInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.lifecycleInput"></a>

```typescript
public readonly lifecycleInput: BackupPlanRuleLifecycle;
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a>

---

##### `recoveryPointTagsInput`<sup>Optional</sup> <a name="recoveryPointTagsInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.recoveryPointTagsInput"></a>

```typescript
public readonly recoveryPointTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `startWindowInput`<sup>Optional</sup> <a name="startWindowInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.startWindowInput"></a>

```typescript
public readonly startWindowInput: number;
```

- *Type:* number

---

##### `targetVaultNameInput`<sup>Optional</sup> <a name="targetVaultNameInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetVaultNameInput"></a>

```typescript
public readonly targetVaultNameInput: string;
```

- *Type:* string

---

##### `completionWindow`<sup>Required</sup> <a name="completionWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.completionWindow"></a>

```typescript
public readonly completionWindow: number;
```

- *Type:* number

---

##### `enableContinuousBackup`<sup>Required</sup> <a name="enableContinuousBackup" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.enableContinuousBackup"></a>

```typescript
public readonly enableContinuousBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recoveryPointTags`<sup>Required</sup> <a name="recoveryPointTags" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.recoveryPointTags"></a>

```typescript
public readonly recoveryPointTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `startWindow`<sup>Required</sup> <a name="startWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.startWindow"></a>

```typescript
public readonly startWindow: number;
```

- *Type:* number

---

##### `targetVaultName`<sup>Required</sup> <a name="targetVaultName" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetVaultName"></a>

```typescript
public readonly targetVaultName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPlanRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule">BackupPlanRule</a> | cdktf.IResolvable

---



