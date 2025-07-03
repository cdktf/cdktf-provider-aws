# `fisExperimentTemplate` Submodule <a name="`fisExperimentTemplate` Submodule" id="@cdktf/provider-aws.fisExperimentTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FisExperimentTemplate <a name="FisExperimentTemplate" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template aws_fis_experiment_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplate(scope: Construct, id: string, config: FisExperimentTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig">FisExperimentTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig">FisExperimentTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putExperimentOptions">putExperimentOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putExperimentReportConfiguration">putExperimentReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putLogConfiguration">putLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putStopCondition">putStopCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetExperimentOptions">resetExperimentOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetExperimentReportConfiguration">resetExperimentReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetLogConfiguration">resetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putAction"></a>

```typescript
public putAction(value: IResolvable | FisExperimentTemplateAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction">FisExperimentTemplateAction</a>[]

---

##### `putExperimentOptions` <a name="putExperimentOptions" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putExperimentOptions"></a>

```typescript
public putExperimentOptions(value: FisExperimentTemplateExperimentOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putExperimentOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

---

##### `putExperimentReportConfiguration` <a name="putExperimentReportConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putExperimentReportConfiguration"></a>

```typescript
public putExperimentReportConfiguration(value: FisExperimentTemplateExperimentReportConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putExperimentReportConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

---

##### `putLogConfiguration` <a name="putLogConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putLogConfiguration"></a>

```typescript
public putLogConfiguration(value: FisExperimentTemplateLogConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

---

##### `putStopCondition` <a name="putStopCondition" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putStopCondition"></a>

```typescript
public putStopCondition(value: IResolvable | FisExperimentTemplateStopCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putStopCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition">FisExperimentTemplateStopCondition</a>[]

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putTarget"></a>

```typescript
public putTarget(value: IResolvable | FisExperimentTemplateTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putTarget.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget">FisExperimentTemplateTarget</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putTimeouts"></a>

```typescript
public putTimeouts(value: FisExperimentTemplateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts">FisExperimentTemplateTimeouts</a>

---

##### `resetExperimentOptions` <a name="resetExperimentOptions" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetExperimentOptions"></a>

```typescript
public resetExperimentOptions(): void
```

##### `resetExperimentReportConfiguration` <a name="resetExperimentReportConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetExperimentReportConfiguration"></a>

```typescript
public resetExperimentReportConfiguration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogConfiguration` <a name="resetLogConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetLogConfiguration"></a>

```typescript
public resetLogConfiguration(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FisExperimentTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isConstruct"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

fisExperimentTemplate.FisExperimentTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isTerraformElement"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

fisExperimentTemplate.FisExperimentTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isTerraformResource"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

fisExperimentTemplate.FisExperimentTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FisExperimentTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FisExperimentTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FisExperimentTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FisExperimentTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList">FisExperimentTemplateActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.experimentOptions">experimentOptions</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference">FisExperimentTemplateExperimentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.experimentReportConfiguration">experimentReportConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference">FisExperimentTemplateLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.stopCondition">stopCondition</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList">FisExperimentTemplateStopConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList">FisExperimentTemplateTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference">FisExperimentTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.actionInput">actionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction">FisExperimentTemplateAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.experimentOptionsInput">experimentOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.experimentReportConfigurationInput">experimentReportConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.logConfigurationInput">logConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.stopConditionInput">stopConditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition">FisExperimentTemplateStopCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.targetInput">targetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget">FisExperimentTemplateTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts">FisExperimentTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.action"></a>

```typescript
public readonly action: FisExperimentTemplateActionList;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList">FisExperimentTemplateActionList</a>

---

##### `experimentOptions`<sup>Required</sup> <a name="experimentOptions" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.experimentOptions"></a>

```typescript
public readonly experimentOptions: FisExperimentTemplateExperimentOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference">FisExperimentTemplateExperimentOptionsOutputReference</a>

---

##### `experimentReportConfiguration`<sup>Required</sup> <a name="experimentReportConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.experimentReportConfiguration"></a>

```typescript
public readonly experimentReportConfiguration: FisExperimentTemplateExperimentReportConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputReference</a>

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: FisExperimentTemplateLogConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference">FisExperimentTemplateLogConfigurationOutputReference</a>

---

##### `stopCondition`<sup>Required</sup> <a name="stopCondition" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.stopCondition"></a>

```typescript
public readonly stopCondition: FisExperimentTemplateStopConditionList;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList">FisExperimentTemplateStopConditionList</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.target"></a>

```typescript
public readonly target: FisExperimentTemplateTargetList;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList">FisExperimentTemplateTargetList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.timeouts"></a>

```typescript
public readonly timeouts: FisExperimentTemplateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference">FisExperimentTemplateTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | FisExperimentTemplateAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction">FisExperimentTemplateAction</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `experimentOptionsInput`<sup>Optional</sup> <a name="experimentOptionsInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.experimentOptionsInput"></a>

```typescript
public readonly experimentOptionsInput: FisExperimentTemplateExperimentOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

---

##### `experimentReportConfigurationInput`<sup>Optional</sup> <a name="experimentReportConfigurationInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.experimentReportConfigurationInput"></a>

```typescript
public readonly experimentReportConfigurationInput: FisExperimentTemplateExperimentReportConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logConfigurationInput`<sup>Optional</sup> <a name="logConfigurationInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.logConfigurationInput"></a>

```typescript
public readonly logConfigurationInput: FisExperimentTemplateLogConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `stopConditionInput`<sup>Optional</sup> <a name="stopConditionInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.stopConditionInput"></a>

```typescript
public readonly stopConditionInput: IResolvable | FisExperimentTemplateStopCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition">FisExperimentTemplateStopCondition</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.targetInput"></a>

```typescript
public readonly targetInput: IResolvable | FisExperimentTemplateTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget">FisExperimentTemplateTarget</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FisExperimentTemplateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts">FisExperimentTemplateTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FisExperimentTemplateAction <a name="FisExperimentTemplateAction" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

const fisExperimentTemplateAction: fisExperimentTemplate.FisExperimentTemplateAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.actionId">actionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#action_id FisExperimentTemplate#action_id}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#name FisExperimentTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#description FisExperimentTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter">FisExperimentTemplateActionParameter</a>[]</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.startAfter">startAfter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#start_after FisExperimentTemplate#start_after}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget">FisExperimentTemplateActionTarget</a></code> | target block. |

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#action_id FisExperimentTemplate#action_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#name FisExperimentTemplate#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#description FisExperimentTemplate#description}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | FisExperimentTemplateActionParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter">FisExperimentTemplateActionParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#parameter FisExperimentTemplate#parameter}

---

##### `startAfter`<sup>Optional</sup> <a name="startAfter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.startAfter"></a>

```typescript
public readonly startAfter: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#start_after FisExperimentTemplate#start_after}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.target"></a>

```typescript
public readonly target: FisExperimentTemplateActionTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget">FisExperimentTemplateActionTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#target FisExperimentTemplate#target}

---

### FisExperimentTemplateActionParameter <a name="FisExperimentTemplateActionParameter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

const fisExperimentTemplateActionParameter: fisExperimentTemplate.FisExperimentTemplateActionParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#key FisExperimentTemplate#key}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#key FisExperimentTemplate#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}.

---

### FisExperimentTemplateActionTarget <a name="FisExperimentTemplateActionTarget" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

const fisExperimentTemplateActionTarget: fisExperimentTemplate.FisExperimentTemplateActionTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#key FisExperimentTemplate#key}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#key FisExperimentTemplate#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}.

---

### FisExperimentTemplateConfig <a name="FisExperimentTemplateConfig" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

const fisExperimentTemplateConfig: fisExperimentTemplate.FisExperimentTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.action">action</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction">FisExperimentTemplateAction</a>[]</code> | action block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#description FisExperimentTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#role_arn FisExperimentTemplate#role_arn}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.stopCondition">stopCondition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition">FisExperimentTemplateStopCondition</a>[]</code> | stop_condition block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.experimentOptions">experimentOptions</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a></code> | experiment_options block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.experimentReportConfiguration">experimentReportConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a></code> | experiment_report_configuration block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#id FisExperimentTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a></code> | log_configuration block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#tags FisExperimentTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#tags_all FisExperimentTemplate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.target">target</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget">FisExperimentTemplateTarget</a>[]</code> | target block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts">FisExperimentTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.action"></a>

```typescript
public readonly action: IResolvable | FisExperimentTemplateAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction">FisExperimentTemplateAction</a>[]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#action FisExperimentTemplate#action}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#description FisExperimentTemplate#description}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#role_arn FisExperimentTemplate#role_arn}.

---

##### `stopCondition`<sup>Required</sup> <a name="stopCondition" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.stopCondition"></a>

```typescript
public readonly stopCondition: IResolvable | FisExperimentTemplateStopCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition">FisExperimentTemplateStopCondition</a>[]

stop_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#stop_condition FisExperimentTemplate#stop_condition}

---

##### `experimentOptions`<sup>Optional</sup> <a name="experimentOptions" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.experimentOptions"></a>

```typescript
public readonly experimentOptions: FisExperimentTemplateExperimentOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

experiment_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#experiment_options FisExperimentTemplate#experiment_options}

---

##### `experimentReportConfiguration`<sup>Optional</sup> <a name="experimentReportConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.experimentReportConfiguration"></a>

```typescript
public readonly experimentReportConfiguration: FisExperimentTemplateExperimentReportConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

experiment_report_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#experiment_report_configuration FisExperimentTemplate#experiment_report_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#id FisExperimentTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logConfiguration`<sup>Optional</sup> <a name="logConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: FisExperimentTemplateLogConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

log_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#log_configuration FisExperimentTemplate#log_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#region FisExperimentTemplate#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#tags FisExperimentTemplate#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#tags_all FisExperimentTemplate#tags_all}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.target"></a>

```typescript
public readonly target: IResolvable | FisExperimentTemplateTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget">FisExperimentTemplateTarget</a>[]

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#target FisExperimentTemplate#target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FisExperimentTemplateTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts">FisExperimentTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#timeouts FisExperimentTemplate#timeouts}

---

### FisExperimentTemplateExperimentOptions <a name="FisExperimentTemplateExperimentOptions" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

const fisExperimentTemplateExperimentOptions: fisExperimentTemplate.FisExperimentTemplateExperimentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.property.accountTargeting">accountTargeting</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#account_targeting FisExperimentTemplate#account_targeting}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.property.emptyTargetResolutionMode">emptyTargetResolutionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#empty_target_resolution_mode FisExperimentTemplate#empty_target_resolution_mode}. |

---

##### `accountTargeting`<sup>Optional</sup> <a name="accountTargeting" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.property.accountTargeting"></a>

```typescript
public readonly accountTargeting: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#account_targeting FisExperimentTemplate#account_targeting}.

---

##### `emptyTargetResolutionMode`<sup>Optional</sup> <a name="emptyTargetResolutionMode" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.property.emptyTargetResolutionMode"></a>

```typescript
public readonly emptyTargetResolutionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#empty_target_resolution_mode FisExperimentTemplate#empty_target_resolution_mode}.

---

### FisExperimentTemplateExperimentReportConfiguration <a name="FisExperimentTemplateExperimentReportConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

const fisExperimentTemplateExperimentReportConfiguration: fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.dataSources">dataSources</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a></code> | data_sources block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.outputs">outputs</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a></code> | outputs block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.postExperimentDuration">postExperimentDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#post_experiment_duration FisExperimentTemplate#post_experiment_duration}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.preExperimentDuration">preExperimentDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#pre_experiment_duration FisExperimentTemplate#pre_experiment_duration}. |

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.dataSources"></a>

```typescript
public readonly dataSources: FisExperimentTemplateExperimentReportConfigurationDataSources;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a>

data_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#data_sources FisExperimentTemplate#data_sources}

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.outputs"></a>

```typescript
public readonly outputs: FisExperimentTemplateExperimentReportConfigurationOutputs;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a>

outputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#outputs FisExperimentTemplate#outputs}

---

##### `postExperimentDuration`<sup>Optional</sup> <a name="postExperimentDuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.postExperimentDuration"></a>

```typescript
public readonly postExperimentDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#post_experiment_duration FisExperimentTemplate#post_experiment_duration}.

---

##### `preExperimentDuration`<sup>Optional</sup> <a name="preExperimentDuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.preExperimentDuration"></a>

```typescript
public readonly preExperimentDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#pre_experiment_duration FisExperimentTemplate#pre_experiment_duration}.

---

### FisExperimentTemplateExperimentReportConfigurationDataSources <a name="FisExperimentTemplateExperimentReportConfigurationDataSources" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

const fisExperimentTemplateExperimentReportConfigurationDataSources: fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources.property.cloudwatchDashboard">cloudwatchDashboard</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard</a>[]</code> | cloudwatch_dashboard block. |

---

##### `cloudwatchDashboard`<sup>Optional</sup> <a name="cloudwatchDashboard" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources.property.cloudwatchDashboard"></a>

```typescript
public readonly cloudwatchDashboard: IResolvable | FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard</a>[]

cloudwatch_dashboard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#cloudwatch_dashboard FisExperimentTemplate#cloudwatch_dashboard}

---

### FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard <a name="FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

const fisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard: fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard.property.dashboardArn">dashboardArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#dashboard_arn FisExperimentTemplate#dashboard_arn}. |

---

##### `dashboardArn`<sup>Optional</sup> <a name="dashboardArn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard.property.dashboardArn"></a>

```typescript
public readonly dashboardArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#dashboard_arn FisExperimentTemplate#dashboard_arn}.

---

### FisExperimentTemplateExperimentReportConfigurationOutputs <a name="FisExperimentTemplateExperimentReportConfigurationOutputs" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

const fisExperimentTemplateExperimentReportConfigurationOutputs: fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration</a></code> | s3_configuration block. |

---

##### `s3Configuration`<sup>Optional</sup> <a name="s3Configuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration</a>

s3_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#s3_configuration FisExperimentTemplate#s3_configuration}

---

### FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration <a name="FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

const fisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration: fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}.

---

### FisExperimentTemplateLogConfiguration <a name="FisExperimentTemplateLogConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

const fisExperimentTemplateLogConfiguration: fisExperimentTemplate.FisExperimentTemplateLogConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.logSchemaVersion">logSchemaVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#log_schema_version FisExperimentTemplate#log_schema_version}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.cloudwatchLogsConfiguration">cloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a></code> | cloudwatch_logs_configuration block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a></code> | s3_configuration block. |

---

##### `logSchemaVersion`<sup>Required</sup> <a name="logSchemaVersion" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.logSchemaVersion"></a>

```typescript
public readonly logSchemaVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#log_schema_version FisExperimentTemplate#log_schema_version}.

---

##### `cloudwatchLogsConfiguration`<sup>Optional</sup> <a name="cloudwatchLogsConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.cloudwatchLogsConfiguration"></a>

```typescript
public readonly cloudwatchLogsConfiguration: FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

cloudwatch_logs_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#cloudwatch_logs_configuration FisExperimentTemplate#cloudwatch_logs_configuration}

---

##### `s3Configuration`<sup>Optional</sup> <a name="s3Configuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: FisExperimentTemplateLogConfigurationS3Configuration;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a>

s3_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#s3_configuration FisExperimentTemplate#s3_configuration}

---

### FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration <a name="FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

const fisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration: fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#log_group_arn FisExperimentTemplate#log_group_arn}. |

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#log_group_arn FisExperimentTemplate#log_group_arn}.

---

### FisExperimentTemplateLogConfigurationS3Configuration <a name="FisExperimentTemplateLogConfigurationS3Configuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

const fisExperimentTemplateLogConfigurationS3Configuration: fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}.

---

### FisExperimentTemplateStopCondition <a name="FisExperimentTemplateStopCondition" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

const fisExperimentTemplateStopCondition: fisExperimentTemplate.FisExperimentTemplateStopCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#source FisExperimentTemplate#source}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#source FisExperimentTemplate#source}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}.

---

### FisExperimentTemplateTarget <a name="FisExperimentTemplateTarget" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

const fisExperimentTemplateTarget: fisExperimentTemplate.FisExperimentTemplateTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#name FisExperimentTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#resource_type FisExperimentTemplate#resource_type}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.selectionMode">selectionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#selection_mode FisExperimentTemplate#selection_mode}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter">FisExperimentTemplateTargetFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#parameters FisExperimentTemplate#parameters}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.resourceArns">resourceArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#resource_arns FisExperimentTemplate#resource_arns}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.resourceTag">resourceTag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag">FisExperimentTemplateTargetResourceTag</a>[]</code> | resource_tag block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#name FisExperimentTemplate#name}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#resource_type FisExperimentTemplate#resource_type}.

---

##### `selectionMode`<sup>Required</sup> <a name="selectionMode" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.selectionMode"></a>

```typescript
public readonly selectionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#selection_mode FisExperimentTemplate#selection_mode}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.filter"></a>

```typescript
public readonly filter: IResolvable | FisExperimentTemplateTargetFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter">FisExperimentTemplateTargetFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#filter FisExperimentTemplate#filter}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#parameters FisExperimentTemplate#parameters}.

---

##### `resourceArns`<sup>Optional</sup> <a name="resourceArns" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.resourceArns"></a>

```typescript
public readonly resourceArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#resource_arns FisExperimentTemplate#resource_arns}.

---

##### `resourceTag`<sup>Optional</sup> <a name="resourceTag" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.resourceTag"></a>

```typescript
public readonly resourceTag: IResolvable | FisExperimentTemplateTargetResourceTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag">FisExperimentTemplateTargetResourceTag</a>[]

resource_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#resource_tag FisExperimentTemplate#resource_tag}

---

### FisExperimentTemplateTargetFilter <a name="FisExperimentTemplateTargetFilter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

const fisExperimentTemplateTargetFilter: fisExperimentTemplate.FisExperimentTemplateTargetFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#path FisExperimentTemplate#path}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#values FisExperimentTemplate#values}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#path FisExperimentTemplate#path}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#values FisExperimentTemplate#values}.

---

### FisExperimentTemplateTargetResourceTag <a name="FisExperimentTemplateTargetResourceTag" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

const fisExperimentTemplateTargetResourceTag: fisExperimentTemplate.FisExperimentTemplateTargetResourceTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#key FisExperimentTemplate#key}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#key FisExperimentTemplate#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}.

---

### FisExperimentTemplateTimeouts <a name="FisExperimentTemplateTimeouts" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

const fisExperimentTemplateTimeouts: fisExperimentTemplate.FisExperimentTemplateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#create FisExperimentTemplate#create}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#delete FisExperimentTemplate#delete}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#update FisExperimentTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#create FisExperimentTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#delete FisExperimentTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/fis_experiment_template#update FisExperimentTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FisExperimentTemplateActionList <a name="FisExperimentTemplateActionList" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.get"></a>

```typescript
public get(index: number): FisExperimentTemplateActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction">FisExperimentTemplateAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction">FisExperimentTemplateAction</a>[]

---


### FisExperimentTemplateActionOutputReference <a name="FisExperimentTemplateActionOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetStartAfter">resetStartAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameter` <a name="putParameter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.putParameter"></a>

```typescript
public putParameter(value: IResolvable | FisExperimentTemplateActionParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter">FisExperimentTemplateActionParameter</a>[]

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.putTarget"></a>

```typescript
public putTarget(value: FisExperimentTemplateActionTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget">FisExperimentTemplateActionTarget</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetParameter"></a>

```typescript
public resetParameter(): void
```

##### `resetStartAfter` <a name="resetStartAfter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetStartAfter"></a>

```typescript
public resetStartAfter(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList">FisExperimentTemplateActionParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference">FisExperimentTemplateActionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.actionIdInput">actionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter">FisExperimentTemplateActionParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.startAfterInput">startAfterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget">FisExperimentTemplateActionTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.actionId">actionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.startAfter">startAfter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction">FisExperimentTemplateAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.parameter"></a>

```typescript
public readonly parameter: FisExperimentTemplateActionParameterList;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList">FisExperimentTemplateActionParameterList</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.target"></a>

```typescript
public readonly target: FisExperimentTemplateActionTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference">FisExperimentTemplateActionTargetOutputReference</a>

---

##### `actionIdInput`<sup>Optional</sup> <a name="actionIdInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.actionIdInput"></a>

```typescript
public readonly actionIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | FisExperimentTemplateActionParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter">FisExperimentTemplateActionParameter</a>[]

---

##### `startAfterInput`<sup>Optional</sup> <a name="startAfterInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.startAfterInput"></a>

```typescript
public readonly startAfterInput: string[];
```

- *Type:* string[]

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: FisExperimentTemplateActionTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget">FisExperimentTemplateActionTarget</a>

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startAfter`<sup>Required</sup> <a name="startAfter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.startAfter"></a>

```typescript
public readonly startAfter: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateAction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction">FisExperimentTemplateAction</a>

---


### FisExperimentTemplateActionParameterList <a name="FisExperimentTemplateActionParameterList" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateActionParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.get"></a>

```typescript
public get(index: number): FisExperimentTemplateActionParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter">FisExperimentTemplateActionParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateActionParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter">FisExperimentTemplateActionParameter</a>[]

---


### FisExperimentTemplateActionParameterOutputReference <a name="FisExperimentTemplateActionParameterOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter">FisExperimentTemplateActionParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateActionParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter">FisExperimentTemplateActionParameter</a>

---


### FisExperimentTemplateActionTargetOutputReference <a name="FisExperimentTemplateActionTargetOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget">FisExperimentTemplateActionTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FisExperimentTemplateActionTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget">FisExperimentTemplateActionTarget</a>

---


### FisExperimentTemplateExperimentOptionsOutputReference <a name="FisExperimentTemplateExperimentOptionsOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resetAccountTargeting">resetAccountTargeting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resetEmptyTargetResolutionMode">resetEmptyTargetResolutionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountTargeting` <a name="resetAccountTargeting" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resetAccountTargeting"></a>

```typescript
public resetAccountTargeting(): void
```

##### `resetEmptyTargetResolutionMode` <a name="resetEmptyTargetResolutionMode" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resetEmptyTargetResolutionMode"></a>

```typescript
public resetEmptyTargetResolutionMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.accountTargetingInput">accountTargetingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionModeInput">emptyTargetResolutionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.accountTargeting">accountTargeting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionMode">emptyTargetResolutionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountTargetingInput`<sup>Optional</sup> <a name="accountTargetingInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.accountTargetingInput"></a>

```typescript
public readonly accountTargetingInput: string;
```

- *Type:* string

---

##### `emptyTargetResolutionModeInput`<sup>Optional</sup> <a name="emptyTargetResolutionModeInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionModeInput"></a>

```typescript
public readonly emptyTargetResolutionModeInput: string;
```

- *Type:* string

---

##### `accountTargeting`<sup>Required</sup> <a name="accountTargeting" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.accountTargeting"></a>

```typescript
public readonly accountTargeting: string;
```

- *Type:* string

---

##### `emptyTargetResolutionMode`<sup>Required</sup> <a name="emptyTargetResolutionMode" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionMode"></a>

```typescript
public readonly emptyTargetResolutionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FisExperimentTemplateExperimentOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

---


### FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList <a name="FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.get"></a>

```typescript
public get(index: number): FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard</a>[]

---


### FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.resetDashboardArn">resetDashboardArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDashboardArn` <a name="resetDashboardArn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.resetDashboardArn"></a>

```typescript
public resetDashboardArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.property.dashboardArnInput">dashboardArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.property.dashboardArn">dashboardArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dashboardArnInput`<sup>Optional</sup> <a name="dashboardArnInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.property.dashboardArnInput"></a>

```typescript
public readonly dashboardArnInput: string;
```

- *Type:* string

---

##### `dashboardArn`<sup>Required</sup> <a name="dashboardArn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.property.dashboardArn"></a>

```typescript
public readonly dashboardArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard</a>

---


### FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.putCloudwatchDashboard">putCloudwatchDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resetCloudwatchDashboard">resetCloudwatchDashboard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchDashboard` <a name="putCloudwatchDashboard" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.putCloudwatchDashboard"></a>

```typescript
public putCloudwatchDashboard(value: IResolvable | FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.putCloudwatchDashboard.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard</a>[]

---

##### `resetCloudwatchDashboard` <a name="resetCloudwatchDashboard" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resetCloudwatchDashboard"></a>

```typescript
public resetCloudwatchDashboard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboard">cloudwatchDashboard</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboardInput">cloudwatchDashboardInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchDashboard`<sup>Required</sup> <a name="cloudwatchDashboard" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboard"></a>

```typescript
public readonly cloudwatchDashboard: FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList</a>

---

##### `cloudwatchDashboardInput`<sup>Optional</sup> <a name="cloudwatchDashboardInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboardInput"></a>

```typescript
public readonly cloudwatchDashboardInput: IResolvable | FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FisExperimentTemplateExperimentReportConfigurationDataSources;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a>

---


### FisExperimentTemplateExperimentReportConfigurationOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putDataSources">putDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putOutputs">putOutputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetDataSources">resetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetOutputs">resetOutputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetPostExperimentDuration">resetPostExperimentDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetPreExperimentDuration">resetPreExperimentDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataSources` <a name="putDataSources" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putDataSources"></a>

```typescript
public putDataSources(value: FisExperimentTemplateExperimentReportConfigurationDataSources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putDataSources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a>

---

##### `putOutputs` <a name="putOutputs" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putOutputs"></a>

```typescript
public putOutputs(value: FisExperimentTemplateExperimentReportConfigurationOutputs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putOutputs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a>

---

##### `resetDataSources` <a name="resetDataSources" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetDataSources"></a>

```typescript
public resetDataSources(): void
```

##### `resetOutputs` <a name="resetOutputs" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetOutputs"></a>

```typescript
public resetOutputs(): void
```

##### `resetPostExperimentDuration` <a name="resetPostExperimentDuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetPostExperimentDuration"></a>

```typescript
public resetPostExperimentDuration(): void
```

##### `resetPreExperimentDuration` <a name="resetPreExperimentDuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetPreExperimentDuration"></a>

```typescript
public resetPreExperimentDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSources">dataSources</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference">FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputs">outputs</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSourcesInput">dataSourcesInput</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputsInput">outputsInput</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDurationInput">postExperimentDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDurationInput">preExperimentDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDuration">postExperimentDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDuration">preExperimentDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSources"></a>

```typescript
public readonly dataSources: FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference">FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputs"></a>

```typescript
public readonly outputs: FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference</a>

---

##### `dataSourcesInput`<sup>Optional</sup> <a name="dataSourcesInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSourcesInput"></a>

```typescript
public readonly dataSourcesInput: FisExperimentTemplateExperimentReportConfigurationDataSources;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a>

---

##### `outputsInput`<sup>Optional</sup> <a name="outputsInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputsInput"></a>

```typescript
public readonly outputsInput: FisExperimentTemplateExperimentReportConfigurationOutputs;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a>

---

##### `postExperimentDurationInput`<sup>Optional</sup> <a name="postExperimentDurationInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDurationInput"></a>

```typescript
public readonly postExperimentDurationInput: string;
```

- *Type:* string

---

##### `preExperimentDurationInput`<sup>Optional</sup> <a name="preExperimentDurationInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDurationInput"></a>

```typescript
public readonly preExperimentDurationInput: string;
```

- *Type:* string

---

##### `postExperimentDuration`<sup>Required</sup> <a name="postExperimentDuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDuration"></a>

```typescript
public readonly postExperimentDuration: string;
```

- *Type:* string

---

##### `preExperimentDuration`<sup>Required</sup> <a name="preExperimentDuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDuration"></a>

```typescript
public readonly preExperimentDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FisExperimentTemplateExperimentReportConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

---


### FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.putS3Configuration">putS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resetS3Configuration">resetS3Configuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Configuration` <a name="putS3Configuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.putS3Configuration"></a>

```typescript
public putS3Configuration(value: FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration</a>

---

##### `resetS3Configuration` <a name="resetS3Configuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resetS3Configuration"></a>

```typescript
public resetS3Configuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.s3ConfigurationInput">s3ConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference</a>

---

##### `s3ConfigurationInput`<sup>Optional</sup> <a name="s3ConfigurationInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.s3ConfigurationInput"></a>

```typescript
public readonly s3ConfigurationInput: FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FisExperimentTemplateExperimentReportConfigurationOutputs;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a>

---


### FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration</a>

---


### FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference <a name="FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArnInput"></a>

```typescript
public readonly logGroupArnInput: string;
```

- *Type:* string

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

---


### FisExperimentTemplateLogConfigurationOutputReference <a name="FisExperimentTemplateLogConfigurationOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putCloudwatchLogsConfiguration">putCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putS3Configuration">putS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetCloudwatchLogsConfiguration">resetCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetS3Configuration">resetS3Configuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogsConfiguration` <a name="putCloudwatchLogsConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putCloudwatchLogsConfiguration"></a>

```typescript
public putCloudwatchLogsConfiguration(value: FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putCloudwatchLogsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

---

##### `putS3Configuration` <a name="putS3Configuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putS3Configuration"></a>

```typescript
public putS3Configuration(value: FisExperimentTemplateLogConfigurationS3Configuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a>

---

##### `resetCloudwatchLogsConfiguration` <a name="resetCloudwatchLogsConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetCloudwatchLogsConfiguration"></a>

```typescript
public resetCloudwatchLogsConfiguration(): void
```

##### `resetS3Configuration` <a name="resetS3Configuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetS3Configuration"></a>

```typescript
public resetS3Configuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfiguration">cloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference">FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference">FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfigurationInput">cloudwatchLogsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersionInput">logSchemaVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.s3ConfigurationInput">s3ConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersion">logSchemaVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogsConfiguration`<sup>Required</sup> <a name="cloudwatchLogsConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfiguration"></a>

```typescript
public readonly cloudwatchLogsConfiguration: FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference">FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference</a>

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference">FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference</a>

---

##### `cloudwatchLogsConfigurationInput`<sup>Optional</sup> <a name="cloudwatchLogsConfigurationInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfigurationInput"></a>

```typescript
public readonly cloudwatchLogsConfigurationInput: FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

---

##### `logSchemaVersionInput`<sup>Optional</sup> <a name="logSchemaVersionInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersionInput"></a>

```typescript
public readonly logSchemaVersionInput: number;
```

- *Type:* number

---

##### `s3ConfigurationInput`<sup>Optional</sup> <a name="s3ConfigurationInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.s3ConfigurationInput"></a>

```typescript
public readonly s3ConfigurationInput: FisExperimentTemplateLogConfigurationS3Configuration;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a>

---

##### `logSchemaVersion`<sup>Required</sup> <a name="logSchemaVersion" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersion"></a>

```typescript
public readonly logSchemaVersion: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FisExperimentTemplateLogConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

---


### FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference <a name="FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FisExperimentTemplateLogConfigurationS3Configuration;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a>

---


### FisExperimentTemplateStopConditionList <a name="FisExperimentTemplateStopConditionList" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateStopConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.get"></a>

```typescript
public get(index: number): FisExperimentTemplateStopConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition">FisExperimentTemplateStopCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateStopCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition">FisExperimentTemplateStopCondition</a>[]

---


### FisExperimentTemplateStopConditionOutputReference <a name="FisExperimentTemplateStopConditionOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition">FisExperimentTemplateStopCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateStopCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition">FisExperimentTemplateStopCondition</a>

---


### FisExperimentTemplateTargetFilterList <a name="FisExperimentTemplateTargetFilterList" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateTargetFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.get"></a>

```typescript
public get(index: number): FisExperimentTemplateTargetFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter">FisExperimentTemplateTargetFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateTargetFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter">FisExperimentTemplateTargetFilter</a>[]

---


### FisExperimentTemplateTargetFilterOutputReference <a name="FisExperimentTemplateTargetFilterOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter">FisExperimentTemplateTargetFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateTargetFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter">FisExperimentTemplateTargetFilter</a>

---


### FisExperimentTemplateTargetList <a name="FisExperimentTemplateTargetList" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.get"></a>

```typescript
public get(index: number): FisExperimentTemplateTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget">FisExperimentTemplateTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget">FisExperimentTemplateTarget</a>[]

---


### FisExperimentTemplateTargetOutputReference <a name="FisExperimentTemplateTargetOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.putResourceTag">putResourceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetResourceArns">resetResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetResourceTag">resetResourceTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.putFilter"></a>

```typescript
public putFilter(value: IResolvable | FisExperimentTemplateTargetFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter">FisExperimentTemplateTargetFilter</a>[]

---

##### `putResourceTag` <a name="putResourceTag" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.putResourceTag"></a>

```typescript
public putResourceTag(value: IResolvable | FisExperimentTemplateTargetResourceTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.putResourceTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag">FisExperimentTemplateTargetResourceTag</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetResourceArns` <a name="resetResourceArns" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetResourceArns"></a>

```typescript
public resetResourceArns(): void
```

##### `resetResourceTag` <a name="resetResourceTag" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetResourceTag"></a>

```typescript
public resetResourceTag(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList">FisExperimentTemplateTargetFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceTag">resourceTag</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList">FisExperimentTemplateTargetResourceTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter">FisExperimentTemplateTargetFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceArnsInput">resourceArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceTagInput">resourceTagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag">FisExperimentTemplateTargetResourceTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.selectionModeInput">selectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceArns">resourceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.selectionMode">selectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget">FisExperimentTemplateTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.filter"></a>

```typescript
public readonly filter: FisExperimentTemplateTargetFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList">FisExperimentTemplateTargetFilterList</a>

---

##### `resourceTag`<sup>Required</sup> <a name="resourceTag" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceTag"></a>

```typescript
public readonly resourceTag: FisExperimentTemplateTargetResourceTagList;
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList">FisExperimentTemplateTargetResourceTagList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | FisExperimentTemplateTargetFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter">FisExperimentTemplateTargetFilter</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceArnsInput`<sup>Optional</sup> <a name="resourceArnsInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceArnsInput"></a>

```typescript
public readonly resourceArnsInput: string[];
```

- *Type:* string[]

---

##### `resourceTagInput`<sup>Optional</sup> <a name="resourceTagInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceTagInput"></a>

```typescript
public readonly resourceTagInput: IResolvable | FisExperimentTemplateTargetResourceTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag">FisExperimentTemplateTargetResourceTag</a>[]

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `selectionModeInput`<sup>Optional</sup> <a name="selectionModeInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.selectionModeInput"></a>

```typescript
public readonly selectionModeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceArns`<sup>Required</sup> <a name="resourceArns" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceArns"></a>

```typescript
public readonly resourceArns: string[];
```

- *Type:* string[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `selectionMode`<sup>Required</sup> <a name="selectionMode" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.selectionMode"></a>

```typescript
public readonly selectionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateTarget;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget">FisExperimentTemplateTarget</a>

---


### FisExperimentTemplateTargetResourceTagList <a name="FisExperimentTemplateTargetResourceTagList" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.get"></a>

```typescript
public get(index: number): FisExperimentTemplateTargetResourceTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag">FisExperimentTemplateTargetResourceTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateTargetResourceTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag">FisExperimentTemplateTargetResourceTag</a>[]

---


### FisExperimentTemplateTargetResourceTagOutputReference <a name="FisExperimentTemplateTargetResourceTagOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag">FisExperimentTemplateTargetResourceTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateTargetResourceTag;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag">FisExperimentTemplateTargetResourceTag</a>

---


### FisExperimentTemplateTimeoutsOutputReference <a name="FisExperimentTemplateTimeoutsOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.Initializer"></a>

```typescript
import { fisExperimentTemplate } from '@cdktf/provider-aws'

new fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts">FisExperimentTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FisExperimentTemplateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts">FisExperimentTemplateTimeouts</a>

---



