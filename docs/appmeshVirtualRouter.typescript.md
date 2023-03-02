# `appmeshVirtualRouter` Submodule <a name="`appmeshVirtualRouter` Submodule" id="@cdktf/provider-aws.appmeshVirtualRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppmeshVirtualRouter <a name="AppmeshVirtualRouter" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router aws_appmesh_virtual_router}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer"></a>

```typescript
import { appmeshVirtualRouter } from '@cdktf/provider-aws'

new appmeshVirtualRouter.AppmeshVirtualRouter(scope: Construct, id: string, config: AppmeshVirtualRouterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig">AppmeshVirtualRouterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig">AppmeshVirtualRouterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetMeshOwner">resetMeshOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.putSpec"></a>

```typescript
public putSpec(value: AppmeshVirtualRouterSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMeshOwner` <a name="resetMeshOwner" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetMeshOwner"></a>

```typescript
public resetMeshOwner(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isConstruct"></a>

```typescript
import { appmeshVirtualRouter } from '@cdktf/provider-aws'

appmeshVirtualRouter.AppmeshVirtualRouter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isTerraformElement"></a>

```typescript
import { appmeshVirtualRouter } from '@cdktf/provider-aws'

appmeshVirtualRouter.AppmeshVirtualRouter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isTerraformResource"></a>

```typescript
import { appmeshVirtualRouter } from '@cdktf/provider-aws'

appmeshVirtualRouter.AppmeshVirtualRouter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.resourceOwner">resourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference">AppmeshVirtualRouterSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshNameInput">meshNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshOwnerInput">meshOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshName">meshName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshOwner">meshOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `resourceOwner`<sup>Required</sup> <a name="resourceOwner" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.resourceOwner"></a>

```typescript
public readonly resourceOwner: string;
```

- *Type:* string

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.spec"></a>

```typescript
public readonly spec: AppmeshVirtualRouterSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference">AppmeshVirtualRouterSpecOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `meshNameInput`<sup>Optional</sup> <a name="meshNameInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshNameInput"></a>

```typescript
public readonly meshNameInput: string;
```

- *Type:* string

---

##### `meshOwnerInput`<sup>Optional</sup> <a name="meshOwnerInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshOwnerInput"></a>

```typescript
public readonly meshOwnerInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.specInput"></a>

```typescript
public readonly specInput: AppmeshVirtualRouterSpec;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

---

##### `meshOwner`<sup>Required</sup> <a name="meshOwner" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshOwner"></a>

```typescript
public readonly meshOwner: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppmeshVirtualRouterConfig <a name="AppmeshVirtualRouterConfig" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.Initializer"></a>

```typescript
import { appmeshVirtualRouter } from '@cdktf/provider-aws'

const appmeshVirtualRouterConfig: appmeshVirtualRouter.AppmeshVirtualRouterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.meshName">meshName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#mesh_name AppmeshVirtualRouter#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#name AppmeshVirtualRouter#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#id AppmeshVirtualRouter#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.meshOwner">meshOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#mesh_owner AppmeshVirtualRouter#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#tags AppmeshVirtualRouter#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#tags_all AppmeshVirtualRouter#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#mesh_name AppmeshVirtualRouter#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#name AppmeshVirtualRouter#name}.

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.spec"></a>

```typescript
public readonly spec: AppmeshVirtualRouterSpec;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#spec AppmeshVirtualRouter#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#id AppmeshVirtualRouter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshOwner`<sup>Optional</sup> <a name="meshOwner" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.meshOwner"></a>

```typescript
public readonly meshOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#mesh_owner AppmeshVirtualRouter#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#tags AppmeshVirtualRouter#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#tags_all AppmeshVirtualRouter#tags_all}.

---

### AppmeshVirtualRouterSpec <a name="AppmeshVirtualRouterSpec" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec.Initializer"></a>

```typescript
import { appmeshVirtualRouter } from '@cdktf/provider-aws'

const appmeshVirtualRouterSpec: appmeshVirtualRouter.AppmeshVirtualRouterSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec.property.listener">listener</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener">AppmeshVirtualRouterSpecListener</a>[]</code> | listener block. |

---

##### `listener`<sup>Required</sup> <a name="listener" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec.property.listener"></a>

```typescript
public readonly listener: IResolvable | AppmeshVirtualRouterSpecListener[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener">AppmeshVirtualRouterSpecListener</a>[]

listener block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#listener AppmeshVirtualRouter#listener}

---

### AppmeshVirtualRouterSpecListener <a name="AppmeshVirtualRouterSpecListener" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener.Initializer"></a>

```typescript
import { appmeshVirtualRouter } from '@cdktf/provider-aws'

const appmeshVirtualRouterSpecListener: appmeshVirtualRouter.AppmeshVirtualRouterSpecListener = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener.property.portMapping">portMapping</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a></code> | port_mapping block. |

---

##### `portMapping`<sup>Required</sup> <a name="portMapping" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener.property.portMapping"></a>

```typescript
public readonly portMapping: AppmeshVirtualRouterSpecListenerPortMapping;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a>

port_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#port_mapping AppmeshVirtualRouter#port_mapping}

---

### AppmeshVirtualRouterSpecListenerPortMapping <a name="AppmeshVirtualRouterSpecListenerPortMapping" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping.Initializer"></a>

```typescript
import { appmeshVirtualRouter } from '@cdktf/provider-aws'

const appmeshVirtualRouterSpecListenerPortMapping: appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#port AppmeshVirtualRouter#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#protocol AppmeshVirtualRouter#protocol}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#port AppmeshVirtualRouter#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#protocol AppmeshVirtualRouter#protocol}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppmeshVirtualRouterSpecListenerList <a name="AppmeshVirtualRouterSpecListenerList" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer"></a>

```typescript
import { appmeshVirtualRouter } from '@cdktf/provider-aws'

new appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.get"></a>

```typescript
public get(index: number): AppmeshVirtualRouterSpecListenerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener">AppmeshVirtualRouterSpecListener</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppmeshVirtualRouterSpecListener[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener">AppmeshVirtualRouterSpecListener</a>[]

---


### AppmeshVirtualRouterSpecListenerOutputReference <a name="AppmeshVirtualRouterSpecListenerOutputReference" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer"></a>

```typescript
import { appmeshVirtualRouter } from '@cdktf/provider-aws'

new appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.putPortMapping">putPortMapping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPortMapping` <a name="putPortMapping" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.putPortMapping"></a>

```typescript
public putPortMapping(value: AppmeshVirtualRouterSpecListenerPortMapping): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.putPortMapping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.portMapping">portMapping</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference">AppmeshVirtualRouterSpecListenerPortMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.portMappingInput">portMappingInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener">AppmeshVirtualRouterSpecListener</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portMapping`<sup>Required</sup> <a name="portMapping" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.portMapping"></a>

```typescript
public readonly portMapping: AppmeshVirtualRouterSpecListenerPortMappingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference">AppmeshVirtualRouterSpecListenerPortMappingOutputReference</a>

---

##### `portMappingInput`<sup>Optional</sup> <a name="portMappingInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.portMappingInput"></a>

```typescript
public readonly portMappingInput: AppmeshVirtualRouterSpecListenerPortMapping;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshVirtualRouterSpecListener | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener">AppmeshVirtualRouterSpecListener</a> | cdktf.IResolvable

---


### AppmeshVirtualRouterSpecListenerPortMappingOutputReference <a name="AppmeshVirtualRouterSpecListenerPortMappingOutputReference" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer"></a>

```typescript
import { appmeshVirtualRouter } from '@cdktf/provider-aws'

new appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshVirtualRouterSpecListenerPortMapping;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a>

---


### AppmeshVirtualRouterSpecOutputReference <a name="AppmeshVirtualRouterSpecOutputReference" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.Initializer"></a>

```typescript
import { appmeshVirtualRouter } from '@cdktf/provider-aws'

new appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.putListener">putListener</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putListener` <a name="putListener" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.putListener"></a>

```typescript
public putListener(value: IResolvable | AppmeshVirtualRouterSpecListener[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.putListener.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener">AppmeshVirtualRouterSpecListener</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.listener">listener</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList">AppmeshVirtualRouterSpecListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.listenerInput">listenerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener">AppmeshVirtualRouterSpecListener</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `listener`<sup>Required</sup> <a name="listener" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.listener"></a>

```typescript
public readonly listener: AppmeshVirtualRouterSpecListenerList;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList">AppmeshVirtualRouterSpecListenerList</a>

---

##### `listenerInput`<sup>Optional</sup> <a name="listenerInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.listenerInput"></a>

```typescript
public readonly listenerInput: IResolvable | AppmeshVirtualRouterSpecListener[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener">AppmeshVirtualRouterSpecListener</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshVirtualRouterSpec;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a>

---



