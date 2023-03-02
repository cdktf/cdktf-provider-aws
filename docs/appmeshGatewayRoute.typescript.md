# `appmeshGatewayRoute` Submodule <a name="`appmeshGatewayRoute` Submodule" id="@cdktf/provider-aws.appmeshGatewayRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppmeshGatewayRoute <a name="AppmeshGatewayRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route aws_appmesh_gateway_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRoute(scope: Construct, id: string, config: AppmeshGatewayRouteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig">AppmeshGatewayRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig">AppmeshGatewayRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetMeshOwner">resetMeshOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.putSpec"></a>

```typescript
public putSpec(value: AppmeshGatewayRouteSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMeshOwner` <a name="resetMeshOwner" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetMeshOwner"></a>

```typescript
public resetMeshOwner(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isConstruct"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

appmeshGatewayRoute.AppmeshGatewayRoute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformElement"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformResource"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.resourceOwner">resourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference">AppmeshGatewayRouteSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshNameInput">meshNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshOwnerInput">meshOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.virtualGatewayNameInput">virtualGatewayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshName">meshName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshOwner">meshOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.virtualGatewayName">virtualGatewayName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `resourceOwner`<sup>Required</sup> <a name="resourceOwner" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.resourceOwner"></a>

```typescript
public readonly resourceOwner: string;
```

- *Type:* string

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.spec"></a>

```typescript
public readonly spec: AppmeshGatewayRouteSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference">AppmeshGatewayRouteSpecOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `meshNameInput`<sup>Optional</sup> <a name="meshNameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshNameInput"></a>

```typescript
public readonly meshNameInput: string;
```

- *Type:* string

---

##### `meshOwnerInput`<sup>Optional</sup> <a name="meshOwnerInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshOwnerInput"></a>

```typescript
public readonly meshOwnerInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.specInput"></a>

```typescript
public readonly specInput: AppmeshGatewayRouteSpec;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualGatewayNameInput`<sup>Optional</sup> <a name="virtualGatewayNameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.virtualGatewayNameInput"></a>

```typescript
public readonly virtualGatewayNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

---

##### `meshOwner`<sup>Required</sup> <a name="meshOwner" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshOwner"></a>

```typescript
public readonly meshOwner: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualGatewayName`<sup>Required</sup> <a name="virtualGatewayName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.virtualGatewayName"></a>

```typescript
public readonly virtualGatewayName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppmeshGatewayRouteConfig <a name="AppmeshGatewayRouteConfig" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteConfig: appmeshGatewayRoute.AppmeshGatewayRouteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.meshName">meshName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#mesh_name AppmeshGatewayRoute#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#name AppmeshGatewayRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.virtualGatewayName">virtualGatewayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_gateway_name AppmeshGatewayRoute#virtual_gateway_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#id AppmeshGatewayRoute#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.meshOwner">meshOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#mesh_owner AppmeshGatewayRoute#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#tags AppmeshGatewayRoute#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#tags_all AppmeshGatewayRoute#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#mesh_name AppmeshGatewayRoute#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#name AppmeshGatewayRoute#name}.

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.spec"></a>

```typescript
public readonly spec: AppmeshGatewayRouteSpec;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#spec AppmeshGatewayRoute#spec}

---

##### `virtualGatewayName`<sup>Required</sup> <a name="virtualGatewayName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.virtualGatewayName"></a>

```typescript
public readonly virtualGatewayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_gateway_name AppmeshGatewayRoute#virtual_gateway_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#id AppmeshGatewayRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshOwner`<sup>Optional</sup> <a name="meshOwner" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.meshOwner"></a>

