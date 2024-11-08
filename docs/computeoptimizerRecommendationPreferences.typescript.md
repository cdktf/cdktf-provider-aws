# `computeoptimizerRecommendationPreferences` Submodule <a name="`computeoptimizerRecommendationPreferences` Submodule" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeoptimizerRecommendationPreferences <a name="ComputeoptimizerRecommendationPreferences" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences aws_computeoptimizer_recommendation_preferences}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

new computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences(scope: Construct, id: string, config: ComputeoptimizerRecommendationPreferencesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig">ComputeoptimizerRecommendationPreferencesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig">ComputeoptimizerRecommendationPreferencesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putExternalMetricsPreference">putExternalMetricsPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putPreferredResource">putPreferredResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putUtilizationPreference">putUtilizationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetEnhancedInfrastructureMetrics">resetEnhancedInfrastructureMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetExternalMetricsPreference">resetExternalMetricsPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetInferredWorkloadTypes">resetInferredWorkloadTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetLookBackPeriod">resetLookBackPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetPreferredResource">resetPreferredResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetSavingsEstimationMode">resetSavingsEstimationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetUtilizationPreference">resetUtilizationPreference</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExternalMetricsPreference` <a name="putExternalMetricsPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putExternalMetricsPreference"></a>

```typescript
public putExternalMetricsPreference(value: IResolvable | ComputeoptimizerRecommendationPreferencesExternalMetricsPreference[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putExternalMetricsPreference.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference">ComputeoptimizerRecommendationPreferencesExternalMetricsPreference</a>[]

---

##### `putPreferredResource` <a name="putPreferredResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putPreferredResource"></a>

```typescript
public putPreferredResource(value: IResolvable | ComputeoptimizerRecommendationPreferencesPreferredResource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putPreferredResource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource">ComputeoptimizerRecommendationPreferencesPreferredResource</a>[]

---

##### `putScope` <a name="putScope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putScope"></a>

```typescript
public putScope(value: IResolvable | ComputeoptimizerRecommendationPreferencesScope[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putScope.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope">ComputeoptimizerRecommendationPreferencesScope</a>[]

---

##### `putUtilizationPreference` <a name="putUtilizationPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putUtilizationPreference"></a>

```typescript
public putUtilizationPreference(value: IResolvable | ComputeoptimizerRecommendationPreferencesUtilizationPreference[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putUtilizationPreference.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference">ComputeoptimizerRecommendationPreferencesUtilizationPreference</a>[]

---

##### `resetEnhancedInfrastructureMetrics` <a name="resetEnhancedInfrastructureMetrics" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetEnhancedInfrastructureMetrics"></a>

```typescript
public resetEnhancedInfrastructureMetrics(): void
```

##### `resetExternalMetricsPreference` <a name="resetExternalMetricsPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetExternalMetricsPreference"></a>

```typescript
public resetExternalMetricsPreference(): void
```

##### `resetInferredWorkloadTypes` <a name="resetInferredWorkloadTypes" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetInferredWorkloadTypes"></a>

```typescript
public resetInferredWorkloadTypes(): void
```

##### `resetLookBackPeriod` <a name="resetLookBackPeriod" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetLookBackPeriod"></a>

```typescript
public resetLookBackPeriod(): void
```

##### `resetPreferredResource` <a name="resetPreferredResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetPreferredResource"></a>

```typescript
public resetPreferredResource(): void
```

##### `resetSavingsEstimationMode` <a name="resetSavingsEstimationMode" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetSavingsEstimationMode"></a>

```typescript
public resetSavingsEstimationMode(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetUtilizationPreference` <a name="resetUtilizationPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetUtilizationPreference"></a>

```typescript
public resetUtilizationPreference(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeoptimizerRecommendationPreferences resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isConstruct"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isTerraformElement"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isTerraformResource"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.generateConfigForImport"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeoptimizerRecommendationPreferences resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeoptimizerRecommendationPreferences to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeoptimizerRecommendationPreferences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeoptimizerRecommendationPreferences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.externalMetricsPreference">externalMetricsPreference</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList">ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.preferredResource">preferredResource</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList">ComputeoptimizerRecommendationPreferencesPreferredResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList">ComputeoptimizerRecommendationPreferencesScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.utilizationPreference">utilizationPreference</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.enhancedInfrastructureMetricsInput">enhancedInfrastructureMetricsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.externalMetricsPreferenceInput">externalMetricsPreferenceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference">ComputeoptimizerRecommendationPreferencesExternalMetricsPreference</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.inferredWorkloadTypesInput">inferredWorkloadTypesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.lookBackPeriodInput">lookBackPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.preferredResourceInput">preferredResourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource">ComputeoptimizerRecommendationPreferencesPreferredResource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.savingsEstimationModeInput">savingsEstimationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.scopeInput">scopeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope">ComputeoptimizerRecommendationPreferencesScope</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.utilizationPreferenceInput">utilizationPreferenceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference">ComputeoptimizerRecommendationPreferencesUtilizationPreference</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.enhancedInfrastructureMetrics">enhancedInfrastructureMetrics</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.inferredWorkloadTypes">inferredWorkloadTypes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.lookBackPeriod">lookBackPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.savingsEstimationMode">savingsEstimationMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `externalMetricsPreference`<sup>Required</sup> <a name="externalMetricsPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.externalMetricsPreference"></a>

```typescript
public readonly externalMetricsPreference: ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList;
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList">ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `preferredResource`<sup>Required</sup> <a name="preferredResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.preferredResource"></a>

```typescript
public readonly preferredResource: ComputeoptimizerRecommendationPreferencesPreferredResourceList;
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList">ComputeoptimizerRecommendationPreferencesPreferredResourceList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.scope"></a>

```typescript
public readonly scope: ComputeoptimizerRecommendationPreferencesScopeList;
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList">ComputeoptimizerRecommendationPreferencesScopeList</a>

---

##### `utilizationPreference`<sup>Required</sup> <a name="utilizationPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.utilizationPreference"></a>

```typescript
public readonly utilizationPreference: ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList;
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList</a>

---

##### `enhancedInfrastructureMetricsInput`<sup>Optional</sup> <a name="enhancedInfrastructureMetricsInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.enhancedInfrastructureMetricsInput"></a>

```typescript
public readonly enhancedInfrastructureMetricsInput: string;
```

- *Type:* string

---

##### `externalMetricsPreferenceInput`<sup>Optional</sup> <a name="externalMetricsPreferenceInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.externalMetricsPreferenceInput"></a>

```typescript
public readonly externalMetricsPreferenceInput: IResolvable | ComputeoptimizerRecommendationPreferencesExternalMetricsPreference[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference">ComputeoptimizerRecommendationPreferencesExternalMetricsPreference</a>[]

---

##### `inferredWorkloadTypesInput`<sup>Optional</sup> <a name="inferredWorkloadTypesInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.inferredWorkloadTypesInput"></a>

```typescript
public readonly inferredWorkloadTypesInput: string;
```

- *Type:* string

---

##### `lookBackPeriodInput`<sup>Optional</sup> <a name="lookBackPeriodInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.lookBackPeriodInput"></a>

```typescript
public readonly lookBackPeriodInput: string;
```

- *Type:* string

---

##### `preferredResourceInput`<sup>Optional</sup> <a name="preferredResourceInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.preferredResourceInput"></a>

```typescript
public readonly preferredResourceInput: IResolvable | ComputeoptimizerRecommendationPreferencesPreferredResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource">ComputeoptimizerRecommendationPreferencesPreferredResource</a>[]

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `savingsEstimationModeInput`<sup>Optional</sup> <a name="savingsEstimationModeInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.savingsEstimationModeInput"></a>

```typescript
public readonly savingsEstimationModeInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.scopeInput"></a>

```typescript
public readonly scopeInput: IResolvable | ComputeoptimizerRecommendationPreferencesScope[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope">ComputeoptimizerRecommendationPreferencesScope</a>[]

---

##### `utilizationPreferenceInput`<sup>Optional</sup> <a name="utilizationPreferenceInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.utilizationPreferenceInput"></a>

```typescript
public readonly utilizationPreferenceInput: IResolvable | ComputeoptimizerRecommendationPreferencesUtilizationPreference[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference">ComputeoptimizerRecommendationPreferencesUtilizationPreference</a>[]

---

##### `enhancedInfrastructureMetrics`<sup>Required</sup> <a name="enhancedInfrastructureMetrics" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.enhancedInfrastructureMetrics"></a>

```typescript
public readonly enhancedInfrastructureMetrics: string;
```

- *Type:* string

---

##### `inferredWorkloadTypes`<sup>Required</sup> <a name="inferredWorkloadTypes" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.inferredWorkloadTypes"></a>

```typescript
public readonly inferredWorkloadTypes: string;
```

- *Type:* string

---

##### `lookBackPeriod`<sup>Required</sup> <a name="lookBackPeriod" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.lookBackPeriod"></a>

```typescript
public readonly lookBackPeriod: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `savingsEstimationMode`<sup>Required</sup> <a name="savingsEstimationMode" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.savingsEstimationMode"></a>

```typescript
public readonly savingsEstimationMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeoptimizerRecommendationPreferencesConfig <a name="ComputeoptimizerRecommendationPreferencesConfig" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.Initializer"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

const computeoptimizerRecommendationPreferencesConfig: computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#resource_type ComputeoptimizerRecommendationPreferences#resource_type}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.enhancedInfrastructureMetrics">enhancedInfrastructureMetrics</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#enhanced_infrastructure_metrics ComputeoptimizerRecommendationPreferences#enhanced_infrastructure_metrics}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.externalMetricsPreference">externalMetricsPreference</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference">ComputeoptimizerRecommendationPreferencesExternalMetricsPreference</a>[]</code> | external_metrics_preference block. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.inferredWorkloadTypes">inferredWorkloadTypes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#inferred_workload_types ComputeoptimizerRecommendationPreferences#inferred_workload_types}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.lookBackPeriod">lookBackPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#look_back_period ComputeoptimizerRecommendationPreferences#look_back_period}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.preferredResource">preferredResource</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource">ComputeoptimizerRecommendationPreferencesPreferredResource</a>[]</code> | preferred_resource block. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.savingsEstimationMode">savingsEstimationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#savings_estimation_mode ComputeoptimizerRecommendationPreferences#savings_estimation_mode}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.scope">scope</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope">ComputeoptimizerRecommendationPreferencesScope</a>[]</code> | scope block. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.utilizationPreference">utilizationPreference</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference">ComputeoptimizerRecommendationPreferencesUtilizationPreference</a>[]</code> | utilization_preference block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#resource_type ComputeoptimizerRecommendationPreferences#resource_type}.

---

##### `enhancedInfrastructureMetrics`<sup>Optional</sup> <a name="enhancedInfrastructureMetrics" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.enhancedInfrastructureMetrics"></a>

```typescript
public readonly enhancedInfrastructureMetrics: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#enhanced_infrastructure_metrics ComputeoptimizerRecommendationPreferences#enhanced_infrastructure_metrics}.

---

##### `externalMetricsPreference`<sup>Optional</sup> <a name="externalMetricsPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.externalMetricsPreference"></a>

```typescript
public readonly externalMetricsPreference: IResolvable | ComputeoptimizerRecommendationPreferencesExternalMetricsPreference[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference">ComputeoptimizerRecommendationPreferencesExternalMetricsPreference</a>[]

external_metrics_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#external_metrics_preference ComputeoptimizerRecommendationPreferences#external_metrics_preference}

---

##### `inferredWorkloadTypes`<sup>Optional</sup> <a name="inferredWorkloadTypes" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.inferredWorkloadTypes"></a>

```typescript
public readonly inferredWorkloadTypes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#inferred_workload_types ComputeoptimizerRecommendationPreferences#inferred_workload_types}.

---

##### `lookBackPeriod`<sup>Optional</sup> <a name="lookBackPeriod" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.lookBackPeriod"></a>

```typescript
public readonly lookBackPeriod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#look_back_period ComputeoptimizerRecommendationPreferences#look_back_period}.

---

##### `preferredResource`<sup>Optional</sup> <a name="preferredResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.preferredResource"></a>

```typescript
public readonly preferredResource: IResolvable | ComputeoptimizerRecommendationPreferencesPreferredResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource">ComputeoptimizerRecommendationPreferencesPreferredResource</a>[]

preferred_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#preferred_resource ComputeoptimizerRecommendationPreferences#preferred_resource}

---

##### `savingsEstimationMode`<sup>Optional</sup> <a name="savingsEstimationMode" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.savingsEstimationMode"></a>

```typescript
public readonly savingsEstimationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#savings_estimation_mode ComputeoptimizerRecommendationPreferences#savings_estimation_mode}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.scope"></a>

```typescript
public readonly scope: IResolvable | ComputeoptimizerRecommendationPreferencesScope[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope">ComputeoptimizerRecommendationPreferencesScope</a>[]

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#scope ComputeoptimizerRecommendationPreferences#scope}

---

##### `utilizationPreference`<sup>Optional</sup> <a name="utilizationPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.utilizationPreference"></a>

```typescript
public readonly utilizationPreference: IResolvable | ComputeoptimizerRecommendationPreferencesUtilizationPreference[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference">ComputeoptimizerRecommendationPreferencesUtilizationPreference</a>[]

utilization_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#utilization_preference ComputeoptimizerRecommendationPreferences#utilization_preference}

---

### ComputeoptimizerRecommendationPreferencesExternalMetricsPreference <a name="ComputeoptimizerRecommendationPreferencesExternalMetricsPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference.Initializer"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

const computeoptimizerRecommendationPreferencesExternalMetricsPreference: computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#source ComputeoptimizerRecommendationPreferences#source}. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#source ComputeoptimizerRecommendationPreferences#source}.

---

### ComputeoptimizerRecommendationPreferencesPreferredResource <a name="ComputeoptimizerRecommendationPreferencesPreferredResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.Initializer"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

const computeoptimizerRecommendationPreferencesPreferredResource: computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#name ComputeoptimizerRecommendationPreferences#name}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.property.excludeList">excludeList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#exclude_list ComputeoptimizerRecommendationPreferences#exclude_list}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.property.includeList">includeList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#include_list ComputeoptimizerRecommendationPreferences#include_list}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#name ComputeoptimizerRecommendationPreferences#name}.

---

##### `excludeList`<sup>Optional</sup> <a name="excludeList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.property.excludeList"></a>

```typescript
public readonly excludeList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#exclude_list ComputeoptimizerRecommendationPreferences#exclude_list}.

---

##### `includeList`<sup>Optional</sup> <a name="includeList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.property.includeList"></a>

```typescript
public readonly includeList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#include_list ComputeoptimizerRecommendationPreferences#include_list}.

---

### ComputeoptimizerRecommendationPreferencesScope <a name="ComputeoptimizerRecommendationPreferencesScope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope.Initializer"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

const computeoptimizerRecommendationPreferencesScope: computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#name ComputeoptimizerRecommendationPreferences#name}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#value ComputeoptimizerRecommendationPreferences#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#name ComputeoptimizerRecommendationPreferences#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#value ComputeoptimizerRecommendationPreferences#value}.

---

### ComputeoptimizerRecommendationPreferencesUtilizationPreference <a name="ComputeoptimizerRecommendationPreferencesUtilizationPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference.Initializer"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

const computeoptimizerRecommendationPreferencesUtilizationPreference: computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#metric_name ComputeoptimizerRecommendationPreferences#metric_name}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference.property.metricParameters">metricParameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters</a>[]</code> | metric_parameters block. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#metric_name ComputeoptimizerRecommendationPreferences#metric_name}.

---

##### `metricParameters`<sup>Optional</sup> <a name="metricParameters" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference.property.metricParameters"></a>

```typescript
public readonly metricParameters: IResolvable | ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters</a>[]

metric_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#metric_parameters ComputeoptimizerRecommendationPreferences#metric_parameters}

---

### ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters <a name="ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters.Initializer"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

const computeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters: computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters.property.headroom">headroom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#headroom ComputeoptimizerRecommendationPreferences#headroom}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters.property.threshold">threshold</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#threshold ComputeoptimizerRecommendationPreferences#threshold}. |

---

##### `headroom`<sup>Required</sup> <a name="headroom" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters.property.headroom"></a>

```typescript
public readonly headroom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#headroom ComputeoptimizerRecommendationPreferences#headroom}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/computeoptimizer_recommendation_preferences#threshold ComputeoptimizerRecommendationPreferences#threshold}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList <a name="ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

new computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.get"></a>

```typescript
public get(index: number): ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference">ComputeoptimizerRecommendationPreferencesExternalMetricsPreference</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerRecommendationPreferencesExternalMetricsPreference[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference">ComputeoptimizerRecommendationPreferencesExternalMetricsPreference</a>[]

---


### ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference <a name="ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

new computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference">ComputeoptimizerRecommendationPreferencesExternalMetricsPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerRecommendationPreferencesExternalMetricsPreference;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference">ComputeoptimizerRecommendationPreferencesExternalMetricsPreference</a>

---


### ComputeoptimizerRecommendationPreferencesPreferredResourceList <a name="ComputeoptimizerRecommendationPreferencesPreferredResourceList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

new computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.get"></a>

```typescript
public get(index: number): ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource">ComputeoptimizerRecommendationPreferencesPreferredResource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerRecommendationPreferencesPreferredResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource">ComputeoptimizerRecommendationPreferencesPreferredResource</a>[]

---


### ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference <a name="ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

new computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resetExcludeList">resetExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resetIncludeList">resetIncludeList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeList` <a name="resetExcludeList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resetExcludeList"></a>

```typescript
public resetExcludeList(): void
```

##### `resetIncludeList` <a name="resetIncludeList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resetIncludeList"></a>

```typescript
public resetIncludeList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.excludeListInput">excludeListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.includeListInput">includeListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.excludeList">excludeList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.includeList">includeList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource">ComputeoptimizerRecommendationPreferencesPreferredResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludeListInput`<sup>Optional</sup> <a name="excludeListInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.excludeListInput"></a>

```typescript
public readonly excludeListInput: string[];
```

- *Type:* string[]

---

##### `includeListInput`<sup>Optional</sup> <a name="includeListInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.includeListInput"></a>

```typescript
public readonly includeListInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `excludeList`<sup>Required</sup> <a name="excludeList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.excludeList"></a>

```typescript
public readonly excludeList: string[];
```

- *Type:* string[]

---

##### `includeList`<sup>Required</sup> <a name="includeList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.includeList"></a>

```typescript
public readonly includeList: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerRecommendationPreferencesPreferredResource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource">ComputeoptimizerRecommendationPreferencesPreferredResource</a>

---


### ComputeoptimizerRecommendationPreferencesScopeList <a name="ComputeoptimizerRecommendationPreferencesScopeList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

new computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.get"></a>

```typescript
public get(index: number): ComputeoptimizerRecommendationPreferencesScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope">ComputeoptimizerRecommendationPreferencesScope</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerRecommendationPreferencesScope[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope">ComputeoptimizerRecommendationPreferencesScope</a>[]

---


### ComputeoptimizerRecommendationPreferencesScopeOutputReference <a name="ComputeoptimizerRecommendationPreferencesScopeOutputReference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

new computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope">ComputeoptimizerRecommendationPreferencesScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerRecommendationPreferencesScope;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope">ComputeoptimizerRecommendationPreferencesScope</a>

---


### ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList <a name="ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

new computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.get"></a>

```typescript
public get(index: number): ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference">ComputeoptimizerRecommendationPreferencesUtilizationPreference</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerRecommendationPreferencesUtilizationPreference[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference">ComputeoptimizerRecommendationPreferencesUtilizationPreference</a>[]

---


### ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList <a name="ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

new computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.get"></a>

```typescript
public get(index: number): ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters</a>[]

---


### ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference <a name="ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

new computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.resetThreshold"></a>

```typescript
public resetThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.headroomInput">headroomInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.headroom">headroom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.threshold">threshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headroomInput`<sup>Optional</sup> <a name="headroomInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.headroomInput"></a>

```typescript
public readonly headroomInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: string;
```

- *Type:* string

---

##### `headroom`<sup>Required</sup> <a name="headroom" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.headroom"></a>

```typescript
public readonly headroom: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters</a>

---


### ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference <a name="ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer"></a>

```typescript
import { computeoptimizerRecommendationPreferences } from '@cdktf/provider-aws'

new computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.putMetricParameters">putMetricParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.resetMetricParameters">resetMetricParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricParameters` <a name="putMetricParameters" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.putMetricParameters"></a>

```typescript
public putMetricParameters(value: IResolvable | ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.putMetricParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters</a>[]

---

##### `resetMetricParameters` <a name="resetMetricParameters" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.resetMetricParameters"></a>

```typescript
public resetMetricParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricParameters">metricParameters</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricParametersInput">metricParametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference">ComputeoptimizerRecommendationPreferencesUtilizationPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricParameters`<sup>Required</sup> <a name="metricParameters" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricParameters"></a>

```typescript
public readonly metricParameters: ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList;
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList</a>

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `metricParametersInput`<sup>Optional</sup> <a name="metricParametersInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricParametersInput"></a>

```typescript
public readonly metricParametersInput: IResolvable | ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters</a>[]

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerRecommendationPreferencesUtilizationPreference;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference">ComputeoptimizerRecommendationPreferencesUtilizationPreference</a>

---



