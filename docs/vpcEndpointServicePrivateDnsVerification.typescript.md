# `vpcEndpointServicePrivateDnsVerification` Submodule <a name="`vpcEndpointServicePrivateDnsVerification` Submodule" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcEndpointServicePrivateDnsVerification <a name="VpcEndpointServicePrivateDnsVerification" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/vpc_endpoint_service_private_dns_verification aws_vpc_endpoint_service_private_dns_verification}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer"></a>

```typescript
import { vpcEndpointServicePrivateDnsVerification } from '@cdktf/provider-aws'

new vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification(scope: Construct, id: string, config: VpcEndpointServicePrivateDnsVerificationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig">VpcEndpointServicePrivateDnsVerificationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig">VpcEndpointServicePrivateDnsVerificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.resetWaitForVerification">resetWaitForVerification</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.putTimeouts"></a>

```typescript
public putTimeouts(value: VpcEndpointServicePrivateDnsVerificationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts">VpcEndpointServicePrivateDnsVerificationTimeouts</a>

---

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWaitForVerification` <a name="resetWaitForVerification" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.resetWaitForVerification"></a>

```typescript
public resetWaitForVerification(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpcEndpointServicePrivateDnsVerification resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isConstruct"></a>

```typescript
import { vpcEndpointServicePrivateDnsVerification } from '@cdktf/provider-aws'

vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isTerraformElement"></a>

```typescript
import { vpcEndpointServicePrivateDnsVerification } from '@cdktf/provider-aws'

vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isTerraformResource"></a>

```typescript
import { vpcEndpointServicePrivateDnsVerification } from '@cdktf/provider-aws'

vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.generateConfigForImport"></a>

```typescript
import { vpcEndpointServicePrivateDnsVerification } from '@cdktf/provider-aws'

vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpcEndpointServicePrivateDnsVerification resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcEndpointServicePrivateDnsVerification to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcEndpointServicePrivateDnsVerification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/vpc_endpoint_service_private_dns_verification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcEndpointServicePrivateDnsVerification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference">VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.serviceIdInput">serviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts">VpcEndpointServicePrivateDnsVerificationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.waitForVerificationInput">waitForVerificationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.waitForVerification">waitForVerification</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.timeouts"></a>

```typescript
public readonly timeouts: VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference">VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference</a>

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.serviceIdInput"></a>

```typescript
public readonly serviceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpcEndpointServicePrivateDnsVerificationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts">VpcEndpointServicePrivateDnsVerificationTimeouts</a>

---

##### `waitForVerificationInput`<sup>Optional</sup> <a name="waitForVerificationInput" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.waitForVerificationInput"></a>

```typescript
public readonly waitForVerificationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `waitForVerification`<sup>Required</sup> <a name="waitForVerification" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.waitForVerification"></a>

```typescript
public readonly waitForVerification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcEndpointServicePrivateDnsVerificationConfig <a name="VpcEndpointServicePrivateDnsVerificationConfig" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.Initializer"></a>

```typescript
import { vpcEndpointServicePrivateDnsVerification } from '@cdktf/provider-aws'

const vpcEndpointServicePrivateDnsVerificationConfig: vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.serviceId">serviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/vpc_endpoint_service_private_dns_verification#service_id VpcEndpointServicePrivateDnsVerification#service_id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts">VpcEndpointServicePrivateDnsVerificationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.waitForVerification">waitForVerification</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/vpc_endpoint_service_private_dns_verification#wait_for_verification VpcEndpointServicePrivateDnsVerification#wait_for_verification}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/vpc_endpoint_service_private_dns_verification#service_id VpcEndpointServicePrivateDnsVerification#service_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpcEndpointServicePrivateDnsVerificationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts">VpcEndpointServicePrivateDnsVerificationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/vpc_endpoint_service_private_dns_verification#timeouts VpcEndpointServicePrivateDnsVerification#timeouts}

---

##### `waitForVerification`<sup>Optional</sup> <a name="waitForVerification" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.waitForVerification"></a>

```typescript
public readonly waitForVerification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/vpc_endpoint_service_private_dns_verification#wait_for_verification VpcEndpointServicePrivateDnsVerification#wait_for_verification}.

---

### VpcEndpointServicePrivateDnsVerificationTimeouts <a name="VpcEndpointServicePrivateDnsVerificationTimeouts" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts.Initializer"></a>

```typescript
import { vpcEndpointServicePrivateDnsVerification } from '@cdktf/provider-aws'

const vpcEndpointServicePrivateDnsVerificationTimeouts: vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/vpc_endpoint_service_private_dns_verification#create VpcEndpointServicePrivateDnsVerification#create}

---

## Classes <a name="Classes" id="Classes"></a>

### VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference <a name="VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpcEndpointServicePrivateDnsVerification } from '@cdktf/provider-aws'

new vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts">VpcEndpointServicePrivateDnsVerificationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpcEndpointServicePrivateDnsVerificationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts">VpcEndpointServicePrivateDnsVerificationTimeouts</a>

---



