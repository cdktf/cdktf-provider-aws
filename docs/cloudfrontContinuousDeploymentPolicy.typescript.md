# `cloudfrontContinuousDeploymentPolicy` Submodule <a name="`cloudfrontContinuousDeploymentPolicy` Submodule" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontContinuousDeploymentPolicy <a name="CloudfrontContinuousDeploymentPolicy" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy aws_cloudfront_continuous_deployment_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

new cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy(scope: Construct, id: string, config: CloudfrontContinuousDeploymentPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig">CloudfrontContinuousDeploymentPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig">CloudfrontContinuousDeploymentPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putStagingDistributionDnsNames">putStagingDistributionDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putTrafficConfig">putTrafficConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.resetStagingDistributionDnsNames">resetStagingDistributionDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.resetTrafficConfig">resetTrafficConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStagingDistributionDnsNames` <a name="putStagingDistributionDnsNames" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putStagingDistributionDnsNames"></a>

```typescript
public putStagingDistributionDnsNames(value: IResolvable | CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putStagingDistributionDnsNames.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames</a>[]

---

##### `putTrafficConfig` <a name="putTrafficConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putTrafficConfig"></a>

```typescript
public putTrafficConfig(value: IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putTrafficConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig">CloudfrontContinuousDeploymentPolicyTrafficConfig</a>[]

---

##### `resetStagingDistributionDnsNames` <a name="resetStagingDistributionDnsNames" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.resetStagingDistributionDnsNames"></a>

```typescript
public resetStagingDistributionDnsNames(): void
```

##### `resetTrafficConfig` <a name="resetTrafficConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.resetTrafficConfig"></a>

```typescript
public resetTrafficConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudfrontContinuousDeploymentPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isConstruct"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformElement"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformResource"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudfrontContinuousDeploymentPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontContinuousDeploymentPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontContinuousDeploymentPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudfrontContinuousDeploymentPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.stagingDistributionDnsNames">stagingDistributionDnsNames</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.trafficConfig">trafficConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList">CloudfrontContinuousDeploymentPolicyTrafficConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.stagingDistributionDnsNamesInput">stagingDistributionDnsNamesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.trafficConfigInput">trafficConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig">CloudfrontContinuousDeploymentPolicyTrafficConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `stagingDistributionDnsNames`<sup>Required</sup> <a name="stagingDistributionDnsNames" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.stagingDistributionDnsNames"></a>

```typescript
public readonly stagingDistributionDnsNames: CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList</a>

---

##### `trafficConfig`<sup>Required</sup> <a name="trafficConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.trafficConfig"></a>

```typescript
public readonly trafficConfig: CloudfrontContinuousDeploymentPolicyTrafficConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList">CloudfrontContinuousDeploymentPolicyTrafficConfigList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stagingDistributionDnsNamesInput`<sup>Optional</sup> <a name="stagingDistributionDnsNamesInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.stagingDistributionDnsNamesInput"></a>

```typescript
public readonly stagingDistributionDnsNamesInput: IResolvable | CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames</a>[]

---

##### `trafficConfigInput`<sup>Optional</sup> <a name="trafficConfigInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.trafficConfigInput"></a>

```typescript
public readonly trafficConfigInput: IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig">CloudfrontContinuousDeploymentPolicyTrafficConfig</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontContinuousDeploymentPolicyConfig <a name="CloudfrontContinuousDeploymentPolicyConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

const cloudfrontContinuousDeploymentPolicyConfig: cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#enabled CloudfrontContinuousDeploymentPolicy#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.stagingDistributionDnsNames">stagingDistributionDnsNames</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames</a>[]</code> | staging_distribution_dns_names block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.trafficConfig">trafficConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig">CloudfrontContinuousDeploymentPolicyTrafficConfig</a>[]</code> | traffic_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#enabled CloudfrontContinuousDeploymentPolicy#enabled}.

---

##### `stagingDistributionDnsNames`<sup>Optional</sup> <a name="stagingDistributionDnsNames" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.stagingDistributionDnsNames"></a>

```typescript
public readonly stagingDistributionDnsNames: IResolvable | CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames</a>[]

staging_distribution_dns_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#staging_distribution_dns_names CloudfrontContinuousDeploymentPolicy#staging_distribution_dns_names}

---

##### `trafficConfig`<sup>Optional</sup> <a name="trafficConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.trafficConfig"></a>

```typescript
public readonly trafficConfig: IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig">CloudfrontContinuousDeploymentPolicyTrafficConfig</a>[]

traffic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#traffic_config CloudfrontContinuousDeploymentPolicy#traffic_config}

---

### CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames <a name="CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

const cloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames: cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames.property.quantity">quantity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#quantity CloudfrontContinuousDeploymentPolicy#quantity}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames.property.items">items</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#items CloudfrontContinuousDeploymentPolicy#items}. |

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames.property.quantity"></a>

```typescript
public readonly quantity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#quantity CloudfrontContinuousDeploymentPolicy#quantity}.

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames.property.items"></a>

```typescript
public readonly items: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#items CloudfrontContinuousDeploymentPolicy#items}.

---

### CloudfrontContinuousDeploymentPolicyTrafficConfig <a name="CloudfrontContinuousDeploymentPolicyTrafficConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

const cloudfrontContinuousDeploymentPolicyTrafficConfig: cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#type CloudfrontContinuousDeploymentPolicy#type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig.property.singleHeaderConfig">singleHeaderConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig</a>[]</code> | single_header_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig.property.singleWeightConfig">singleWeightConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig</a>[]</code> | single_weight_config block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#type CloudfrontContinuousDeploymentPolicy#type}.

---

##### `singleHeaderConfig`<sup>Optional</sup> <a name="singleHeaderConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig.property.singleHeaderConfig"></a>

```typescript
public readonly singleHeaderConfig: IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig</a>[]

single_header_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#single_header_config CloudfrontContinuousDeploymentPolicy#single_header_config}

---

##### `singleWeightConfig`<sup>Optional</sup> <a name="singleWeightConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig.property.singleWeightConfig"></a>

```typescript
public readonly singleWeightConfig: IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig</a>[]

single_weight_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#single_weight_config CloudfrontContinuousDeploymentPolicy#single_weight_config}

---

### CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

const cloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig: cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig.property.header">header</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#header CloudfrontContinuousDeploymentPolicy#header}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#value CloudfrontContinuousDeploymentPolicy#value}. |

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#header CloudfrontContinuousDeploymentPolicy#header}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#value CloudfrontContinuousDeploymentPolicy#value}.

---

### CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

const cloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig: cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#weight CloudfrontContinuousDeploymentPolicy#weight}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig.property.sessionStickinessConfig">sessionStickinessConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig</a>[]</code> | session_stickiness_config block. |

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#weight CloudfrontContinuousDeploymentPolicy#weight}.

---

##### `sessionStickinessConfig`<sup>Optional</sup> <a name="sessionStickinessConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig.property.sessionStickinessConfig"></a>

```typescript
public readonly sessionStickinessConfig: IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig</a>[]

session_stickiness_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#session_stickiness_config CloudfrontContinuousDeploymentPolicy#session_stickiness_config}

---

### CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

const cloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig: cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig.property.idleTtl">idleTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#idle_ttl CloudfrontContinuousDeploymentPolicy#idle_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig.property.maximumTtl">maximumTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#maximum_ttl CloudfrontContinuousDeploymentPolicy#maximum_ttl}. |

---

##### `idleTtl`<sup>Required</sup> <a name="idleTtl" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig.property.idleTtl"></a>

```typescript
public readonly idleTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#idle_ttl CloudfrontContinuousDeploymentPolicy#idle_ttl}.

---

##### `maximumTtl`<sup>Required</sup> <a name="maximumTtl" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig.property.maximumTtl"></a>

```typescript
public readonly maximumTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/cloudfront_continuous_deployment_policy#maximum_ttl CloudfrontContinuousDeploymentPolicy#maximum_ttl}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList <a name="CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

new cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.get"></a>

```typescript
public get(index: number): CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames</a>[]

---


### CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference <a name="CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

new cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetItems` <a name="resetItems" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.resetItems"></a>

```typescript
public resetItems(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.itemsInput">itemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.quantityInput">quantityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.items">items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.quantity">quantity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: string[];
```

- *Type:* string[]

---

##### `quantityInput`<sup>Optional</sup> <a name="quantityInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.quantityInput"></a>

```typescript
public readonly quantityInput: number;
```

- *Type:* number

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.items"></a>

```typescript
public readonly items: string[];
```

- *Type:* string[]

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.quantity"></a>

```typescript
public readonly quantity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames</a>

---


### CloudfrontContinuousDeploymentPolicyTrafficConfigList <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigList" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

new cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.get"></a>

```typescript
public get(index: number): CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig">CloudfrontContinuousDeploymentPolicyTrafficConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig">CloudfrontContinuousDeploymentPolicyTrafficConfig</a>[]

---


### CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

new cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.putSingleHeaderConfig">putSingleHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.putSingleWeightConfig">putSingleWeightConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.resetSingleHeaderConfig">resetSingleHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.resetSingleWeightConfig">resetSingleWeightConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSingleHeaderConfig` <a name="putSingleHeaderConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.putSingleHeaderConfig"></a>

```typescript
public putSingleHeaderConfig(value: IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.putSingleHeaderConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig</a>[]

---

##### `putSingleWeightConfig` <a name="putSingleWeightConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.putSingleWeightConfig"></a>

```typescript
public putSingleWeightConfig(value: IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.putSingleWeightConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig</a>[]

---

##### `resetSingleHeaderConfig` <a name="resetSingleHeaderConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.resetSingleHeaderConfig"></a>

```typescript
public resetSingleHeaderConfig(): void
```

##### `resetSingleWeightConfig` <a name="resetSingleWeightConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.resetSingleWeightConfig"></a>

```typescript
public resetSingleWeightConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.singleHeaderConfig">singleHeaderConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.singleWeightConfig">singleWeightConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.singleHeaderConfigInput">singleHeaderConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.singleWeightConfigInput">singleWeightConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig">CloudfrontContinuousDeploymentPolicyTrafficConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `singleHeaderConfig`<sup>Required</sup> <a name="singleHeaderConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.singleHeaderConfig"></a>

```typescript
public readonly singleHeaderConfig: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList</a>

---

##### `singleWeightConfig`<sup>Required</sup> <a name="singleWeightConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.singleWeightConfig"></a>

```typescript
public readonly singleWeightConfig: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList</a>

---

##### `singleHeaderConfigInput`<sup>Optional</sup> <a name="singleHeaderConfigInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.singleHeaderConfigInput"></a>

```typescript
public readonly singleHeaderConfigInput: IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig</a>[]

---

##### `singleWeightConfigInput`<sup>Optional</sup> <a name="singleWeightConfigInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.singleWeightConfigInput"></a>

```typescript
public readonly singleWeightConfigInput: IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig">CloudfrontContinuousDeploymentPolicyTrafficConfig</a>

---


### CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

new cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.get"></a>

```typescript
public get(index: number): CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig</a>[]

---


### CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

new cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.headerInput">headerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig</a>

---


### CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

new cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.get"></a>

```typescript
public get(index: number): CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig</a>[]

---


### CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

new cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.putSessionStickinessConfig">putSessionStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.resetSessionStickinessConfig">resetSessionStickinessConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSessionStickinessConfig` <a name="putSessionStickinessConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.putSessionStickinessConfig"></a>

```typescript
public putSessionStickinessConfig(value: IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.putSessionStickinessConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig</a>[]

---

##### `resetSessionStickinessConfig` <a name="resetSessionStickinessConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.resetSessionStickinessConfig"></a>

```typescript
public resetSessionStickinessConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.sessionStickinessConfig">sessionStickinessConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.sessionStickinessConfigInput">sessionStickinessConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sessionStickinessConfig`<sup>Required</sup> <a name="sessionStickinessConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.sessionStickinessConfig"></a>

```typescript
public readonly sessionStickinessConfig: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList</a>

---

##### `sessionStickinessConfigInput`<sup>Optional</sup> <a name="sessionStickinessConfigInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.sessionStickinessConfigInput"></a>

```typescript
public readonly sessionStickinessConfigInput: IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig</a>[]

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig</a>

---


### CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

new cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.get"></a>

```typescript
public get(index: number): CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig</a>[]

---


### CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktf/provider-aws'

new cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.idleTtlInput">idleTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.maximumTtlInput">maximumTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.idleTtl">idleTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.maximumTtl">maximumTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleTtlInput`<sup>Optional</sup> <a name="idleTtlInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.idleTtlInput"></a>

```typescript
public readonly idleTtlInput: number;
```

- *Type:* number

---

##### `maximumTtlInput`<sup>Optional</sup> <a name="maximumTtlInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.maximumTtlInput"></a>

```typescript
public readonly maximumTtlInput: number;
```

- *Type:* number

---

##### `idleTtl`<sup>Required</sup> <a name="idleTtl" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.idleTtl"></a>

```typescript
public readonly idleTtl: number;
```

- *Type:* number

---

##### `maximumTtl`<sup>Required</sup> <a name="maximumTtl" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.maximumTtl"></a>

```typescript
public readonly maximumTtl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig</a>

---



