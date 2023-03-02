# `ec2ManagedPrefixList` Submodule <a name="`ec2ManagedPrefixList` Submodule" id="@cdktf/provider-aws.ec2ManagedPrefixList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ManagedPrefixList <a name="Ec2ManagedPrefixList" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list aws_ec2_managed_prefix_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer"></a>

```typescript
import { ec2ManagedPrefixList } from '@cdktf/provider-aws'

new ec2ManagedPrefixList.Ec2ManagedPrefixList(scope: Construct, id: string, config: Ec2ManagedPrefixListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig">Ec2ManagedPrefixListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig">Ec2ManagedPrefixListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.putEntry">putEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetEntry">resetEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEntry` <a name="putEntry" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.putEntry"></a>

```typescript
public putEntry(value: IResolvable | Ec2ManagedPrefixListEntry[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.putEntry.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>[]

---

##### `resetEntry` <a name="resetEntry" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetEntry"></a>

```typescript
public resetEntry(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isConstruct"></a>

```typescript
import { ec2ManagedPrefixList } from '@cdktf/provider-aws'

ec2ManagedPrefixList.Ec2ManagedPrefixList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformElement"></a>

```typescript
import { ec2ManagedPrefixList } from '@cdktf/provider-aws'

ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformResource"></a>

```typescript
import { ec2ManagedPrefixList } from '@cdktf/provider-aws'

ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.entry">entry</a></code> | <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList">Ec2ManagedPrefixListEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.addressFamilyInput">addressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.entryInput">entryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.maxEntriesInput">maxEntriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.addressFamily">addressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.maxEntries">maxEntries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.entry"></a>

```typescript
public readonly entry: Ec2ManagedPrefixListEntryList;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList">Ec2ManagedPrefixListEntryList</a>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.addressFamilyInput"></a>

```typescript
public readonly addressFamilyInput: string;
```

- *Type:* string

---

##### `entryInput`<sup>Optional</sup> <a name="entryInput" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.entryInput"></a>

```typescript
public readonly entryInput: IResolvable | Ec2ManagedPrefixListEntry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxEntriesInput`<sup>Optional</sup> <a name="maxEntriesInput" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.maxEntriesInput"></a>

```typescript
public readonly maxEntriesInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxEntries`<sup>Required</sup> <a name="maxEntries" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.maxEntries"></a>

```typescript
public readonly maxEntries: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ManagedPrefixListConfig <a name="Ec2ManagedPrefixListConfig" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.Initializer"></a>

```typescript
import { ec2ManagedPrefixList } from '@cdktf/provider-aws'

const ec2ManagedPrefixListConfig: ec2ManagedPrefixList.Ec2ManagedPrefixListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.addressFamily">addressFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#address_family Ec2ManagedPrefixList#address_family}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.maxEntries">maxEntries</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#max_entries Ec2ManagedPrefixList#max_entries}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#name Ec2ManagedPrefixList#name}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.entry">entry</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>[]</code> | entry block. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#id Ec2ManagedPrefixList#id}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#tags Ec2ManagedPrefixList#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#tags_all Ec2ManagedPrefixList#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#address_family Ec2ManagedPrefixList#address_family}.

---

##### `maxEntries`<sup>Required</sup> <a name="maxEntries" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.maxEntries"></a>

```typescript
public readonly maxEntries: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#max_entries Ec2ManagedPrefixList#max_entries}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#name Ec2ManagedPrefixList#name}.

---

##### `entry`<sup>Optional</sup> <a name="entry" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.entry"></a>

```typescript
public readonly entry: IResolvable | Ec2ManagedPrefixListEntry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>[]

entry block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#entry Ec2ManagedPrefixList#entry}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#id Ec2ManagedPrefixList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#tags Ec2ManagedPrefixList#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#tags_all Ec2ManagedPrefixList#tags_all}.

---

### Ec2ManagedPrefixListEntry <a name="Ec2ManagedPrefixListEntry" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry.Initializer"></a>

```typescript
import { ec2ManagedPrefixList } from '@cdktf/provider-aws'

const ec2ManagedPrefixListEntry: ec2ManagedPrefixList.Ec2ManagedPrefixListEntry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#cidr Ec2ManagedPrefixList#cidr}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#description Ec2ManagedPrefixList#description}. |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#cidr Ec2ManagedPrefixList#cidr}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#description Ec2ManagedPrefixList#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2ManagedPrefixListEntryList <a name="Ec2ManagedPrefixListEntryList" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer"></a>

```typescript
import { ec2ManagedPrefixList } from '@cdktf/provider-aws'

new ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.get"></a>

```typescript
public get(index: number): Ec2ManagedPrefixListEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ManagedPrefixListEntry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>[]

---


### Ec2ManagedPrefixListEntryOutputReference <a name="Ec2ManagedPrefixListEntryOutputReference" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer"></a>

```typescript
import { ec2ManagedPrefixList } from '@cdktf/provider-aws'

new ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2ManagedPrefixListEntry | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a> | cdktf.IResolvable

---



