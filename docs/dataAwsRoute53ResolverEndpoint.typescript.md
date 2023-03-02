# `dataAwsRoute53ResolverEndpoint` Submodule <a name="`dataAwsRoute53ResolverEndpoint` Submodule" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverEndpoint <a name="DataAwsRoute53ResolverEndpoint" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint aws_route53_resolver_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer"></a>

```typescript
import { dataAwsRoute53ResolverEndpoint } from '@cdktf/provider-aws'

new dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint(scope: Construct, id: string, config?: DataAwsRoute53ResolverEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig">DataAwsRoute53ResolverEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig">DataAwsRoute53ResolverEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.resetResolverEndpointId">resetResolverEndpointId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsRoute53ResolverEndpointFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter">DataAwsRoute53ResolverEndpointFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResolverEndpointId` <a name="resetResolverEndpointId" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.resetResolverEndpointId"></a>

```typescript
public resetResolverEndpointId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isConstruct"></a>

```typescript
import { dataAwsRoute53ResolverEndpoint } from '@cdktf/provider-aws'

dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isTerraformElement"></a>

```typescript
import { dataAwsRoute53ResolverEndpoint } from '@cdktf/provider-aws'

dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isTerraformDataSource"></a>

```typescript
import { dataAwsRoute53ResolverEndpoint } from '@cdktf/provider-aws'

dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList">DataAwsRoute53ResolverEndpointFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter">DataAwsRoute53ResolverEndpointFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.resolverEndpointIdInput">resolverEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.resolverEndpointId">resolverEndpointId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.filter"></a>

```typescript
public readonly filter: DataAwsRoute53ResolverEndpointFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList">DataAwsRoute53ResolverEndpointFilterList</a>

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsRoute53ResolverEndpointFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter">DataAwsRoute53ResolverEndpointFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resolverEndpointIdInput`<sup>Optional</sup> <a name="resolverEndpointIdInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.resolverEndpointIdInput"></a>

```typescript
public readonly resolverEndpointIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resolverEndpointId`<sup>Required</sup> <a name="resolverEndpointId" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.resolverEndpointId"></a>

```typescript
public readonly resolverEndpointId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverEndpointConfig <a name="DataAwsRoute53ResolverEndpointConfig" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.Initializer"></a>

```typescript
import { dataAwsRoute53ResolverEndpoint } from '@cdktf/provider-aws'

const dataAwsRoute53ResolverEndpointConfig: dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter">DataAwsRoute53ResolverEndpointFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#id DataAwsRoute53ResolverEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.resolverEndpointId">resolverEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#resolver_endpoint_id DataAwsRoute53ResolverEndpoint#resolver_endpoint_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsRoute53ResolverEndpointFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter">DataAwsRoute53ResolverEndpointFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#filter DataAwsRoute53ResolverEndpoint#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#id DataAwsRoute53ResolverEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resolverEndpointId`<sup>Optional</sup> <a name="resolverEndpointId" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.resolverEndpointId"></a>

```typescript
public readonly resolverEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#resolver_endpoint_id DataAwsRoute53ResolverEndpoint#resolver_endpoint_id}.

---

### DataAwsRoute53ResolverEndpointFilter <a name="DataAwsRoute53ResolverEndpointFilter" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter.Initializer"></a>

```typescript
import { dataAwsRoute53ResolverEndpoint } from '@cdktf/provider-aws'

const dataAwsRoute53ResolverEndpointFilter: dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#name DataAwsRoute53ResolverEndpoint#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#values DataAwsRoute53ResolverEndpoint#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#name DataAwsRoute53ResolverEndpoint#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#values DataAwsRoute53ResolverEndpoint#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsRoute53ResolverEndpointFilterList <a name="DataAwsRoute53ResolverEndpointFilterList" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.Initializer"></a>

```typescript
import { dataAwsRoute53ResolverEndpoint } from '@cdktf/provider-aws'

new dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.get"></a>

```typescript
public get(index: number): DataAwsRoute53ResolverEndpointFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter">DataAwsRoute53ResolverEndpointFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsRoute53ResolverEndpointFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter">DataAwsRoute53ResolverEndpointFilter</a>[]

---


### DataAwsRoute53ResolverEndpointFilterOutputReference <a name="DataAwsRoute53ResolverEndpointFilterOutputReference" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsRoute53ResolverEndpoint } from '@cdktf/provider-aws'

new dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter">DataAwsRoute53ResolverEndpointFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsRoute53ResolverEndpointFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter">DataAwsRoute53ResolverEndpointFilter</a> | cdktf.IResolvable

---



