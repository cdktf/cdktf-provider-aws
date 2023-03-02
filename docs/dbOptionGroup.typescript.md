# `dbOptionGroup` Submodule <a name="`dbOptionGroup` Submodule" id="@cdktf/provider-aws.dbOptionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbOptionGroup <a name="DbOptionGroup" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_option_group aws_db_option_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer"></a>

```typescript
import { dbOptionGroup } from '@cdktf/provider-aws'

new dbOptionGroup.DbOptionGroup(scope: Construct, id: string, config: DbOptionGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig">DbOptionGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig">DbOptionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putOption">putOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOption">resetOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOptionGroupDescription">resetOptionGroupDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putOption` <a name="putOption" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putOption"></a>

```typescript
public putOption(value: IResolvable | DbOptionGroupOption[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putOption.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: DbOptionGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetOption` <a name="resetOption" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOption"></a>

```typescript
public resetOption(): void
```

##### `resetOptionGroupDescription` <a name="resetOptionGroupDescription" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOptionGroupDescription"></a>

```typescript
public resetOptionGroupDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isConstruct"></a>

```typescript
import { dbOptionGroup } from '@cdktf/provider-aws'

dbOptionGroup.DbOptionGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformElement"></a>

```typescript
import { dbOptionGroup } from '@cdktf/provider-aws'

dbOptionGroup.DbOptionGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformResource"></a>

```typescript
import { dbOptionGroup } from '@cdktf/provider-aws'

dbOptionGroup.DbOptionGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.option">option</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList">DbOptionGroupOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference">DbOptionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.engineNameInput">engineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.majorEngineVersionInput">majorEngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionGroupDescriptionInput">optionGroupDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionInput">optionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.engineName">engineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.majorEngineVersion">majorEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionGroupDescription">optionGroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.option"></a>

```typescript
public readonly option: DbOptionGroupOptionList;
```

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList">DbOptionGroupOptionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.timeouts"></a>

```typescript
public readonly timeouts: DbOptionGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference">DbOptionGroupTimeoutsOutputReference</a>

---

##### `engineNameInput`<sup>Optional</sup> <a name="engineNameInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.engineNameInput"></a>

```typescript
public readonly engineNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `majorEngineVersionInput`<sup>Optional</sup> <a name="majorEngineVersionInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.majorEngineVersionInput"></a>

```typescript
public readonly majorEngineVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `optionGroupDescriptionInput`<sup>Optional</sup> <a name="optionGroupDescriptionInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionGroupDescriptionInput"></a>

```typescript
public readonly optionGroupDescriptionInput: string;
```

- *Type:* string

---

##### `optionInput`<sup>Optional</sup> <a name="optionInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionInput"></a>

```typescript
public readonly optionInput: IResolvable | DbOptionGroupOption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DbOptionGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a> | cdktf.IResolvable

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.engineName"></a>

```typescript
public readonly engineName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `majorEngineVersion`<sup>Required</sup> <a name="majorEngineVersion" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.majorEngineVersion"></a>

```typescript
public readonly majorEngineVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `optionGroupDescription`<sup>Required</sup> <a name="optionGroupDescription" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionGroupDescription"></a>

```typescript
public readonly optionGroupDescription: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DbOptionGroupConfig <a name="DbOptionGroupConfig" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.Initializer"></a>

```typescript
import { dbOptionGroup } from '@cdktf/provider-aws'

const dbOptionGroupConfig: dbOptionGroup.DbOptionGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.engineName">engineName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#engine_name DbOptionGroup#engine_name}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.majorEngineVersion">majorEngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#major_engine_version DbOptionGroup#major_engine_version}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#id DbOptionGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name DbOptionGroup#name}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name_prefix DbOptionGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.option">option</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>[]</code> | option block. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.optionGroupDescription">optionGroupDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option_group_description DbOptionGroup#option_group_description}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#tags DbOptionGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#tags_all DbOptionGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.engineName"></a>

```typescript
public readonly engineName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#engine_name DbOptionGroup#engine_name}.

---

##### `majorEngineVersion`<sup>Required</sup> <a name="majorEngineVersion" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.majorEngineVersion"></a>

```typescript
public readonly majorEngineVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#major_engine_version DbOptionGroup#major_engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#id DbOptionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name DbOptionGroup#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name_prefix DbOptionGroup#name_prefix}.

