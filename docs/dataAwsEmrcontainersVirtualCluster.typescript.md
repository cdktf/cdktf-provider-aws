# `dataAwsEmrcontainersVirtualCluster` Submodule <a name="`dataAwsEmrcontainersVirtualCluster` Submodule" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEmrcontainersVirtualCluster <a name="DataAwsEmrcontainersVirtualCluster" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster aws_emrcontainers_virtual_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer"></a>

```typescript
import { dataAwsEmrcontainersVirtualCluster } from '@cdktf/provider-aws'

new dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster(scope: Construct, id: string, config: DataAwsEmrcontainersVirtualClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig">DataAwsEmrcontainersVirtualClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig">DataAwsEmrcontainersVirtualClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isConstruct"></a>

```typescript
import { dataAwsEmrcontainersVirtualCluster } from '@cdktf/provider-aws'

dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isTerraformElement"></a>

```typescript
import { dataAwsEmrcontainersVirtualCluster } from '@cdktf/provider-aws'

dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isTerraformDataSource"></a>

```typescript
import { dataAwsEmrcontainersVirtualCluster } from '@cdktf/provider-aws'

dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.containerProvider">containerProvider</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList">DataAwsEmrcontainersVirtualClusterContainerProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.virtualClusterIdInput">virtualClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.virtualClusterId">virtualClusterId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `containerProvider`<sup>Required</sup> <a name="containerProvider" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.containerProvider"></a>

```typescript
public readonly containerProvider: DataAwsEmrcontainersVirtualClusterContainerProviderList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList">DataAwsEmrcontainersVirtualClusterContainerProviderList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualClusterIdInput`<sup>Optional</sup> <a name="virtualClusterIdInput" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.virtualClusterIdInput"></a>

```typescript
public readonly virtualClusterIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualClusterId`<sup>Required</sup> <a name="virtualClusterId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.virtualClusterId"></a>

```typescript
public readonly virtualClusterId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEmrcontainersVirtualClusterConfig <a name="DataAwsEmrcontainersVirtualClusterConfig" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.Initializer"></a>

```typescript
import { dataAwsEmrcontainersVirtualCluster } from '@cdktf/provider-aws'

const dataAwsEmrcontainersVirtualClusterConfig: dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.virtualClusterId">virtualClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster#virtual_cluster_id DataAwsEmrcontainersVirtualCluster#virtual_cluster_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster#id DataAwsEmrcontainersVirtualCluster#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster#tags DataAwsEmrcontainersVirtualCluster#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `virtualClusterId`<sup>Required</sup> <a name="virtualClusterId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.virtualClusterId"></a>

```typescript
public readonly virtualClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster#virtual_cluster_id DataAwsEmrcontainersVirtualCluster#virtual_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster#id DataAwsEmrcontainersVirtualCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster#tags DataAwsEmrcontainersVirtualCluster#tags}.

---

### DataAwsEmrcontainersVirtualClusterContainerProvider <a name="DataAwsEmrcontainersVirtualClusterContainerProvider" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProvider.Initializer"></a>

```typescript
import { dataAwsEmrcontainersVirtualCluster } from '@cdktf/provider-aws'

const dataAwsEmrcontainersVirtualClusterContainerProvider: dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProvider = { ... }
```


### DataAwsEmrcontainersVirtualClusterContainerProviderInfo <a name="DataAwsEmrcontainersVirtualClusterContainerProviderInfo" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfo.Initializer"></a>

```typescript
import { dataAwsEmrcontainersVirtualCluster } from '@cdktf/provider-aws'

const dataAwsEmrcontainersVirtualClusterContainerProviderInfo: dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfo = { ... }
```


### DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo <a name="DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo.Initializer"></a>

```typescript
import { dataAwsEmrcontainersVirtualCluster } from '@cdktf/provider-aws'

const dataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo: dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList <a name="DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer"></a>

```typescript
import { dataAwsEmrcontainersVirtualCluster } from '@cdktf/provider-aws'

new dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.get"></a>

```typescript
public get(index: number): DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference <a name="DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer"></a>

```typescript
import { dataAwsEmrcontainersVirtualCluster } from '@cdktf/provider-aws'

new dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo">DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo">DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo</a>

---


### DataAwsEmrcontainersVirtualClusterContainerProviderInfoList <a name="DataAwsEmrcontainersVirtualClusterContainerProviderInfoList" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer"></a>

```typescript
import { dataAwsEmrcontainersVirtualCluster } from '@cdktf/provider-aws'

new dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.get"></a>

```typescript
public get(index: number): DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference <a name="DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer"></a>

```typescript
import { dataAwsEmrcontainersVirtualCluster } from '@cdktf/provider-aws'

new dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfo">eksInfo</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList">DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfo">DataAwsEmrcontainersVirtualClusterContainerProviderInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eksInfo`<sup>Required</sup> <a name="eksInfo" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfo"></a>

```typescript
public readonly eksInfo: DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList">DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEmrcontainersVirtualClusterContainerProviderInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfo">DataAwsEmrcontainersVirtualClusterContainerProviderInfo</a>

---


### DataAwsEmrcontainersVirtualClusterContainerProviderList <a name="DataAwsEmrcontainersVirtualClusterContainerProviderList" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer"></a>

```typescript
import { dataAwsEmrcontainersVirtualCluster } from '@cdktf/provider-aws'

new dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.get"></a>

```typescript
public get(index: number): DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference <a name="DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer"></a>

```typescript
import { dataAwsEmrcontainersVirtualCluster } from '@cdktf/provider-aws'

new dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.info">info</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList">DataAwsEmrcontainersVirtualClusterContainerProviderInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProvider">DataAwsEmrcontainersVirtualClusterContainerProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `info`<sup>Required</sup> <a name="info" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.info"></a>

```typescript
public readonly info: DataAwsEmrcontainersVirtualClusterContainerProviderInfoList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList">DataAwsEmrcontainersVirtualClusterContainerProviderInfoList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEmrcontainersVirtualClusterContainerProvider;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProvider">DataAwsEmrcontainersVirtualClusterContainerProvider</a>

---



