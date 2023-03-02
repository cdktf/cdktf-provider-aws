# `kendraQuerySuggestionsBlockList` Submodule <a name="`kendraQuerySuggestionsBlockList` Submodule" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraQuerySuggestionsBlockList <a name="KendraQuerySuggestionsBlockList" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list aws_kendra_query_suggestions_block_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer"></a>

```typescript
import { kendraQuerySuggestionsBlockList } from '@cdktf/provider-aws'

new kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList(scope: Construct, id: string, config: KendraQuerySuggestionsBlockListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig">KendraQuerySuggestionsBlockListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig">KendraQuerySuggestionsBlockListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putSourceS3Path">putSourceS3Path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSourceS3Path` <a name="putSourceS3Path" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putSourceS3Path"></a>

```typescript
public putSourceS3Path(value: KendraQuerySuggestionsBlockListSourceS3Path): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putSourceS3Path.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putTimeouts"></a>

```typescript
public putTimeouts(value: KendraQuerySuggestionsBlockListTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts">KendraQuerySuggestionsBlockListTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isConstruct"></a>

```typescript
import { kendraQuerySuggestionsBlockList } from '@cdktf/provider-aws'

kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformElement"></a>

```typescript
import { kendraQuerySuggestionsBlockList } from '@cdktf/provider-aws'

kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformResource"></a>

```typescript
import { kendraQuerySuggestionsBlockList } from '@cdktf/provider-aws'

kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.querySuggestionsBlockListId">querySuggestionsBlockListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.sourceS3Path">sourceS3Path</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference">KendraQuerySuggestionsBlockListSourceS3PathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference">KendraQuerySuggestionsBlockListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.indexIdInput">indexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.sourceS3PathInput">sourceS3PathInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts">KendraQuerySuggestionsBlockListTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.indexId">indexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `querySuggestionsBlockListId`<sup>Required</sup> <a name="querySuggestionsBlockListId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.querySuggestionsBlockListId"></a>

```typescript
public readonly querySuggestionsBlockListId: string;
```

- *Type:* string

---

##### `sourceS3Path`<sup>Required</sup> <a name="sourceS3Path" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.sourceS3Path"></a>

```typescript
public readonly sourceS3Path: KendraQuerySuggestionsBlockListSourceS3PathOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference">KendraQuerySuggestionsBlockListSourceS3PathOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.timeouts"></a>

```typescript
public readonly timeouts: KendraQuerySuggestionsBlockListTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference">KendraQuerySuggestionsBlockListTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexIdInput`<sup>Optional</sup> <a name="indexIdInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.indexIdInput"></a>

```typescript
public readonly indexIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `sourceS3PathInput`<sup>Optional</sup> <a name="sourceS3PathInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.sourceS3PathInput"></a>

```typescript
public readonly sourceS3PathInput: KendraQuerySuggestionsBlockListSourceS3Path;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: KendraQuerySuggestionsBlockListTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts">KendraQuerySuggestionsBlockListTimeouts</a> | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KendraQuerySuggestionsBlockListConfig <a name="KendraQuerySuggestionsBlockListConfig" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.Initializer"></a>

```typescript
import { kendraQuerySuggestionsBlockList } from '@cdktf/provider-aws'

const kendraQuerySuggestionsBlockListConfig: kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.indexId">indexId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#index_id KendraQuerySuggestionsBlockList#index_id}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#name KendraQuerySuggestionsBlockList#name}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#role_arn KendraQuerySuggestionsBlockList#role_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.sourceS3Path">sourceS3Path</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a></code> | source_s3_path block. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#description KendraQuerySuggestionsBlockList#description}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#id KendraQuerySuggestionsBlockList#id}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#tags KendraQuerySuggestionsBlockList#tags}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#tags_all KendraQuerySuggestionsBlockList#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts">KendraQuerySuggestionsBlockListTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#index_id KendraQuerySuggestionsBlockList#index_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#name KendraQuerySuggestionsBlockList#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#role_arn KendraQuerySuggestionsBlockList#role_arn}.

---

##### `sourceS3Path`<sup>Required</sup> <a name="sourceS3Path" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.sourceS3Path"></a>

```typescript
public readonly sourceS3Path: KendraQuerySuggestionsBlockListSourceS3Path;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a>

source_s3_path block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#source_s3_path KendraQuerySuggestionsBlockList#source_s3_path}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#description KendraQuerySuggestionsBlockList#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#id KendraQuerySuggestionsBlockList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#tags KendraQuerySuggestionsBlockList#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#tags_all KendraQuerySuggestionsBlockList#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KendraQuerySuggestionsBlockListTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts">KendraQuerySuggestionsBlockListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#timeouts KendraQuerySuggestionsBlockList#timeouts}

---

### KendraQuerySuggestionsBlockListSourceS3Path <a name="KendraQuerySuggestionsBlockListSourceS3Path" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.Initializer"></a>

```typescript
import { kendraQuerySuggestionsBlockList } from '@cdktf/provider-aws'

const kendraQuerySuggestionsBlockListSourceS3Path: kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#bucket KendraQuerySuggestionsBlockList#bucket}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#key KendraQuerySuggestionsBlockList#key}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#bucket KendraQuerySuggestionsBlockList#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#key KendraQuerySuggestionsBlockList#key}.

---

### KendraQuerySuggestionsBlockListTimeouts <a name="KendraQuerySuggestionsBlockListTimeouts" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.Initializer"></a>

```typescript
import { kendraQuerySuggestionsBlockList } from '@cdktf/provider-aws'

const kendraQuerySuggestionsBlockListTimeouts: kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#create KendraQuerySuggestionsBlockList#create}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#delete KendraQuerySuggestionsBlockList#delete}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#update KendraQuerySuggestionsBlockList#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#create KendraQuerySuggestionsBlockList#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#delete KendraQuerySuggestionsBlockList#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#update KendraQuerySuggestionsBlockList#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KendraQuerySuggestionsBlockListSourceS3PathOutputReference <a name="KendraQuerySuggestionsBlockListSourceS3PathOutputReference" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer"></a>

```typescript
import { kendraQuerySuggestionsBlockList } from '@cdktf/provider-aws'

new kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraQuerySuggestionsBlockListSourceS3Path;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a>

---


### KendraQuerySuggestionsBlockListTimeoutsOutputReference <a name="KendraQuerySuggestionsBlockListTimeoutsOutputReference" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.Initializer"></a>

```typescript
import { kendraQuerySuggestionsBlockList } from '@cdktf/provider-aws'

new kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts">KendraQuerySuggestionsBlockListTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraQuerySuggestionsBlockListTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts">KendraQuerySuggestionsBlockListTimeouts</a> | cdktf.IResolvable

---



