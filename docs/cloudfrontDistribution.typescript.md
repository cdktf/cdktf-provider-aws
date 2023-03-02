# `cloudfrontDistribution` Submodule <a name="`cloudfrontDistribution` Submodule" id="@cdktf/provider-aws.cloudfrontDistribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontDistribution <a name="CloudfrontDistribution" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution aws_cloudfront_distribution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistribution(scope: Construct, id: string, config: CloudfrontDistributionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig">CloudfrontDistributionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig">CloudfrontDistributionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putCustomErrorResponse">putCustomErrorResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior">putDefaultCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrderedCacheBehavior">putOrderedCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrigin">putOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOriginGroup">putOriginGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putRestrictions">putRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putViewerCertificate">putViewerCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetAliases">resetAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetCustomErrorResponse">resetCustomErrorResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetDefaultRootObject">resetDefaultRootObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetHttpVersion">resetHttpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetIsIpv6Enabled">resetIsIpv6Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOrderedCacheBehavior">resetOrderedCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOriginGroup">resetOriginGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetPriceClass">resetPriceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetRetainOnDelete">resetRetainOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetWaitForDeployment">resetWaitForDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetWebAclId">resetWebAclId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCustomErrorResponse` <a name="putCustomErrorResponse" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putCustomErrorResponse"></a>

```typescript
public putCustomErrorResponse(value: IResolvable | CloudfrontDistributionCustomErrorResponse[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putCustomErrorResponse.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse">CloudfrontDistributionCustomErrorResponse</a>[]

---

##### `putDefaultCacheBehavior` <a name="putDefaultCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior"></a>

```typescript
public putDefaultCacheBehavior(value: CloudfrontDistributionDefaultCacheBehavior): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a>

---

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putLoggingConfig"></a>

