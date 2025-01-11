# `securitylakeAwsLogSource` Submodule <a name="`securitylakeAwsLogSource` Submodule" id="@cdktf/provider-aws.securitylakeAwsLogSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeAwsLogSource <a name="SecuritylakeAwsLogSource" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/securitylake_aws_log_source aws_securitylake_aws_log_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer"></a>

```typescript
import { securitylakeAwsLogSource } from '@cdktf/provider-aws'

new securitylakeAwsLogSource.SecuritylakeAwsLogSource(scope: Construct, id: string, config?: SecuritylakeAwsLogSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig">SecuritylakeAwsLogSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig">SecuritylakeAwsLogSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetSource">resetSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSource` <a name="putSource" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.putSource"></a>

```typescript
public putSource(value: IResolvable | SecuritylakeAwsLogSourceSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.putSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource">SecuritylakeAwsLogSourceSource</a>[]

---

##### `resetSource` <a name="resetSource" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetSource"></a>

```typescript
public resetSource(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecuritylakeAwsLogSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isConstruct"></a>

```typescript
import { securitylakeAwsLogSource } from '@cdktf/provider-aws'

securitylakeAwsLogSource.SecuritylakeAwsLogSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformElement"></a>

```typescript
import { securitylakeAwsLogSource } from '@cdktf/provider-aws'

securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformResource"></a>

```typescript
import { securitylakeAwsLogSource } from '@cdktf/provider-aws'

securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport"></a>

```typescript
import { securitylakeAwsLogSource } from '@cdktf/provider-aws'

securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecuritylakeAwsLogSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecuritylakeAwsLogSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecuritylakeAwsLogSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/securitylake_aws_log_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecuritylakeAwsLogSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList">SecuritylakeAwsLogSourceSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceInput">sourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource">SecuritylakeAwsLogSourceSource</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.source"></a>

```typescript
public readonly source: SecuritylakeAwsLogSourceSourceList;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList">SecuritylakeAwsLogSourceSourceList</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | SecuritylakeAwsLogSourceSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource">SecuritylakeAwsLogSourceSource</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeAwsLogSourceConfig <a name="SecuritylakeAwsLogSourceConfig" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.Initializer"></a>

```typescript
import { securitylakeAwsLogSource } from '@cdktf/provider-aws'

const securitylakeAwsLogSourceConfig: securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.source">source</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource">SecuritylakeAwsLogSourceSource</a>[]</code> | source block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.source"></a>

```typescript
public readonly source: IResolvable | SecuritylakeAwsLogSourceSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource">SecuritylakeAwsLogSourceSource</a>[]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/securitylake_aws_log_source#source SecuritylakeAwsLogSource#source}

---

### SecuritylakeAwsLogSourceSource <a name="SecuritylakeAwsLogSourceSource" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.Initializer"></a>

```typescript
import { securitylakeAwsLogSource } from '@cdktf/provider-aws'

const securitylakeAwsLogSourceSource: securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.regions">regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/securitylake_aws_log_source#regions SecuritylakeAwsLogSource#regions}. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.sourceName">sourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/securitylake_aws_log_source#source_name SecuritylakeAwsLogSource#source_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.accounts">accounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/securitylake_aws_log_source#accounts SecuritylakeAwsLogSource#accounts}. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.sourceVersion">sourceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/securitylake_aws_log_source#source_version SecuritylakeAwsLogSource#source_version}. |

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/securitylake_aws_log_source#regions SecuritylakeAwsLogSource#regions}.

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/securitylake_aws_log_source#source_name SecuritylakeAwsLogSource#source_name}.

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/securitylake_aws_log_source#accounts SecuritylakeAwsLogSource#accounts}.

---

##### `sourceVersion`<sup>Optional</sup> <a name="sourceVersion" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.sourceVersion"></a>

```typescript
public readonly sourceVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/securitylake_aws_log_source#source_version SecuritylakeAwsLogSource#source_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeAwsLogSourceSourceList <a name="SecuritylakeAwsLogSourceSourceList" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer"></a>

```typescript
import { securitylakeAwsLogSource } from '@cdktf/provider-aws'

new securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.get"></a>

```typescript
public get(index: number): SecuritylakeAwsLogSourceSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource">SecuritylakeAwsLogSourceSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeAwsLogSourceSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource">SecuritylakeAwsLogSourceSource</a>[]

---


### SecuritylakeAwsLogSourceSourceOutputReference <a name="SecuritylakeAwsLogSourceSourceOutputReference" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer"></a>

```typescript
import { securitylakeAwsLogSource } from '@cdktf/provider-aws'

new securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resetAccounts">resetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resetSourceVersion">resetSourceVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccounts` <a name="resetAccounts" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resetAccounts"></a>

```typescript
public resetAccounts(): void
```

##### `resetSourceVersion` <a name="resetSourceVersion" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resetSourceVersion"></a>

```typescript
public resetSourceVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.accountsInput">accountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceNameInput">sourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceVersionInput">sourceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.accounts">accounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceVersion">sourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource">SecuritylakeAwsLogSourceSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountsInput`<sup>Optional</sup> <a name="accountsInput" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.accountsInput"></a>

```typescript
public readonly accountsInput: string[];
```

- *Type:* string[]

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceNameInput"></a>

```typescript
public readonly sourceNameInput: string;
```

- *Type:* string

---

##### `sourceVersionInput`<sup>Optional</sup> <a name="sourceVersionInput" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceVersionInput"></a>

```typescript
public readonly sourceVersionInput: string;
```

- *Type:* string

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

##### `sourceVersion`<sup>Required</sup> <a name="sourceVersion" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceVersion"></a>

```typescript
public readonly sourceVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeAwsLogSourceSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource">SecuritylakeAwsLogSourceSource</a>

---



