# `data_aws_ec2_public_ipv4_pools`

Refer to the Terraform Registory for docs: [`data_aws_ec2_public_ipv4_pools`](https://registry.terraform.io/providers/hashicorp/aws/4.63.0/docs/data-sources/ec2_public_ipv4_pools).

# `dataAwsEc2PublicIpv4Pools` Submodule <a name="`dataAwsEc2PublicIpv4Pools` Submodule" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2PublicIpv4Pools <a name="DataAwsEc2PublicIpv4Pools" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.63.0/docs/data-sources/ec2_public_ipv4_pools aws_ec2_public_ipv4_pools}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer"></a>

```typescript
import { dataAwsEc2PublicIpv4Pools } from '@cdktf/provider-aws'

new dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools(scope: Construct, id: string, config?: DataAwsEc2PublicIpv4PoolsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig">DataAwsEc2PublicIpv4PoolsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig">DataAwsEc2PublicIpv4PoolsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsEc2PublicIpv4PoolsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isConstruct"></a>

```typescript
import { dataAwsEc2PublicIpv4Pools } from '@cdktf/provider-aws'

dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isTerraformElement"></a>

```typescript
import { dataAwsEc2PublicIpv4Pools } from '@cdktf/provider-aws'

dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isTerraformDataSource"></a>

```typescript
import { dataAwsEc2PublicIpv4Pools } from '@cdktf/provider-aws'

dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList">DataAwsEc2PublicIpv4PoolsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.poolIds">poolIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.filter"></a>

```typescript
public readonly filter: DataAwsEc2PublicIpv4PoolsFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList">DataAwsEc2PublicIpv4PoolsFilterList</a>

---

##### `poolIds`<sup>Required</sup> <a name="poolIds" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.poolIds"></a>

```typescript
public readonly poolIds: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsEc2PublicIpv4PoolsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2PublicIpv4PoolsConfig <a name="DataAwsEc2PublicIpv4PoolsConfig" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.Initializer"></a>

```typescript
import { dataAwsEc2PublicIpv4Pools } from '@cdktf/provider-aws'

const dataAwsEc2PublicIpv4PoolsConfig: dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.63.0/docs/data-sources/ec2_public_ipv4_pools#id DataAwsEc2PublicIpv4Pools#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.63.0/docs/data-sources/ec2_public_ipv4_pools#tags DataAwsEc2PublicIpv4Pools#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsEc2PublicIpv4PoolsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.63.0/docs/data-sources/ec2_public_ipv4_pools#filter DataAwsEc2PublicIpv4Pools#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.63.0/docs/data-sources/ec2_public_ipv4_pools#id DataAwsEc2PublicIpv4Pools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.63.0/docs/data-sources/ec2_public_ipv4_pools#tags DataAwsEc2PublicIpv4Pools#tags}.

---

### DataAwsEc2PublicIpv4PoolsFilter <a name="DataAwsEc2PublicIpv4PoolsFilter" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter.Initializer"></a>

```typescript
import { dataAwsEc2PublicIpv4Pools } from '@cdktf/provider-aws'

const dataAwsEc2PublicIpv4PoolsFilter: dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.63.0/docs/data-sources/ec2_public_ipv4_pools#name DataAwsEc2PublicIpv4Pools#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.63.0/docs/data-sources/ec2_public_ipv4_pools#values DataAwsEc2PublicIpv4Pools#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.63.0/docs/data-sources/ec2_public_ipv4_pools#name DataAwsEc2PublicIpv4Pools#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.63.0/docs/data-sources/ec2_public_ipv4_pools#values DataAwsEc2PublicIpv4Pools#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2PublicIpv4PoolsFilterList <a name="DataAwsEc2PublicIpv4PoolsFilterList" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer"></a>

```typescript
import { dataAwsEc2PublicIpv4Pools } from '@cdktf/provider-aws'

new dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.get"></a>

```typescript
public get(index: number): DataAwsEc2PublicIpv4PoolsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEc2PublicIpv4PoolsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>[]

---


### DataAwsEc2PublicIpv4PoolsFilterOutputReference <a name="DataAwsEc2PublicIpv4PoolsFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2PublicIpv4Pools } from '@cdktf/provider-aws'

new dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2PublicIpv4PoolsFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a> | cdktf.IResolvable

---