```typescript
public putLoggingConfig(value: CloudfrontDistributionLoggingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a>

---

##### `putOrderedCacheBehavior` <a name="putOrderedCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrderedCacheBehavior"></a>

```typescript
public putOrderedCacheBehavior(value: IResolvable | CloudfrontDistributionOrderedCacheBehavior[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrderedCacheBehavior.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior">CloudfrontDistributionOrderedCacheBehavior</a>[]

---

##### `putOrigin` <a name="putOrigin" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrigin"></a>

```typescript
public putOrigin(value: IResolvable | CloudfrontDistributionOrigin[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrigin.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin">CloudfrontDistributionOrigin</a>[]

---

##### `putOriginGroup` <a name="putOriginGroup" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOriginGroup"></a>

```typescript
public putOriginGroup(value: IResolvable | CloudfrontDistributionOriginGroup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOriginGroup.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup">CloudfrontDistributionOriginGroup</a>[]

---

##### `putRestrictions` <a name="putRestrictions" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putRestrictions"></a>

```typescript
public putRestrictions(value: CloudfrontDistributionRestrictions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a>

---

##### `putViewerCertificate` <a name="putViewerCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putViewerCertificate"></a>

```typescript
public putViewerCertificate(value: CloudfrontDistributionViewerCertificate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putViewerCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a>

---

##### `resetAliases` <a name="resetAliases" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetAliases"></a>

```typescript
public resetAliases(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetCustomErrorResponse` <a name="resetCustomErrorResponse" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetCustomErrorResponse"></a>

```typescript
public resetCustomErrorResponse(): void
```

##### `resetDefaultRootObject` <a name="resetDefaultRootObject" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetDefaultRootObject"></a>

```typescript
public resetDefaultRootObject(): void
```

##### `resetHttpVersion` <a name="resetHttpVersion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetHttpVersion"></a>

```typescript
public resetHttpVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsIpv6Enabled` <a name="resetIsIpv6Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetIsIpv6Enabled"></a>

```typescript
public resetIsIpv6Enabled(): void
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetLoggingConfig"></a>

```typescript
public resetLoggingConfig(): void
```

##### `resetOrderedCacheBehavior` <a name="resetOrderedCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOrderedCacheBehavior"></a>

```typescript
public resetOrderedCacheBehavior(): void
```

##### `resetOriginGroup` <a name="resetOriginGroup" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOriginGroup"></a>

```typescript
public resetOriginGroup(): void
```

##### `resetPriceClass` <a name="resetPriceClass" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetPriceClass"></a>

```typescript
public resetPriceClass(): void
```

##### `resetRetainOnDelete` <a name="resetRetainOnDelete" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetRetainOnDelete"></a>

```typescript
public resetRetainOnDelete(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetWaitForDeployment` <a name="resetWaitForDeployment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetWaitForDeployment"></a>

```typescript
public resetWaitForDeployment(): void
```

##### `resetWebAclId` <a name="resetWebAclId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetWebAclId"></a>

```typescript
public resetWebAclId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isConstruct"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

cloudfrontDistribution.CloudfrontDistribution.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformElement"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

cloudfrontDistribution.CloudfrontDistribution.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformResource"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

cloudfrontDistribution.CloudfrontDistribution.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.callerReference">callerReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.customErrorResponse">customErrorResponse</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList">CloudfrontDistributionCustomErrorResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultCacheBehavior">defaultCacheBehavior</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference">CloudfrontDistributionDefaultCacheBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.inProgressValidationBatches">inProgressValidationBatches</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference">CloudfrontDistributionLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.orderedCacheBehavior">orderedCacheBehavior</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList">CloudfrontDistributionOrderedCacheBehaviorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList">CloudfrontDistributionOriginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originGroup">originGroup</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList">CloudfrontDistributionOriginGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference">CloudfrontDistributionRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.trustedKeyGroups">trustedKeyGroups</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList">CloudfrontDistributionTrustedKeyGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.trustedSigners">trustedSigners</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList">CloudfrontDistributionTrustedSignersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.viewerCertificate">viewerCertificate</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference">CloudfrontDistributionViewerCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.aliasesInput">aliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.customErrorResponseInput">customErrorResponseInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse">CloudfrontDistributionCustomErrorResponse</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultCacheBehaviorInput">defaultCacheBehaviorInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultRootObjectInput">defaultRootObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.httpVersionInput">httpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.isIpv6EnabledInput">isIpv6EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.orderedCacheBehaviorInput">orderedCacheBehaviorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior">CloudfrontDistributionOrderedCacheBehavior</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originGroupInput">originGroupInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup">CloudfrontDistributionOriginGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originInput">originInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin">CloudfrontDistributionOrigin</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.priceClassInput">priceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.restrictionsInput">restrictionsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.retainOnDeleteInput">retainOnDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.viewerCertificateInput">viewerCertificateInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.waitForDeploymentInput">waitForDeploymentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.webAclIdInput">webAclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.aliases">aliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultRootObject">defaultRootObject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.httpVersion">httpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.isIpv6Enabled">isIpv6Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.priceClass">priceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.retainOnDelete">retainOnDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.waitForDeployment">waitForDeployment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.webAclId">webAclId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `callerReference`<sup>Required</sup> <a name="callerReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.callerReference"></a>

```typescript
public readonly callerReference: string;
```

- *Type:* string

---

##### `customErrorResponse`<sup>Required</sup> <a name="customErrorResponse" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.customErrorResponse"></a>

```typescript
public readonly customErrorResponse: CloudfrontDistributionCustomErrorResponseList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList">CloudfrontDistributionCustomErrorResponseList</a>

---

##### `defaultCacheBehavior`<sup>Required</sup> <a name="defaultCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultCacheBehavior"></a>

```typescript
public readonly defaultCacheBehavior: CloudfrontDistributionDefaultCacheBehaviorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference">CloudfrontDistributionDefaultCacheBehaviorOutputReference</a>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `inProgressValidationBatches`<sup>Required</sup> <a name="inProgressValidationBatches" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.inProgressValidationBatches"></a>

```typescript
public readonly inProgressValidationBatches: number;
```

- *Type:* number

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: CloudfrontDistributionLoggingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference">CloudfrontDistributionLoggingConfigOutputReference</a>

---

##### `orderedCacheBehavior`<sup>Required</sup> <a name="orderedCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.orderedCacheBehavior"></a>

```typescript
public readonly orderedCacheBehavior: CloudfrontDistributionOrderedCacheBehaviorList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList">CloudfrontDistributionOrderedCacheBehaviorList</a>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.origin"></a>

```typescript
public readonly origin: CloudfrontDistributionOriginList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList">CloudfrontDistributionOriginList</a>

---

##### `originGroup`<sup>Required</sup> <a name="originGroup" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originGroup"></a>

```typescript
public readonly originGroup: CloudfrontDistributionOriginGroupList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList">CloudfrontDistributionOriginGroupList</a>

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.restrictions"></a>

```typescript
public readonly restrictions: CloudfrontDistributionRestrictionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference">CloudfrontDistributionRestrictionsOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `trustedKeyGroups`<sup>Required</sup> <a name="trustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.trustedKeyGroups"></a>

```typescript
public readonly trustedKeyGroups: CloudfrontDistributionTrustedKeyGroupsList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList">CloudfrontDistributionTrustedKeyGroupsList</a>

---

##### `trustedSigners`<sup>Required</sup> <a name="trustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.trustedSigners"></a>

```typescript
public readonly trustedSigners: CloudfrontDistributionTrustedSignersList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList">CloudfrontDistributionTrustedSignersList</a>

---

##### `viewerCertificate`<sup>Required</sup> <a name="viewerCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.viewerCertificate"></a>

```typescript
public readonly viewerCertificate: CloudfrontDistributionViewerCertificateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference">CloudfrontDistributionViewerCertificateOutputReference</a>

---

##### `aliasesInput`<sup>Optional</sup> <a name="aliasesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.aliasesInput"></a>

```typescript
public readonly aliasesInput: string[];
```

- *Type:* string[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `customErrorResponseInput`<sup>Optional</sup> <a name="customErrorResponseInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.customErrorResponseInput"></a>

```typescript
public readonly customErrorResponseInput: IResolvable | CloudfrontDistributionCustomErrorResponse[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse">CloudfrontDistributionCustomErrorResponse</a>[]

---

##### `defaultCacheBehaviorInput`<sup>Optional</sup> <a name="defaultCacheBehaviorInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultCacheBehaviorInput"></a>

```typescript
public readonly defaultCacheBehaviorInput: CloudfrontDistributionDefaultCacheBehavior;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a>

---

##### `defaultRootObjectInput`<sup>Optional</sup> <a name="defaultRootObjectInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultRootObjectInput"></a>

```typescript
public readonly defaultRootObjectInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpVersionInput`<sup>Optional</sup> <a name="httpVersionInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.httpVersionInput"></a>

```typescript
public readonly httpVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isIpv6EnabledInput`<sup>Optional</sup> <a name="isIpv6EnabledInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.isIpv6EnabledInput"></a>

```typescript
public readonly isIpv6EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.loggingConfigInput"></a>

```typescript
public readonly loggingConfigInput: CloudfrontDistributionLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a>

---

##### `orderedCacheBehaviorInput`<sup>Optional</sup> <a name="orderedCacheBehaviorInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.orderedCacheBehaviorInput"></a>

```typescript
public readonly orderedCacheBehaviorInput: IResolvable | CloudfrontDistributionOrderedCacheBehavior[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior">CloudfrontDistributionOrderedCacheBehavior</a>[]

---

##### `originGroupInput`<sup>Optional</sup> <a name="originGroupInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originGroupInput"></a>

```typescript
public readonly originGroupInput: IResolvable | CloudfrontDistributionOriginGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup">CloudfrontDistributionOriginGroup</a>[]

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originInput"></a>

```typescript
public readonly originInput: IResolvable | CloudfrontDistributionOrigin[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin">CloudfrontDistributionOrigin</a>[]

---

##### `priceClassInput`<sup>Optional</sup> <a name="priceClassInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.priceClassInput"></a>

```typescript
public readonly priceClassInput: string;
```

- *Type:* string

---

##### `restrictionsInput`<sup>Optional</sup> <a name="restrictionsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.restrictionsInput"></a>

```typescript
public readonly restrictionsInput: CloudfrontDistributionRestrictions;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a>

---

##### `retainOnDeleteInput`<sup>Optional</sup> <a name="retainOnDeleteInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.retainOnDeleteInput"></a>

```typescript
public readonly retainOnDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `viewerCertificateInput`<sup>Optional</sup> <a name="viewerCertificateInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.viewerCertificateInput"></a>

```typescript
public readonly viewerCertificateInput: CloudfrontDistributionViewerCertificate;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a>

---

##### `waitForDeploymentInput`<sup>Optional</sup> <a name="waitForDeploymentInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.waitForDeploymentInput"></a>

```typescript
public readonly waitForDeploymentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `webAclIdInput`<sup>Optional</sup> <a name="webAclIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.webAclIdInput"></a>

```typescript
public readonly webAclIdInput: string;
```

- *Type:* string

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.aliases"></a>

```typescript
public readonly aliases: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `defaultRootObject`<sup>Required</sup> <a name="defaultRootObject" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultRootObject"></a>

```typescript
public readonly defaultRootObject: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpVersion`<sup>Required</sup> <a name="httpVersion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.httpVersion"></a>

```typescript
public readonly httpVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isIpv6Enabled`<sup>Required</sup> <a name="isIpv6Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.isIpv6Enabled"></a>

```typescript
public readonly isIpv6Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `priceClass`<sup>Required</sup> <a name="priceClass" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.priceClass"></a>

```typescript
public readonly priceClass: string;
```

- *Type:* string

---

##### `retainOnDelete`<sup>Required</sup> <a name="retainOnDelete" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.retainOnDelete"></a>

```typescript
public readonly retainOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `waitForDeployment`<sup>Required</sup> <a name="waitForDeployment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.waitForDeployment"></a>

```typescript
public readonly waitForDeployment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `webAclId`<sup>Required</sup> <a name="webAclId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.webAclId"></a>

```typescript
public readonly webAclId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontDistributionConfig <a name="CloudfrontDistributionConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionConfig: cloudfrontDistribution.CloudfrontDistributionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.defaultCacheBehavior">defaultCacheBehavior</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a></code> | default_cache_behavior block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#enabled CloudfrontDistribution#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.origin">origin</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin">CloudfrontDistributionOrigin</a>[]</code> | origin block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a></code> | restrictions block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.viewerCertificate">viewerCertificate</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a></code> | viewer_certificate block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.aliases">aliases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#aliases CloudfrontDistribution#aliases}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#comment CloudfrontDistribution#comment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.customErrorResponse">customErrorResponse</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse">CloudfrontDistributionCustomErrorResponse</a>[]</code> | custom_error_response block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.defaultRootObject">defaultRootObject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_root_object CloudfrontDistribution#default_root_object}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.httpVersion">httpVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#http_version CloudfrontDistribution#http_version}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#id CloudfrontDistribution#id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.isIpv6Enabled">isIpv6Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#is_ipv6_enabled CloudfrontDistribution#is_ipv6_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.orderedCacheBehavior">orderedCacheBehavior</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior">CloudfrontDistributionOrderedCacheBehavior</a>[]</code> | ordered_cache_behavior block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.originGroup">originGroup</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup">CloudfrontDistributionOriginGroup</a>[]</code> | origin_group block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.priceClass">priceClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#price_class CloudfrontDistribution#price_class}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.retainOnDelete">retainOnDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#retain_on_delete CloudfrontDistribution#retain_on_delete}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#tags CloudfrontDistribution#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#tags_all CloudfrontDistribution#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.waitForDeployment">waitForDeployment</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#wait_for_deployment CloudfrontDistribution#wait_for_deployment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.webAclId">webAclId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#web_acl_id CloudfrontDistribution#web_acl_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultCacheBehavior`<sup>Required</sup> <a name="defaultCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.defaultCacheBehavior"></a>

```typescript
public readonly defaultCacheBehavior: CloudfrontDistributionDefaultCacheBehavior;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a>

default_cache_behavior block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_cache_behavior CloudfrontDistribution#default_cache_behavior}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#enabled CloudfrontDistribution#enabled}.

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.origin"></a>

```typescript
public readonly origin: IResolvable | CloudfrontDistributionOrigin[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin">CloudfrontDistributionOrigin</a>[]

origin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin CloudfrontDistribution#origin}

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.restrictions"></a>

```typescript
public readonly restrictions: CloudfrontDistributionRestrictions;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#restrictions CloudfrontDistribution#restrictions}

---

##### `viewerCertificate`<sup>Required</sup> <a name="viewerCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.viewerCertificate"></a>

```typescript
public readonly viewerCertificate: CloudfrontDistributionViewerCertificate;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a>

viewer_certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_certificate CloudfrontDistribution#viewer_certificate}

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.aliases"></a>

```typescript
public readonly aliases: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#aliases CloudfrontDistribution#aliases}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#comment CloudfrontDistribution#comment}.

---

##### `customErrorResponse`<sup>Optional</sup> <a name="customErrorResponse" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.customErrorResponse"></a>

```typescript
public readonly customErrorResponse: IResolvable | CloudfrontDistributionCustomErrorResponse[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse">CloudfrontDistributionCustomErrorResponse</a>[]

custom_error_response block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#custom_error_response CloudfrontDistribution#custom_error_response}

---

##### `defaultRootObject`<sup>Optional</sup> <a name="defaultRootObject" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.defaultRootObject"></a>

```typescript
public readonly defaultRootObject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_root_object CloudfrontDistribution#default_root_object}.

---

##### `httpVersion`<sup>Optional</sup> <a name="httpVersion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.httpVersion"></a>

```typescript
public readonly httpVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#http_version CloudfrontDistribution#http_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#id CloudfrontDistribution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isIpv6Enabled`<sup>Optional</sup> <a name="isIpv6Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.isIpv6Enabled"></a>

```typescript
public readonly isIpv6Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#is_ipv6_enabled CloudfrontDistribution#is_ipv6_enabled}.

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: CloudfrontDistributionLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#logging_config CloudfrontDistribution#logging_config}

---

##### `orderedCacheBehavior`<sup>Optional</sup> <a name="orderedCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.orderedCacheBehavior"></a>

```typescript
public readonly orderedCacheBehavior: IResolvable | CloudfrontDistributionOrderedCacheBehavior[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior">CloudfrontDistributionOrderedCacheBehavior</a>[]

ordered_cache_behavior block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#ordered_cache_behavior CloudfrontDistribution#ordered_cache_behavior}

---

##### `originGroup`<sup>Optional</sup> <a name="originGroup" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.originGroup"></a>

```typescript
public readonly originGroup: IResolvable | CloudfrontDistributionOriginGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup">CloudfrontDistributionOriginGroup</a>[]

origin_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_group CloudfrontDistribution#origin_group}

---

##### `priceClass`<sup>Optional</sup> <a name="priceClass" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.priceClass"></a>

```typescript
public readonly priceClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#price_class CloudfrontDistribution#price_class}.

---

##### `retainOnDelete`<sup>Optional</sup> <a name="retainOnDelete" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.retainOnDelete"></a>

```typescript
public readonly retainOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#retain_on_delete CloudfrontDistribution#retain_on_delete}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#tags CloudfrontDistribution#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#tags_all CloudfrontDistribution#tags_all}.

---

##### `waitForDeployment`<sup>Optional</sup> <a name="waitForDeployment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.waitForDeployment"></a>

```typescript
public readonly waitForDeployment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#wait_for_deployment CloudfrontDistribution#wait_for_deployment}.

---

##### `webAclId`<sup>Optional</sup> <a name="webAclId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.webAclId"></a>

```typescript
public readonly webAclId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#web_acl_id CloudfrontDistribution#web_acl_id}.

---

### CloudfrontDistributionCustomErrorResponse <a name="CloudfrontDistributionCustomErrorResponse" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionCustomErrorResponse: cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.errorCode">errorCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#error_code CloudfrontDistribution#error_code}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.errorCachingMinTtl">errorCachingMinTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#error_caching_min_ttl CloudfrontDistribution#error_caching_min_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.responseCode">responseCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_code CloudfrontDistribution#response_code}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.responsePagePath">responsePagePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_page_path CloudfrontDistribution#response_page_path}. |

---

##### `errorCode`<sup>Required</sup> <a name="errorCode" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.errorCode"></a>

```typescript
public readonly errorCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#error_code CloudfrontDistribution#error_code}.

---

##### `errorCachingMinTtl`<sup>Optional</sup> <a name="errorCachingMinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.errorCachingMinTtl"></a>

```typescript
public readonly errorCachingMinTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#error_caching_min_ttl CloudfrontDistribution#error_caching_min_ttl}.

---

##### `responseCode`<sup>Optional</sup> <a name="responseCode" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_code CloudfrontDistribution#response_code}.

---

##### `responsePagePath`<sup>Optional</sup> <a name="responsePagePath" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.responsePagePath"></a>

```typescript
public readonly responsePagePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_page_path CloudfrontDistribution#response_page_path}.

---

### CloudfrontDistributionDefaultCacheBehavior <a name="CloudfrontDistributionDefaultCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionDefaultCacheBehavior: cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.cachedMethods">cachedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.targetOriginId">targetOriginId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.viewerProtocolPolicy">viewerProtocolPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.cachePolicyId">cachePolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.compress">compress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#compress CloudfrontDistribution#compress}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.fieldLevelEncryptionId">fieldLevelEncryptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.forwardedValues">forwardedValues</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a></code> | forwarded_values block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.functionAssociation">functionAssociation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation</a>[]</code> | function_association block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.lambdaFunctionAssociation">lambdaFunctionAssociation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation</a>[]</code> | lambda_function_association block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.maxTtl">maxTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.minTtl">minTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.originRequestPolicyId">originRequestPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.realtimeLogConfigArn">realtimeLogConfigArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.responseHeadersPolicyId">responseHeadersPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.smoothStreaming">smoothStreaming</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.trustedKeyGroups">trustedKeyGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.trustedSigners">trustedSigners</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}. |

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}.

---

##### `cachedMethods`<sup>Required</sup> <a name="cachedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.cachedMethods"></a>

```typescript
public readonly cachedMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}.

---

##### `targetOriginId`<sup>Required</sup> <a name="targetOriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.targetOriginId"></a>

```typescript
public readonly targetOriginId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}.

---

##### `viewerProtocolPolicy`<sup>Required</sup> <a name="viewerProtocolPolicy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.viewerProtocolPolicy"></a>

```typescript
public readonly viewerProtocolPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}.

---

##### `cachePolicyId`<sup>Optional</sup> <a name="cachePolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.cachePolicyId"></a>

```typescript
public readonly cachePolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}.

---

##### `compress`<sup>Optional</sup> <a name="compress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.compress"></a>

```typescript
public readonly compress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#compress CloudfrontDistribution#compress}.

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}.

---

##### `fieldLevelEncryptionId`<sup>Optional</sup> <a name="fieldLevelEncryptionId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.fieldLevelEncryptionId"></a>

```typescript
public readonly fieldLevelEncryptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}.

---

##### `forwardedValues`<sup>Optional</sup> <a name="forwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.forwardedValues"></a>

```typescript
public readonly forwardedValues: CloudfrontDistributionDefaultCacheBehaviorForwardedValues;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a>

forwarded_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forwarded_values CloudfrontDistribution#forwarded_values}

---

##### `functionAssociation`<sup>Optional</sup> <a name="functionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.functionAssociation"></a>

```typescript
public readonly functionAssociation: IResolvable | CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation</a>[]

function_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_association CloudfrontDistribution#function_association}

---

##### `lambdaFunctionAssociation`<sup>Optional</sup> <a name="lambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.lambdaFunctionAssociation"></a>

```typescript
public readonly lambdaFunctionAssociation: IResolvable | CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation</a>[]

lambda_function_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_function_association CloudfrontDistribution#lambda_function_association}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}.

---

##### `minTtl`<sup>Optional</sup> <a name="minTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.minTtl"></a>

```typescript
public readonly minTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}.

---

##### `originRequestPolicyId`<sup>Optional</sup> <a name="originRequestPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.originRequestPolicyId"></a>

```typescript
public readonly originRequestPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}.

---

##### `realtimeLogConfigArn`<sup>Optional</sup> <a name="realtimeLogConfigArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.realtimeLogConfigArn"></a>

```typescript
public readonly realtimeLogConfigArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}.

---

##### `responseHeadersPolicyId`<sup>Optional</sup> <a name="responseHeadersPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.responseHeadersPolicyId"></a>

```typescript
public readonly responseHeadersPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}.

---

##### `smoothStreaming`<sup>Optional</sup> <a name="smoothStreaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.smoothStreaming"></a>

```typescript
public readonly smoothStreaming: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}.

---

##### `trustedKeyGroups`<sup>Optional</sup> <a name="trustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.trustedKeyGroups"></a>

```typescript
public readonly trustedKeyGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}.

---

##### `trustedSigners`<sup>Optional</sup> <a name="trustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.trustedSigners"></a>

```typescript
public readonly trustedSigners: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}.

---

### CloudfrontDistributionDefaultCacheBehaviorForwardedValues <a name="CloudfrontDistributionDefaultCacheBehaviorForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionDefaultCacheBehaviorForwardedValues: cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.cookies">cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a></code> | cookies block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.queryString">queryString</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string CloudfrontDistribution#query_string}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.headers">headers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#headers CloudfrontDistribution#headers}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.queryStringCacheKeys">queryStringCacheKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}. |

---

##### `cookies`<sup>Required</sup> <a name="cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.cookies"></a>

```typescript
public readonly cookies: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a>

cookies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cookies CloudfrontDistribution#cookies}

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.queryString"></a>

```typescript
public readonly queryString: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string CloudfrontDistribution#query_string}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.headers"></a>

```typescript
public readonly headers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#headers CloudfrontDistribution#headers}.

---

##### `queryStringCacheKeys`<sup>Optional</sup> <a name="queryStringCacheKeys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.queryStringCacheKeys"></a>

```typescript
public readonly queryStringCacheKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}.

---

### CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies <a name="CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies: cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies.property.forward">forward</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forward CloudfrontDistribution#forward}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies.property.whitelistedNames">whitelistedNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}. |

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies.property.forward"></a>

```typescript
public readonly forward: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forward CloudfrontDistribution#forward}.

---

##### `whitelistedNames`<sup>Optional</sup> <a name="whitelistedNames" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies.property.whitelistedNames"></a>

```typescript
public readonly whitelistedNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}.

---

### CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation <a name="CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionDefaultCacheBehaviorFunctionAssociation: cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation.property.eventType">eventType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation.property.functionArn">functionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_arn CloudfrontDistribution#function_arn}. |

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}.

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_arn CloudfrontDistribution#function_arn}.

---

### CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation <a name="CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation: cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.eventType">eventType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_arn CloudfrontDistribution#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.includeBody">includeBody</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_body CloudfrontDistribution#include_body}. |

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}.

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_arn CloudfrontDistribution#lambda_arn}.

---

##### `includeBody`<sup>Optional</sup> <a name="includeBody" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.includeBody"></a>

