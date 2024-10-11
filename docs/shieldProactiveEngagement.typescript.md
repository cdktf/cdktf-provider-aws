# `shieldProactiveEngagement` Submodule <a name="`shieldProactiveEngagement` Submodule" id="@cdktf/provider-aws.shieldProactiveEngagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldProactiveEngagement <a name="ShieldProactiveEngagement" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/shield_proactive_engagement aws_shield_proactive_engagement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer"></a>

```typescript
import { shieldProactiveEngagement } from '@cdktf/provider-aws'

new shieldProactiveEngagement.ShieldProactiveEngagement(scope: Construct, id: string, config: ShieldProactiveEngagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig">ShieldProactiveEngagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig">ShieldProactiveEngagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContact">putEmergencyContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.resetEmergencyContact">resetEmergencyContact</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEmergencyContact` <a name="putEmergencyContact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContact"></a>

```typescript
public putEmergencyContact(value: IResolvable | ShieldProactiveEngagementEmergencyContact[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContact.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact">ShieldProactiveEngagementEmergencyContact</a>[]

---

##### `resetEmergencyContact` <a name="resetEmergencyContact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.resetEmergencyContact"></a>

```typescript
public resetEmergencyContact(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ShieldProactiveEngagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct"></a>

```typescript
import { shieldProactiveEngagement } from '@cdktf/provider-aws'

shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement"></a>

```typescript
import { shieldProactiveEngagement } from '@cdktf/provider-aws'

shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource"></a>

```typescript
import { shieldProactiveEngagement } from '@cdktf/provider-aws'

shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport"></a>

```typescript
import { shieldProactiveEngagement } from '@cdktf/provider-aws'

shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ShieldProactiveEngagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ShieldProactiveEngagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ShieldProactiveEngagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/shield_proactive_engagement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ShieldProactiveEngagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContact">emergencyContact</a></code> | <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList">ShieldProactiveEngagementEmergencyContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContactInput">emergencyContactInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact">ShieldProactiveEngagementEmergencyContact</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `emergencyContact`<sup>Required</sup> <a name="emergencyContact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContact"></a>

```typescript
public readonly emergencyContact: ShieldProactiveEngagementEmergencyContactList;
```

- *Type:* <a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList">ShieldProactiveEngagementEmergencyContactList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `emergencyContactInput`<sup>Optional</sup> <a name="emergencyContactInput" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContactInput"></a>

```typescript
public readonly emergencyContactInput: IResolvable | ShieldProactiveEngagementEmergencyContact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact">ShieldProactiveEngagementEmergencyContact</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldProactiveEngagementConfig <a name="ShieldProactiveEngagementConfig" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.Initializer"></a>

```typescript
import { shieldProactiveEngagement } from '@cdktf/provider-aws'

const shieldProactiveEngagementConfig: shieldProactiveEngagement.ShieldProactiveEngagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/shield_proactive_engagement#enabled ShieldProactiveEngagement#enabled}. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.emergencyContact">emergencyContact</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact">ShieldProactiveEngagementEmergencyContact</a>[]</code> | emergency_contact block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/shield_proactive_engagement#enabled ShieldProactiveEngagement#enabled}.

---

##### `emergencyContact`<sup>Optional</sup> <a name="emergencyContact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.emergencyContact"></a>

```typescript
public readonly emergencyContact: IResolvable | ShieldProactiveEngagementEmergencyContact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact">ShieldProactiveEngagementEmergencyContact</a>[]

emergency_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/shield_proactive_engagement#emergency_contact ShieldProactiveEngagement#emergency_contact}

---

### ShieldProactiveEngagementEmergencyContact <a name="ShieldProactiveEngagementEmergencyContact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.Initializer"></a>

```typescript
import { shieldProactiveEngagement } from '@cdktf/provider-aws'

const shieldProactiveEngagementEmergencyContact: shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.emailAddress">emailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/shield_proactive_engagement#email_address ShieldProactiveEngagement#email_address}. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.contactNotes">contactNotes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/shield_proactive_engagement#contact_notes ShieldProactiveEngagement#contact_notes}. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/shield_proactive_engagement#phone_number ShieldProactiveEngagement#phone_number}. |

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/shield_proactive_engagement#email_address ShieldProactiveEngagement#email_address}.

---

##### `contactNotes`<sup>Optional</sup> <a name="contactNotes" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.contactNotes"></a>

```typescript
public readonly contactNotes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/shield_proactive_engagement#contact_notes ShieldProactiveEngagement#contact_notes}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/shield_proactive_engagement#phone_number ShieldProactiveEngagement#phone_number}.

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldProactiveEngagementEmergencyContactList <a name="ShieldProactiveEngagementEmergencyContactList" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer"></a>

```typescript
import { shieldProactiveEngagement } from '@cdktf/provider-aws'

new shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.get"></a>

```typescript
public get(index: number): ShieldProactiveEngagementEmergencyContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact">ShieldProactiveEngagementEmergencyContact</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ShieldProactiveEngagementEmergencyContact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact">ShieldProactiveEngagementEmergencyContact</a>[]

---


### ShieldProactiveEngagementEmergencyContactOutputReference <a name="ShieldProactiveEngagementEmergencyContactOutputReference" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer"></a>

```typescript
import { shieldProactiveEngagement } from '@cdktf/provider-aws'

new shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resetContactNotes">resetContactNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContactNotes` <a name="resetContactNotes" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resetContactNotes"></a>

```typescript
public resetContactNotes(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.contactNotesInput">contactNotesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.contactNotes">contactNotes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact">ShieldProactiveEngagementEmergencyContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contactNotesInput`<sup>Optional</sup> <a name="contactNotesInput" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.contactNotesInput"></a>

```typescript
public readonly contactNotesInput: string;
```

- *Type:* string

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `contactNotes`<sup>Required</sup> <a name="contactNotes" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.contactNotes"></a>

```typescript
public readonly contactNotes: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ShieldProactiveEngagementEmergencyContact;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact">ShieldProactiveEngagementEmergencyContact</a>

---