---

##### `option`<sup>Optional</sup> <a name="option" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.option"></a>

```typescript
public readonly option: IResolvable | DbOptionGroupOption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>[]

option block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option DbOptionGroup#option}

---

##### `optionGroupDescription`<sup>Optional</sup> <a name="optionGroupDescription" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.optionGroupDescription"></a>

```typescript
public readonly optionGroupDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option_group_description DbOptionGroup#option_group_description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#tags DbOptionGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#tags_all DbOptionGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DbOptionGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#timeouts DbOptionGroup#timeouts}

---

### DbOptionGroupOption <a name="DbOptionGroupOption" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.Initializer"></a>

```typescript
import { dbOptionGroup } from '@cdktf/provider-aws'

const dbOptionGroupOption: dbOptionGroup.DbOptionGroupOption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.optionName">optionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option_name DbOptionGroup#option_name}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.dbSecurityGroupMemberships">dbSecurityGroupMemberships</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#db_security_group_memberships DbOptionGroup#db_security_group_memberships}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.optionSettings">optionSettings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>[]</code> | option_settings block. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#port DbOptionGroup#port}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#version DbOptionGroup#version}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.vpcSecurityGroupMemberships">vpcSecurityGroupMemberships</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#vpc_security_group_memberships DbOptionGroup#vpc_security_group_memberships}. |

---

##### `optionName`<sup>Required</sup> <a name="optionName" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.optionName"></a>

```typescript
public readonly optionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option_name DbOptionGroup#option_name}.

---

##### `dbSecurityGroupMemberships`<sup>Optional</sup> <a name="dbSecurityGroupMemberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.dbSecurityGroupMemberships"></a>

```typescript
public readonly dbSecurityGroupMemberships: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#db_security_group_memberships DbOptionGroup#db_security_group_memberships}.

---

##### `optionSettings`<sup>Optional</sup> <a name="optionSettings" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.optionSettings"></a>

```typescript
public readonly optionSettings: IResolvable | DbOptionGroupOptionOptionSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>[]

option_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option_settings DbOptionGroup#option_settings}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#port DbOptionGroup#port}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#version DbOptionGroup#version}.

---

##### `vpcSecurityGroupMemberships`<sup>Optional</sup> <a name="vpcSecurityGroupMemberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.vpcSecurityGroupMemberships"></a>

```typescript
public readonly vpcSecurityGroupMemberships: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#vpc_security_group_memberships DbOptionGroup#vpc_security_group_memberships}.

---

### DbOptionGroupOptionOptionSettings <a name="DbOptionGroupOptionOptionSettings" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings.Initializer"></a>

```typescript
import { dbOptionGroup } from '@cdktf/provider-aws'

const dbOptionGroupOptionOptionSettings: dbOptionGroup.DbOptionGroupOptionOptionSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name DbOptionGroup#name}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#value DbOptionGroup#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name DbOptionGroup#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#value DbOptionGroup#value}.

---

### DbOptionGroupTimeouts <a name="DbOptionGroupTimeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts.Initializer"></a>

```typescript
import { dbOptionGroup } from '@cdktf/provider-aws'

const dbOptionGroupTimeouts: dbOptionGroup.DbOptionGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#delete DbOptionGroup#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#delete DbOptionGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbOptionGroupOptionList <a name="DbOptionGroupOptionList" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer"></a>

```typescript
import { dbOptionGroup } from '@cdktf/provider-aws'

new dbOptionGroup.DbOptionGroupOptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.get"></a>

```typescript
public get(index: number): DbOptionGroupOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DbOptionGroupOption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>[]

---


### DbOptionGroupOptionOptionSettingsList <a name="DbOptionGroupOptionOptionSettingsList" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer"></a>

```typescript
import { dbOptionGroup } from '@cdktf/provider-aws'

new dbOptionGroup.DbOptionGroupOptionOptionSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.get"></a>

```typescript
public get(index: number): DbOptionGroupOptionOptionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DbOptionGroupOptionOptionSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>[]

---


### DbOptionGroupOptionOptionSettingsOutputReference <a name="DbOptionGroupOptionOptionSettingsOutputReference" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer"></a>

```typescript
import { dbOptionGroup } from '@cdktf/provider-aws'

new dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DbOptionGroupOptionOptionSettings | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a> | cdktf.IResolvable

---


### DbOptionGroupOptionOutputReference <a name="DbOptionGroupOptionOutputReference" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer"></a>

```typescript
import { dbOptionGroup } from '@cdktf/provider-aws'

new dbOptionGroup.DbOptionGroupOptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.putOptionSettings">putOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetDbSecurityGroupMemberships">resetDbSecurityGroupMemberships</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetOptionSettings">resetOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetVpcSecurityGroupMemberships">resetVpcSecurityGroupMemberships</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOptionSettings` <a name="putOptionSettings" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.putOptionSettings"></a>

```typescript
public putOptionSettings(value: IResolvable | DbOptionGroupOptionOptionSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.putOptionSettings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>[]

---

##### `resetDbSecurityGroupMemberships` <a name="resetDbSecurityGroupMemberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetDbSecurityGroupMemberships"></a>

```typescript
public resetDbSecurityGroupMemberships(): void
```

##### `resetOptionSettings` <a name="resetOptionSettings" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetOptionSettings"></a>

```typescript
public resetOptionSettings(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```

##### `resetVpcSecurityGroupMemberships` <a name="resetVpcSecurityGroupMemberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetVpcSecurityGroupMemberships"></a>

```typescript
public resetVpcSecurityGroupMemberships(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionSettings">optionSettings</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList">DbOptionGroupOptionOptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.dbSecurityGroupMembershipsInput">dbSecurityGroupMembershipsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionNameInput">optionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionSettingsInput">optionSettingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.vpcSecurityGroupMembershipsInput">vpcSecurityGroupMembershipsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.dbSecurityGroupMemberships">dbSecurityGroupMemberships</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionName">optionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.vpcSecurityGroupMemberships">vpcSecurityGroupMemberships</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `optionSettings`<sup>Required</sup> <a name="optionSettings" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionSettings"></a>

```typescript
public readonly optionSettings: DbOptionGroupOptionOptionSettingsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList">DbOptionGroupOptionOptionSettingsList</a>

---

##### `dbSecurityGroupMembershipsInput`<sup>Optional</sup> <a name="dbSecurityGroupMembershipsInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.dbSecurityGroupMembershipsInput"></a>

```typescript
public readonly dbSecurityGroupMembershipsInput: string[];
```

- *Type:* string[]

---

##### `optionNameInput`<sup>Optional</sup> <a name="optionNameInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionNameInput"></a>

```typescript
public readonly optionNameInput: string;
```

- *Type:* string

---

##### `optionSettingsInput`<sup>Optional</sup> <a name="optionSettingsInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionSettingsInput"></a>

```typescript
public readonly optionSettingsInput: IResolvable | DbOptionGroupOptionOptionSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>[]

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `vpcSecurityGroupMembershipsInput`<sup>Optional</sup> <a name="vpcSecurityGroupMembershipsInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.vpcSecurityGroupMembershipsInput"></a>

```typescript
public readonly vpcSecurityGroupMembershipsInput: string[];
```

- *Type:* string[]

---

##### `dbSecurityGroupMemberships`<sup>Required</sup> <a name="dbSecurityGroupMemberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.dbSecurityGroupMemberships"></a>

```typescript
public readonly dbSecurityGroupMemberships: string[];
```

- *Type:* string[]

---

##### `optionName`<sup>Required</sup> <a name="optionName" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionName"></a>

```typescript
public readonly optionName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `vpcSecurityGroupMemberships`<sup>Required</sup> <a name="vpcSecurityGroupMemberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.vpcSecurityGroupMemberships"></a>

```typescript
public readonly vpcSecurityGroupMemberships: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DbOptionGroupOption | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a> | cdktf.IResolvable

---


### DbOptionGroupTimeoutsOutputReference <a name="DbOptionGroupTimeoutsOutputReference" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { dbOptionGroup } from '@cdktf/provider-aws'

new dbOptionGroup.DbOptionGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DbOptionGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a> | cdktf.IResolvable

---