```typescript
public readonly includeBody: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_body CloudfrontDistribution#include_body}.

---

### CloudfrontDistributionLoggingConfig <a name="CloudfrontDistributionLoggingConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionLoggingConfig: cloudfrontDistribution.CloudfrontDistributionLoggingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#bucket CloudfrontDistribution#bucket}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.includeCookies">includeCookies</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_cookies CloudfrontDistribution#include_cookies}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#prefix CloudfrontDistribution#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#bucket CloudfrontDistribution#bucket}.

---

##### `includeCookies`<sup>Optional</sup> <a name="includeCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.includeCookies"></a>

```typescript
public readonly includeCookies: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_cookies CloudfrontDistribution#include_cookies}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#prefix CloudfrontDistribution#prefix}.

---

### CloudfrontDistributionOrderedCacheBehavior <a name="CloudfrontDistributionOrderedCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionOrderedCacheBehavior: cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.cachedMethods">cachedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.pathPattern">pathPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#path_pattern CloudfrontDistribution#path_pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.targetOriginId">targetOriginId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.viewerProtocolPolicy">viewerProtocolPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.cachePolicyId">cachePolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.compress">compress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#compress CloudfrontDistribution#compress}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.fieldLevelEncryptionId">fieldLevelEncryptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.forwardedValues">forwardedValues</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a></code> | forwarded_values block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.functionAssociation">functionAssociation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation</a>[]</code> | function_association block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.lambdaFunctionAssociation">lambdaFunctionAssociation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation</a>[]</code> | lambda_function_association block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.maxTtl">maxTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.minTtl">minTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.originRequestPolicyId">originRequestPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.realtimeLogConfigArn">realtimeLogConfigArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.responseHeadersPolicyId">responseHeadersPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.smoothStreaming">smoothStreaming</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.trustedKeyGroups">trustedKeyGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.trustedSigners">trustedSigners</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}. |

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}.

---

##### `cachedMethods`<sup>Required</sup> <a name="cachedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.cachedMethods"></a>

```typescript
public readonly cachedMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}.

---

##### `pathPattern`<sup>Required</sup> <a name="pathPattern" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.pathPattern"></a>

```typescript
public readonly pathPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#path_pattern CloudfrontDistribution#path_pattern}.

---

##### `targetOriginId`<sup>Required</sup> <a name="targetOriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.targetOriginId"></a>

```typescript
public readonly targetOriginId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}.

---

##### `viewerProtocolPolicy`<sup>Required</sup> <a name="viewerProtocolPolicy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.viewerProtocolPolicy"></a>

```typescript
public readonly viewerProtocolPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}.

---

##### `cachePolicyId`<sup>Optional</sup> <a name="cachePolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.cachePolicyId"></a>

```typescript
public readonly cachePolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}.

---

##### `compress`<sup>Optional</sup> <a name="compress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.compress"></a>

```typescript
public readonly compress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#compress CloudfrontDistribution#compress}.

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}.

---

##### `fieldLevelEncryptionId`<sup>Optional</sup> <a name="fieldLevelEncryptionId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.fieldLevelEncryptionId"></a>

```typescript
public readonly fieldLevelEncryptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}.

---

##### `forwardedValues`<sup>Optional</sup> <a name="forwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.forwardedValues"></a>

```typescript
public readonly forwardedValues: CloudfrontDistributionOrderedCacheBehaviorForwardedValues;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a>

forwarded_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forwarded_values CloudfrontDistribution#forwarded_values}

---

##### `functionAssociation`<sup>Optional</sup> <a name="functionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.functionAssociation"></a>

```typescript
public readonly functionAssociation: IResolvable | CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation</a>[]

function_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_association CloudfrontDistribution#function_association}

---

##### `lambdaFunctionAssociation`<sup>Optional</sup> <a name="lambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.lambdaFunctionAssociation"></a>

```typescript
public readonly lambdaFunctionAssociation: IResolvable | CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation</a>[]

lambda_function_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_function_association CloudfrontDistribution#lambda_function_association}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}.

---

##### `minTtl`<sup>Optional</sup> <a name="minTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.minTtl"></a>

```typescript
public readonly minTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}.

---

##### `originRequestPolicyId`<sup>Optional</sup> <a name="originRequestPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.originRequestPolicyId"></a>

```typescript
public readonly originRequestPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}.

---

##### `realtimeLogConfigArn`<sup>Optional</sup> <a name="realtimeLogConfigArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.realtimeLogConfigArn"></a>

```typescript
public readonly realtimeLogConfigArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}.

---

##### `responseHeadersPolicyId`<sup>Optional</sup> <a name="responseHeadersPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.responseHeadersPolicyId"></a>

```typescript
public readonly responseHeadersPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}.

---

##### `smoothStreaming`<sup>Optional</sup> <a name="smoothStreaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.smoothStreaming"></a>

```typescript
public readonly smoothStreaming: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}.

---

##### `trustedKeyGroups`<sup>Optional</sup> <a name="trustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.trustedKeyGroups"></a>

```typescript
public readonly trustedKeyGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}.

---

##### `trustedSigners`<sup>Optional</sup> <a name="trustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.trustedSigners"></a>

```typescript
public readonly trustedSigners: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}.

---

### CloudfrontDistributionOrderedCacheBehaviorForwardedValues <a name="CloudfrontDistributionOrderedCacheBehaviorForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionOrderedCacheBehaviorForwardedValues: cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.cookies">cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a></code> | cookies block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.queryString">queryString</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string CloudfrontDistribution#query_string}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.headers">headers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#headers CloudfrontDistribution#headers}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.queryStringCacheKeys">queryStringCacheKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}. |

---

##### `cookies`<sup>Required</sup> <a name="cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.cookies"></a>

```typescript
public readonly cookies: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a>

cookies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cookies CloudfrontDistribution#cookies}

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.queryString"></a>

```typescript
public readonly queryString: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string CloudfrontDistribution#query_string}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.headers"></a>

```typescript
public readonly headers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#headers CloudfrontDistribution#headers}.

---

##### `queryStringCacheKeys`<sup>Optional</sup> <a name="queryStringCacheKeys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.queryStringCacheKeys"></a>

```typescript
public readonly queryStringCacheKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}.

---

### CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies <a name="CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies: cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies.property.forward">forward</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forward CloudfrontDistribution#forward}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies.property.whitelistedNames">whitelistedNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}. |

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies.property.forward"></a>

```typescript
public readonly forward: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forward CloudfrontDistribution#forward}.

---

##### `whitelistedNames`<sup>Optional</sup> <a name="whitelistedNames" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies.property.whitelistedNames"></a>

```typescript
public readonly whitelistedNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}.

---

### CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation <a name="CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionOrderedCacheBehaviorFunctionAssociation: cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation.property.eventType">eventType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation.property.functionArn">functionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_arn CloudfrontDistribution#function_arn}. |

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}.

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_arn CloudfrontDistribution#function_arn}.

---

### CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation <a name="CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation: cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.eventType">eventType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_arn CloudfrontDistribution#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.includeBody">includeBody</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_body CloudfrontDistribution#include_body}. |

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}.

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_arn CloudfrontDistribution#lambda_arn}.

---

##### `includeBody`<sup>Optional</sup> <a name="includeBody" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.includeBody"></a>

```typescript
public readonly includeBody: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_body CloudfrontDistribution#include_body}.

---

### CloudfrontDistributionOrigin <a name="CloudfrontDistributionOrigin" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionOrigin: cloudfrontDistribution.CloudfrontDistributionOrigin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#domain_name CloudfrontDistribution#domain_name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originId">originId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.connectionAttempts">connectionAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#connection_attempts CloudfrontDistribution#connection_attempts}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.connectionTimeout">connectionTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#connection_timeout CloudfrontDistribution#connection_timeout}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.customHeader">customHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader">CloudfrontDistributionOriginCustomHeader</a>[]</code> | custom_header block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.customOriginConfig">customOriginConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a></code> | custom_origin_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originAccessControlId">originAccessControlId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_access_control_id CloudfrontDistribution#origin_access_control_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originPath">originPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_path CloudfrontDistribution#origin_path}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originShield">originShield</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a></code> | origin_shield block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.s3OriginConfig">s3OriginConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a></code> | s3_origin_config block. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#domain_name CloudfrontDistribution#domain_name}.

---

##### `originId`<sup>Required</sup> <a name="originId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originId"></a>

```typescript
public readonly originId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}.

---

##### `connectionAttempts`<sup>Optional</sup> <a name="connectionAttempts" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.connectionAttempts"></a>

```typescript
public readonly connectionAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#connection_attempts CloudfrontDistribution#connection_attempts}.

---

##### `connectionTimeout`<sup>Optional</sup> <a name="connectionTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.connectionTimeout"></a>

```typescript
public readonly connectionTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#connection_timeout CloudfrontDistribution#connection_timeout}.

---

##### `customHeader`<sup>Optional</sup> <a name="customHeader" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.customHeader"></a>

```typescript
public readonly customHeader: IResolvable | CloudfrontDistributionOriginCustomHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader">CloudfrontDistributionOriginCustomHeader</a>[]

custom_header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#custom_header CloudfrontDistribution#custom_header}

---

##### `customOriginConfig`<sup>Optional</sup> <a name="customOriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.customOriginConfig"></a>

```typescript
public readonly customOriginConfig: CloudfrontDistributionOriginCustomOriginConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a>

custom_origin_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#custom_origin_config CloudfrontDistribution#custom_origin_config}

---

##### `originAccessControlId`<sup>Optional</sup> <a name="originAccessControlId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originAccessControlId"></a>

```typescript
public readonly originAccessControlId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_access_control_id CloudfrontDistribution#origin_access_control_id}.

---

##### `originPath`<sup>Optional</sup> <a name="originPath" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originPath"></a>

```typescript
public readonly originPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_path CloudfrontDistribution#origin_path}.

---

##### `originShield`<sup>Optional</sup> <a name="originShield" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originShield"></a>

```typescript
public readonly originShield: CloudfrontDistributionOriginOriginShield;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a>

origin_shield block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_shield CloudfrontDistribution#origin_shield}

---

##### `s3OriginConfig`<sup>Optional</sup> <a name="s3OriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.s3OriginConfig"></a>

```typescript
public readonly s3OriginConfig: CloudfrontDistributionOriginS3OriginConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a>

s3_origin_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#s3_origin_config CloudfrontDistribution#s3_origin_config}

---

### CloudfrontDistributionOriginCustomHeader <a name="CloudfrontDistributionOriginCustomHeader" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionOriginCustomHeader: cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#name CloudfrontDistribution#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#value CloudfrontDistribution#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#name CloudfrontDistribution#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#value CloudfrontDistribution#value}.

---

### CloudfrontDistributionOriginCustomOriginConfig <a name="CloudfrontDistributionOriginCustomOriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionOriginCustomOriginConfig: cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.httpPort">httpPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#http_port CloudfrontDistribution#http_port}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.httpsPort">httpsPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#https_port CloudfrontDistribution#https_port}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originProtocolPolicy">originProtocolPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_protocol_policy CloudfrontDistribution#origin_protocol_policy}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originSslProtocols">originSslProtocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_ssl_protocols CloudfrontDistribution#origin_ssl_protocols}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originKeepaliveTimeout">originKeepaliveTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_keepalive_timeout CloudfrontDistribution#origin_keepalive_timeout}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originReadTimeout">originReadTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_read_timeout CloudfrontDistribution#origin_read_timeout}. |

---

##### `httpPort`<sup>Required</sup> <a name="httpPort" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.httpPort"></a>

```typescript
public readonly httpPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#http_port CloudfrontDistribution#http_port}.

---

##### `httpsPort`<sup>Required</sup> <a name="httpsPort" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.httpsPort"></a>

```typescript
public readonly httpsPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#https_port CloudfrontDistribution#https_port}.

---

##### `originProtocolPolicy`<sup>Required</sup> <a name="originProtocolPolicy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originProtocolPolicy"></a>

```typescript
public readonly originProtocolPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_protocol_policy CloudfrontDistribution#origin_protocol_policy}.

---

##### `originSslProtocols`<sup>Required</sup> <a name="originSslProtocols" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originSslProtocols"></a>

```typescript
public readonly originSslProtocols: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_ssl_protocols CloudfrontDistribution#origin_ssl_protocols}.

---

##### `originKeepaliveTimeout`<sup>Optional</sup> <a name="originKeepaliveTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originKeepaliveTimeout"></a>

```typescript
public readonly originKeepaliveTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_keepalive_timeout CloudfrontDistribution#origin_keepalive_timeout}.

---

##### `originReadTimeout`<sup>Optional</sup> <a name="originReadTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originReadTimeout"></a>

```typescript
public readonly originReadTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_read_timeout CloudfrontDistribution#origin_read_timeout}.

---

### CloudfrontDistributionOriginGroup <a name="CloudfrontDistributionOriginGroup" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionOriginGroup: cloudfrontDistribution.CloudfrontDistributionOriginGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.failoverCriteria">failoverCriteria</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a></code> | failover_criteria block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.member">member</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember">CloudfrontDistributionOriginGroupMember</a>[]</code> | member block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.originId">originId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}. |

---

##### `failoverCriteria`<sup>Required</sup> <a name="failoverCriteria" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.failoverCriteria"></a>

```typescript
public readonly failoverCriteria: CloudfrontDistributionOriginGroupFailoverCriteria;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a>

failover_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#failover_criteria CloudfrontDistribution#failover_criteria}

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.member"></a>

