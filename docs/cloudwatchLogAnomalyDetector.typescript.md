# `cloudwatchLogAnomalyDetector` Submodule <a name="`cloudwatchLogAnomalyDetector` Submodule" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogAnomalyDetector <a name="CloudwatchLogAnomalyDetector" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_log_anomaly_detector aws_cloudwatch_log_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer"></a>

```typescript
import { cloudwatchLogAnomalyDetector } from '@cdktf/provider-aws'

new cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector(scope: Construct, id: string, config: CloudwatchLogAnomalyDetectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig">CloudwatchLogAnomalyDetectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig">CloudwatchLogAnomalyDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetAnomalyVisibilityTime">resetAnomalyVisibilityTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetDetectorName">resetDetectorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetEvaluationFrequency">resetEvaluationFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetFilterPattern">resetFilterPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAnomalyVisibilityTime` <a name="resetAnomalyVisibilityTime" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetAnomalyVisibilityTime"></a>

```typescript
public resetAnomalyVisibilityTime(): void
```

##### `resetDetectorName` <a name="resetDetectorName" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetDetectorName"></a>

```typescript
public resetDetectorName(): void
```

##### `resetEvaluationFrequency` <a name="resetEvaluationFrequency" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetEvaluationFrequency"></a>

```typescript
public resetEvaluationFrequency(): void
```

##### `resetFilterPattern` <a name="resetFilterPattern" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetFilterPattern"></a>

```typescript
public resetFilterPattern(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudwatchLogAnomalyDetector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isConstruct"></a>

```typescript
import { cloudwatchLogAnomalyDetector } from '@cdktf/provider-aws'

cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isTerraformElement"></a>

```typescript
import { cloudwatchLogAnomalyDetector } from '@cdktf/provider-aws'

cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isTerraformResource"></a>

```typescript
import { cloudwatchLogAnomalyDetector } from '@cdktf/provider-aws'

cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.generateConfigForImport"></a>

```typescript
import { cloudwatchLogAnomalyDetector } from '@cdktf/provider-aws'

cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudwatchLogAnomalyDetector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchLogAnomalyDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchLogAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_log_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudwatchLogAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.anomalyVisibilityTimeInput">anomalyVisibilityTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.detectorNameInput">detectorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.evaluationFrequencyInput">evaluationFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.filterPatternInput">filterPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.logGroupArnListInput">logGroupArnListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.anomalyVisibilityTime">anomalyVisibilityTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.detectorName">detectorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.evaluationFrequency">evaluationFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.filterPattern">filterPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.logGroupArnList">logGroupArnList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `anomalyVisibilityTimeInput`<sup>Optional</sup> <a name="anomalyVisibilityTimeInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.anomalyVisibilityTimeInput"></a>

```typescript
public readonly anomalyVisibilityTimeInput: number;
```

- *Type:* number

---

##### `detectorNameInput`<sup>Optional</sup> <a name="detectorNameInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.detectorNameInput"></a>

```typescript
public readonly detectorNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `evaluationFrequencyInput`<sup>Optional</sup> <a name="evaluationFrequencyInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.evaluationFrequencyInput"></a>

```typescript
public readonly evaluationFrequencyInput: string;
```

- *Type:* string

---

##### `filterPatternInput`<sup>Optional</sup> <a name="filterPatternInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.filterPatternInput"></a>

```typescript
public readonly filterPatternInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `logGroupArnListInput`<sup>Optional</sup> <a name="logGroupArnListInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.logGroupArnListInput"></a>

```typescript
public readonly logGroupArnListInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `anomalyVisibilityTime`<sup>Required</sup> <a name="anomalyVisibilityTime" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.anomalyVisibilityTime"></a>

```typescript
public readonly anomalyVisibilityTime: number;
```

- *Type:* number

---

##### `detectorName`<sup>Required</sup> <a name="detectorName" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.detectorName"></a>

```typescript
public readonly detectorName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `evaluationFrequency`<sup>Required</sup> <a name="evaluationFrequency" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.evaluationFrequency"></a>

```typescript
public readonly evaluationFrequency: string;
```

- *Type:* string

---

##### `filterPattern`<sup>Required</sup> <a name="filterPattern" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.filterPattern"></a>

```typescript
public readonly filterPattern: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `logGroupArnList`<sup>Required</sup> <a name="logGroupArnList" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.logGroupArnList"></a>

```typescript
public readonly logGroupArnList: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogAnomalyDetectorConfig <a name="CloudwatchLogAnomalyDetectorConfig" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.Initializer"></a>

```typescript
import { cloudwatchLogAnomalyDetector } from '@cdktf/provider-aws'

const cloudwatchLogAnomalyDetectorConfig: cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_log_anomaly_detector#enabled CloudwatchLogAnomalyDetector#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.logGroupArnList">logGroupArnList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_log_anomaly_detector#log_group_arn_list CloudwatchLogAnomalyDetector#log_group_arn_list}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.anomalyVisibilityTime">anomalyVisibilityTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_log_anomaly_detector#anomaly_visibility_time CloudwatchLogAnomalyDetector#anomaly_visibility_time}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.detectorName">detectorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_log_anomaly_detector#detector_name CloudwatchLogAnomalyDetector#detector_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.evaluationFrequency">evaluationFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_log_anomaly_detector#evaluation_frequency CloudwatchLogAnomalyDetector#evaluation_frequency}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.filterPattern">filterPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_log_anomaly_detector#filter_pattern CloudwatchLogAnomalyDetector#filter_pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_log_anomaly_detector#kms_key_id CloudwatchLogAnomalyDetector#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_log_anomaly_detector#tags CloudwatchLogAnomalyDetector#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_log_anomaly_detector#enabled CloudwatchLogAnomalyDetector#enabled}.

---

##### `logGroupArnList`<sup>Required</sup> <a name="logGroupArnList" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.logGroupArnList"></a>

```typescript
public readonly logGroupArnList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_log_anomaly_detector#log_group_arn_list CloudwatchLogAnomalyDetector#log_group_arn_list}.

---

##### `anomalyVisibilityTime`<sup>Optional</sup> <a name="anomalyVisibilityTime" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.anomalyVisibilityTime"></a>

```typescript
public readonly anomalyVisibilityTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_log_anomaly_detector#anomaly_visibility_time CloudwatchLogAnomalyDetector#anomaly_visibility_time}.

---

##### `detectorName`<sup>Optional</sup> <a name="detectorName" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.detectorName"></a>

```typescript
public readonly detectorName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_log_anomaly_detector#detector_name CloudwatchLogAnomalyDetector#detector_name}.

---

##### `evaluationFrequency`<sup>Optional</sup> <a name="evaluationFrequency" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.evaluationFrequency"></a>

```typescript
public readonly evaluationFrequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_log_anomaly_detector#evaluation_frequency CloudwatchLogAnomalyDetector#evaluation_frequency}.

---

##### `filterPattern`<sup>Optional</sup> <a name="filterPattern" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.filterPattern"></a>

```typescript
public readonly filterPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_log_anomaly_detector#filter_pattern CloudwatchLogAnomalyDetector#filter_pattern}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_log_anomaly_detector#kms_key_id CloudwatchLogAnomalyDetector#kms_key_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_log_anomaly_detector#tags CloudwatchLogAnomalyDetector#tags}.

---



