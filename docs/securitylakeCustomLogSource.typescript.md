# `securitylakeCustomLogSource` Submodule <a name="`securitylakeCustomLogSource` Submodule" id="@cdktf/provider-aws.securitylakeCustomLogSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeCustomLogSource <a name="SecuritylakeCustomLogSource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/securitylake_custom_log_source aws_securitylake_custom_log_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

new securitylakeCustomLogSource.SecuritylakeCustomLogSource(scope: Construct, id: string, config: SecuritylakeCustomLogSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig">SecuritylakeCustomLogSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig">SecuritylakeCustomLogSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetEventClasses">resetEventClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetSourceVersion">resetSourceVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.putConfiguration"></a>

```typescript
public putConfiguration(value: IResolvable | SecuritylakeCustomLogSourceConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.putConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration">SecuritylakeCustomLogSourceConfiguration</a>[]

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetEventClasses` <a name="resetEventClasses" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetEventClasses"></a>

```typescript
public resetEventClasses(): void
```

##### `resetSourceVersion` <a name="resetSourceVersion" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetSourceVersion"></a>

```typescript
public resetSourceVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecuritylakeCustomLogSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isConstruct"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

securitylakeCustomLogSource.SecuritylakeCustomLogSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformElement"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformResource"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecuritylakeCustomLogSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecuritylakeCustomLogSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecuritylakeCustomLogSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/securitylake_custom_log_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecuritylakeCustomLogSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList">SecuritylakeCustomLogSourceAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList">SecuritylakeCustomLogSourceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.providerDetails">providerDetails</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList">SecuritylakeCustomLogSourceProviderDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.configurationInput">configurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration">SecuritylakeCustomLogSourceConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.eventClassesInput">eventClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceNameInput">sourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceVersionInput">sourceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.eventClasses">eventClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceVersion">sourceVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.attributes"></a>

```typescript
public readonly attributes: SecuritylakeCustomLogSourceAttributesList;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList">SecuritylakeCustomLogSourceAttributesList</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.configuration"></a>

```typescript
public readonly configuration: SecuritylakeCustomLogSourceConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList">SecuritylakeCustomLogSourceConfigurationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `providerDetails`<sup>Required</sup> <a name="providerDetails" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.providerDetails"></a>

```typescript
public readonly providerDetails: SecuritylakeCustomLogSourceProviderDetailsList;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList">SecuritylakeCustomLogSourceProviderDetailsList</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.configurationInput"></a>

```typescript
public readonly configurationInput: IResolvable | SecuritylakeCustomLogSourceConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration">SecuritylakeCustomLogSourceConfiguration</a>[]

---

##### `eventClassesInput`<sup>Optional</sup> <a name="eventClassesInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.eventClassesInput"></a>

```typescript
public readonly eventClassesInput: string[];
```

- *Type:* string[]

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceNameInput"></a>

```typescript
public readonly sourceNameInput: string;
```

- *Type:* string

---

##### `sourceVersionInput`<sup>Optional</sup> <a name="sourceVersionInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceVersionInput"></a>

```typescript
public readonly sourceVersionInput: string;
```

- *Type:* string

---

##### `eventClasses`<sup>Required</sup> <a name="eventClasses" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.eventClasses"></a>

```typescript
public readonly eventClasses: string[];
```

- *Type:* string[]

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

##### `sourceVersion`<sup>Required</sup> <a name="sourceVersion" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceVersion"></a>

```typescript
public readonly sourceVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeCustomLogSourceAttributes <a name="SecuritylakeCustomLogSourceAttributes" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributes.Initializer"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

const securitylakeCustomLogSourceAttributes: securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributes = { ... }
```


### SecuritylakeCustomLogSourceConfig <a name="SecuritylakeCustomLogSourceConfig" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.Initializer"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

const securitylakeCustomLogSourceConfig: securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.sourceName">sourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/securitylake_custom_log_source#source_name SecuritylakeCustomLogSource#source_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.configuration">configuration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration">SecuritylakeCustomLogSourceConfiguration</a>[]</code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.eventClasses">eventClasses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/securitylake_custom_log_source#event_classes SecuritylakeCustomLogSource#event_classes}. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.sourceVersion">sourceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/securitylake_custom_log_source#source_version SecuritylakeCustomLogSource#source_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/securitylake_custom_log_source#source_name SecuritylakeCustomLogSource#source_name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.configuration"></a>

```typescript
public readonly configuration: IResolvable | SecuritylakeCustomLogSourceConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration">SecuritylakeCustomLogSourceConfiguration</a>[]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/securitylake_custom_log_source#configuration SecuritylakeCustomLogSource#configuration}

---

##### `eventClasses`<sup>Optional</sup> <a name="eventClasses" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.eventClasses"></a>

```typescript
public readonly eventClasses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/securitylake_custom_log_source#event_classes SecuritylakeCustomLogSource#event_classes}.

---

##### `sourceVersion`<sup>Optional</sup> <a name="sourceVersion" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.sourceVersion"></a>

```typescript
public readonly sourceVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/securitylake_custom_log_source#source_version SecuritylakeCustomLogSource#source_version}.

---

### SecuritylakeCustomLogSourceConfiguration <a name="SecuritylakeCustomLogSourceConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration.Initializer"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

const securitylakeCustomLogSourceConfiguration: securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration.property.crawlerConfiguration">crawlerConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration">SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration</a>[]</code> | crawler_configuration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration.property.providerIdentity">providerIdentity</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity">SecuritylakeCustomLogSourceConfigurationProviderIdentity</a>[]</code> | provider_identity block. |

---

##### `crawlerConfiguration`<sup>Optional</sup> <a name="crawlerConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration.property.crawlerConfiguration"></a>

```typescript
public readonly crawlerConfiguration: IResolvable | SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration">SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration</a>[]

crawler_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/securitylake_custom_log_source#crawler_configuration SecuritylakeCustomLogSource#crawler_configuration}

---

##### `providerIdentity`<sup>Optional</sup> <a name="providerIdentity" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration.property.providerIdentity"></a>

```typescript
public readonly providerIdentity: IResolvable | SecuritylakeCustomLogSourceConfigurationProviderIdentity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity">SecuritylakeCustomLogSourceConfigurationProviderIdentity</a>[]

provider_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/securitylake_custom_log_source#provider_identity SecuritylakeCustomLogSource#provider_identity}

---

### SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration <a name="SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration.Initializer"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

const securitylakeCustomLogSourceConfigurationCrawlerConfiguration: securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/securitylake_custom_log_source#role_arn SecuritylakeCustomLogSource#role_arn}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/securitylake_custom_log_source#role_arn SecuritylakeCustomLogSource#role_arn}.

---

### SecuritylakeCustomLogSourceConfigurationProviderIdentity <a name="SecuritylakeCustomLogSourceConfigurationProviderIdentity" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity.Initializer"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

const securitylakeCustomLogSourceConfigurationProviderIdentity: securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/securitylake_custom_log_source#external_id SecuritylakeCustomLogSource#external_id}. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity.property.principal">principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/securitylake_custom_log_source#principal SecuritylakeCustomLogSource#principal}. |

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/securitylake_custom_log_source#external_id SecuritylakeCustomLogSource#external_id}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/securitylake_custom_log_source#principal SecuritylakeCustomLogSource#principal}.

---

### SecuritylakeCustomLogSourceProviderDetails <a name="SecuritylakeCustomLogSourceProviderDetails" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetails.Initializer"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

const securitylakeCustomLogSourceProviderDetails: securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeCustomLogSourceAttributesList <a name="SecuritylakeCustomLogSourceAttributesList" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

new securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.get"></a>

```typescript
public get(index: number): SecuritylakeCustomLogSourceAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SecuritylakeCustomLogSourceAttributesOutputReference <a name="SecuritylakeCustomLogSourceAttributesOutputReference" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

new securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.crawlerArn">crawlerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.databaseArn">databaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.tableArn">tableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributes">SecuritylakeCustomLogSourceAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crawlerArn`<sup>Required</sup> <a name="crawlerArn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.crawlerArn"></a>

```typescript
public readonly crawlerArn: string;
```

- *Type:* string

---

##### `databaseArn`<sup>Required</sup> <a name="databaseArn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.databaseArn"></a>

```typescript
public readonly databaseArn: string;
```

- *Type:* string

---

##### `tableArn`<sup>Required</sup> <a name="tableArn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.tableArn"></a>

```typescript
public readonly tableArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecuritylakeCustomLogSourceAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributes">SecuritylakeCustomLogSourceAttributes</a>

---


### SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList <a name="SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

new securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.get"></a>

```typescript
public get(index: number): SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration">SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration">SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration</a>[]

---


### SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference <a name="SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

new securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration">SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration">SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration</a>

---


### SecuritylakeCustomLogSourceConfigurationList <a name="SecuritylakeCustomLogSourceConfigurationList" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

new securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.get"></a>

```typescript
public get(index: number): SecuritylakeCustomLogSourceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration">SecuritylakeCustomLogSourceConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeCustomLogSourceConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration">SecuritylakeCustomLogSourceConfiguration</a>[]

---


### SecuritylakeCustomLogSourceConfigurationOutputReference <a name="SecuritylakeCustomLogSourceConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

new securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putCrawlerConfiguration">putCrawlerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putProviderIdentity">putProviderIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resetCrawlerConfiguration">resetCrawlerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resetProviderIdentity">resetProviderIdentity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCrawlerConfiguration` <a name="putCrawlerConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putCrawlerConfiguration"></a>

```typescript
public putCrawlerConfiguration(value: IResolvable | SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putCrawlerConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration">SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration</a>[]

---

##### `putProviderIdentity` <a name="putProviderIdentity" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putProviderIdentity"></a>

```typescript
public putProviderIdentity(value: IResolvable | SecuritylakeCustomLogSourceConfigurationProviderIdentity[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putProviderIdentity.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity">SecuritylakeCustomLogSourceConfigurationProviderIdentity</a>[]

---

##### `resetCrawlerConfiguration` <a name="resetCrawlerConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resetCrawlerConfiguration"></a>

```typescript
public resetCrawlerConfiguration(): void
```

##### `resetProviderIdentity` <a name="resetProviderIdentity" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resetProviderIdentity"></a>

```typescript
public resetProviderIdentity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.crawlerConfiguration">crawlerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList">SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.providerIdentity">providerIdentity</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList">SecuritylakeCustomLogSourceConfigurationProviderIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.crawlerConfigurationInput">crawlerConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration">SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.providerIdentityInput">providerIdentityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity">SecuritylakeCustomLogSourceConfigurationProviderIdentity</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration">SecuritylakeCustomLogSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crawlerConfiguration`<sup>Required</sup> <a name="crawlerConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.crawlerConfiguration"></a>

```typescript
public readonly crawlerConfiguration: SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList">SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList</a>

---

##### `providerIdentity`<sup>Required</sup> <a name="providerIdentity" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.providerIdentity"></a>

```typescript
public readonly providerIdentity: SecuritylakeCustomLogSourceConfigurationProviderIdentityList;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList">SecuritylakeCustomLogSourceConfigurationProviderIdentityList</a>

---

##### `crawlerConfigurationInput`<sup>Optional</sup> <a name="crawlerConfigurationInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.crawlerConfigurationInput"></a>

```typescript
public readonly crawlerConfigurationInput: IResolvable | SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration">SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration</a>[]

---

##### `providerIdentityInput`<sup>Optional</sup> <a name="providerIdentityInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.providerIdentityInput"></a>

```typescript
public readonly providerIdentityInput: IResolvable | SecuritylakeCustomLogSourceConfigurationProviderIdentity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity">SecuritylakeCustomLogSourceConfigurationProviderIdentity</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeCustomLogSourceConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration">SecuritylakeCustomLogSourceConfiguration</a>

---


### SecuritylakeCustomLogSourceConfigurationProviderIdentityList <a name="SecuritylakeCustomLogSourceConfigurationProviderIdentityList" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

new securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.get"></a>

```typescript
public get(index: number): SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity">SecuritylakeCustomLogSourceConfigurationProviderIdentity</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeCustomLogSourceConfigurationProviderIdentity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity">SecuritylakeCustomLogSourceConfigurationProviderIdentity</a>[]

---


### SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference <a name="SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

new securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity">SecuritylakeCustomLogSourceConfigurationProviderIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeCustomLogSourceConfigurationProviderIdentity;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity">SecuritylakeCustomLogSourceConfigurationProviderIdentity</a>

---


### SecuritylakeCustomLogSourceProviderDetailsList <a name="SecuritylakeCustomLogSourceProviderDetailsList" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

new securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.get"></a>

```typescript
public get(index: number): SecuritylakeCustomLogSourceProviderDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SecuritylakeCustomLogSourceProviderDetailsOutputReference <a name="SecuritylakeCustomLogSourceProviderDetailsOutputReference" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer"></a>

```typescript
import { securitylakeCustomLogSource } from '@cdktf/provider-aws'

new securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetails">SecuritylakeCustomLogSourceProviderDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecuritylakeCustomLogSourceProviderDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetails">SecuritylakeCustomLogSourceProviderDetails</a>

---