```typescript
public readonly meshOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#mesh_owner AppmeshGatewayRoute#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#tags AppmeshGatewayRoute#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#tags_all AppmeshGatewayRoute#tags_all}.

---

### AppmeshGatewayRouteSpec <a name="AppmeshGatewayRouteSpec" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpec: appmeshGatewayRoute.AppmeshGatewayRouteSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.grpcRoute">grpcRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a></code> | grpc_route block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.http2Route">http2Route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a></code> | http2_route block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.httpRoute">httpRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a></code> | http_route block. |

---

##### `grpcRoute`<sup>Optional</sup> <a name="grpcRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.grpcRoute"></a>

```typescript
public readonly grpcRoute: AppmeshGatewayRouteSpecGrpcRoute;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a>

grpc_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#grpc_route AppmeshGatewayRoute#grpc_route}

---

##### `http2Route`<sup>Optional</sup> <a name="http2Route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.http2Route"></a>

```typescript
public readonly http2Route: AppmeshGatewayRouteSpecHttp2Route;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a>

http2_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#http2_route AppmeshGatewayRoute#http2_route}

---

##### `httpRoute`<sup>Optional</sup> <a name="httpRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.httpRoute"></a>

```typescript
public readonly httpRoute: AppmeshGatewayRouteSpecHttpRoute;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a>

http_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#http_route AppmeshGatewayRoute#http_route}

---

### AppmeshGatewayRouteSpecGrpcRoute <a name="AppmeshGatewayRouteSpecGrpcRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecGrpcRoute: appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a></code> | match block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute.property.action"></a>

```typescript
public readonly action: AppmeshGatewayRouteSpecGrpcRouteAction;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#action AppmeshGatewayRoute#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute.property.match"></a>

```typescript
public readonly match: AppmeshGatewayRouteSpecGrpcRouteMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#match AppmeshGatewayRoute#match}

---

### AppmeshGatewayRouteSpecGrpcRouteAction <a name="AppmeshGatewayRouteSpecGrpcRouteAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecGrpcRouteAction: appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a></code> | target block. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction.property.target"></a>

```typescript
public readonly target: AppmeshGatewayRouteSpecGrpcRouteActionTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#target AppmeshGatewayRoute#target}

---

### AppmeshGatewayRouteSpecGrpcRouteActionTarget <a name="AppmeshGatewayRouteSpecGrpcRouteActionTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecGrpcRouteActionTarget: appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget.property.virtualService">virtualService</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a></code> | virtual_service block. |

---

##### `virtualService`<sup>Required</sup> <a name="virtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget.property.virtualService"></a>

```typescript
public readonly virtualService: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a>

virtual_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}

---

### AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService <a name="AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService: appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService.property.virtualServiceName">virtualServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}. |

---

##### `virtualServiceName`<sup>Required</sup> <a name="virtualServiceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService.property.virtualServiceName"></a>

```typescript
public readonly virtualServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}.

---

### AppmeshGatewayRouteSpecGrpcRouteMatch <a name="AppmeshGatewayRouteSpecGrpcRouteMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecGrpcRouteMatch: appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#service_name AppmeshGatewayRoute#service_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}. |

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#service_name AppmeshGatewayRoute#service_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}.

---

### AppmeshGatewayRouteSpecHttp2Route <a name="AppmeshGatewayRouteSpecHttp2Route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecHttp2Route: appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a></code> | match block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route.property.action"></a>

```typescript
public readonly action: AppmeshGatewayRouteSpecHttp2RouteAction;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#action AppmeshGatewayRoute#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route.property.match"></a>

```typescript
public readonly match: AppmeshGatewayRouteSpecHttp2RouteMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#match AppmeshGatewayRoute#match}

---

### AppmeshGatewayRouteSpecHttp2RouteAction <a name="AppmeshGatewayRouteSpecHttp2RouteAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecHttp2RouteAction: appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction.property.rewrite">rewrite</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a></code> | rewrite block. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction.property.target"></a>

```typescript
public readonly target: AppmeshGatewayRouteSpecHttp2RouteActionTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#target AppmeshGatewayRoute#target}

---

##### `rewrite`<sup>Optional</sup> <a name="rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction.property.rewrite"></a>

