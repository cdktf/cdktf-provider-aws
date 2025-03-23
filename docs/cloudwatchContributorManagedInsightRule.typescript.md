# `cloudwatchContributorManagedInsightRule` Submodule <a name="`cloudwatchContributorManagedInsightRule` Submodule" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchContributorManagedInsightRule <a name="CloudwatchContributorManagedInsightRule" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/cloudwatch_contributor_managed_insight_rule aws_cloudwatch_contributor_managed_insight_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.Initializer"></a>

```typescript
import { cloudwatchContributorManagedInsightRule } from '@cdktf/provider-aws'

new cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule(scope: Construct, id: string, config: CloudwatchContributorManagedInsightRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig">CloudwatchContributorManagedInsightRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig">CloudwatchContributorManagedInsightRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudwatchContributorManagedInsightRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.isConstruct"></a>

```typescript
import { cloudwatchContributorManagedInsightRule } from '@cdktf/provider-aws'

cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.isTerraformElement"></a>

```typescript
import { cloudwatchContributorManagedInsightRule } from '@cdktf/provider-aws'

cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.isTerraformResource"></a>

```typescript
import { cloudwatchContributorManagedInsightRule } from '@cdktf/provider-aws'

cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.generateConfigForImport"></a>

```typescript
import { cloudwatchContributorManagedInsightRule } from '@cdktf/provider-aws'

cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudwatchContributorManagedInsightRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchContributorManagedInsightRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchContributorManagedInsightRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/cloudwatch_contributor_managed_insight_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudwatchContributorManagedInsightRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.templateNameInput">templateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.templateNameInput"></a>

```typescript
public readonly templateNameInput: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchContributorManagedInsightRuleConfig <a name="CloudwatchContributorManagedInsightRuleConfig" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.Initializer"></a>

```typescript
import { cloudwatchContributorManagedInsightRule } from '@cdktf/provider-aws'

const cloudwatchContributorManagedInsightRuleConfig: cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.resourceArn">resourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/cloudwatch_contributor_managed_insight_rule#resource_arn CloudwatchContributorManagedInsightRule#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.templateName">templateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/cloudwatch_contributor_managed_insight_rule#template_name CloudwatchContributorManagedInsightRule#template_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/cloudwatch_contributor_managed_insight_rule#state CloudwatchContributorManagedInsightRule#state}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/cloudwatch_contributor_managed_insight_rule#tags CloudwatchContributorManagedInsightRule#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/cloudwatch_contributor_managed_insight_rule#resource_arn CloudwatchContributorManagedInsightRule#resource_arn}.

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/cloudwatch_contributor_managed_insight_rule#template_name CloudwatchContributorManagedInsightRule#template_name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/cloudwatch_contributor_managed_insight_rule#state CloudwatchContributorManagedInsightRule#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchContributorManagedInsightRule.CloudwatchContributorManagedInsightRuleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/cloudwatch_contributor_managed_insight_rule#tags CloudwatchContributorManagedInsightRule#tags}.

---



