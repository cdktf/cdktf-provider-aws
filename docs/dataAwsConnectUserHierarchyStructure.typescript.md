# `dataAwsConnectUserHierarchyStructure` Submodule <a name="`dataAwsConnectUserHierarchyStructure` Submodule" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsConnectUserHierarchyStructure <a name="DataAwsConnectUserHierarchyStructure" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_structure aws_connect_user_hierarchy_structure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure(scope: Construct, id: string, config: DataAwsConnectUserHierarchyStructureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig">DataAwsConnectUserHierarchyStructureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig">DataAwsConnectUserHierarchyStructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isConstruct"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isTerraformElement"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isTerraformDataSource"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.hierarchyStructure">hierarchyStructure</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList">DataAwsConnectUserHierarchyStructureHierarchyStructureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `hierarchyStructure`<sup>Required</sup> <a name="hierarchyStructure" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.hierarchyStructure"></a>

```typescript
public readonly hierarchyStructure: DataAwsConnectUserHierarchyStructureHierarchyStructureList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList">DataAwsConnectUserHierarchyStructureHierarchyStructureList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsConnectUserHierarchyStructureConfig <a name="DataAwsConnectUserHierarchyStructureConfig" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

const dataAwsConnectUserHierarchyStructureConfig: dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_structure#instance_id DataAwsConnectUserHierarchyStructure#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_structure#id DataAwsConnectUserHierarchyStructure#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_structure#instance_id DataAwsConnectUserHierarchyStructure#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_structure#id DataAwsConnectUserHierarchyStructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsConnectUserHierarchyStructureHierarchyStructure <a name="DataAwsConnectUserHierarchyStructureHierarchyStructure" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructure.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

const dataAwsConnectUserHierarchyStructureHierarchyStructure: dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructure = { ... }
```


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

const dataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive: dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive = { ... }
```


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

const dataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour: dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour = { ... }
```


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

const dataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne: dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne = { ... }
```


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

const dataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree: dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree = { ... }
```


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

const dataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo: dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.get"></a>

```typescript
public get(index: number): DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive</a>

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.get"></a>

```typescript
public get(index: number): DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour</a>

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.get"></a>

```typescript
public get(index: number): DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne</a>

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.get"></a>

```typescript
public get(index: number): DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree</a>

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.get"></a>

```typescript
public get(index: number): DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo</a>

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureList <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.get"></a>

```typescript
public get(index: number): DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyStructure } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFive">levelFive</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFour">levelFour</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelOne">levelOne</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelThree">levelThree</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelTwo">levelTwo</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructure">DataAwsConnectUserHierarchyStructureHierarchyStructure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `levelFive`<sup>Required</sup> <a name="levelFive" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFive"></a>

```typescript
public readonly levelFive: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList</a>

---

##### `levelFour`<sup>Required</sup> <a name="levelFour" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFour"></a>

```typescript
public readonly levelFour: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList</a>

---

##### `levelOne`<sup>Required</sup> <a name="levelOne" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelOne"></a>

```typescript
public readonly levelOne: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList</a>

---

##### `levelThree`<sup>Required</sup> <a name="levelThree" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelThree"></a>

```typescript
public readonly levelThree: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList</a>

---

##### `levelTwo`<sup>Required</sup> <a name="levelTwo" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelTwo"></a>

```typescript
public readonly levelTwo: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsConnectUserHierarchyStructureHierarchyStructure;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructure">DataAwsConnectUserHierarchyStructureHierarchyStructure</a>

---