```typescript
public readonly rewrite: AppmeshGatewayRouteSpecHttp2RouteActionRewrite;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a>

rewrite block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#rewrite AppmeshGatewayRoute#rewrite}

---

### AppmeshGatewayRouteSpecHttp2RouteActionRewrite <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecHttp2RouteActionRewrite: appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a></code> | hostname block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.property.prefix">prefix</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a></code> | prefix block. |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.property.hostname"></a>

```typescript
public readonly hostname: AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a>

hostname block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.property.prefix"></a>

```typescript
public readonly prefix: AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a>

prefix block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}

---

### AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecHttp2RouteActionRewriteHostname: appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname.property.defaultTargetHostname">defaultTargetHostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_target_hostname AppmeshGatewayRoute#default_target_hostname}. |

---

##### `defaultTargetHostname`<sup>Required</sup> <a name="defaultTargetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname.property.defaultTargetHostname"></a>

```typescript
public readonly defaultTargetHostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_target_hostname AppmeshGatewayRoute#default_target_hostname}.

---

### AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecHttp2RouteActionRewritePrefix: appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.property.defaultPrefix">defaultPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_prefix AppmeshGatewayRoute#default_prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#value AppmeshGatewayRoute#value}. |

---

##### `defaultPrefix`<sup>Optional</sup> <a name="defaultPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.property.defaultPrefix"></a>

```typescript
public readonly defaultPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_prefix AppmeshGatewayRoute#default_prefix}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#value AppmeshGatewayRoute#value}.

---

### AppmeshGatewayRouteSpecHttp2RouteActionTarget <a name="AppmeshGatewayRouteSpecHttp2RouteActionTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecHttp2RouteActionTarget: appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget.property.virtualService">virtualService</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a></code> | virtual_service block. |

---

##### `virtualService`<sup>Required</sup> <a name="virtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget.property.virtualService"></a>

```typescript
public readonly virtualService: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a>

virtual_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}

---

### AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService <a name="AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService: appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService.property.virtualServiceName">virtualServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}. |

---

##### `virtualServiceName`<sup>Required</sup> <a name="virtualServiceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService.property.virtualServiceName"></a>

```typescript
public readonly virtualServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}.

---

### AppmeshGatewayRouteSpecHttp2RouteMatch <a name="AppmeshGatewayRouteSpecHttp2RouteMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecHttp2RouteMatch: appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a></code> | hostname block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}. |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.hostname"></a>

```typescript
public readonly hostname: AppmeshGatewayRouteSpecHttp2RouteMatchHostname;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a>

hostname block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}.

---

### AppmeshGatewayRouteSpecHttp2RouteMatchHostname <a name="AppmeshGatewayRouteSpecHttp2RouteMatchHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecHttp2RouteMatchHostname: appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname.property.exact">exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname.property.suffix">suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}.

---

### AppmeshGatewayRouteSpecHttpRoute <a name="AppmeshGatewayRouteSpecHttpRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecHttpRoute: appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a></code> | match block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute.property.action"></a>

```typescript
public readonly action: AppmeshGatewayRouteSpecHttpRouteAction;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#action AppmeshGatewayRoute#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute.property.match"></a>

```typescript
public readonly match: AppmeshGatewayRouteSpecHttpRouteMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#match AppmeshGatewayRoute#match}

---

### AppmeshGatewayRouteSpecHttpRouteAction <a name="AppmeshGatewayRouteSpecHttpRouteAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecHttpRouteAction: appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction.property.rewrite">rewrite</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a></code> | rewrite block. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction.property.target"></a>

```typescript
public readonly target: AppmeshGatewayRouteSpecHttpRouteActionTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#target AppmeshGatewayRoute#target}

---

##### `rewrite`<sup>Optional</sup> <a name="rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction.property.rewrite"></a>

```typescript
public readonly rewrite: AppmeshGatewayRouteSpecHttpRouteActionRewrite;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a>

