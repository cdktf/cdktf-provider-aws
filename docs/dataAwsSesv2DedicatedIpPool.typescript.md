# `dataAwsSesv2DedicatedIpPool` Submodule <a name="`dataAwsSesv2DedicatedIpPool` Submodule" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSesv2DedicatedIpPool <a name="DataAwsSesv2DedicatedIpPool" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool aws_sesv2_dedicated_ip_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer"></a>

```typescript
import { dataAwsSesv2DedicatedIpPool } from '@cdktf/provider-aws'

new dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool(scope: Construct, id: string, config: DataAwsSesv2DedicatedIpPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig">DataAwsSesv2DedicatedIpPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig">DataAwsSesv2DedicatedIpPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isConstruct"></a>

```typescript
import { dataAwsSesv2DedicatedIpPool } from '@cdktf/provider-aws'

dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isTerraformElement"></a>

```typescript
import { dataAwsSesv2DedicatedIpPool } from '@cdktf/provider-aws'

dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isTerraformDataSource"></a>

```typescript
import { dataAwsSesv2DedicatedIpPool } from '@cdktf/provider-aws'

dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.dedicatedIps">dedicatedIps</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList">DataAwsSesv2DedicatedIpPoolDedicatedIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.scalingMode">scalingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.poolNameInput">poolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.poolName">poolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dedicatedIps`<sup>Required</sup> <a name="dedicatedIps" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.dedicatedIps"></a>

```typescript
public readonly dedicatedIps: DataAwsSesv2DedicatedIpPoolDedicatedIpsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList">DataAwsSesv2DedicatedIpPoolDedicatedIpsList</a>

---

##### `scalingMode`<sup>Required</sup> <a name="scalingMode" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.scalingMode"></a>

```typescript
public readonly scalingMode: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `poolNameInput`<sup>Optional</sup> <a name="poolNameInput" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.poolNameInput"></a>

```typescript
public readonly poolNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.poolName"></a>

```typescript
public readonly poolName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSesv2DedicatedIpPoolConfig <a name="DataAwsSesv2DedicatedIpPoolConfig" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.Initializer"></a>

```typescript
import { dataAwsSesv2DedicatedIpPool } from '@cdktf/provider-aws'

const dataAwsSesv2DedicatedIpPoolConfig: dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.poolName">poolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#pool_name DataAwsSesv2DedicatedIpPool#pool_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#id DataAwsSesv2DedicatedIpPool#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#tags DataAwsSesv2DedicatedIpPool#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.poolName"></a>

```typescript
public readonly poolName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#pool_name DataAwsSesv2DedicatedIpPool#pool_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#id DataAwsSesv2DedicatedIpPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#tags DataAwsSesv2DedicatedIpPool#tags}.

---

### DataAwsSesv2DedicatedIpPoolDedicatedIps <a name="DataAwsSesv2DedicatedIpPoolDedicatedIps" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIps.Initializer"></a>

```typescript
import { dataAwsSesv2DedicatedIpPool } from '@cdktf/provider-aws'

const dataAwsSesv2DedicatedIpPoolDedicatedIps: dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIps = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSesv2DedicatedIpPoolDedicatedIpsList <a name="DataAwsSesv2DedicatedIpPoolDedicatedIpsList" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer"></a>

```typescript
import { dataAwsSesv2DedicatedIpPool } from '@cdktf/provider-aws'

new dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.get"></a>

```typescript
public get(index: number): DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference <a name="DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer"></a>

```typescript
import { dataAwsSesv2DedicatedIpPool } from '@cdktf/provider-aws'

new dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.warmupPercentage">warmupPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.warmupStatus">warmupStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIps">DataAwsSesv2DedicatedIpPoolDedicatedIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `warmupPercentage`<sup>Required</sup> <a name="warmupPercentage" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.warmupPercentage"></a>

```typescript
public readonly warmupPercentage: number;
```

- *Type:* number

---

##### `warmupStatus`<sup>Required</sup> <a name="warmupStatus" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.warmupStatus"></a>

```typescript
public readonly warmupStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSesv2DedicatedIpPoolDedicatedIps;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIps">DataAwsSesv2DedicatedIpPoolDedicatedIps</a>

---



