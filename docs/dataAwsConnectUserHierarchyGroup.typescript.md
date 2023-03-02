# `dataAwsConnectUserHierarchyGroup` Submodule <a name="`dataAwsConnectUserHierarchyGroup` Submodule" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsConnectUserHierarchyGroup <a name="DataAwsConnectUserHierarchyGroup" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group aws_connect_user_hierarchy_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup(scope: Construct, id: string, config: DataAwsConnectUserHierarchyGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig">DataAwsConnectUserHierarchyGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig">DataAwsConnectUserHierarchyGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetHierarchyGroupId">resetHierarchyGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetHierarchyGroupId` <a name="resetHierarchyGroupId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetHierarchyGroupId"></a>

```typescript
public resetHierarchyGroupId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isConstruct"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isTerraformElement"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.hierarchyPath">hierarchyPath</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList">DataAwsConnectUserHierarchyGroupHierarchyPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.levelId">levelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.hierarchyGroupIdInput">hierarchyGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.hierarchyGroupId">hierarchyGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `hierarchyPath`<sup>Required</sup> <a name="hierarchyPath" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.hierarchyPath"></a>

```typescript
public readonly hierarchyPath: DataAwsConnectUserHierarchyGroupHierarchyPathList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList">DataAwsConnectUserHierarchyGroupHierarchyPathList</a>

---

##### `levelId`<sup>Required</sup> <a name="levelId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.levelId"></a>

```typescript
public readonly levelId: string;
```

- *Type:* string

---

##### `hierarchyGroupIdInput`<sup>Optional</sup> <a name="hierarchyGroupIdInput" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.hierarchyGroupIdInput"></a>

```typescript
public readonly hierarchyGroupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hierarchyGroupId`<sup>Required</sup> <a name="hierarchyGroupId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.hierarchyGroupId"></a>

```typescript
public readonly hierarchyGroupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsConnectUserHierarchyGroupConfig <a name="DataAwsConnectUserHierarchyGroupConfig" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

const dataAwsConnectUserHierarchyGroupConfig: dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#instance_id DataAwsConnectUserHierarchyGroup#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.hierarchyGroupId">hierarchyGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#hierarchy_group_id DataAwsConnectUserHierarchyGroup#hierarchy_group_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#id DataAwsConnectUserHierarchyGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#name DataAwsConnectUserHierarchyGroup#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#tags DataAwsConnectUserHierarchyGroup#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#instance_id DataAwsConnectUserHierarchyGroup#instance_id}.

---

##### `hierarchyGroupId`<sup>Optional</sup> <a name="hierarchyGroupId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.hierarchyGroupId"></a>

```typescript
public readonly hierarchyGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#hierarchy_group_id DataAwsConnectUserHierarchyGroup#hierarchy_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#id DataAwsConnectUserHierarchyGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#name DataAwsConnectUserHierarchyGroup#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#tags DataAwsConnectUserHierarchyGroup#tags}.

---

### DataAwsConnectUserHierarchyGroupHierarchyPath <a name="DataAwsConnectUserHierarchyGroupHierarchyPath" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPath.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

const dataAwsConnectUserHierarchyGroupHierarchyPath: dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPath = { ... }
```


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

const dataAwsConnectUserHierarchyGroupHierarchyPathLevelFive: dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive = { ... }
```


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

const dataAwsConnectUserHierarchyGroupHierarchyPathLevelFour: dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour = { ... }
```


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

const dataAwsConnectUserHierarchyGroupHierarchyPathLevelOne: dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne = { ... }
```


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

const dataAwsConnectUserHierarchyGroupHierarchyPathLevelThree: dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree = { ... }
```


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

const dataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo: dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.get"></a>

```typescript
public get(index: number): DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive</a>

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.get"></a>

```typescript
public get(index: number): DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour</a>

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.get"></a>

```typescript
public get(index: number): DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne">DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne">DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne</a>

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.get"></a>

```typescript
public get(index: number): DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree">DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree">DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree</a>

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.get"></a>

```typescript
public get(index: number): DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo">DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo">DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo</a>

---


### DataAwsConnectUserHierarchyGroupHierarchyPathList <a name="DataAwsConnectUserHierarchyGroupHierarchyPathList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.get"></a>

```typescript
public get(index: number): DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference <a name="DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer"></a>

```typescript
import { dataAwsConnectUserHierarchyGroup } from '@cdktf/provider-aws'

new dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFive">levelFive</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFour">levelFour</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelOne">levelOne</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelThree">levelThree</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelTwo">levelTwo</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPath">DataAwsConnectUserHierarchyGroupHierarchyPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `levelFive`<sup>Required</sup> <a name="levelFive" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFive"></a>

```typescript
public readonly levelFive: DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList</a>

---

##### `levelFour`<sup>Required</sup> <a name="levelFour" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFour"></a>

```typescript
public readonly levelFour: DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList</a>

---

##### `levelOne`<sup>Required</sup> <a name="levelOne" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelOne"></a>

```typescript
public readonly levelOne: DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList</a>

---

##### `levelThree`<sup>Required</sup> <a name="levelThree" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelThree"></a>

```typescript
public readonly levelThree: DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList</a>

---

##### `levelTwo`<sup>Required</sup> <a name="levelTwo" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelTwo"></a>

```typescript
public readonly levelTwo: DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsConnectUserHierarchyGroupHierarchyPath;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPath">DataAwsConnectUserHierarchyGroupHierarchyPath</a>

---