rewrite block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#rewrite AppmeshGatewayRoute#rewrite}

---

### AppmeshGatewayRouteSpecHttpRouteActionRewrite <a name="AppmeshGatewayRouteSpecHttpRouteActionRewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecHttpRouteActionRewrite: appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a></code> | hostname block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.property.prefix">prefix</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a></code> | prefix block. |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.property.hostname"></a>

```typescript
public readonly hostname: AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a>

hostname block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.property.prefix"></a>

```typescript
public readonly prefix: AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a>

prefix block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}

---

### AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname <a name="AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecHttpRouteActionRewriteHostname: appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname.property.defaultTargetHostname">defaultTargetHostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_target_hostname AppmeshGatewayRoute#default_target_hostname}. |

---

##### `defaultTargetHostname`<sup>Required</sup> <a name="defaultTargetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname.property.defaultTargetHostname"></a>

```typescript
public readonly defaultTargetHostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_target_hostname AppmeshGatewayRoute#default_target_hostname}.

---

### AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix <a name="AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecHttpRouteActionRewritePrefix: appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.property.defaultPrefix">defaultPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_prefix AppmeshGatewayRoute#default_prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#value AppmeshGatewayRoute#value}. |

---

##### `defaultPrefix`<sup>Optional</sup> <a name="defaultPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.property.defaultPrefix"></a>

```typescript
public readonly defaultPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_prefix AppmeshGatewayRoute#default_prefix}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#value AppmeshGatewayRoute#value}.

---

### AppmeshGatewayRouteSpecHttpRouteActionTarget <a name="AppmeshGatewayRouteSpecHttpRouteActionTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecHttpRouteActionTarget: appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget.property.virtualService">virtualService</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a></code> | virtual_service block. |

---

##### `virtualService`<sup>Required</sup> <a name="virtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget.property.virtualService"></a>

```typescript
public readonly virtualService: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a>

virtual_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}

---

### AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService <a name="AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecHttpRouteActionTargetVirtualService: appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService.property.virtualServiceName">virtualServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}. |

---

##### `virtualServiceName`<sup>Required</sup> <a name="virtualServiceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService.property.virtualServiceName"></a>

```typescript
public readonly virtualServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}.

---

### AppmeshGatewayRouteSpecHttpRouteMatch <a name="AppmeshGatewayRouteSpecHttpRouteMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecHttpRouteMatch: appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a></code> | hostname block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}. |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.hostname"></a>

```typescript
public readonly hostname: AppmeshGatewayRouteSpecHttpRouteMatchHostname;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a>

hostname block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}.

---

### AppmeshGatewayRouteSpecHttpRouteMatchHostname <a name="AppmeshGatewayRouteSpecHttpRouteMatchHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

const appmeshGatewayRouteSpecHttpRouteMatchHostname: appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname.property.exact">exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname.property.suffix">suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppmeshGatewayRouteSpecGrpcRouteActionOutputReference <a name="AppmeshGatewayRouteSpecGrpcRouteActionOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.putTarget">putTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTarget` <a name="putTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.putTarget"></a>

```typescript
public putTarget(value: AppmeshGatewayRouteSpecGrpcRouteActionTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.target"></a>

```typescript
public readonly target: AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: AppmeshGatewayRouteSpecGrpcRouteActionTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecGrpcRouteAction;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a>

---


### AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference <a name="AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.putVirtualService">putVirtualService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVirtualService` <a name="putVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.putVirtualService"></a>

```typescript
public putVirtualService(value: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.putVirtualService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.virtualService">virtualService</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.virtualServiceInput">virtualServiceInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `virtualService`<sup>Required</sup> <a name="virtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.virtualService"></a>

```typescript
public readonly virtualService: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference</a>

---

##### `virtualServiceInput`<sup>Optional</sup> <a name="virtualServiceInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.virtualServiceInput"></a>

