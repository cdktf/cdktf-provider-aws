# `dataAwsEc2ManagedPrefixLists` Submodule <a name="`dataAwsEc2ManagedPrefixLists` Submodule" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2ManagedPrefixLists <a name="DataAwsEc2ManagedPrefixLists" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_lists aws_ec2_managed_prefix_lists}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.Initializer"></a>

```typescript
import { dataAwsEc2ManagedPrefixLists } from '@cdktf/provider-aws'

new dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists(scope: Construct, id: string, config?: DataAwsEc2ManagedPrefixListsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig">DataAwsEc2ManagedPrefixListsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig">DataAwsEc2ManagedPrefixListsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsEc2ManagedPrefixListsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilter">DataAwsEc2ManagedPrefixListsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.isConstruct"></a>

```typescript
import { dataAwsEc2ManagedPrefixLists } from '@cdktf/provider-aws'

dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.isTerraformElement"></a>

```typescript
import { dataAwsEc2ManagedPrefixLists } from '@cdktf/provider-aws'

dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.isTerraformDataSource"></a>

```typescript
import { dataAwsEc2ManagedPrefixLists } from '@cdktf/provider-aws'

dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList">DataAwsEc2ManagedPrefixListsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilter">DataAwsEc2ManagedPrefixListsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.filter"></a>

```typescript
public readonly filter: DataAwsEc2ManagedPrefixListsFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList">DataAwsEc2ManagedPrefixListsFilterList</a>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsEc2ManagedPrefixListsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilter">DataAwsEc2ManagedPrefixListsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixLists.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2ManagedPrefixListsConfig <a name="DataAwsEc2ManagedPrefixListsConfig" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.Initializer"></a>

```typescript
import { dataAwsEc2ManagedPrefixLists } from '@cdktf/provider-aws'

const dataAwsEc2ManagedPrefixListsConfig: dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilter">DataAwsEc2ManagedPrefixListsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_lists#id DataAwsEc2ManagedPrefixLists#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_lists#tags DataAwsEc2ManagedPrefixLists#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsEc2ManagedPrefixListsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilter">DataAwsEc2ManagedPrefixListsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_lists#filter DataAwsEc2ManagedPrefixLists#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_lists#id DataAwsEc2ManagedPrefixLists#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_lists#tags DataAwsEc2ManagedPrefixLists#tags}.

---

### DataAwsEc2ManagedPrefixListsFilter <a name="DataAwsEc2ManagedPrefixListsFilter" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilter.Initializer"></a>

```typescript
import { dataAwsEc2ManagedPrefixLists } from '@cdktf/provider-aws'

const dataAwsEc2ManagedPrefixListsFilter: dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_lists#name DataAwsEc2ManagedPrefixLists#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_lists#values DataAwsEc2ManagedPrefixLists#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_lists#name DataAwsEc2ManagedPrefixLists#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_lists#values DataAwsEc2ManagedPrefixLists#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2ManagedPrefixListsFilterList <a name="DataAwsEc2ManagedPrefixListsFilterList" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.Initializer"></a>

```typescript
import { dataAwsEc2ManagedPrefixLists } from '@cdktf/provider-aws'

new dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.get"></a>

```typescript
public get(index: number): DataAwsEc2ManagedPrefixListsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilter">DataAwsEc2ManagedPrefixListsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEc2ManagedPrefixListsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilter">DataAwsEc2ManagedPrefixListsFilter</a>[]

---


### DataAwsEc2ManagedPrefixListsFilterOutputReference <a name="DataAwsEc2ManagedPrefixListsFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2ManagedPrefixLists } from '@cdktf/provider-aws'

new dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilter">DataAwsEc2ManagedPrefixListsFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2ManagedPrefixListsFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixLists.DataAwsEc2ManagedPrefixListsFilter">DataAwsEc2ManagedPrefixListsFilter</a> | cdktf.IResolvable

---



