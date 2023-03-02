# `dataAwsAppmeshVirtualService` Submodule <a name="`dataAwsAppmeshVirtualService` Submodule" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAppmeshVirtualService <a name="DataAwsAppmeshVirtualService" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service aws_appmesh_virtual_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualService } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService(scope: Construct, id: string, config: DataAwsAppmeshVirtualServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig">DataAwsAppmeshVirtualServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig">DataAwsAppmeshVirtualServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.resetMeshOwner">resetMeshOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMeshOwner` <a name="resetMeshOwner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.resetMeshOwner"></a>

```typescript
public resetMeshOwner(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isConstruct"></a>

```typescript
import { dataAwsAppmeshVirtualService } from '@cdktf/provider-aws'

dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isTerraformElement"></a>

```typescript
import { dataAwsAppmeshVirtualService } from '@cdktf/provider-aws'

dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isTerraformDataSource"></a>

```typescript
import { dataAwsAppmeshVirtualService } from '@cdktf/provider-aws'

dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.resourceOwner">resourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList">DataAwsAppmeshVirtualServiceSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.meshNameInput">meshNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.meshOwnerInput">meshOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.meshName">meshName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.meshOwner">meshOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `resourceOwner`<sup>Required</sup> <a name="resourceOwner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.resourceOwner"></a>

```typescript
public readonly resourceOwner: string;
```

- *Type:* string

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.spec"></a>

```typescript
public readonly spec: DataAwsAppmeshVirtualServiceSpecList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList">DataAwsAppmeshVirtualServiceSpecList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `meshNameInput`<sup>Optional</sup> <a name="meshNameInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.meshNameInput"></a>

```typescript
public readonly meshNameInput: string;
```

- *Type:* string

---

##### `meshOwnerInput`<sup>Optional</sup> <a name="meshOwnerInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.meshOwnerInput"></a>

```typescript
public readonly meshOwnerInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

---

##### `meshOwner`<sup>Required</sup> <a name="meshOwner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.meshOwner"></a>

```typescript
public readonly meshOwner: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAppmeshVirtualServiceConfig <a name="DataAwsAppmeshVirtualServiceConfig" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualService } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualServiceConfig: dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.meshName">meshName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#mesh_name DataAwsAppmeshVirtualService#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#name DataAwsAppmeshVirtualService#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#id DataAwsAppmeshVirtualService#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.meshOwner">meshOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#mesh_owner DataAwsAppmeshVirtualService#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#tags DataAwsAppmeshVirtualService#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#mesh_name DataAwsAppmeshVirtualService#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#name DataAwsAppmeshVirtualService#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#id DataAwsAppmeshVirtualService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshOwner`<sup>Optional</sup> <a name="meshOwner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.meshOwner"></a>

```typescript
public readonly meshOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#mesh_owner DataAwsAppmeshVirtualService#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#tags DataAwsAppmeshVirtualService#tags}.

---

### DataAwsAppmeshVirtualServiceSpec <a name="DataAwsAppmeshVirtualServiceSpec" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpec.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualService } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualServiceSpec: dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpec = { ... }
```


### DataAwsAppmeshVirtualServiceSpecProvider <a name="DataAwsAppmeshVirtualServiceSpecProvider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProvider.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualService } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualServiceSpecProvider: dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProvider = { ... }
```


### DataAwsAppmeshVirtualServiceSpecProviderVirtualNode <a name="DataAwsAppmeshVirtualServiceSpecProviderVirtualNode" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNode.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualService } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualServiceSpecProviderVirtualNode: dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNode = { ... }
```


### DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter <a name="DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualService } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualServiceSpecProviderVirtualRouter: dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAppmeshVirtualServiceSpecList <a name="DataAwsAppmeshVirtualServiceSpecList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualService } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualServiceSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualServiceSpecOutputReference <a name="DataAwsAppmeshVirtualServiceSpecOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualService } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.property.provider">provider</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList">DataAwsAppmeshVirtualServiceSpecProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpec">DataAwsAppmeshVirtualServiceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.property.provider"></a>

```typescript
public readonly provider: DataAwsAppmeshVirtualServiceSpecProviderList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList">DataAwsAppmeshVirtualServiceSpecProviderList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualServiceSpec;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpec">DataAwsAppmeshVirtualServiceSpec</a>

---


### DataAwsAppmeshVirtualServiceSpecProviderList <a name="DataAwsAppmeshVirtualServiceSpecProviderList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualService } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualServiceSpecProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualServiceSpecProviderOutputReference <a name="DataAwsAppmeshVirtualServiceSpecProviderOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualService } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.property.virtualNode">virtualNode</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList">DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.property.virtualRouter">virtualRouter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList">DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProvider">DataAwsAppmeshVirtualServiceSpecProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `virtualNode`<sup>Required</sup> <a name="virtualNode" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.property.virtualNode"></a>

```typescript
public readonly virtualNode: DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList">DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList</a>

---

##### `virtualRouter`<sup>Required</sup> <a name="virtualRouter" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.property.virtualRouter"></a>

```typescript
public readonly virtualRouter: DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList">DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualServiceSpecProvider;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProvider">DataAwsAppmeshVirtualServiceSpecProvider</a>

---


### DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList <a name="DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualService } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference <a name="DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualService } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.virtualNodeName">virtualNodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNode">DataAwsAppmeshVirtualServiceSpecProviderVirtualNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `virtualNodeName`<sup>Required</sup> <a name="virtualNodeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.virtualNodeName"></a>

```typescript
public readonly virtualNodeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualServiceSpecProviderVirtualNode;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNode">DataAwsAppmeshVirtualServiceSpecProviderVirtualNode</a>

---


### DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList <a name="DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualService } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference <a name="DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualService } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.virtualRouterName">virtualRouterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter">DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `virtualRouterName`<sup>Required</sup> <a name="virtualRouterName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.virtualRouterName"></a>

```typescript
public readonly virtualRouterName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter">DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter</a>

---