```typescript
public readonly virtualServiceInput: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecGrpcRouteActionTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a>

---


### AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference <a name="AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput">virtualServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.virtualServiceName">virtualServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `virtualServiceNameInput`<sup>Optional</sup> <a name="virtualServiceNameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput"></a>

```typescript
public readonly virtualServiceNameInput: string;
```

- *Type:* string

---

##### `virtualServiceName`<sup>Required</sup> <a name="virtualServiceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.virtualServiceName"></a>

```typescript
public readonly virtualServiceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a>

---


### AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference <a name="AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecGrpcRouteMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a>

---


### AppmeshGatewayRouteSpecGrpcRouteOutputReference <a name="AppmeshGatewayRouteSpecGrpcRouteOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putMatch">putMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putAction"></a>

```typescript
public putAction(value: AppmeshGatewayRouteSpecGrpcRouteAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a>

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putMatch"></a>

```typescript
public putMatch(value: AppmeshGatewayRouteSpecGrpcRouteMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference">AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.action"></a>

```typescript
public readonly action: AppmeshGatewayRouteSpecGrpcRouteActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.match"></a>

```typescript
public readonly match: AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference">AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: AppmeshGatewayRouteSpecGrpcRouteAction;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: AppmeshGatewayRouteSpecGrpcRouteMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecGrpcRoute;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putRewrite">putRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resetRewrite">resetRewrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRewrite` <a name="putRewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putRewrite"></a>

```typescript
public putRewrite(value: AppmeshGatewayRouteSpecHttp2RouteActionRewrite): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putRewrite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putTarget"></a>

```typescript
public putTarget(value: AppmeshGatewayRouteSpecHttp2RouteActionTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a>

---

##### `resetRewrite` <a name="resetRewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resetRewrite"></a>

```typescript
public resetRewrite(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.rewrite">rewrite</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.rewriteInput">rewriteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rewrite`<sup>Required</sup> <a name="rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.rewrite"></a>

```typescript
public readonly rewrite: AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.target"></a>

```typescript
public readonly target: AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference</a>

---

##### `rewriteInput`<sup>Optional</sup> <a name="rewriteInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.rewriteInput"></a>

```typescript
public readonly rewriteInput: AppmeshGatewayRouteSpecHttp2RouteActionRewrite;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: AppmeshGatewayRouteSpecHttp2RouteActionTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecHttp2RouteAction;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.defaultTargetHostnameInput">defaultTargetHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.defaultTargetHostname">defaultTargetHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultTargetHostnameInput`<sup>Optional</sup> <a name="defaultTargetHostnameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.defaultTargetHostnameInput"></a>

```typescript
public readonly defaultTargetHostnameInput: string;
```

- *Type:* string

---

##### `defaultTargetHostname`<sup>Required</sup> <a name="defaultTargetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.defaultTargetHostname"></a>

```typescript
public readonly defaultTargetHostname: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putHostname">putHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putPrefix">putPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostname` <a name="putHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putHostname"></a>

```typescript
public putHostname(value: AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putHostname.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a>

---

##### `putPrefix` <a name="putPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putPrefix"></a>

```typescript
public putPrefix(value: AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putPrefix.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a>

---

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.prefix">prefix</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.hostnameInput">hostnameInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.prefixInput">prefixInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.hostname"></a>

```typescript
public readonly hostname: AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.prefix"></a>

```typescript
public readonly prefix: AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference</a>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecHttp2RouteActionRewrite;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resetDefaultPrefix">resetDefaultPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultPrefix` <a name="resetDefaultPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resetDefaultPrefix"></a>

```typescript
public resetDefaultPrefix(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.defaultPrefixInput">defaultPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.defaultPrefix">defaultPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultPrefixInput`<sup>Optional</sup> <a name="defaultPrefixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.defaultPrefixInput"></a>

```typescript
public readonly defaultPrefixInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `defaultPrefix`<sup>Required</sup> <a name="defaultPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.defaultPrefix"></a>

```typescript
public readonly defaultPrefix: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.putVirtualService">putVirtualService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVirtualService` <a name="putVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.putVirtualService"></a>

```typescript
public putVirtualService(value: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.putVirtualService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.virtualService">virtualService</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.virtualServiceInput">virtualServiceInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `virtualService`<sup>Required</sup> <a name="virtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.virtualService"></a>

```typescript
public readonly virtualService: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference</a>

---

##### `virtualServiceInput`<sup>Optional</sup> <a name="virtualServiceInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.virtualServiceInput"></a>

```typescript
public readonly virtualServiceInput: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecHttp2RouteActionTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput">virtualServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.virtualServiceName">virtualServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `virtualServiceNameInput`<sup>Optional</sup> <a name="virtualServiceNameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput"></a>

```typescript
public readonly virtualServiceNameInput: string;
```

- *Type:* string

---

##### `virtualServiceName`<sup>Required</sup> <a name="virtualServiceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.virtualServiceName"></a>

```typescript
public readonly virtualServiceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a>

---


### AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExact` <a name="resetExact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resetExact"></a>

```typescript
public resetExact(): void
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resetSuffix"></a>

```typescript
public resetSuffix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.exactInput">exactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.suffixInput">suffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.exact">exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.exactInput"></a>

```typescript
public readonly exactInput: string;
```

- *Type:* string

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.suffixInput"></a>

```typescript
public readonly suffixInput: string;
```

- *Type:* string

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecHttp2RouteMatchHostname;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a>

---


### AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putHostname">putHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostname` <a name="putHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putHostname"></a>

```typescript
public putHostname(value: AppmeshGatewayRouteSpecHttp2RouteMatchHostname): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putHostname.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a>

---

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.hostnameInput">hostnameInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.hostname"></a>

```typescript
public readonly hostname: AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference</a>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: AppmeshGatewayRouteSpecHttp2RouteMatchHostname;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecHttp2RouteMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a>

---


### AppmeshGatewayRouteSpecHttp2RouteOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putMatch">putMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putAction"></a>

```typescript
public putAction(value: AppmeshGatewayRouteSpecHttp2RouteAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a>

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putMatch"></a>

```typescript
public putMatch(value: AppmeshGatewayRouteSpecHttp2RouteMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.action"></a>

```typescript
public readonly action: AppmeshGatewayRouteSpecHttp2RouteActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.match"></a>

```typescript
public readonly match: AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: AppmeshGatewayRouteSpecHttp2RouteAction;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: AppmeshGatewayRouteSpecHttp2RouteMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecHttp2Route;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putRewrite">putRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.resetRewrite">resetRewrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRewrite` <a name="putRewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putRewrite"></a>

```typescript
public putRewrite(value: AppmeshGatewayRouteSpecHttpRouteActionRewrite): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putRewrite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putTarget"></a>

```typescript
public putTarget(value: AppmeshGatewayRouteSpecHttpRouteActionTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a>

---

##### `resetRewrite` <a name="resetRewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.resetRewrite"></a>

```typescript
public resetRewrite(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.rewrite">rewrite</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference">AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.rewriteInput">rewriteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rewrite`<sup>Required</sup> <a name="rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.rewrite"></a>

```typescript
public readonly rewrite: AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.target"></a>

```typescript
public readonly target: AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference">AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference</a>

---

##### `rewriteInput`<sup>Optional</sup> <a name="rewriteInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.rewriteInput"></a>

```typescript
public readonly rewriteInput: AppmeshGatewayRouteSpecHttpRouteActionRewrite;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: AppmeshGatewayRouteSpecHttpRouteActionTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecHttpRouteAction;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.defaultTargetHostnameInput">defaultTargetHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.defaultTargetHostname">defaultTargetHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultTargetHostnameInput`<sup>Optional</sup> <a name="defaultTargetHostnameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.defaultTargetHostnameInput"></a>

```typescript
public readonly defaultTargetHostnameInput: string;
```

- *Type:* string

---

##### `defaultTargetHostname`<sup>Required</sup> <a name="defaultTargetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.defaultTargetHostname"></a>

```typescript
public readonly defaultTargetHostname: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putHostname">putHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putPrefix">putPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostname` <a name="putHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putHostname"></a>

```typescript
public putHostname(value: AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putHostname.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a>

---

##### `putPrefix` <a name="putPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putPrefix"></a>

```typescript
public putPrefix(value: AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putPrefix.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a>

---

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.prefix">prefix</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.hostnameInput">hostnameInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.prefixInput">prefixInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.hostname"></a>

```typescript
public readonly hostname: AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.prefix"></a>

```typescript
public readonly prefix: AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference</a>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecHttpRouteActionRewrite;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resetDefaultPrefix">resetDefaultPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultPrefix` <a name="resetDefaultPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resetDefaultPrefix"></a>

```typescript
public resetDefaultPrefix(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.defaultPrefixInput">defaultPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.defaultPrefix">defaultPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultPrefixInput`<sup>Optional</sup> <a name="defaultPrefixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.defaultPrefixInput"></a>

```typescript
public readonly defaultPrefixInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `defaultPrefix`<sup>Required</sup> <a name="defaultPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.defaultPrefix"></a>

```typescript
public readonly defaultPrefix: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.putVirtualService">putVirtualService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVirtualService` <a name="putVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.putVirtualService"></a>

```typescript
public putVirtualService(value: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.putVirtualService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.virtualService">virtualService</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.virtualServiceInput">virtualServiceInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `virtualService`<sup>Required</sup> <a name="virtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.virtualService"></a>

```typescript
public readonly virtualService: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference</a>

---

##### `virtualServiceInput`<sup>Optional</sup> <a name="virtualServiceInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.virtualServiceInput"></a>

```typescript
public readonly virtualServiceInput: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecHttpRouteActionTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput">virtualServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.virtualServiceName">virtualServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `virtualServiceNameInput`<sup>Optional</sup> <a name="virtualServiceNameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput"></a>

```typescript
public readonly virtualServiceNameInput: string;
```

- *Type:* string

---

##### `virtualServiceName`<sup>Required</sup> <a name="virtualServiceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.virtualServiceName"></a>

```typescript
public readonly virtualServiceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a>

---


### AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExact` <a name="resetExact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resetExact"></a>

```typescript
public resetExact(): void
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resetSuffix"></a>

```typescript
public resetSuffix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.exactInput">exactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.suffixInput">suffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.exact">exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.exactInput"></a>

```typescript
public readonly exactInput: string;
```

- *Type:* string

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.suffixInput"></a>

```typescript
public readonly suffixInput: string;
```

- *Type:* string

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecHttpRouteMatchHostname;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a>

---


### AppmeshGatewayRouteSpecHttpRouteMatchOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteMatchOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putHostname">putHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostname` <a name="putHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putHostname"></a>

```typescript
public putHostname(value: AppmeshGatewayRouteSpecHttpRouteMatchHostname): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putHostname.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a>

---

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.hostnameInput">hostnameInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.hostname"></a>

```typescript
public readonly hostname: AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference</a>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: AppmeshGatewayRouteSpecHttpRouteMatchHostname;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecHttpRouteMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a>

---


### AppmeshGatewayRouteSpecHttpRouteOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putMatch">putMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putAction"></a>

```typescript
public putAction(value: AppmeshGatewayRouteSpecHttpRouteAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a>

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putMatch"></a>

```typescript
public putMatch(value: AppmeshGatewayRouteSpecHttpRouteMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference">AppmeshGatewayRouteSpecHttpRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.action"></a>

```typescript
public readonly action: AppmeshGatewayRouteSpecHttpRouteActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference">AppmeshGatewayRouteSpecHttpRouteActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.match"></a>

```typescript
public readonly match: AppmeshGatewayRouteSpecHttpRouteMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: AppmeshGatewayRouteSpecHttpRouteAction;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: AppmeshGatewayRouteSpecHttpRouteMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpecHttpRoute;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a>

---


### AppmeshGatewayRouteSpecOutputReference <a name="AppmeshGatewayRouteSpecOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.Initializer"></a>

```typescript
import { appmeshGatewayRoute } from '@cdktf/provider-aws'

new appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putGrpcRoute">putGrpcRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttp2Route">putHttp2Route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttpRoute">putHttpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetGrpcRoute">resetGrpcRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetHttp2Route">resetHttp2Route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetHttpRoute">resetHttpRoute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrpcRoute` <a name="putGrpcRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putGrpcRoute"></a>

```typescript
public putGrpcRoute(value: AppmeshGatewayRouteSpecGrpcRoute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putGrpcRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a>

---

##### `putHttp2Route` <a name="putHttp2Route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttp2Route"></a>

```typescript
public putHttp2Route(value: AppmeshGatewayRouteSpecHttp2Route): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttp2Route.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a>

---

##### `putHttpRoute` <a name="putHttpRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttpRoute"></a>

```typescript
public putHttpRoute(value: AppmeshGatewayRouteSpecHttpRoute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttpRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a>

---

##### `resetGrpcRoute` <a name="resetGrpcRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetGrpcRoute"></a>

```typescript
public resetGrpcRoute(): void
```

##### `resetHttp2Route` <a name="resetHttp2Route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetHttp2Route"></a>

```typescript
public resetHttp2Route(): void
```

##### `resetHttpRoute` <a name="resetHttpRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetHttpRoute"></a>

```typescript
public resetHttpRoute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.grpcRoute">grpcRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference">AppmeshGatewayRouteSpecGrpcRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.http2Route">http2Route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference">AppmeshGatewayRouteSpecHttp2RouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.httpRoute">httpRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference">AppmeshGatewayRouteSpecHttpRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.grpcRouteInput">grpcRouteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.http2RouteInput">http2RouteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.httpRouteInput">httpRouteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grpcRoute`<sup>Required</sup> <a name="grpcRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.grpcRoute"></a>

```typescript
public readonly grpcRoute: AppmeshGatewayRouteSpecGrpcRouteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference">AppmeshGatewayRouteSpecGrpcRouteOutputReference</a>

---

##### `http2Route`<sup>Required</sup> <a name="http2Route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.http2Route"></a>

```typescript
public readonly http2Route: AppmeshGatewayRouteSpecHttp2RouteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference">AppmeshGatewayRouteSpecHttp2RouteOutputReference</a>

---

##### `httpRoute`<sup>Required</sup> <a name="httpRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.httpRoute"></a>

```typescript
public readonly httpRoute: AppmeshGatewayRouteSpecHttpRouteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference">AppmeshGatewayRouteSpecHttpRouteOutputReference</a>

---

##### `grpcRouteInput`<sup>Optional</sup> <a name="grpcRouteInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.grpcRouteInput"></a>

```typescript
public readonly grpcRouteInput: AppmeshGatewayRouteSpecGrpcRoute;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a>

---

##### `http2RouteInput`<sup>Optional</sup> <a name="http2RouteInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.http2RouteInput"></a>

```typescript
public readonly http2RouteInput: AppmeshGatewayRouteSpecHttp2Route;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a>

---

##### `httpRouteInput`<sup>Optional</sup> <a name="httpRouteInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.httpRouteInput"></a>

```typescript
public readonly httpRouteInput: AppmeshGatewayRouteSpecHttpRoute;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshGatewayRouteSpec;
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a>

---



