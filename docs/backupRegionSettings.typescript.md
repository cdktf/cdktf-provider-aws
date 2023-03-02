# `backupRegionSettings` Submodule <a name="`backupRegionSettings` Submodule" id="@cdktf/provider-aws.backupRegionSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupRegionSettings <a name="BackupRegionSettings" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings aws_backup_region_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.Initializer"></a>

```typescript
import { backupRegionSettings } from '@cdktf/provider-aws'

new backupRegionSettings.BackupRegionSettings(scope: Construct, id: string, config: BackupRegionSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig">BackupRegionSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig">BackupRegionSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.resetResourceTypeManagementPreference">resetResourceTypeManagementPreference</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceTypeManagementPreference` <a name="resetResourceTypeManagementPreference" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.resetResourceTypeManagementPreference"></a>

```typescript
public resetResourceTypeManagementPreference(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.isConstruct"></a>

```typescript
import { backupRegionSettings } from '@cdktf/provider-aws'

backupRegionSettings.BackupRegionSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.isTerraformElement"></a>

```typescript
import { backupRegionSettings } from '@cdktf/provider-aws'

backupRegionSettings.BackupRegionSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.isTerraformResource"></a>

```typescript
import { backupRegionSettings } from '@cdktf/provider-aws'

backupRegionSettings.BackupRegionSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.resourceTypeManagementPreferenceInput">resourceTypeManagementPreferenceInput</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.resourceTypeOptInPreferenceInput">resourceTypeOptInPreferenceInput</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.resourceTypeManagementPreference">resourceTypeManagementPreference</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.resourceTypeOptInPreference">resourceTypeOptInPreference</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTypeManagementPreferenceInput`<sup>Optional</sup> <a name="resourceTypeManagementPreferenceInput" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.resourceTypeManagementPreferenceInput"></a>

```typescript
public readonly resourceTypeManagementPreferenceInput: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

---

##### `resourceTypeOptInPreferenceInput`<sup>Optional</sup> <a name="resourceTypeOptInPreferenceInput" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.resourceTypeOptInPreferenceInput"></a>

```typescript
public readonly resourceTypeOptInPreferenceInput: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceTypeManagementPreference`<sup>Required</sup> <a name="resourceTypeManagementPreference" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.resourceTypeManagementPreference"></a>

```typescript
public readonly resourceTypeManagementPreference: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

---

##### `resourceTypeOptInPreference`<sup>Required</sup> <a name="resourceTypeOptInPreference" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.resourceTypeOptInPreference"></a>

```typescript
public readonly resourceTypeOptInPreference: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupRegionSettingsConfig <a name="BackupRegionSettingsConfig" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.Initializer"></a>

```typescript
import { backupRegionSettings } from '@cdktf/provider-aws'

const backupRegionSettingsConfig: backupRegionSettings.BackupRegionSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.property.resourceTypeOptInPreference">resourceTypeOptInPreference</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings#resource_type_opt_in_preference BackupRegionSettings#resource_type_opt_in_preference}. |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings#id BackupRegionSettings#id}. |
| <code><a href="#@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.property.resourceTypeManagementPreference">resourceTypeManagementPreference</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings#resource_type_management_preference BackupRegionSettings#resource_type_management_preference}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceTypeOptInPreference`<sup>Required</sup> <a name="resourceTypeOptInPreference" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.property.resourceTypeOptInPreference"></a>

```typescript
public readonly resourceTypeOptInPreference: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings#resource_type_opt_in_preference BackupRegionSettings#resource_type_opt_in_preference}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings#id BackupRegionSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeManagementPreference`<sup>Optional</sup> <a name="resourceTypeManagementPreference" id="@cdktf/provider-aws.backupRegionSettings.BackupRegionSettingsConfig.property.resourceTypeManagementPreference"></a>

```typescript
public readonly resourceTypeManagementPreference: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings#resource_type_management_preference BackupRegionSettings#resource_type_management_preference}.

---



