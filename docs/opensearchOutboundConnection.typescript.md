# `opensearchOutboundConnection` Submodule <a name="`opensearchOutboundConnection` Submodule" id="@cdktf/provider-aws.opensearchOutboundConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchOutboundConnection <a name="OpensearchOutboundConnection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection aws_opensearch_outbound_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer"></a>

```typescript
import { opensearchOutboundConnection } from '@cdktf/provider-aws'

new opensearchOutboundConnection.OpensearchOutboundConnection(scope: Construct, id: string, config: OpensearchOutboundConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig">OpensearchOutboundConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig">OpensearchOutboundConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putConnectionProperties">putConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putLocalDomainInfo">putLocalDomainInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putRemoteDomainInfo">putRemoteDomainInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetAcceptConnection">resetAcceptConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetConnectionMode">resetConnectionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetConnectionProperties">resetConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectionProperties` <a name="putConnectionProperties" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putConnectionProperties"></a>

```typescript
public putConnectionProperties(value: OpensearchOutboundConnectionConnectionProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putConnectionProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a>

---

##### `putLocalDomainInfo` <a name="putLocalDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putLocalDomainInfo"></a>

```typescript
public putLocalDomainInfo(value: OpensearchOutboundConnectionLocalDomainInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putLocalDomainInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a>

---

##### `putRemoteDomainInfo` <a name="putRemoteDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putRemoteDomainInfo"></a>

```typescript
public putRemoteDomainInfo(value: OpensearchOutboundConnectionRemoteDomainInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putRemoteDomainInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: OpensearchOutboundConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a>

---

##### `resetAcceptConnection` <a name="resetAcceptConnection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetAcceptConnection"></a>

```typescript
public resetAcceptConnection(): void
```

##### `resetConnectionMode` <a name="resetConnectionMode" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetConnectionMode"></a>

```typescript
public resetConnectionMode(): void
```

##### `resetConnectionProperties` <a name="resetConnectionProperties" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetConnectionProperties"></a>

```typescript
public resetConnectionProperties(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpensearchOutboundConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isConstruct"></a>

```typescript
import { opensearchOutboundConnection } from '@cdktf/provider-aws'

opensearchOutboundConnection.OpensearchOutboundConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformElement"></a>

```typescript
import { opensearchOutboundConnection } from '@cdktf/provider-aws'

opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformResource"></a>

```typescript
import { opensearchOutboundConnection } from '@cdktf/provider-aws'

opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.generateConfigForImport"></a>

```typescript
import { opensearchOutboundConnection } from '@cdktf/provider-aws'

opensearchOutboundConnection.OpensearchOutboundConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OpensearchOutboundConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpensearchOutboundConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpensearchOutboundConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchOutboundConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionProperties">connectionProperties</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference">OpensearchOutboundConnectionConnectionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionStatus">connectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.localDomainInfo">localDomainInfo</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference">OpensearchOutboundConnectionLocalDomainInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.remoteDomainInfo">remoteDomainInfo</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference">OpensearchOutboundConnectionRemoteDomainInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference">OpensearchOutboundConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.acceptConnectionInput">acceptConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionAliasInput">connectionAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionModeInput">connectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionPropertiesInput">connectionPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.localDomainInfoInput">localDomainInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.remoteDomainInfoInput">remoteDomainInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.acceptConnection">acceptConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionAlias">connectionAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionMode">connectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionProperties`<sup>Required</sup> <a name="connectionProperties" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionProperties"></a>

```typescript
public readonly connectionProperties: OpensearchOutboundConnectionConnectionPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference">OpensearchOutboundConnectionConnectionPropertiesOutputReference</a>

---

##### `connectionStatus`<sup>Required</sup> <a name="connectionStatus" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionStatus"></a>

```typescript
public readonly connectionStatus: string;
```

- *Type:* string

---

##### `localDomainInfo`<sup>Required</sup> <a name="localDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.localDomainInfo"></a>

```typescript
public readonly localDomainInfo: OpensearchOutboundConnectionLocalDomainInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference">OpensearchOutboundConnectionLocalDomainInfoOutputReference</a>

---

##### `remoteDomainInfo`<sup>Required</sup> <a name="remoteDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.remoteDomainInfo"></a>

```typescript
public readonly remoteDomainInfo: OpensearchOutboundConnectionRemoteDomainInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference">OpensearchOutboundConnectionRemoteDomainInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.timeouts"></a>

```typescript
public readonly timeouts: OpensearchOutboundConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference">OpensearchOutboundConnectionTimeoutsOutputReference</a>

---

##### `acceptConnectionInput`<sup>Optional</sup> <a name="acceptConnectionInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.acceptConnectionInput"></a>

```typescript
public readonly acceptConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connectionAliasInput`<sup>Optional</sup> <a name="connectionAliasInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionAliasInput"></a>

```typescript
public readonly connectionAliasInput: string;
```

- *Type:* string

---

##### `connectionModeInput`<sup>Optional</sup> <a name="connectionModeInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionModeInput"></a>

```typescript
public readonly connectionModeInput: string;
```

- *Type:* string

---

##### `connectionPropertiesInput`<sup>Optional</sup> <a name="connectionPropertiesInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionPropertiesInput"></a>

```typescript
public readonly connectionPropertiesInput: OpensearchOutboundConnectionConnectionProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localDomainInfoInput`<sup>Optional</sup> <a name="localDomainInfoInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.localDomainInfoInput"></a>

```typescript
public readonly localDomainInfoInput: OpensearchOutboundConnectionLocalDomainInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `remoteDomainInfoInput`<sup>Optional</sup> <a name="remoteDomainInfoInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.remoteDomainInfoInput"></a>

```typescript
public readonly remoteDomainInfoInput: OpensearchOutboundConnectionRemoteDomainInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OpensearchOutboundConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a>

---

##### `acceptConnection`<sup>Required</sup> <a name="acceptConnection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.acceptConnection"></a>

```typescript
public readonly acceptConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connectionAlias`<sup>Required</sup> <a name="connectionAlias" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionAlias"></a>

```typescript
public readonly connectionAlias: string;
```

- *Type:* string

---

##### `connectionMode`<sup>Required</sup> <a name="connectionMode" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionMode"></a>

```typescript
public readonly connectionMode: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchOutboundConnectionConfig <a name="OpensearchOutboundConnectionConfig" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.Initializer"></a>

```typescript
import { opensearchOutboundConnection } from '@cdktf/provider-aws'

const opensearchOutboundConnectionConfig: opensearchOutboundConnection.OpensearchOutboundConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connectionAlias">connectionAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#connection_alias OpensearchOutboundConnection#connection_alias}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.localDomainInfo">localDomainInfo</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a></code> | local_domain_info block. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.remoteDomainInfo">remoteDomainInfo</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a></code> | remote_domain_info block. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.acceptConnection">acceptConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#accept_connection OpensearchOutboundConnection#accept_connection}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connectionMode">connectionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#connection_mode OpensearchOutboundConnection#connection_mode}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connectionProperties">connectionProperties</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a></code> | connection_properties block. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#id OpensearchOutboundConnection#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionAlias`<sup>Required</sup> <a name="connectionAlias" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connectionAlias"></a>

```typescript
public readonly connectionAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#connection_alias OpensearchOutboundConnection#connection_alias}.

---

##### `localDomainInfo`<sup>Required</sup> <a name="localDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.localDomainInfo"></a>

```typescript
public readonly localDomainInfo: OpensearchOutboundConnectionLocalDomainInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a>

local_domain_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#local_domain_info OpensearchOutboundConnection#local_domain_info}

---

##### `remoteDomainInfo`<sup>Required</sup> <a name="remoteDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.remoteDomainInfo"></a>

```typescript
public readonly remoteDomainInfo: OpensearchOutboundConnectionRemoteDomainInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a>

remote_domain_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#remote_domain_info OpensearchOutboundConnection#remote_domain_info}

---

##### `acceptConnection`<sup>Optional</sup> <a name="acceptConnection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.acceptConnection"></a>

```typescript
public readonly acceptConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#accept_connection OpensearchOutboundConnection#accept_connection}.

---

##### `connectionMode`<sup>Optional</sup> <a name="connectionMode" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connectionMode"></a>

```typescript
public readonly connectionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#connection_mode OpensearchOutboundConnection#connection_mode}.

---

##### `connectionProperties`<sup>Optional</sup> <a name="connectionProperties" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connectionProperties"></a>

```typescript
public readonly connectionProperties: OpensearchOutboundConnectionConnectionProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a>

connection_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#connection_properties OpensearchOutboundConnection#connection_properties}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#id OpensearchOutboundConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#region OpensearchOutboundConnection#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OpensearchOutboundConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#timeouts OpensearchOutboundConnection#timeouts}

---

### OpensearchOutboundConnectionConnectionProperties <a name="OpensearchOutboundConnectionConnectionProperties" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties.Initializer"></a>

```typescript
import { opensearchOutboundConnection } from '@cdktf/provider-aws'

const opensearchOutboundConnectionConnectionProperties: opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties.property.crossClusterSearch">crossClusterSearch</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a></code> | cross_cluster_search block. |

---

##### `crossClusterSearch`<sup>Optional</sup> <a name="crossClusterSearch" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties.property.crossClusterSearch"></a>

```typescript
public readonly crossClusterSearch: OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a>

cross_cluster_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#cross_cluster_search OpensearchOutboundConnection#cross_cluster_search}

---

### OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch <a name="OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch.Initializer"></a>

```typescript
import { opensearchOutboundConnection } from '@cdktf/provider-aws'

const opensearchOutboundConnectionConnectionPropertiesCrossClusterSearch: opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch.property.skipUnavailable">skipUnavailable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#skip_unavailable OpensearchOutboundConnection#skip_unavailable}. |

---

##### `skipUnavailable`<sup>Optional</sup> <a name="skipUnavailable" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch.property.skipUnavailable"></a>

```typescript
public readonly skipUnavailable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#skip_unavailable OpensearchOutboundConnection#skip_unavailable}.

---

### OpensearchOutboundConnectionLocalDomainInfo <a name="OpensearchOutboundConnectionLocalDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.Initializer"></a>

```typescript
import { opensearchOutboundConnection } from '@cdktf/provider-aws'

const opensearchOutboundConnectionLocalDomainInfo: opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.ownerId">ownerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#region OpensearchOutboundConnection#region}. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}.

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#region OpensearchOutboundConnection#region}.

---

### OpensearchOutboundConnectionRemoteDomainInfo <a name="OpensearchOutboundConnectionRemoteDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.Initializer"></a>

```typescript
import { opensearchOutboundConnection } from '@cdktf/provider-aws'

const opensearchOutboundConnectionRemoteDomainInfo: opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.ownerId">ownerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#region OpensearchOutboundConnection#region}. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}.

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#region OpensearchOutboundConnection#region}.

---

### OpensearchOutboundConnectionTimeouts <a name="OpensearchOutboundConnectionTimeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts.Initializer"></a>

```typescript
import { opensearchOutboundConnection } from '@cdktf/provider-aws'

const opensearchOutboundConnectionTimeouts: opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#create OpensearchOutboundConnection#create}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#delete OpensearchOutboundConnection#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#create OpensearchOutboundConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#delete OpensearchOutboundConnection#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference <a name="OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.Initializer"></a>

```typescript
import { opensearchOutboundConnection } from '@cdktf/provider-aws'

new opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.resetSkipUnavailable">resetSkipUnavailable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSkipUnavailable` <a name="resetSkipUnavailable" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.resetSkipUnavailable"></a>

```typescript
public resetSkipUnavailable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.skipUnavailableInput">skipUnavailableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.skipUnavailable">skipUnavailable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `skipUnavailableInput`<sup>Optional</sup> <a name="skipUnavailableInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.skipUnavailableInput"></a>

```typescript
public readonly skipUnavailableInput: string;
```

- *Type:* string

---

##### `skipUnavailable`<sup>Required</sup> <a name="skipUnavailable" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.skipUnavailable"></a>

```typescript
public readonly skipUnavailable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a>

---


### OpensearchOutboundConnectionConnectionPropertiesOutputReference <a name="OpensearchOutboundConnectionConnectionPropertiesOutputReference" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.Initializer"></a>

```typescript
import { opensearchOutboundConnection } from '@cdktf/provider-aws'

new opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.putCrossClusterSearch">putCrossClusterSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.resetCrossClusterSearch">resetCrossClusterSearch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCrossClusterSearch` <a name="putCrossClusterSearch" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.putCrossClusterSearch"></a>

```typescript
public putCrossClusterSearch(value: OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.putCrossClusterSearch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a>

---

##### `resetCrossClusterSearch` <a name="resetCrossClusterSearch" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.resetCrossClusterSearch"></a>

```typescript
public resetCrossClusterSearch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.crossClusterSearch">crossClusterSearch</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.crossClusterSearchInput">crossClusterSearchInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crossClusterSearch`<sup>Required</sup> <a name="crossClusterSearch" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.crossClusterSearch"></a>

```typescript
public readonly crossClusterSearch: OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `crossClusterSearchInput`<sup>Optional</sup> <a name="crossClusterSearchInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.crossClusterSearchInput"></a>

```typescript
public readonly crossClusterSearchInput: OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchOutboundConnectionConnectionProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a>

---


### OpensearchOutboundConnectionLocalDomainInfoOutputReference <a name="OpensearchOutboundConnectionLocalDomainInfoOutputReference" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.Initializer"></a>

```typescript
import { opensearchOutboundConnection } from '@cdktf/provider-aws'

new opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.ownerIdInput">ownerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `ownerIdInput`<sup>Optional</sup> <a name="ownerIdInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.ownerIdInput"></a>

```typescript
public readonly ownerIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchOutboundConnectionLocalDomainInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a>

---


### OpensearchOutboundConnectionRemoteDomainInfoOutputReference <a name="OpensearchOutboundConnectionRemoteDomainInfoOutputReference" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.Initializer"></a>

```typescript
import { opensearchOutboundConnection } from '@cdktf/provider-aws'

new opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.ownerIdInput">ownerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `ownerIdInput`<sup>Optional</sup> <a name="ownerIdInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.ownerIdInput"></a>

```typescript
public readonly ownerIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchOutboundConnectionRemoteDomainInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a>

---


### OpensearchOutboundConnectionTimeoutsOutputReference <a name="OpensearchOutboundConnectionTimeoutsOutputReference" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { opensearchOutboundConnection } from '@cdktf/provider-aws'

new opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchOutboundConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a>

---