```typescript
public readonly member: IResolvable | CloudfrontDistributionOriginGroupMember[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember">CloudfrontDistributionOriginGroupMember</a>[]

member block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#member CloudfrontDistribution#member}

---

##### `originId`<sup>Required</sup> <a name="originId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.originId"></a>

```typescript
public readonly originId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}.

---

### CloudfrontDistributionOriginGroupFailoverCriteria <a name="CloudfrontDistributionOriginGroupFailoverCriteria" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionOriginGroupFailoverCriteria: cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria.property.statusCodes">statusCodes</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#status_codes CloudfrontDistribution#status_codes}. |

---

##### `statusCodes`<sup>Required</sup> <a name="statusCodes" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria.property.statusCodes"></a>

```typescript
public readonly statusCodes: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#status_codes CloudfrontDistribution#status_codes}.

---

### CloudfrontDistributionOriginGroupMember <a name="CloudfrontDistributionOriginGroupMember" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionOriginGroupMember: cloudfrontDistribution.CloudfrontDistributionOriginGroupMember = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember.property.originId">originId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}. |

---

##### `originId`<sup>Required</sup> <a name="originId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember.property.originId"></a>

```typescript
public readonly originId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}.

---

### CloudfrontDistributionOriginOriginShield <a name="CloudfrontDistributionOriginOriginShield" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionOriginOriginShield: cloudfrontDistribution.CloudfrontDistributionOriginOriginShield = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#enabled CloudfrontDistribution#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield.property.originShieldRegion">originShieldRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_shield_region CloudfrontDistribution#origin_shield_region}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#enabled CloudfrontDistribution#enabled}.

---

##### `originShieldRegion`<sup>Required</sup> <a name="originShieldRegion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield.property.originShieldRegion"></a>

```typescript
public readonly originShieldRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_shield_region CloudfrontDistribution#origin_shield_region}.

---

### CloudfrontDistributionOriginS3OriginConfig <a name="CloudfrontDistributionOriginS3OriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionOriginS3OriginConfig: cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig.property.originAccessIdentity">originAccessIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_access_identity CloudfrontDistribution#origin_access_identity}. |

---

##### `originAccessIdentity`<sup>Required</sup> <a name="originAccessIdentity" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig.property.originAccessIdentity"></a>

```typescript
public readonly originAccessIdentity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_access_identity CloudfrontDistribution#origin_access_identity}.

---

### CloudfrontDistributionRestrictions <a name="CloudfrontDistributionRestrictions" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionRestrictions: cloudfrontDistribution.CloudfrontDistributionRestrictions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions.property.geoRestriction">geoRestriction</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a></code> | geo_restriction block. |

---

##### `geoRestriction`<sup>Required</sup> <a name="geoRestriction" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions.property.geoRestriction"></a>

```typescript
public readonly geoRestriction: CloudfrontDistributionRestrictionsGeoRestriction;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a>

geo_restriction block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#geo_restriction CloudfrontDistribution#geo_restriction}

---

### CloudfrontDistributionRestrictionsGeoRestriction <a name="CloudfrontDistributionRestrictionsGeoRestriction" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionRestrictionsGeoRestriction: cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction.property.restrictionType">restrictionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#restriction_type CloudfrontDistribution#restriction_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction.property.locations">locations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#locations CloudfrontDistribution#locations}. |

---

##### `restrictionType`<sup>Required</sup> <a name="restrictionType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction.property.restrictionType"></a>

```typescript
public readonly restrictionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#restriction_type CloudfrontDistribution#restriction_type}.

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#locations CloudfrontDistribution#locations}.

---

### CloudfrontDistributionTrustedKeyGroups <a name="CloudfrontDistributionTrustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroups.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionTrustedKeyGroups: cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroups = { ... }
```


### CloudfrontDistributionTrustedKeyGroupsItems <a name="CloudfrontDistributionTrustedKeyGroupsItems" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItems.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionTrustedKeyGroupsItems: cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItems = { ... }
```


### CloudfrontDistributionTrustedSigners <a name="CloudfrontDistributionTrustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSigners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSigners.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionTrustedSigners: cloudfrontDistribution.CloudfrontDistributionTrustedSigners = { ... }
```


### CloudfrontDistributionTrustedSignersItems <a name="CloudfrontDistributionTrustedSignersItems" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItems.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionTrustedSignersItems: cloudfrontDistribution.CloudfrontDistributionTrustedSignersItems = { ... }
```


### CloudfrontDistributionViewerCertificate <a name="CloudfrontDistributionViewerCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

const cloudfrontDistributionViewerCertificate: cloudfrontDistribution.CloudfrontDistributionViewerCertificate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.acmCertificateArn">acmCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#acm_certificate_arn CloudfrontDistribution#acm_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.cloudfrontDefaultCertificate">cloudfrontDefaultCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cloudfront_default_certificate CloudfrontDistribution#cloudfront_default_certificate}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.iamCertificateId">iamCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#iam_certificate_id CloudfrontDistribution#iam_certificate_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.minimumProtocolVersion">minimumProtocolVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#minimum_protocol_version CloudfrontDistribution#minimum_protocol_version}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.sslSupportMethod">sslSupportMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#ssl_support_method CloudfrontDistribution#ssl_support_method}. |

---

##### `acmCertificateArn`<sup>Optional</sup> <a name="acmCertificateArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.acmCertificateArn"></a>

```typescript
public readonly acmCertificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#acm_certificate_arn CloudfrontDistribution#acm_certificate_arn}.

---

##### `cloudfrontDefaultCertificate`<sup>Optional</sup> <a name="cloudfrontDefaultCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.cloudfrontDefaultCertificate"></a>

```typescript
public readonly cloudfrontDefaultCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cloudfront_default_certificate CloudfrontDistribution#cloudfront_default_certificate}.

---

##### `iamCertificateId`<sup>Optional</sup> <a name="iamCertificateId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.iamCertificateId"></a>

```typescript
public readonly iamCertificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#iam_certificate_id CloudfrontDistribution#iam_certificate_id}.

---

##### `minimumProtocolVersion`<sup>Optional</sup> <a name="minimumProtocolVersion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.minimumProtocolVersion"></a>

```typescript
public readonly minimumProtocolVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#minimum_protocol_version CloudfrontDistribution#minimum_protocol_version}.

---

##### `sslSupportMethod`<sup>Optional</sup> <a name="sslSupportMethod" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.sslSupportMethod"></a>

```typescript
public readonly sslSupportMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#ssl_support_method CloudfrontDistribution#ssl_support_method}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontDistributionCustomErrorResponseList <a name="CloudfrontDistributionCustomErrorResponseList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionCustomErrorResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse">CloudfrontDistributionCustomErrorResponse</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionCustomErrorResponse[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse">CloudfrontDistributionCustomErrorResponse</a>[]

---


### CloudfrontDistributionCustomErrorResponseOutputReference <a name="CloudfrontDistributionCustomErrorResponseOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetErrorCachingMinTtl">resetErrorCachingMinTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetResponseCode">resetResponseCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetResponsePagePath">resetResponsePagePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetErrorCachingMinTtl` <a name="resetErrorCachingMinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetErrorCachingMinTtl"></a>

```typescript
public resetErrorCachingMinTtl(): void
```

##### `resetResponseCode` <a name="resetResponseCode" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetResponseCode"></a>

```typescript
public resetResponseCode(): void
```

##### `resetResponsePagePath` <a name="resetResponsePagePath" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetResponsePagePath"></a>

```typescript
public resetResponsePagePath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCachingMinTtlInput">errorCachingMinTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCodeInput">errorCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responseCodeInput">responseCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responsePagePathInput">responsePagePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCachingMinTtl">errorCachingMinTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCode">errorCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responseCode">responseCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responsePagePath">responsePagePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse">CloudfrontDistributionCustomErrorResponse</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorCachingMinTtlInput`<sup>Optional</sup> <a name="errorCachingMinTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCachingMinTtlInput"></a>

```typescript
public readonly errorCachingMinTtlInput: number;
```

- *Type:* number

---

##### `errorCodeInput`<sup>Optional</sup> <a name="errorCodeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCodeInput"></a>

```typescript
public readonly errorCodeInput: number;
```

- *Type:* number

---

##### `responseCodeInput`<sup>Optional</sup> <a name="responseCodeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responseCodeInput"></a>

```typescript
public readonly responseCodeInput: number;
```

- *Type:* number

---

##### `responsePagePathInput`<sup>Optional</sup> <a name="responsePagePathInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responsePagePathInput"></a>

```typescript
public readonly responsePagePathInput: string;
```

- *Type:* string

---

##### `errorCachingMinTtl`<sup>Required</sup> <a name="errorCachingMinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCachingMinTtl"></a>

```typescript
public readonly errorCachingMinTtl: number;
```

- *Type:* number

---

##### `errorCode`<sup>Required</sup> <a name="errorCode" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCode"></a>

```typescript
public readonly errorCode: number;
```

- *Type:* number

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

---

##### `responsePagePath`<sup>Required</sup> <a name="responsePagePath" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responsePagePath"></a>

```typescript
public readonly responsePagePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionCustomErrorResponse | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse">CloudfrontDistributionCustomErrorResponse</a> | cdktf.IResolvable

---


### CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference <a name="CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.resetWhitelistedNames">resetWhitelistedNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWhitelistedNames` <a name="resetWhitelistedNames" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.resetWhitelistedNames"></a>

```typescript
public resetWhitelistedNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.forwardInput">forwardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNamesInput">whitelistedNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.forward">forward</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNames">whitelistedNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forwardInput`<sup>Optional</sup> <a name="forwardInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.forwardInput"></a>

```typescript
public readonly forwardInput: string;
```

- *Type:* string

---

##### `whitelistedNamesInput`<sup>Optional</sup> <a name="whitelistedNamesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNamesInput"></a>

```typescript
public readonly whitelistedNamesInput: string[];
```

- *Type:* string[]

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.forward"></a>

```typescript
public readonly forward: string;
```

- *Type:* string

---

##### `whitelistedNames`<sup>Required</sup> <a name="whitelistedNames" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNames"></a>

```typescript
public readonly whitelistedNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a>

---


### CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference <a name="CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.putCookies">putCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resetQueryStringCacheKeys">resetQueryStringCacheKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCookies` <a name="putCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.putCookies"></a>

```typescript
public putCookies(value: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.putCookies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a>

---

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetQueryStringCacheKeys` <a name="resetQueryStringCacheKeys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resetQueryStringCacheKeys"></a>

```typescript
public resetQueryStringCacheKeys(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.cookies">cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.cookiesInput">cookiesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.headersInput">headersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeysInput">queryStringCacheKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.headers">headers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryString">queryString</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeys">queryStringCacheKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookies`<sup>Required</sup> <a name="cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.cookies"></a>

```typescript
public readonly cookies: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference</a>

---

##### `cookiesInput`<sup>Optional</sup> <a name="cookiesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.cookiesInput"></a>

```typescript
public readonly cookiesInput: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: string[];
```

- *Type:* string[]

---

##### `queryStringCacheKeysInput`<sup>Optional</sup> <a name="queryStringCacheKeysInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeysInput"></a>

```typescript
public readonly queryStringCacheKeysInput: string[];
```

- *Type:* string[]

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.headers"></a>

```typescript
public readonly headers: string[];
```

- *Type:* string[]

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryString"></a>

```typescript
public readonly queryString: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryStringCacheKeys`<sup>Required</sup> <a name="queryStringCacheKeys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeys"></a>

```typescript
public readonly queryStringCacheKeys: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionDefaultCacheBehaviorForwardedValues;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a>

---


### CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList <a name="CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation</a>[]

---


### CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference <a name="CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.functionArnInput">functionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.functionArn">functionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.eventTypeInput"></a>

```typescript
public readonly eventTypeInput: string;
```

- *Type:* string

---

##### `functionArnInput`<sup>Optional</sup> <a name="functionArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.functionArnInput"></a>

```typescript
public readonly functionArnInput: string;
```

- *Type:* string

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation</a> | cdktf.IResolvable

---


### CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList <a name="CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation</a>[]

---


### CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference <a name="CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.resetIncludeBody">resetIncludeBody</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeBody` <a name="resetIncludeBody" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.resetIncludeBody"></a>

```typescript
public resetIncludeBody(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBodyInput">includeBodyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBody">includeBody</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventTypeInput"></a>

```typescript
public readonly eventTypeInput: string;
```

- *Type:* string

---

##### `includeBodyInput`<sup>Optional</sup> <a name="includeBodyInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBodyInput"></a>

```typescript
public readonly includeBodyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArnInput"></a>

```typescript
public readonly lambdaArnInput: string;
```

- *Type:* string

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `includeBody`<sup>Required</sup> <a name="includeBody" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBody"></a>

```typescript
public readonly includeBody: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation</a> | cdktf.IResolvable

---


### CloudfrontDistributionDefaultCacheBehaviorOutputReference <a name="CloudfrontDistributionDefaultCacheBehaviorOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putForwardedValues">putForwardedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putFunctionAssociation">putFunctionAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putLambdaFunctionAssociation">putLambdaFunctionAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetCachePolicyId">resetCachePolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetCompress">resetCompress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetFieldLevelEncryptionId">resetFieldLevelEncryptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetForwardedValues">resetForwardedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetFunctionAssociation">resetFunctionAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetLambdaFunctionAssociation">resetLambdaFunctionAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetMinTtl">resetMinTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetOriginRequestPolicyId">resetOriginRequestPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetRealtimeLogConfigArn">resetRealtimeLogConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetResponseHeadersPolicyId">resetResponseHeadersPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetSmoothStreaming">resetSmoothStreaming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetTrustedKeyGroups">resetTrustedKeyGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetTrustedSigners">resetTrustedSigners</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putForwardedValues` <a name="putForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putForwardedValues"></a>

