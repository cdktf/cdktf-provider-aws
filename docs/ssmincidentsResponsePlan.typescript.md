# `ssmincidentsResponsePlan` Submodule <a name="`ssmincidentsResponsePlan` Submodule" id="@cdktf/provider-aws.ssmincidentsResponsePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmincidentsResponsePlan <a name="SsmincidentsResponsePlan" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan aws_ssmincidents_response_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

new ssmincidentsResponsePlan.SsmincidentsResponsePlan(scope: Construct, id: string, config: SsmincidentsResponsePlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig">SsmincidentsResponsePlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig">SsmincidentsResponsePlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate">putIncidentTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegration">putIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetChatChannel">resetChatChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetEngagements">resetEngagements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetIntegration">resetIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putAction"></a>

```typescript
public putAction(value: SsmincidentsResponsePlanAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a>

---

##### `putIncidentTemplate` <a name="putIncidentTemplate" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate"></a>

```typescript
public putIncidentTemplate(value: SsmincidentsResponsePlanIncidentTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

---

##### `putIntegration` <a name="putIntegration" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegration"></a>

```typescript
public putIntegration(value: SsmincidentsResponsePlanIntegration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetChatChannel` <a name="resetChatChannel" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetChatChannel"></a>

```typescript
public resetChatChannel(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEngagements` <a name="resetEngagements" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetEngagements"></a>

```typescript
public resetEngagements(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIntegration` <a name="resetIntegration" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetIntegration"></a>

```typescript
public resetIntegration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SsmincidentsResponsePlan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SsmincidentsResponsePlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmincidentsResponsePlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmincidentsResponsePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SsmincidentsResponsePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference">SsmincidentsResponsePlanActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplate">incidentTemplate</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference">SsmincidentsResponsePlanIncidentTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integration">integration</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference">SsmincidentsResponsePlanIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannelInput">chatChannelInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagementsInput">engagementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplateInput">incidentTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrationInput">integrationInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannel">chatChannel</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagements">engagements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.action"></a>

```typescript
public readonly action: SsmincidentsResponsePlanActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference">SsmincidentsResponsePlanActionOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `incidentTemplate`<sup>Required</sup> <a name="incidentTemplate" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplate"></a>

```typescript
public readonly incidentTemplate: SsmincidentsResponsePlanIncidentTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference">SsmincidentsResponsePlanIncidentTemplateOutputReference</a>

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integration"></a>

```typescript
public readonly integration: SsmincidentsResponsePlanIntegrationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference">SsmincidentsResponsePlanIntegrationOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actionInput"></a>

```typescript
public readonly actionInput: SsmincidentsResponsePlanAction;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a>

---

##### `chatChannelInput`<sup>Optional</sup> <a name="chatChannelInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannelInput"></a>

```typescript
public readonly chatChannelInput: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `engagementsInput`<sup>Optional</sup> <a name="engagementsInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagementsInput"></a>

```typescript
public readonly engagementsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `incidentTemplateInput`<sup>Optional</sup> <a name="incidentTemplateInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplateInput"></a>

```typescript
public readonly incidentTemplateInput: SsmincidentsResponsePlanIncidentTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

---

##### `integrationInput`<sup>Optional</sup> <a name="integrationInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrationInput"></a>

```typescript
public readonly integrationInput: SsmincidentsResponsePlanIntegration;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `chatChannel`<sup>Required</sup> <a name="chatChannel" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannel"></a>

```typescript
public readonly chatChannel: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `engagements`<sup>Required</sup> <a name="engagements" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagements"></a>

```typescript
public readonly engagements: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmincidentsResponsePlanAction <a name="SsmincidentsResponsePlanAction" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction.Initializer"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

const ssmincidentsResponsePlanAction: ssmincidentsResponsePlan.SsmincidentsResponsePlanAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction.property.ssmAutomation">ssmAutomation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation">SsmincidentsResponsePlanActionSsmAutomation</a>[]</code> | ssm_automation block. |

---

##### `ssmAutomation`<sup>Optional</sup> <a name="ssmAutomation" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction.property.ssmAutomation"></a>

```typescript
public readonly ssmAutomation: IResolvable | SsmincidentsResponsePlanActionSsmAutomation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation">SsmincidentsResponsePlanActionSsmAutomation</a>[]

ssm_automation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#ssm_automation SsmincidentsResponsePlan#ssm_automation}

---

### SsmincidentsResponsePlanActionSsmAutomation <a name="SsmincidentsResponsePlanActionSsmAutomation" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.Initializer"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

const ssmincidentsResponsePlanActionSsmAutomation: ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.documentName">documentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#document_name SsmincidentsResponsePlan#document_name}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#role_arn SsmincidentsResponsePlan#role_arn}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.documentVersion">documentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#document_version SsmincidentsResponsePlan#document_version}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.dynamicParameters">dynamicParameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#dynamic_parameters SsmincidentsResponsePlan#dynamic_parameters}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter">SsmincidentsResponsePlanActionSsmAutomationParameter</a>[]</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.targetAccount">targetAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#target_account SsmincidentsResponsePlan#target_account}. |

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#document_name SsmincidentsResponsePlan#document_name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#role_arn SsmincidentsResponsePlan#role_arn}.

---

##### `documentVersion`<sup>Optional</sup> <a name="documentVersion" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.documentVersion"></a>

```typescript
public readonly documentVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#document_version SsmincidentsResponsePlan#document_version}.

---

##### `dynamicParameters`<sup>Optional</sup> <a name="dynamicParameters" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.dynamicParameters"></a>

```typescript
public readonly dynamicParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#dynamic_parameters SsmincidentsResponsePlan#dynamic_parameters}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | SsmincidentsResponsePlanActionSsmAutomationParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter">SsmincidentsResponsePlanActionSsmAutomationParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#parameter SsmincidentsResponsePlan#parameter}

---

##### `targetAccount`<sup>Optional</sup> <a name="targetAccount" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.targetAccount"></a>

```typescript
public readonly targetAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#target_account SsmincidentsResponsePlan#target_account}.

---

### SsmincidentsResponsePlanActionSsmAutomationParameter <a name="SsmincidentsResponsePlanActionSsmAutomationParameter" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter.Initializer"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

const ssmincidentsResponsePlanActionSsmAutomationParameter: ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#values SsmincidentsResponsePlan#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#values SsmincidentsResponsePlan#values}.

---

### SsmincidentsResponsePlanConfig <a name="SsmincidentsResponsePlanConfig" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.Initializer"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

const ssmincidentsResponsePlanConfig: ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.incidentTemplate">incidentTemplate</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | incident_template block. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.chatChannel">chatChannel</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#chat_channel SsmincidentsResponsePlan#chat_channel}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#display_name SsmincidentsResponsePlan#display_name}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.engagements">engagements</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#engagements SsmincidentsResponsePlan#engagements}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#id SsmincidentsResponsePlan#id}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.integration">integration</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a></code> | integration block. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#tags SsmincidentsResponsePlan#tags}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#tags_all SsmincidentsResponsePlan#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `incidentTemplate`<sup>Required</sup> <a name="incidentTemplate" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.incidentTemplate"></a>

```typescript
public readonly incidentTemplate: SsmincidentsResponsePlanIncidentTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

incident_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#incident_template SsmincidentsResponsePlan#incident_template}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.action"></a>

```typescript
public readonly action: SsmincidentsResponsePlanAction;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#action SsmincidentsResponsePlan#action}

---

##### `chatChannel`<sup>Optional</sup> <a name="chatChannel" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.chatChannel"></a>

```typescript
public readonly chatChannel: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#chat_channel SsmincidentsResponsePlan#chat_channel}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#display_name SsmincidentsResponsePlan#display_name}.

---

##### `engagements`<sup>Optional</sup> <a name="engagements" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.engagements"></a>

```typescript
public readonly engagements: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#engagements SsmincidentsResponsePlan#engagements}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#id SsmincidentsResponsePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.integration"></a>

```typescript
public readonly integration: SsmincidentsResponsePlanIntegration;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a>

integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#integration SsmincidentsResponsePlan#integration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#tags SsmincidentsResponsePlan#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#tags_all SsmincidentsResponsePlan#tags_all}.

---

### SsmincidentsResponsePlanIncidentTemplate <a name="SsmincidentsResponsePlanIncidentTemplate" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.Initializer"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

const ssmincidentsResponsePlanIncidentTemplate: ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.impact">impact</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#impact SsmincidentsResponsePlan#impact}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#title SsmincidentsResponsePlan#title}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.dedupeString">dedupeString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#dedupe_string SsmincidentsResponsePlan#dedupe_string}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.incidentTags">incidentTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#incident_tags SsmincidentsResponsePlan#incident_tags}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.notificationTarget">notificationTarget</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget">SsmincidentsResponsePlanIncidentTemplateNotificationTarget</a>[]</code> | notification_target block. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.summary">summary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#summary SsmincidentsResponsePlan#summary}. |

---

##### `impact`<sup>Required</sup> <a name="impact" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.impact"></a>

```typescript
public readonly impact: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#impact SsmincidentsResponsePlan#impact}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#title SsmincidentsResponsePlan#title}.

---

##### `dedupeString`<sup>Optional</sup> <a name="dedupeString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.dedupeString"></a>

```typescript
public readonly dedupeString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#dedupe_string SsmincidentsResponsePlan#dedupe_string}.

---

##### `incidentTags`<sup>Optional</sup> <a name="incidentTags" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.incidentTags"></a>

```typescript
public readonly incidentTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#incident_tags SsmincidentsResponsePlan#incident_tags}.

---

##### `notificationTarget`<sup>Optional</sup> <a name="notificationTarget" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.notificationTarget"></a>

```typescript
public readonly notificationTarget: IResolvable | SsmincidentsResponsePlanIncidentTemplateNotificationTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget">SsmincidentsResponsePlanIncidentTemplateNotificationTarget</a>[]

notification_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#notification_target SsmincidentsResponsePlan#notification_target}

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#summary SsmincidentsResponsePlan#summary}.

---

### SsmincidentsResponsePlanIncidentTemplateNotificationTarget <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTarget" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget.Initializer"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

const ssmincidentsResponsePlanIncidentTemplateNotificationTarget: ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#sns_topic_arn SsmincidentsResponsePlan#sns_topic_arn}. |

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#sns_topic_arn SsmincidentsResponsePlan#sns_topic_arn}.

---

### SsmincidentsResponsePlanIntegration <a name="SsmincidentsResponsePlanIntegration" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration.Initializer"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

const ssmincidentsResponsePlanIntegration: ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration.property.pagerduty">pagerduty</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty">SsmincidentsResponsePlanIntegrationPagerduty</a>[]</code> | pagerduty block. |

---

##### `pagerduty`<sup>Optional</sup> <a name="pagerduty" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration.property.pagerduty"></a>

```typescript
public readonly pagerduty: IResolvable | SsmincidentsResponsePlanIntegrationPagerduty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty">SsmincidentsResponsePlanIntegrationPagerduty</a>[]

pagerduty block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#pagerduty SsmincidentsResponsePlan#pagerduty}

---

### SsmincidentsResponsePlanIntegrationPagerduty <a name="SsmincidentsResponsePlanIntegrationPagerduty" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.Initializer"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

const ssmincidentsResponsePlanIntegrationPagerduty: ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.property.secretId">secretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#secret_id SsmincidentsResponsePlan#secret_id}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.property.serviceId">serviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#service_id SsmincidentsResponsePlan#service_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}.

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#secret_id SsmincidentsResponsePlan#secret_id}.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/ssmincidents_response_plan#service_id SsmincidentsResponsePlan#service_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmincidentsResponsePlanActionOutputReference <a name="SsmincidentsResponsePlanActionOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.Initializer"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

new ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.putSsmAutomation">putSsmAutomation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.resetSsmAutomation">resetSsmAutomation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSsmAutomation` <a name="putSsmAutomation" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.putSsmAutomation"></a>

```typescript
public putSsmAutomation(value: IResolvable | SsmincidentsResponsePlanActionSsmAutomation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.putSsmAutomation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation">SsmincidentsResponsePlanActionSsmAutomation</a>[]

---

##### `resetSsmAutomation` <a name="resetSsmAutomation" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.resetSsmAutomation"></a>

```typescript
public resetSsmAutomation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.ssmAutomation">ssmAutomation</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList">SsmincidentsResponsePlanActionSsmAutomationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.ssmAutomationInput">ssmAutomationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation">SsmincidentsResponsePlanActionSsmAutomation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ssmAutomation`<sup>Required</sup> <a name="ssmAutomation" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.ssmAutomation"></a>

```typescript
public readonly ssmAutomation: SsmincidentsResponsePlanActionSsmAutomationList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList">SsmincidentsResponsePlanActionSsmAutomationList</a>

---

##### `ssmAutomationInput`<sup>Optional</sup> <a name="ssmAutomationInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.ssmAutomationInput"></a>

```typescript
public readonly ssmAutomationInput: IResolvable | SsmincidentsResponsePlanActionSsmAutomation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation">SsmincidentsResponsePlanActionSsmAutomation</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsmincidentsResponsePlanAction;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a>

---


### SsmincidentsResponsePlanActionSsmAutomationList <a name="SsmincidentsResponsePlanActionSsmAutomationList" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

new ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.get"></a>

```typescript
public get(index: number): SsmincidentsResponsePlanActionSsmAutomationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation">SsmincidentsResponsePlanActionSsmAutomation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmincidentsResponsePlanActionSsmAutomation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation">SsmincidentsResponsePlanActionSsmAutomation</a>[]

---


### SsmincidentsResponsePlanActionSsmAutomationOutputReference <a name="SsmincidentsResponsePlanActionSsmAutomationOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

new ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetDocumentVersion">resetDocumentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetDynamicParameters">resetDynamicParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetTargetAccount">resetTargetAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameter` <a name="putParameter" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.putParameter"></a>

```typescript
public putParameter(value: IResolvable | SsmincidentsResponsePlanActionSsmAutomationParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter">SsmincidentsResponsePlanActionSsmAutomationParameter</a>[]

---

##### `resetDocumentVersion` <a name="resetDocumentVersion" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetDocumentVersion"></a>

```typescript
public resetDocumentVersion(): void
```

##### `resetDynamicParameters` <a name="resetDynamicParameters" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetDynamicParameters"></a>

```typescript
public resetDynamicParameters(): void
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetParameter"></a>

```typescript
public resetParameter(): void
```

##### `resetTargetAccount` <a name="resetTargetAccount" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetTargetAccount"></a>

```typescript
public resetTargetAccount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList">SsmincidentsResponsePlanActionSsmAutomationParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentNameInput">documentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentVersionInput">documentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.dynamicParametersInput">dynamicParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter">SsmincidentsResponsePlanActionSsmAutomationParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.targetAccountInput">targetAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentName">documentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentVersion">documentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.dynamicParameters">dynamicParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.targetAccount">targetAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation">SsmincidentsResponsePlanActionSsmAutomation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.parameter"></a>

```typescript
public readonly parameter: SsmincidentsResponsePlanActionSsmAutomationParameterList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList">SsmincidentsResponsePlanActionSsmAutomationParameterList</a>

---

##### `documentNameInput`<sup>Optional</sup> <a name="documentNameInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentNameInput"></a>

```typescript
public readonly documentNameInput: string;
```

- *Type:* string

---

##### `documentVersionInput`<sup>Optional</sup> <a name="documentVersionInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentVersionInput"></a>

```typescript
public readonly documentVersionInput: string;
```

- *Type:* string

---

##### `dynamicParametersInput`<sup>Optional</sup> <a name="dynamicParametersInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.dynamicParametersInput"></a>

```typescript
public readonly dynamicParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | SsmincidentsResponsePlanActionSsmAutomationParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter">SsmincidentsResponsePlanActionSsmAutomationParameter</a>[]

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `targetAccountInput`<sup>Optional</sup> <a name="targetAccountInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.targetAccountInput"></a>

```typescript
public readonly targetAccountInput: string;
```

- *Type:* string

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

---

##### `documentVersion`<sup>Required</sup> <a name="documentVersion" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentVersion"></a>

```typescript
public readonly documentVersion: string;
```

- *Type:* string

---

##### `dynamicParameters`<sup>Required</sup> <a name="dynamicParameters" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.dynamicParameters"></a>

```typescript
public readonly dynamicParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `targetAccount`<sup>Required</sup> <a name="targetAccount" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.targetAccount"></a>

```typescript
public readonly targetAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmincidentsResponsePlanActionSsmAutomation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation">SsmincidentsResponsePlanActionSsmAutomation</a>

---


### SsmincidentsResponsePlanActionSsmAutomationParameterList <a name="SsmincidentsResponsePlanActionSsmAutomationParameterList" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

new ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.get"></a>

```typescript
public get(index: number): SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter">SsmincidentsResponsePlanActionSsmAutomationParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmincidentsResponsePlanActionSsmAutomationParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter">SsmincidentsResponsePlanActionSsmAutomationParameter</a>[]

---


### SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference <a name="SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

new ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter">SsmincidentsResponsePlanActionSsmAutomationParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmincidentsResponsePlanActionSsmAutomationParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter">SsmincidentsResponsePlanActionSsmAutomationParameter</a>

---


### SsmincidentsResponsePlanIncidentTemplateNotificationTargetList <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTargetList" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

new ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.get"></a>

```typescript
public get(index: number): SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget">SsmincidentsResponsePlanIncidentTemplateNotificationTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmincidentsResponsePlanIncidentTemplateNotificationTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget">SsmincidentsResponsePlanIncidentTemplateNotificationTarget</a>[]

---


### SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

new ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget">SsmincidentsResponsePlanIncidentTemplateNotificationTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.snsTopicArnInput"></a>

```typescript
public readonly snsTopicArnInput: string;
```

- *Type:* string

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmincidentsResponsePlanIncidentTemplateNotificationTarget;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget">SsmincidentsResponsePlanIncidentTemplateNotificationTarget</a>

---


### SsmincidentsResponsePlanIncidentTemplateOutputReference <a name="SsmincidentsResponsePlanIncidentTemplateOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

new ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTarget">putNotificationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetDedupeString">resetDedupeString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetIncidentTags">resetIncidentTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetNotificationTarget">resetNotificationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetSummary">resetSummary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNotificationTarget` <a name="putNotificationTarget" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTarget"></a>

```typescript
public putNotificationTarget(value: IResolvable | SsmincidentsResponsePlanIncidentTemplateNotificationTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTarget.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget">SsmincidentsResponsePlanIncidentTemplateNotificationTarget</a>[]

---

##### `resetDedupeString` <a name="resetDedupeString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetDedupeString"></a>

```typescript
public resetDedupeString(): void
```

##### `resetIncidentTags` <a name="resetIncidentTags" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetIncidentTags"></a>

```typescript
public resetIncidentTags(): void
```

##### `resetNotificationTarget` <a name="resetNotificationTarget" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetNotificationTarget"></a>

```typescript
public resetNotificationTarget(): void
```

##### `resetSummary` <a name="resetSummary" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetSummary"></a>

```typescript
public resetSummary(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTarget">notificationTarget</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList">SsmincidentsResponsePlanIncidentTemplateNotificationTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeStringInput">dedupeStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impactInput">impactInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTagsInput">incidentTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargetInput">notificationTargetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget">SsmincidentsResponsePlanIncidentTemplateNotificationTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summaryInput">summaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString">dedupeString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact">impact</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags">incidentTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notificationTarget`<sup>Required</sup> <a name="notificationTarget" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTarget"></a>

```typescript
public readonly notificationTarget: SsmincidentsResponsePlanIncidentTemplateNotificationTargetList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList">SsmincidentsResponsePlanIncidentTemplateNotificationTargetList</a>

---

##### `dedupeStringInput`<sup>Optional</sup> <a name="dedupeStringInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeStringInput"></a>

```typescript
public readonly dedupeStringInput: string;
```

- *Type:* string

---

##### `impactInput`<sup>Optional</sup> <a name="impactInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impactInput"></a>

```typescript
public readonly impactInput: number;
```

- *Type:* number

---

##### `incidentTagsInput`<sup>Optional</sup> <a name="incidentTagsInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTagsInput"></a>

```typescript
public readonly incidentTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `notificationTargetInput`<sup>Optional</sup> <a name="notificationTargetInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargetInput"></a>

```typescript
public readonly notificationTargetInput: IResolvable | SsmincidentsResponsePlanIncidentTemplateNotificationTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget">SsmincidentsResponsePlanIncidentTemplateNotificationTarget</a>[]

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summaryInput"></a>

```typescript
public readonly summaryInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `dedupeString`<sup>Required</sup> <a name="dedupeString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString"></a>

```typescript
public readonly dedupeString: string;
```

- *Type:* string

---

##### `impact`<sup>Required</sup> <a name="impact" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact"></a>

```typescript
public readonly impact: number;
```

- *Type:* number

---

##### `incidentTags`<sup>Required</sup> <a name="incidentTags" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags"></a>

```typescript
public readonly incidentTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsmincidentsResponsePlanIncidentTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

---


### SsmincidentsResponsePlanIntegrationOutputReference <a name="SsmincidentsResponsePlanIntegrationOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.Initializer"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

new ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.putPagerduty">putPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.resetPagerduty">resetPagerduty</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPagerduty` <a name="putPagerduty" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.putPagerduty"></a>

```typescript
public putPagerduty(value: IResolvable | SsmincidentsResponsePlanIntegrationPagerduty[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.putPagerduty.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty">SsmincidentsResponsePlanIntegrationPagerduty</a>[]

---

##### `resetPagerduty` <a name="resetPagerduty" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.resetPagerduty"></a>

```typescript
public resetPagerduty(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList">SsmincidentsResponsePlanIntegrationPagerdutyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.pagerdutyInput">pagerdutyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty">SsmincidentsResponsePlanIntegrationPagerduty</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pagerduty`<sup>Required</sup> <a name="pagerduty" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.pagerduty"></a>

```typescript
public readonly pagerduty: SsmincidentsResponsePlanIntegrationPagerdutyList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList">SsmincidentsResponsePlanIntegrationPagerdutyList</a>

---

##### `pagerdutyInput`<sup>Optional</sup> <a name="pagerdutyInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.pagerdutyInput"></a>

```typescript
public readonly pagerdutyInput: IResolvable | SsmincidentsResponsePlanIntegrationPagerduty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty">SsmincidentsResponsePlanIntegrationPagerduty</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsmincidentsResponsePlanIntegration;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a>

---


### SsmincidentsResponsePlanIntegrationPagerdutyList <a name="SsmincidentsResponsePlanIntegrationPagerdutyList" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

new ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.get"></a>

```typescript
public get(index: number): SsmincidentsResponsePlanIntegrationPagerdutyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty">SsmincidentsResponsePlanIntegrationPagerduty</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmincidentsResponsePlanIntegrationPagerduty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty">SsmincidentsResponsePlanIntegrationPagerduty</a>[]

---


### SsmincidentsResponsePlanIntegrationPagerdutyOutputReference <a name="SsmincidentsResponsePlanIntegrationPagerdutyOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer"></a>

```typescript
import { ssmincidentsResponsePlan } from '@cdktf/provider-aws'

new ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.serviceIdInput">serviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty">SsmincidentsResponsePlanIntegrationPagerduty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.serviceIdInput"></a>

```typescript
public readonly serviceIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmincidentsResponsePlanIntegrationPagerduty;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty">SsmincidentsResponsePlanIntegrationPagerduty</a>

---



