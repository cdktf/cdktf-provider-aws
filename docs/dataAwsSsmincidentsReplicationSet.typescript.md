# `data_aws_ssmincidents_replication_set`

Refer to the Terraform Registory for docs: [`data_aws_ssmincidents_replication_set`](https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/data-sources/ssmincidents_replication_set).

# `dataAwsSsmincidentsReplicationSet` Submodule <a name="`dataAwsSsmincidentsReplicationSet` Submodule" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsmincidentsReplicationSet <a name="DataAwsSsmincidentsReplicationSet" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/data-sources/ssmincidents_replication_set aws_ssmincidents_replication_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.Initializer"></a>

```typescript
import { dataAwsSsmincidentsReplicationSet } from '@cdktf/provider-aws'

new dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet(scope: Construct, id: string, config?: DataAwsSsmincidentsReplicationSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig">DataAwsSsmincidentsReplicationSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig">DataAwsSsmincidentsReplicationSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.isConstruct"></a>

```typescript
import { dataAwsSsmincidentsReplicationSet } from '@cdktf/provider-aws'

dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.isTerraformElement"></a>

```typescript
import { dataAwsSsmincidentsReplicationSet } from '@cdktf/provider-aws'

dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.isTerraformDataSource"></a>

```typescript
import { dataAwsSsmincidentsReplicationSet } from '@cdktf/provider-aws'

dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.deletionProtected">deletionProtected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.lastModifiedBy">lastModifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.region">region</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList">DataAwsSsmincidentsReplicationSetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `deletionProtected`<sup>Required</sup> <a name="deletionProtected" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.deletionProtected"></a>

```typescript
public readonly deletionProtected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastModifiedBy`<sup>Required</sup> <a name="lastModifiedBy" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.lastModifiedBy"></a>

```typescript
public readonly lastModifiedBy: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.region"></a>

```typescript
public readonly region: DataAwsSsmincidentsReplicationSetRegionList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList">DataAwsSsmincidentsReplicationSetRegionList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsmincidentsReplicationSetConfig <a name="DataAwsSsmincidentsReplicationSetConfig" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig.Initializer"></a>

```typescript
import { dataAwsSsmincidentsReplicationSet } from '@cdktf/provider-aws'

const dataAwsSsmincidentsReplicationSetConfig: dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/data-sources/ssmincidents_replication_set#id DataAwsSsmincidentsReplicationSet#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/data-sources/ssmincidents_replication_set#tags DataAwsSsmincidentsReplicationSet#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/data-sources/ssmincidents_replication_set#id DataAwsSsmincidentsReplicationSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/data-sources/ssmincidents_replication_set#tags DataAwsSsmincidentsReplicationSet#tags}.

---

### DataAwsSsmincidentsReplicationSetRegion <a name="DataAwsSsmincidentsReplicationSetRegion" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegion.Initializer"></a>

```typescript
import { dataAwsSsmincidentsReplicationSet } from '@cdktf/provider-aws'

const dataAwsSsmincidentsReplicationSetRegion: dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegion = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsmincidentsReplicationSetRegionList <a name="DataAwsSsmincidentsReplicationSetRegionList" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.Initializer"></a>

```typescript
import { dataAwsSsmincidentsReplicationSet } from '@cdktf/provider-aws'

new dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.get"></a>

```typescript
public get(index: number): DataAwsSsmincidentsReplicationSetRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSsmincidentsReplicationSetRegionOutputReference <a name="DataAwsSsmincidentsReplicationSetRegionOutputReference" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.Initializer"></a>

```typescript
import { dataAwsSsmincidentsReplicationSet } from '@cdktf/provider-aws'

new dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegion">DataAwsSsmincidentsReplicationSetRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSsmincidentsReplicationSetRegion;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsReplicationSet.DataAwsSsmincidentsReplicationSetRegion">DataAwsSsmincidentsReplicationSetRegion</a>

---