```typescript
public putForwardedValues(value: CloudfrontDistributionDefaultCacheBehaviorForwardedValues): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putForwardedValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a>

---

##### `putFunctionAssociation` <a name="putFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putFunctionAssociation"></a>

```typescript
public putFunctionAssociation(value: IResolvable | CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putFunctionAssociation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation</a>[]

---

##### `putLambdaFunctionAssociation` <a name="putLambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putLambdaFunctionAssociation"></a>

```typescript
public putLambdaFunctionAssociation(value: IResolvable | CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putLambdaFunctionAssociation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation</a>[]

---

##### `resetCachePolicyId` <a name="resetCachePolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetCachePolicyId"></a>

```typescript
public resetCachePolicyId(): void
```

##### `resetCompress` <a name="resetCompress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetCompress"></a>

```typescript
public resetCompress(): void
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetDefaultTtl"></a>

```typescript
public resetDefaultTtl(): void
```

##### `resetFieldLevelEncryptionId` <a name="resetFieldLevelEncryptionId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetFieldLevelEncryptionId"></a>

```typescript
public resetFieldLevelEncryptionId(): void
```

##### `resetForwardedValues` <a name="resetForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetForwardedValues"></a>

```typescript
public resetForwardedValues(): void
```

##### `resetFunctionAssociation` <a name="resetFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetFunctionAssociation"></a>

```typescript
public resetFunctionAssociation(): void
```

##### `resetLambdaFunctionAssociation` <a name="resetLambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetLambdaFunctionAssociation"></a>

```typescript
public resetLambdaFunctionAssociation(): void
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetMaxTtl"></a>

```typescript
public resetMaxTtl(): void
```

##### `resetMinTtl` <a name="resetMinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetMinTtl"></a>

```typescript
public resetMinTtl(): void
```

##### `resetOriginRequestPolicyId` <a name="resetOriginRequestPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetOriginRequestPolicyId"></a>

```typescript
public resetOriginRequestPolicyId(): void
```

##### `resetRealtimeLogConfigArn` <a name="resetRealtimeLogConfigArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetRealtimeLogConfigArn"></a>

```typescript
public resetRealtimeLogConfigArn(): void
```

##### `resetResponseHeadersPolicyId` <a name="resetResponseHeadersPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetResponseHeadersPolicyId"></a>

```typescript
public resetResponseHeadersPolicyId(): void
```

##### `resetSmoothStreaming` <a name="resetSmoothStreaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetSmoothStreaming"></a>

```typescript
public resetSmoothStreaming(): void
```

##### `resetTrustedKeyGroups` <a name="resetTrustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetTrustedKeyGroups"></a>

```typescript
public resetTrustedKeyGroups(): void
```

##### `resetTrustedSigners` <a name="resetTrustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetTrustedSigners"></a>

```typescript
public resetTrustedSigners(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.forwardedValues">forwardedValues</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.functionAssociation">functionAssociation</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.lambdaFunctionAssociation">lambdaFunctionAssociation</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachedMethodsInput">cachedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachePolicyIdInput">cachePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.compressInput">compressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.defaultTtlInput">defaultTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fieldLevelEncryptionIdInput">fieldLevelEncryptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.forwardedValuesInput">forwardedValuesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.functionAssociationInput">functionAssociationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.lambdaFunctionAssociationInput">lambdaFunctionAssociationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.maxTtlInput">maxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.minTtlInput">minTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.originRequestPolicyIdInput">originRequestPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.realtimeLogConfigArnInput">realtimeLogConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.responseHeadersPolicyIdInput">responseHeadersPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.smoothStreamingInput">smoothStreamingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.targetOriginIdInput">targetOriginIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedKeyGroupsInput">trustedKeyGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedSignersInput">trustedSignersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.viewerProtocolPolicyInput">viewerProtocolPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachedMethods">cachedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachePolicyId">cachePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.compress">compress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fieldLevelEncryptionId">fieldLevelEncryptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.maxTtl">maxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.minTtl">minTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.originRequestPolicyId">originRequestPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.realtimeLogConfigArn">realtimeLogConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.responseHeadersPolicyId">responseHeadersPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.smoothStreaming">smoothStreaming</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.targetOriginId">targetOriginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedKeyGroups">trustedKeyGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedSigners">trustedSigners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.viewerProtocolPolicy">viewerProtocolPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forwardedValues`<sup>Required</sup> <a name="forwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.forwardedValues"></a>

```typescript
public readonly forwardedValues: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference</a>

---

##### `functionAssociation`<sup>Required</sup> <a name="functionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.functionAssociation"></a>

```typescript
public readonly functionAssociation: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList</a>

---

##### `lambdaFunctionAssociation`<sup>Required</sup> <a name="lambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.lambdaFunctionAssociation"></a>

```typescript
public readonly lambdaFunctionAssociation: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList</a>

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.allowedMethodsInput"></a>

```typescript
public readonly allowedMethodsInput: string[];
```

- *Type:* string[]

---

##### `cachedMethodsInput`<sup>Optional</sup> <a name="cachedMethodsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachedMethodsInput"></a>

```typescript
public readonly cachedMethodsInput: string[];
```

- *Type:* string[]

---

##### `cachePolicyIdInput`<sup>Optional</sup> <a name="cachePolicyIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachePolicyIdInput"></a>

```typescript
public readonly cachePolicyIdInput: string;
```

- *Type:* string

---

##### `compressInput`<sup>Optional</sup> <a name="compressInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.compressInput"></a>

```typescript
public readonly compressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.defaultTtlInput"></a>

```typescript
public readonly defaultTtlInput: number;
```

- *Type:* number

---

##### `fieldLevelEncryptionIdInput`<sup>Optional</sup> <a name="fieldLevelEncryptionIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fieldLevelEncryptionIdInput"></a>

```typescript
public readonly fieldLevelEncryptionIdInput: string;
```

- *Type:* string

---

##### `forwardedValuesInput`<sup>Optional</sup> <a name="forwardedValuesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.forwardedValuesInput"></a>

```typescript
public readonly forwardedValuesInput: CloudfrontDistributionDefaultCacheBehaviorForwardedValues;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a>

---

##### `functionAssociationInput`<sup>Optional</sup> <a name="functionAssociationInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.functionAssociationInput"></a>

```typescript
public readonly functionAssociationInput: IResolvable | CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation</a>[]

---

##### `lambdaFunctionAssociationInput`<sup>Optional</sup> <a name="lambdaFunctionAssociationInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.lambdaFunctionAssociationInput"></a>

```typescript
public readonly lambdaFunctionAssociationInput: IResolvable | CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation</a>[]

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: number;
```

- *Type:* number

---

##### `minTtlInput`<sup>Optional</sup> <a name="minTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.minTtlInput"></a>

```typescript
public readonly minTtlInput: number;
```

- *Type:* number

---

##### `originRequestPolicyIdInput`<sup>Optional</sup> <a name="originRequestPolicyIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.originRequestPolicyIdInput"></a>

```typescript
public readonly originRequestPolicyIdInput: string;
```

- *Type:* string

---

##### `realtimeLogConfigArnInput`<sup>Optional</sup> <a name="realtimeLogConfigArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.realtimeLogConfigArnInput"></a>

```typescript
public readonly realtimeLogConfigArnInput: string;
```

- *Type:* string

---

##### `responseHeadersPolicyIdInput`<sup>Optional</sup> <a name="responseHeadersPolicyIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.responseHeadersPolicyIdInput"></a>

```typescript
public readonly responseHeadersPolicyIdInput: string;
```

- *Type:* string

---

##### `smoothStreamingInput`<sup>Optional</sup> <a name="smoothStreamingInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.smoothStreamingInput"></a>

```typescript
public readonly smoothStreamingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetOriginIdInput`<sup>Optional</sup> <a name="targetOriginIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.targetOriginIdInput"></a>

```typescript
public readonly targetOriginIdInput: string;
```

- *Type:* string

---

##### `trustedKeyGroupsInput`<sup>Optional</sup> <a name="trustedKeyGroupsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedKeyGroupsInput"></a>

```typescript
public readonly trustedKeyGroupsInput: string[];
```

- *Type:* string[]

---

##### `trustedSignersInput`<sup>Optional</sup> <a name="trustedSignersInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedSignersInput"></a>

```typescript
public readonly trustedSignersInput: string[];
```

- *Type:* string[]

---

##### `viewerProtocolPolicyInput`<sup>Optional</sup> <a name="viewerProtocolPolicyInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.viewerProtocolPolicyInput"></a>

```typescript
public readonly viewerProtocolPolicyInput: string;
```

- *Type:* string

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

---

##### `cachedMethods`<sup>Required</sup> <a name="cachedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachedMethods"></a>

```typescript
public readonly cachedMethods: string[];
```

- *Type:* string[]

---

##### `cachePolicyId`<sup>Required</sup> <a name="cachePolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachePolicyId"></a>

```typescript
public readonly cachePolicyId: string;
```

- *Type:* string

---

##### `compress`<sup>Required</sup> <a name="compress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.compress"></a>

```typescript
public readonly compress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

---

##### `fieldLevelEncryptionId`<sup>Required</sup> <a name="fieldLevelEncryptionId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fieldLevelEncryptionId"></a>

```typescript
public readonly fieldLevelEncryptionId: string;
```

- *Type:* string

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

---

##### `minTtl`<sup>Required</sup> <a name="minTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.minTtl"></a>

```typescript
public readonly minTtl: number;
```

- *Type:* number

---

##### `originRequestPolicyId`<sup>Required</sup> <a name="originRequestPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.originRequestPolicyId"></a>

```typescript
public readonly originRequestPolicyId: string;
```

- *Type:* string

---

##### `realtimeLogConfigArn`<sup>Required</sup> <a name="realtimeLogConfigArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.realtimeLogConfigArn"></a>

```typescript
public readonly realtimeLogConfigArn: string;
```

- *Type:* string

---

##### `responseHeadersPolicyId`<sup>Required</sup> <a name="responseHeadersPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.responseHeadersPolicyId"></a>

```typescript
public readonly responseHeadersPolicyId: string;
```

- *Type:* string

---

##### `smoothStreaming`<sup>Required</sup> <a name="smoothStreaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.smoothStreaming"></a>

```typescript
public readonly smoothStreaming: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetOriginId`<sup>Required</sup> <a name="targetOriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.targetOriginId"></a>

```typescript
public readonly targetOriginId: string;
```

- *Type:* string

---

##### `trustedKeyGroups`<sup>Required</sup> <a name="trustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedKeyGroups"></a>

```typescript
public readonly trustedKeyGroups: string[];
```

- *Type:* string[]

---

##### `trustedSigners`<sup>Required</sup> <a name="trustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedSigners"></a>

```typescript
public readonly trustedSigners: string[];
```

- *Type:* string[]

---

##### `viewerProtocolPolicy`<sup>Required</sup> <a name="viewerProtocolPolicy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.viewerProtocolPolicy"></a>

```typescript
public readonly viewerProtocolPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionDefaultCacheBehavior;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a>

---


### CloudfrontDistributionLoggingConfigOutputReference <a name="CloudfrontDistributionLoggingConfigOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resetIncludeCookies">resetIncludeCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeCookies` <a name="resetIncludeCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resetIncludeCookies"></a>

```typescript
public resetIncludeCookies(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.includeCookiesInput">includeCookiesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.includeCookies">includeCookies</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `includeCookiesInput`<sup>Optional</sup> <a name="includeCookiesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.includeCookiesInput"></a>

```typescript
public readonly includeCookiesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `includeCookies`<sup>Required</sup> <a name="includeCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.includeCookies"></a>

```typescript
public readonly includeCookies: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a>

---


### CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference <a name="CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.resetWhitelistedNames">resetWhitelistedNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWhitelistedNames` <a name="resetWhitelistedNames" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.resetWhitelistedNames"></a>

```typescript
public resetWhitelistedNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.forwardInput">forwardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNamesInput">whitelistedNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.forward">forward</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNames">whitelistedNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forwardInput`<sup>Optional</sup> <a name="forwardInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.forwardInput"></a>

```typescript
public readonly forwardInput: string;
```

- *Type:* string

---

##### `whitelistedNamesInput`<sup>Optional</sup> <a name="whitelistedNamesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNamesInput"></a>

```typescript
public readonly whitelistedNamesInput: string[];
```

- *Type:* string[]

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.forward"></a>

```typescript
public readonly forward: string;
```

- *Type:* string

---

##### `whitelistedNames`<sup>Required</sup> <a name="whitelistedNames" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNames"></a>

```typescript
public readonly whitelistedNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a>

---


### CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference <a name="CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.putCookies">putCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resetQueryStringCacheKeys">resetQueryStringCacheKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCookies` <a name="putCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.putCookies"></a>

```typescript
public putCookies(value: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.putCookies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a>

---

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetQueryStringCacheKeys` <a name="resetQueryStringCacheKeys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resetQueryStringCacheKeys"></a>

```typescript
public resetQueryStringCacheKeys(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.cookies">cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.cookiesInput">cookiesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.headersInput">headersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeysInput">queryStringCacheKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.headers">headers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryString">queryString</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeys">queryStringCacheKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookies`<sup>Required</sup> <a name="cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.cookies"></a>

```typescript
public readonly cookies: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference</a>

---

##### `cookiesInput`<sup>Optional</sup> <a name="cookiesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.cookiesInput"></a>

```typescript
public readonly cookiesInput: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: string[];
```

- *Type:* string[]

---

##### `queryStringCacheKeysInput`<sup>Optional</sup> <a name="queryStringCacheKeysInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeysInput"></a>

```typescript
public readonly queryStringCacheKeysInput: string[];
```

- *Type:* string[]

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.headers"></a>

```typescript
public readonly headers: string[];
```

- *Type:* string[]

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryString"></a>

```typescript
public readonly queryString: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryStringCacheKeys`<sup>Required</sup> <a name="queryStringCacheKeys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeys"></a>

```typescript
public readonly queryStringCacheKeys: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionOrderedCacheBehaviorForwardedValues;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a>

---


### CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList <a name="CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation</a>[]

---


### CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference <a name="CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.functionArnInput">functionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.functionArn">functionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.eventTypeInput"></a>

```typescript
public readonly eventTypeInput: string;
```

- *Type:* string

---

##### `functionArnInput`<sup>Optional</sup> <a name="functionArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.functionArnInput"></a>

```typescript
public readonly functionArnInput: string;
```

- *Type:* string

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation</a> | cdktf.IResolvable

---


### CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList <a name="CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation</a>[]

---


### CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference <a name="CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.resetIncludeBody">resetIncludeBody</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeBody` <a name="resetIncludeBody" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.resetIncludeBody"></a>

```typescript
public resetIncludeBody(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBodyInput">includeBodyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBody">includeBody</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventTypeInput"></a>

```typescript
public readonly eventTypeInput: string;
```

- *Type:* string

---

##### `includeBodyInput`<sup>Optional</sup> <a name="includeBodyInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBodyInput"></a>

```typescript
public readonly includeBodyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArnInput"></a>

```typescript
public readonly lambdaArnInput: string;
```

- *Type:* string

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `includeBody`<sup>Required</sup> <a name="includeBody" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBody"></a>

```typescript
public readonly includeBody: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation</a> | cdktf.IResolvable

---


### CloudfrontDistributionOrderedCacheBehaviorList <a name="CloudfrontDistributionOrderedCacheBehaviorList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionOrderedCacheBehaviorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior">CloudfrontDistributionOrderedCacheBehavior</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionOrderedCacheBehavior[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior">CloudfrontDistributionOrderedCacheBehavior</a>[]

---


### CloudfrontDistributionOrderedCacheBehaviorOutputReference <a name="CloudfrontDistributionOrderedCacheBehaviorOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putForwardedValues">putForwardedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putFunctionAssociation">putFunctionAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putLambdaFunctionAssociation">putLambdaFunctionAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetCachePolicyId">resetCachePolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetCompress">resetCompress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetFieldLevelEncryptionId">resetFieldLevelEncryptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetForwardedValues">resetForwardedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetFunctionAssociation">resetFunctionAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetLambdaFunctionAssociation">resetLambdaFunctionAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetMinTtl">resetMinTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetOriginRequestPolicyId">resetOriginRequestPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetRealtimeLogConfigArn">resetRealtimeLogConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetResponseHeadersPolicyId">resetResponseHeadersPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetSmoothStreaming">resetSmoothStreaming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetTrustedKeyGroups">resetTrustedKeyGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetTrustedSigners">resetTrustedSigners</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putForwardedValues` <a name="putForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putForwardedValues"></a>

```typescript
public putForwardedValues(value: CloudfrontDistributionOrderedCacheBehaviorForwardedValues): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putForwardedValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a>

---

##### `putFunctionAssociation` <a name="putFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putFunctionAssociation"></a>

```typescript
public putFunctionAssociation(value: IResolvable | CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putFunctionAssociation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation</a>[]

---

##### `putLambdaFunctionAssociation` <a name="putLambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putLambdaFunctionAssociation"></a>

```typescript
public putLambdaFunctionAssociation(value: IResolvable | CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putLambdaFunctionAssociation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation</a>[]

---

##### `resetCachePolicyId` <a name="resetCachePolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetCachePolicyId"></a>

```typescript
public resetCachePolicyId(): void
```

##### `resetCompress` <a name="resetCompress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetCompress"></a>

```typescript
public resetCompress(): void
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetDefaultTtl"></a>

```typescript
public resetDefaultTtl(): void
```

##### `resetFieldLevelEncryptionId` <a name="resetFieldLevelEncryptionId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetFieldLevelEncryptionId"></a>

```typescript
public resetFieldLevelEncryptionId(): void
```

##### `resetForwardedValues` <a name="resetForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetForwardedValues"></a>

```typescript
public resetForwardedValues(): void
```

##### `resetFunctionAssociation` <a name="resetFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetFunctionAssociation"></a>

```typescript
public resetFunctionAssociation(): void
```

##### `resetLambdaFunctionAssociation` <a name="resetLambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetLambdaFunctionAssociation"></a>

```typescript
public resetLambdaFunctionAssociation(): void
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetMaxTtl"></a>

```typescript
public resetMaxTtl(): void
```

##### `resetMinTtl` <a name="resetMinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetMinTtl"></a>

```typescript
public resetMinTtl(): void
```

##### `resetOriginRequestPolicyId` <a name="resetOriginRequestPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetOriginRequestPolicyId"></a>

```typescript
public resetOriginRequestPolicyId(): void
```

##### `resetRealtimeLogConfigArn` <a name="resetRealtimeLogConfigArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetRealtimeLogConfigArn"></a>

```typescript
public resetRealtimeLogConfigArn(): void
```

##### `resetResponseHeadersPolicyId` <a name="resetResponseHeadersPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetResponseHeadersPolicyId"></a>

```typescript
public resetResponseHeadersPolicyId(): void
```

##### `resetSmoothStreaming` <a name="resetSmoothStreaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetSmoothStreaming"></a>

```typescript
public resetSmoothStreaming(): void
```

##### `resetTrustedKeyGroups` <a name="resetTrustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetTrustedKeyGroups"></a>

```typescript
public resetTrustedKeyGroups(): void
```

##### `resetTrustedSigners` <a name="resetTrustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetTrustedSigners"></a>

```typescript
public resetTrustedSigners(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.forwardedValues">forwardedValues</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.functionAssociation">functionAssociation</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.lambdaFunctionAssociation">lambdaFunctionAssociation</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachedMethodsInput">cachedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachePolicyIdInput">cachePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.compressInput">compressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.defaultTtlInput">defaultTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fieldLevelEncryptionIdInput">fieldLevelEncryptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.forwardedValuesInput">forwardedValuesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.functionAssociationInput">functionAssociationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.lambdaFunctionAssociationInput">lambdaFunctionAssociationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.maxTtlInput">maxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.minTtlInput">minTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.originRequestPolicyIdInput">originRequestPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.pathPatternInput">pathPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.realtimeLogConfigArnInput">realtimeLogConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.responseHeadersPolicyIdInput">responseHeadersPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.smoothStreamingInput">smoothStreamingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.targetOriginIdInput">targetOriginIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedKeyGroupsInput">trustedKeyGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedSignersInput">trustedSignersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.viewerProtocolPolicyInput">viewerProtocolPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachedMethods">cachedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachePolicyId">cachePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.compress">compress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fieldLevelEncryptionId">fieldLevelEncryptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.maxTtl">maxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.minTtl">minTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.originRequestPolicyId">originRequestPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.pathPattern">pathPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.realtimeLogConfigArn">realtimeLogConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.responseHeadersPolicyId">responseHeadersPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.smoothStreaming">smoothStreaming</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.targetOriginId">targetOriginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedKeyGroups">trustedKeyGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedSigners">trustedSigners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.viewerProtocolPolicy">viewerProtocolPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior">CloudfrontDistributionOrderedCacheBehavior</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forwardedValues`<sup>Required</sup> <a name="forwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.forwardedValues"></a>

```typescript
public readonly forwardedValues: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference</a>

---

##### `functionAssociation`<sup>Required</sup> <a name="functionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.functionAssociation"></a>

```typescript
public readonly functionAssociation: CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList</a>

---

##### `lambdaFunctionAssociation`<sup>Required</sup> <a name="lambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.lambdaFunctionAssociation"></a>

```typescript
public readonly lambdaFunctionAssociation: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList</a>

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.allowedMethodsInput"></a>

```typescript
public readonly allowedMethodsInput: string[];
```

- *Type:* string[]

---

##### `cachedMethodsInput`<sup>Optional</sup> <a name="cachedMethodsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachedMethodsInput"></a>

```typescript
public readonly cachedMethodsInput: string[];
```

- *Type:* string[]

---

##### `cachePolicyIdInput`<sup>Optional</sup> <a name="cachePolicyIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachePolicyIdInput"></a>

```typescript
public readonly cachePolicyIdInput: string;
```

- *Type:* string

---

##### `compressInput`<sup>Optional</sup> <a name="compressInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.compressInput"></a>

```typescript
public readonly compressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.defaultTtlInput"></a>

```typescript
public readonly defaultTtlInput: number;
```

- *Type:* number

---

##### `fieldLevelEncryptionIdInput`<sup>Optional</sup> <a name="fieldLevelEncryptionIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fieldLevelEncryptionIdInput"></a>

```typescript
public readonly fieldLevelEncryptionIdInput: string;
```

- *Type:* string

---

##### `forwardedValuesInput`<sup>Optional</sup> <a name="forwardedValuesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.forwardedValuesInput"></a>

```typescript
public readonly forwardedValuesInput: CloudfrontDistributionOrderedCacheBehaviorForwardedValues;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a>

---

##### `functionAssociationInput`<sup>Optional</sup> <a name="functionAssociationInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.functionAssociationInput"></a>

```typescript
public readonly functionAssociationInput: IResolvable | CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation</a>[]

---

##### `lambdaFunctionAssociationInput`<sup>Optional</sup> <a name="lambdaFunctionAssociationInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.lambdaFunctionAssociationInput"></a>

```typescript
public readonly lambdaFunctionAssociationInput: IResolvable | CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation</a>[]

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: number;
```

- *Type:* number

---

##### `minTtlInput`<sup>Optional</sup> <a name="minTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.minTtlInput"></a>

```typescript
public readonly minTtlInput: number;
```

- *Type:* number

---

##### `originRequestPolicyIdInput`<sup>Optional</sup> <a name="originRequestPolicyIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.originRequestPolicyIdInput"></a>

```typescript
public readonly originRequestPolicyIdInput: string;
```

- *Type:* string

---

##### `pathPatternInput`<sup>Optional</sup> <a name="pathPatternInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.pathPatternInput"></a>

```typescript
public readonly pathPatternInput: string;
```

- *Type:* string

---

##### `realtimeLogConfigArnInput`<sup>Optional</sup> <a name="realtimeLogConfigArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.realtimeLogConfigArnInput"></a>

```typescript
public readonly realtimeLogConfigArnInput: string;
```

- *Type:* string

---

##### `responseHeadersPolicyIdInput`<sup>Optional</sup> <a name="responseHeadersPolicyIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.responseHeadersPolicyIdInput"></a>

```typescript
public readonly responseHeadersPolicyIdInput: string;
```

- *Type:* string

---

##### `smoothStreamingInput`<sup>Optional</sup> <a name="smoothStreamingInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.smoothStreamingInput"></a>

```typescript
public readonly smoothStreamingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetOriginIdInput`<sup>Optional</sup> <a name="targetOriginIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.targetOriginIdInput"></a>

```typescript
public readonly targetOriginIdInput: string;
```

- *Type:* string

---

##### `trustedKeyGroupsInput`<sup>Optional</sup> <a name="trustedKeyGroupsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedKeyGroupsInput"></a>

```typescript
public readonly trustedKeyGroupsInput: string[];
```

- *Type:* string[]

---

##### `trustedSignersInput`<sup>Optional</sup> <a name="trustedSignersInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedSignersInput"></a>

```typescript
public readonly trustedSignersInput: string[];
```

- *Type:* string[]

---

##### `viewerProtocolPolicyInput`<sup>Optional</sup> <a name="viewerProtocolPolicyInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.viewerProtocolPolicyInput"></a>

```typescript
public readonly viewerProtocolPolicyInput: string;
```

- *Type:* string

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

---

##### `cachedMethods`<sup>Required</sup> <a name="cachedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachedMethods"></a>

```typescript
public readonly cachedMethods: string[];
```

- *Type:* string[]

---

##### `cachePolicyId`<sup>Required</sup> <a name="cachePolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachePolicyId"></a>

```typescript
public readonly cachePolicyId: string;
```

- *Type:* string

---

##### `compress`<sup>Required</sup> <a name="compress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.compress"></a>

```typescript
public readonly compress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

---

##### `fieldLevelEncryptionId`<sup>Required</sup> <a name="fieldLevelEncryptionId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fieldLevelEncryptionId"></a>

```typescript
public readonly fieldLevelEncryptionId: string;
```

- *Type:* string

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

---

##### `minTtl`<sup>Required</sup> <a name="minTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.minTtl"></a>

```typescript
public readonly minTtl: number;
```

- *Type:* number

---

##### `originRequestPolicyId`<sup>Required</sup> <a name="originRequestPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.originRequestPolicyId"></a>

```typescript
public readonly originRequestPolicyId: string;
```

- *Type:* string

---

##### `pathPattern`<sup>Required</sup> <a name="pathPattern" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.pathPattern"></a>

```typescript
public readonly pathPattern: string;
```

- *Type:* string

---

##### `realtimeLogConfigArn`<sup>Required</sup> <a name="realtimeLogConfigArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.realtimeLogConfigArn"></a>

```typescript
public readonly realtimeLogConfigArn: string;
```

- *Type:* string

---

##### `responseHeadersPolicyId`<sup>Required</sup> <a name="responseHeadersPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.responseHeadersPolicyId"></a>

```typescript
public readonly responseHeadersPolicyId: string;
```

- *Type:* string

---

##### `smoothStreaming`<sup>Required</sup> <a name="smoothStreaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.smoothStreaming"></a>

```typescript
public readonly smoothStreaming: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetOriginId`<sup>Required</sup> <a name="targetOriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.targetOriginId"></a>

```typescript
public readonly targetOriginId: string;
```

- *Type:* string

---

##### `trustedKeyGroups`<sup>Required</sup> <a name="trustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedKeyGroups"></a>

```typescript
public readonly trustedKeyGroups: string[];
```

- *Type:* string[]

---

##### `trustedSigners`<sup>Required</sup> <a name="trustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedSigners"></a>

```typescript
public readonly trustedSigners: string[];
```

- *Type:* string[]

---

##### `viewerProtocolPolicy`<sup>Required</sup> <a name="viewerProtocolPolicy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.viewerProtocolPolicy"></a>

```typescript
public readonly viewerProtocolPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionOrderedCacheBehavior | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior">CloudfrontDistributionOrderedCacheBehavior</a> | cdktf.IResolvable

---


### CloudfrontDistributionOriginCustomHeaderList <a name="CloudfrontDistributionOriginCustomHeaderList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionOriginCustomHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader">CloudfrontDistributionOriginCustomHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionOriginCustomHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader">CloudfrontDistributionOriginCustomHeader</a>[]

---


### CloudfrontDistributionOriginCustomHeaderOutputReference <a name="CloudfrontDistributionOriginCustomHeaderOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader">CloudfrontDistributionOriginCustomHeader</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionOriginCustomHeader | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader">CloudfrontDistributionOriginCustomHeader</a> | cdktf.IResolvable

---


### CloudfrontDistributionOriginCustomOriginConfigOutputReference <a name="CloudfrontDistributionOriginCustomOriginConfigOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resetOriginKeepaliveTimeout">resetOriginKeepaliveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resetOriginReadTimeout">resetOriginReadTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOriginKeepaliveTimeout` <a name="resetOriginKeepaliveTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resetOriginKeepaliveTimeout"></a>

```typescript
public resetOriginKeepaliveTimeout(): void
```

##### `resetOriginReadTimeout` <a name="resetOriginReadTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resetOriginReadTimeout"></a>

```typescript
public resetOriginReadTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpPortInput">httpPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpsPortInput">httpsPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originKeepaliveTimeoutInput">originKeepaliveTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originProtocolPolicyInput">originProtocolPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originReadTimeoutInput">originReadTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originSslProtocolsInput">originSslProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpPort">httpPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpsPort">httpsPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originKeepaliveTimeout">originKeepaliveTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originProtocolPolicy">originProtocolPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originReadTimeout">originReadTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originSslProtocols">originSslProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpPortInput`<sup>Optional</sup> <a name="httpPortInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpPortInput"></a>

```typescript
public readonly httpPortInput: number;
```

- *Type:* number

---

##### `httpsPortInput`<sup>Optional</sup> <a name="httpsPortInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpsPortInput"></a>

```typescript
public readonly httpsPortInput: number;
```

- *Type:* number

---

##### `originKeepaliveTimeoutInput`<sup>Optional</sup> <a name="originKeepaliveTimeoutInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originKeepaliveTimeoutInput"></a>

```typescript
public readonly originKeepaliveTimeoutInput: number;
```

- *Type:* number

---

##### `originProtocolPolicyInput`<sup>Optional</sup> <a name="originProtocolPolicyInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originProtocolPolicyInput"></a>

```typescript
public readonly originProtocolPolicyInput: string;
```

- *Type:* string

---

##### `originReadTimeoutInput`<sup>Optional</sup> <a name="originReadTimeoutInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originReadTimeoutInput"></a>

```typescript
public readonly originReadTimeoutInput: number;
```

- *Type:* number

---

##### `originSslProtocolsInput`<sup>Optional</sup> <a name="originSslProtocolsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originSslProtocolsInput"></a>

```typescript
public readonly originSslProtocolsInput: string[];
```

- *Type:* string[]

---

##### `httpPort`<sup>Required</sup> <a name="httpPort" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpPort"></a>

```typescript
public readonly httpPort: number;
```

- *Type:* number

---

##### `httpsPort`<sup>Required</sup> <a name="httpsPort" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpsPort"></a>

```typescript
public readonly httpsPort: number;
```

- *Type:* number

---

##### `originKeepaliveTimeout`<sup>Required</sup> <a name="originKeepaliveTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originKeepaliveTimeout"></a>

```typescript
public readonly originKeepaliveTimeout: number;
```

- *Type:* number

---

##### `originProtocolPolicy`<sup>Required</sup> <a name="originProtocolPolicy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originProtocolPolicy"></a>

```typescript
public readonly originProtocolPolicy: string;
```

- *Type:* string

---

##### `originReadTimeout`<sup>Required</sup> <a name="originReadTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originReadTimeout"></a>

```typescript
public readonly originReadTimeout: number;
```

- *Type:* number

---

##### `originSslProtocols`<sup>Required</sup> <a name="originSslProtocols" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originSslProtocols"></a>

```typescript
public readonly originSslProtocols: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionOriginCustomOriginConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a>

---


### CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference <a name="CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.statusCodesInput">statusCodesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.statusCodes">statusCodes</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusCodesInput`<sup>Optional</sup> <a name="statusCodesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.statusCodesInput"></a>

```typescript
public readonly statusCodesInput: number[];
```

- *Type:* number[]

---

##### `statusCodes`<sup>Required</sup> <a name="statusCodes" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.statusCodes"></a>

```typescript
public readonly statusCodes: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionOriginGroupFailoverCriteria;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a>

---


### CloudfrontDistributionOriginGroupList <a name="CloudfrontDistributionOriginGroupList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionOriginGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionOriginGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup">CloudfrontDistributionOriginGroup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionOriginGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup">CloudfrontDistributionOriginGroup</a>[]

---


### CloudfrontDistributionOriginGroupMemberList <a name="CloudfrontDistributionOriginGroupMemberList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionOriginGroupMemberOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember">CloudfrontDistributionOriginGroupMember</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionOriginGroupMember[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember">CloudfrontDistributionOriginGroupMember</a>[]

---


### CloudfrontDistributionOriginGroupMemberOutputReference <a name="CloudfrontDistributionOriginGroupMemberOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.originIdInput">originIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.originId">originId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember">CloudfrontDistributionOriginGroupMember</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `originIdInput`<sup>Optional</sup> <a name="originIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.originIdInput"></a>

```typescript
public readonly originIdInput: string;
```

- *Type:* string

---

##### `originId`<sup>Required</sup> <a name="originId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.originId"></a>

```typescript
public readonly originId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionOriginGroupMember | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember">CloudfrontDistributionOriginGroupMember</a> | cdktf.IResolvable

---


### CloudfrontDistributionOriginGroupOutputReference <a name="CloudfrontDistributionOriginGroupOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putFailoverCriteria">putFailoverCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putMember">putMember</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFailoverCriteria` <a name="putFailoverCriteria" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putFailoverCriteria"></a>

```typescript
public putFailoverCriteria(value: CloudfrontDistributionOriginGroupFailoverCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putFailoverCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a>

---

##### `putMember` <a name="putMember" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putMember"></a>

```typescript
public putMember(value: IResolvable | CloudfrontDistributionOriginGroupMember[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putMember.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember">CloudfrontDistributionOriginGroupMember</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.failoverCriteria">failoverCriteria</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference">CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.member">member</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList">CloudfrontDistributionOriginGroupMemberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.failoverCriteriaInput">failoverCriteriaInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.memberInput">memberInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember">CloudfrontDistributionOriginGroupMember</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.originIdInput">originIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.originId">originId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup">CloudfrontDistributionOriginGroup</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failoverCriteria`<sup>Required</sup> <a name="failoverCriteria" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.failoverCriteria"></a>

```typescript
public readonly failoverCriteria: CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference">CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference</a>

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.member"></a>

```typescript
public readonly member: CloudfrontDistributionOriginGroupMemberList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList">CloudfrontDistributionOriginGroupMemberList</a>

---

##### `failoverCriteriaInput`<sup>Optional</sup> <a name="failoverCriteriaInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.failoverCriteriaInput"></a>

```typescript
public readonly failoverCriteriaInput: CloudfrontDistributionOriginGroupFailoverCriteria;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a>

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.memberInput"></a>

```typescript
public readonly memberInput: IResolvable | CloudfrontDistributionOriginGroupMember[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember">CloudfrontDistributionOriginGroupMember</a>[]

---

##### `originIdInput`<sup>Optional</sup> <a name="originIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.originIdInput"></a>

```typescript
public readonly originIdInput: string;
```

- *Type:* string

---

##### `originId`<sup>Required</sup> <a name="originId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.originId"></a>

```typescript
public readonly originId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionOriginGroup | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup">CloudfrontDistributionOriginGroup</a> | cdktf.IResolvable

---


### CloudfrontDistributionOriginList <a name="CloudfrontDistributionOriginList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionOriginList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionOriginOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin">CloudfrontDistributionOrigin</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionOrigin[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin">CloudfrontDistributionOrigin</a>[]

---


### CloudfrontDistributionOriginOriginShieldOutputReference <a name="CloudfrontDistributionOriginOriginShieldOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.originShieldRegionInput">originShieldRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.originShieldRegion">originShieldRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `originShieldRegionInput`<sup>Optional</sup> <a name="originShieldRegionInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.originShieldRegionInput"></a>

```typescript
public readonly originShieldRegionInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `originShieldRegion`<sup>Required</sup> <a name="originShieldRegion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.originShieldRegion"></a>

```typescript
public readonly originShieldRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionOriginOriginShield;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a>

---


### CloudfrontDistributionOriginOutputReference <a name="CloudfrontDistributionOriginOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionOriginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomHeader">putCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomOriginConfig">putCustomOriginConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putOriginShield">putOriginShield</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putS3OriginConfig">putS3OriginConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetConnectionAttempts">resetConnectionAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetConnectionTimeout">resetConnectionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetCustomHeader">resetCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetCustomOriginConfig">resetCustomOriginConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginAccessControlId">resetOriginAccessControlId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginPath">resetOriginPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginShield">resetOriginShield</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetS3OriginConfig">resetS3OriginConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomHeader` <a name="putCustomHeader" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomHeader"></a>

```typescript
public putCustomHeader(value: IResolvable | CloudfrontDistributionOriginCustomHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader">CloudfrontDistributionOriginCustomHeader</a>[]

---

##### `putCustomOriginConfig` <a name="putCustomOriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomOriginConfig"></a>

```typescript
public putCustomOriginConfig(value: CloudfrontDistributionOriginCustomOriginConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomOriginConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a>

---

##### `putOriginShield` <a name="putOriginShield" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putOriginShield"></a>

```typescript
public putOriginShield(value: CloudfrontDistributionOriginOriginShield): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putOriginShield.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a>

---

##### `putS3OriginConfig` <a name="putS3OriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putS3OriginConfig"></a>

```typescript
public putS3OriginConfig(value: CloudfrontDistributionOriginS3OriginConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putS3OriginConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a>

---

##### `resetConnectionAttempts` <a name="resetConnectionAttempts" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetConnectionAttempts"></a>

```typescript
public resetConnectionAttempts(): void
```

##### `resetConnectionTimeout` <a name="resetConnectionTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetConnectionTimeout"></a>

```typescript
public resetConnectionTimeout(): void
```

##### `resetCustomHeader` <a name="resetCustomHeader" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetCustomHeader"></a>

```typescript
public resetCustomHeader(): void
```

##### `resetCustomOriginConfig` <a name="resetCustomOriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetCustomOriginConfig"></a>

```typescript
public resetCustomOriginConfig(): void
```

##### `resetOriginAccessControlId` <a name="resetOriginAccessControlId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginAccessControlId"></a>

```typescript
public resetOriginAccessControlId(): void
```

##### `resetOriginPath` <a name="resetOriginPath" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginPath"></a>

```typescript
public resetOriginPath(): void
```

##### `resetOriginShield` <a name="resetOriginShield" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginShield"></a>

```typescript
public resetOriginShield(): void
```

##### `resetS3OriginConfig` <a name="resetS3OriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetS3OriginConfig"></a>

```typescript
public resetS3OriginConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customHeader">customHeader</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList">CloudfrontDistributionOriginCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customOriginConfig">customOriginConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference">CloudfrontDistributionOriginCustomOriginConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originShield">originShield</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference">CloudfrontDistributionOriginOriginShieldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.s3OriginConfig">s3OriginConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference">CloudfrontDistributionOriginS3OriginConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionAttemptsInput">connectionAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionTimeoutInput">connectionTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customHeaderInput">customHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader">CloudfrontDistributionOriginCustomHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customOriginConfigInput">customOriginConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originAccessControlIdInput">originAccessControlIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originIdInput">originIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originPathInput">originPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originShieldInput">originShieldInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.s3OriginConfigInput">s3OriginConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionAttempts">connectionAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionTimeout">connectionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originAccessControlId">originAccessControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originId">originId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originPath">originPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin">CloudfrontDistributionOrigin</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customHeader`<sup>Required</sup> <a name="customHeader" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customHeader"></a>

```typescript
public readonly customHeader: CloudfrontDistributionOriginCustomHeaderList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList">CloudfrontDistributionOriginCustomHeaderList</a>

---

##### `customOriginConfig`<sup>Required</sup> <a name="customOriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customOriginConfig"></a>

```typescript
public readonly customOriginConfig: CloudfrontDistributionOriginCustomOriginConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference">CloudfrontDistributionOriginCustomOriginConfigOutputReference</a>

---

##### `originShield`<sup>Required</sup> <a name="originShield" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originShield"></a>

```typescript
public readonly originShield: CloudfrontDistributionOriginOriginShieldOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference">CloudfrontDistributionOriginOriginShieldOutputReference</a>

---

##### `s3OriginConfig`<sup>Required</sup> <a name="s3OriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.s3OriginConfig"></a>

```typescript
public readonly s3OriginConfig: CloudfrontDistributionOriginS3OriginConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference">CloudfrontDistributionOriginS3OriginConfigOutputReference</a>

---

##### `connectionAttemptsInput`<sup>Optional</sup> <a name="connectionAttemptsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionAttemptsInput"></a>

```typescript
public readonly connectionAttemptsInput: number;
```

- *Type:* number

---

##### `connectionTimeoutInput`<sup>Optional</sup> <a name="connectionTimeoutInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionTimeoutInput"></a>

```typescript
public readonly connectionTimeoutInput: number;
```

- *Type:* number

---

##### `customHeaderInput`<sup>Optional</sup> <a name="customHeaderInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customHeaderInput"></a>

```typescript
public readonly customHeaderInput: IResolvable | CloudfrontDistributionOriginCustomHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader">CloudfrontDistributionOriginCustomHeader</a>[]

---

##### `customOriginConfigInput`<sup>Optional</sup> <a name="customOriginConfigInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customOriginConfigInput"></a>

```typescript
public readonly customOriginConfigInput: CloudfrontDistributionOriginCustomOriginConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `originAccessControlIdInput`<sup>Optional</sup> <a name="originAccessControlIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originAccessControlIdInput"></a>

```typescript
public readonly originAccessControlIdInput: string;
```

- *Type:* string

---

##### `originIdInput`<sup>Optional</sup> <a name="originIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originIdInput"></a>

```typescript
public readonly originIdInput: string;
```

- *Type:* string

---

##### `originPathInput`<sup>Optional</sup> <a name="originPathInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originPathInput"></a>

```typescript
public readonly originPathInput: string;
```

- *Type:* string

---

##### `originShieldInput`<sup>Optional</sup> <a name="originShieldInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originShieldInput"></a>

```typescript
public readonly originShieldInput: CloudfrontDistributionOriginOriginShield;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a>

---

##### `s3OriginConfigInput`<sup>Optional</sup> <a name="s3OriginConfigInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.s3OriginConfigInput"></a>

```typescript
public readonly s3OriginConfigInput: CloudfrontDistributionOriginS3OriginConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a>

---

##### `connectionAttempts`<sup>Required</sup> <a name="connectionAttempts" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionAttempts"></a>

```typescript
public readonly connectionAttempts: number;
```

- *Type:* number

---

##### `connectionTimeout`<sup>Required</sup> <a name="connectionTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionTimeout"></a>

```typescript
public readonly connectionTimeout: number;
```

- *Type:* number

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `originAccessControlId`<sup>Required</sup> <a name="originAccessControlId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originAccessControlId"></a>

```typescript
public readonly originAccessControlId: string;
```

- *Type:* string

---

##### `originId`<sup>Required</sup> <a name="originId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originId"></a>

```typescript
public readonly originId: string;
```

- *Type:* string

---

##### `originPath`<sup>Required</sup> <a name="originPath" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originPath"></a>

```typescript
public readonly originPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionOrigin | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin">CloudfrontDistributionOrigin</a> | cdktf.IResolvable

---


### CloudfrontDistributionOriginS3OriginConfigOutputReference <a name="CloudfrontDistributionOriginS3OriginConfigOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.originAccessIdentityInput">originAccessIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.originAccessIdentity">originAccessIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `originAccessIdentityInput`<sup>Optional</sup> <a name="originAccessIdentityInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.originAccessIdentityInput"></a>

```typescript
public readonly originAccessIdentityInput: string;
```

- *Type:* string

---

##### `originAccessIdentity`<sup>Required</sup> <a name="originAccessIdentity" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.originAccessIdentity"></a>

```typescript
public readonly originAccessIdentity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionOriginS3OriginConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a>

---


### CloudfrontDistributionRestrictionsGeoRestrictionOutputReference <a name="CloudfrontDistributionRestrictionsGeoRestrictionOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.resetLocations">resetLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocations` <a name="resetLocations" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.resetLocations"></a>

```typescript
public resetLocations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.locationsInput">locationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.restrictionTypeInput">restrictionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.restrictionType">restrictionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.locationsInput"></a>

```typescript
public readonly locationsInput: string[];
```

- *Type:* string[]

---

##### `restrictionTypeInput`<sup>Optional</sup> <a name="restrictionTypeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.restrictionTypeInput"></a>

```typescript
public readonly restrictionTypeInput: string;
```

- *Type:* string

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `restrictionType`<sup>Required</sup> <a name="restrictionType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.restrictionType"></a>

```typescript
public readonly restrictionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionRestrictionsGeoRestriction;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a>

---


### CloudfrontDistributionRestrictionsOutputReference <a name="CloudfrontDistributionRestrictionsOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.putGeoRestriction">putGeoRestriction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGeoRestriction` <a name="putGeoRestriction" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.putGeoRestriction"></a>

```typescript
public putGeoRestriction(value: CloudfrontDistributionRestrictionsGeoRestriction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.putGeoRestriction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.geoRestriction">geoRestriction</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference">CloudfrontDistributionRestrictionsGeoRestrictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.geoRestrictionInput">geoRestrictionInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `geoRestriction`<sup>Required</sup> <a name="geoRestriction" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.geoRestriction"></a>

```typescript
public readonly geoRestriction: CloudfrontDistributionRestrictionsGeoRestrictionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference">CloudfrontDistributionRestrictionsGeoRestrictionOutputReference</a>

---

##### `geoRestrictionInput`<sup>Optional</sup> <a name="geoRestrictionInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.geoRestrictionInput"></a>

```typescript
public readonly geoRestrictionInput: CloudfrontDistributionRestrictionsGeoRestriction;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionRestrictions;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a>

---


### CloudfrontDistributionTrustedKeyGroupsItemsList <a name="CloudfrontDistributionTrustedKeyGroupsItemsList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionTrustedKeyGroupsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudfrontDistributionTrustedKeyGroupsItemsOutputReference <a name="CloudfrontDistributionTrustedKeyGroupsItemsOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.keyGroupId">keyGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.keyPairIds">keyPairIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItems">CloudfrontDistributionTrustedKeyGroupsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyGroupId`<sup>Required</sup> <a name="keyGroupId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.keyGroupId"></a>

```typescript
public readonly keyGroupId: string;
```

- *Type:* string

---

##### `keyPairIds`<sup>Required</sup> <a name="keyPairIds" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.keyPairIds"></a>

```typescript
public readonly keyPairIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionTrustedKeyGroupsItems;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItems">CloudfrontDistributionTrustedKeyGroupsItems</a>

---


### CloudfrontDistributionTrustedKeyGroupsList <a name="CloudfrontDistributionTrustedKeyGroupsList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionTrustedKeyGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudfrontDistributionTrustedKeyGroupsOutputReference <a name="CloudfrontDistributionTrustedKeyGroupsOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.items">items</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList">CloudfrontDistributionTrustedKeyGroupsItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroups">CloudfrontDistributionTrustedKeyGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.items"></a>

```typescript
public readonly items: CloudfrontDistributionTrustedKeyGroupsItemsList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList">CloudfrontDistributionTrustedKeyGroupsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionTrustedKeyGroups;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroups">CloudfrontDistributionTrustedKeyGroups</a>

---


### CloudfrontDistributionTrustedSignersItemsList <a name="CloudfrontDistributionTrustedSignersItemsList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionTrustedSignersItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudfrontDistributionTrustedSignersItemsOutputReference <a name="CloudfrontDistributionTrustedSignersItemsOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.awsAccountNumber">awsAccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.keyPairIds">keyPairIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItems">CloudfrontDistributionTrustedSignersItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsAccountNumber`<sup>Required</sup> <a name="awsAccountNumber" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.awsAccountNumber"></a>

```typescript
public readonly awsAccountNumber: string;
```

- *Type:* string

---

##### `keyPairIds`<sup>Required</sup> <a name="keyPairIds" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.keyPairIds"></a>

```typescript
public readonly keyPairIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionTrustedSignersItems;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItems">CloudfrontDistributionTrustedSignersItems</a>

---


### CloudfrontDistributionTrustedSignersList <a name="CloudfrontDistributionTrustedSignersList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionTrustedSignersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionTrustedSignersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudfrontDistributionTrustedSignersOutputReference <a name="CloudfrontDistributionTrustedSignersOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.items">items</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList">CloudfrontDistributionTrustedSignersItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSigners">CloudfrontDistributionTrustedSigners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.items"></a>

```typescript
public readonly items: CloudfrontDistributionTrustedSignersItemsList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList">CloudfrontDistributionTrustedSignersItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionTrustedSigners;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSigners">CloudfrontDistributionTrustedSigners</a>

---


### CloudfrontDistributionViewerCertificateOutputReference <a name="CloudfrontDistributionViewerCertificateOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistribution } from '@cdktf/provider-aws'

new cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetAcmCertificateArn">resetAcmCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetCloudfrontDefaultCertificate">resetCloudfrontDefaultCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetIamCertificateId">resetIamCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetMinimumProtocolVersion">resetMinimumProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetSslSupportMethod">resetSslSupportMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcmCertificateArn` <a name="resetAcmCertificateArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetAcmCertificateArn"></a>

```typescript
public resetAcmCertificateArn(): void
```

##### `resetCloudfrontDefaultCertificate` <a name="resetCloudfrontDefaultCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetCloudfrontDefaultCertificate"></a>

```typescript
public resetCloudfrontDefaultCertificate(): void
```

##### `resetIamCertificateId` <a name="resetIamCertificateId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetIamCertificateId"></a>

```typescript
public resetIamCertificateId(): void
```

##### `resetMinimumProtocolVersion` <a name="resetMinimumProtocolVersion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetMinimumProtocolVersion"></a>

```typescript
public resetMinimumProtocolVersion(): void
```

##### `resetSslSupportMethod` <a name="resetSslSupportMethod" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetSslSupportMethod"></a>

```typescript
public resetSslSupportMethod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.acmCertificateArnInput">acmCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.cloudfrontDefaultCertificateInput">cloudfrontDefaultCertificateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.iamCertificateIdInput">iamCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.minimumProtocolVersionInput">minimumProtocolVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.sslSupportMethodInput">sslSupportMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.acmCertificateArn">acmCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.cloudfrontDefaultCertificate">cloudfrontDefaultCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.iamCertificateId">iamCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.minimumProtocolVersion">minimumProtocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.sslSupportMethod">sslSupportMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acmCertificateArnInput`<sup>Optional</sup> <a name="acmCertificateArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.acmCertificateArnInput"></a>

```typescript
public readonly acmCertificateArnInput: string;
```

- *Type:* string

---

##### `cloudfrontDefaultCertificateInput`<sup>Optional</sup> <a name="cloudfrontDefaultCertificateInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.cloudfrontDefaultCertificateInput"></a>

```typescript
public readonly cloudfrontDefaultCertificateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iamCertificateIdInput`<sup>Optional</sup> <a name="iamCertificateIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.iamCertificateIdInput"></a>

```typescript
public readonly iamCertificateIdInput: string;
```

- *Type:* string

---

##### `minimumProtocolVersionInput`<sup>Optional</sup> <a name="minimumProtocolVersionInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.minimumProtocolVersionInput"></a>

```typescript
public readonly minimumProtocolVersionInput: string;
```

- *Type:* string

---

##### `sslSupportMethodInput`<sup>Optional</sup> <a name="sslSupportMethodInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.sslSupportMethodInput"></a>

```typescript
public readonly sslSupportMethodInput: string;
```

- *Type:* string

---

##### `acmCertificateArn`<sup>Required</sup> <a name="acmCertificateArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.acmCertificateArn"></a>

```typescript
public readonly acmCertificateArn: string;
```

- *Type:* string

---

##### `cloudfrontDefaultCertificate`<sup>Required</sup> <a name="cloudfrontDefaultCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.cloudfrontDefaultCertificate"></a>

```typescript
public readonly cloudfrontDefaultCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iamCertificateId`<sup>Required</sup> <a name="iamCertificateId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.iamCertificateId"></a>

```typescript
public readonly iamCertificateId: string;
```

- *Type:* string

---

##### `minimumProtocolVersion`<sup>Required</sup> <a name="minimumProtocolVersion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.minimumProtocolVersion"></a>

```typescript
public readonly minimumProtocolVersion: string;
```

- *Type:* string

---

##### `sslSupportMethod`<sup>Required</sup> <a name="sslSupportMethod" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.sslSupportMethod"></a>

```typescript
public readonly sslSupportMethod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontDistributionViewerCertificate;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a>

---



