# `dataAwsRedshiftOrderableCluster` Submodule <a name="`dataAwsRedshiftOrderableCluster` Submodule" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRedshiftOrderableCluster <a name="DataAwsRedshiftOrderableCluster" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster aws_redshift_orderable_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer"></a>

```typescript
import { dataAwsRedshiftOrderableCluster } from '@cdktf/provider-aws'

new dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster(scope: Construct, id: string, config?: DataAwsRedshiftOrderableClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig">DataAwsRedshiftOrderableClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig">DataAwsRedshiftOrderableClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetClusterType">resetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetClusterVersion">resetClusterVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetNodeType">resetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetPreferredNodeTypes">resetPreferredNodeTypes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetClusterType` <a name="resetClusterType" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetClusterType"></a>

```typescript
public resetClusterType(): void
```

##### `resetClusterVersion` <a name="resetClusterVersion" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetClusterVersion"></a>

```typescript
public resetClusterVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNodeType` <a name="resetNodeType" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetNodeType"></a>

```typescript
public resetNodeType(): void
```

##### `resetPreferredNodeTypes` <a name="resetPreferredNodeTypes" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetPreferredNodeTypes"></a>

```typescript
public resetPreferredNodeTypes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isConstruct"></a>

```typescript
import { dataAwsRedshiftOrderableCluster } from '@cdktf/provider-aws'

dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformElement"></a>

```typescript
import { dataAwsRedshiftOrderableCluster } from '@cdktf/provider-aws'

dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformDataSource"></a>

```typescript
import { dataAwsRedshiftOrderableCluster } from '@cdktf/provider-aws'

dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterTypeInput">clusterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterVersionInput">clusterVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.nodeTypeInput">nodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.preferredNodeTypesInput">preferredNodeTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterType">clusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.preferredNodeTypes">preferredNodeTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `clusterTypeInput`<sup>Optional</sup> <a name="clusterTypeInput" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterTypeInput"></a>

```typescript
public readonly clusterTypeInput: string;
```

- *Type:* string

---

##### `clusterVersionInput`<sup>Optional</sup> <a name="clusterVersionInput" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterVersionInput"></a>

```typescript
public readonly clusterVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.nodeTypeInput"></a>

```typescript
public readonly nodeTypeInput: string;
```

- *Type:* string

---

##### `preferredNodeTypesInput`<sup>Optional</sup> <a name="preferredNodeTypesInput" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.preferredNodeTypesInput"></a>

```typescript
public readonly preferredNodeTypesInput: string[];
```

- *Type:* string[]

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `preferredNodeTypes`<sup>Required</sup> <a name="preferredNodeTypes" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.preferredNodeTypes"></a>

```typescript
public readonly preferredNodeTypes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRedshiftOrderableClusterConfig <a name="DataAwsRedshiftOrderableClusterConfig" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.Initializer"></a>

```typescript
import { dataAwsRedshiftOrderableCluster } from '@cdktf/provider-aws'

const dataAwsRedshiftOrderableClusterConfig: dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.clusterType">clusterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#cluster_type DataAwsRedshiftOrderableCluster#cluster_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#cluster_version DataAwsRedshiftOrderableCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#id DataAwsRedshiftOrderableCluster#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.nodeType">nodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#node_type DataAwsRedshiftOrderableCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.preferredNodeTypes">preferredNodeTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#preferred_node_types DataAwsRedshiftOrderableCluster#preferred_node_types}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#cluster_type DataAwsRedshiftOrderableCluster#cluster_type}.

---

##### `clusterVersion`<sup>Optional</sup> <a name="clusterVersion" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#cluster_version DataAwsRedshiftOrderableCluster#cluster_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#id DataAwsRedshiftOrderableCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#node_type DataAwsRedshiftOrderableCluster#node_type}.

---

##### `preferredNodeTypes`<sup>Optional</sup> <a name="preferredNodeTypes" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.preferredNodeTypes"></a>

```typescript
public readonly preferredNodeTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#preferred_node_types DataAwsRedshiftOrderableCluster#preferred_node_types}.

---



