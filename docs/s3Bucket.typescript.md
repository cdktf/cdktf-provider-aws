# `s3Bucket` Submodule <a name="`s3Bucket` Submodule" id="@cdktf/provider-aws.s3Bucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3Bucket <a name="S3Bucket" id="@cdktf/provider-aws.s3Bucket.S3Bucket"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket aws_s3_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3Bucket(scope: Construct, id: string, config?: S3BucketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig">S3BucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig">S3BucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.putCorsRule">putCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.putGrant">putGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.putLifecycleRule">putLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.putObjectLockConfiguration">putObjectLockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.putReplicationConfiguration">putReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.putServerSideEncryptionConfiguration">putServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.putVersioning">putVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.putWebsite">putWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetAccelerationStatus">resetAccelerationStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetBucketPrefix">resetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetCorsRule">resetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetGrant">resetGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetLifecycleRule">resetLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetObjectLockConfiguration">resetObjectLockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetObjectLockEnabled">resetObjectLockEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetReplicationConfiguration">resetReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetRequestPayer">resetRequestPayer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetServerSideEncryptionConfiguration">resetServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetVersioning">resetVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetWebsite">resetWebsite</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3Bucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3Bucket.S3Bucket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3Bucket.S3Bucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3Bucket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3Bucket.S3Bucket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3Bucket.S3Bucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3Bucket.S3Bucket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3Bucket.S3Bucket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCorsRule` <a name="putCorsRule" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putCorsRule"></a>

```typescript
public putCorsRule(value: IResolvable | S3BucketCorsRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putCorsRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>[]

---

##### `putGrant` <a name="putGrant" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putGrant"></a>

```typescript
public putGrant(value: IResolvable | S3BucketGrant[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putGrant.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant">S3BucketGrant</a>[]

---

##### `putLifecycleRule` <a name="putLifecycleRule" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putLifecycleRule"></a>

```typescript
public putLifecycleRule(value: IResolvable | S3BucketLifecycleRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putLifecycleRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>[]

---

##### `putLogging` <a name="putLogging" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putLogging"></a>

```typescript
public putLogging(value: S3BucketLogging): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLogging">S3BucketLogging</a>

---

##### `putObjectLockConfiguration` <a name="putObjectLockConfiguration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putObjectLockConfiguration"></a>

```typescript
public putObjectLockConfiguration(value: S3BucketObjectLockConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putObjectLockConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration">S3BucketObjectLockConfiguration</a>

---

##### `putReplicationConfiguration` <a name="putReplicationConfiguration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putReplicationConfiguration"></a>

```typescript
public putReplicationConfiguration(value: S3BucketReplicationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putReplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration">S3BucketReplicationConfiguration</a>

---

##### `putServerSideEncryptionConfiguration` <a name="putServerSideEncryptionConfiguration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putServerSideEncryptionConfiguration"></a>

```typescript
public putServerSideEncryptionConfiguration(value: S3BucketServerSideEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putServerSideEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration">S3BucketServerSideEncryptionConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putTimeouts"></a>

```typescript
public putTimeouts(value: S3BucketTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts">S3BucketTimeouts</a>

---

##### `putVersioning` <a name="putVersioning" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putVersioning"></a>

```typescript
public putVersioning(value: S3BucketVersioning): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putVersioning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

---

##### `putWebsite` <a name="putWebsite" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putWebsite"></a>

```typescript
public putWebsite(value: S3BucketWebsite): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putWebsite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

---

##### `resetAccelerationStatus` <a name="resetAccelerationStatus" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetAccelerationStatus"></a>

```typescript
public resetAccelerationStatus(): void
```

##### `resetAcl` <a name="resetAcl" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetAcl"></a>

```typescript
public resetAcl(): void
```

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetBucketPrefix` <a name="resetBucketPrefix" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetBucketPrefix"></a>

```typescript
public resetBucketPrefix(): void
```

##### `resetCorsRule` <a name="resetCorsRule" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetCorsRule"></a>

```typescript
public resetCorsRule(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetGrant` <a name="resetGrant" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetGrant"></a>

```typescript
public resetGrant(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLifecycleRule` <a name="resetLifecycleRule" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetLifecycleRule"></a>

```typescript
public resetLifecycleRule(): void
```

##### `resetLogging` <a name="resetLogging" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetLogging"></a>

```typescript
public resetLogging(): void
```

##### `resetObjectLockConfiguration` <a name="resetObjectLockConfiguration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetObjectLockConfiguration"></a>

```typescript
public resetObjectLockConfiguration(): void
```

##### `resetObjectLockEnabled` <a name="resetObjectLockEnabled" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetObjectLockEnabled"></a>

```typescript
public resetObjectLockEnabled(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetReplicationConfiguration` <a name="resetReplicationConfiguration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetReplicationConfiguration"></a>

```typescript
public resetReplicationConfiguration(): void
```

##### `resetRequestPayer` <a name="resetRequestPayer" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetRequestPayer"></a>

```typescript
public resetRequestPayer(): void
```

##### `resetServerSideEncryptionConfiguration` <a name="resetServerSideEncryptionConfiguration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetServerSideEncryptionConfiguration"></a>

```typescript
public resetServerSideEncryptionConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersioning` <a name="resetVersioning" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetVersioning"></a>

```typescript
public resetVersioning(): void
```

##### `resetWebsite` <a name="resetWebsite" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetWebsite"></a>

```typescript
public resetWebsite(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3Bucket.S3Bucket.isConstruct"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

s3Bucket.S3Bucket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3Bucket.S3Bucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3Bucket.S3Bucket.isTerraformElement"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

s3Bucket.S3Bucket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3Bucket.S3Bucket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3Bucket.S3Bucket.isTerraformResource"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

s3Bucket.S3Bucket.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3Bucket.S3Bucket.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucketDomainName">bucketDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucketRegionalDomainName">bucketRegionalDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.corsRule">corsRule</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList">S3BucketCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.grant">grant</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList">S3BucketGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.lifecycleRule">lifecycleRule</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList">S3BucketLifecycleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference">S3BucketLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.objectLockConfiguration">objectLockConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference">S3BucketObjectLockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference">S3BucketReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference">S3BucketServerSideEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference">S3BucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference">S3BucketVersioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.website">website</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference">S3BucketWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.websiteDomain">websiteDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.websiteEndpoint">websiteEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.accelerationStatusInput">accelerationStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.aclInput">aclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.corsRuleInput">corsRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.grantInput">grantInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant">S3BucketGrant</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.lifecycleRuleInput">lifecycleRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.loggingInput">loggingInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLogging">S3BucketLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.objectLockConfigurationInput">objectLockConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration">S3BucketObjectLockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.objectLockEnabledInput">objectLockEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.replicationConfigurationInput">replicationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration">S3BucketReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.requestPayerInput">requestPayerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.serverSideEncryptionConfigurationInput">serverSideEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration">S3BucketServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts">S3BucketTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.versioningInput">versioningInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioning">S3BucketVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.websiteInput">websiteInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite">S3BucketWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.accelerationStatus">accelerationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.acl">acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.objectLockEnabled">objectLockEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.requestPayer">requestPayer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `bucketDomainName`<sup>Required</sup> <a name="bucketDomainName" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucketDomainName"></a>

```typescript
public readonly bucketDomainName: string;
```

- *Type:* string

---

##### `bucketRegionalDomainName`<sup>Required</sup> <a name="bucketRegionalDomainName" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucketRegionalDomainName"></a>

```typescript
public readonly bucketRegionalDomainName: string;
```

- *Type:* string

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.corsRule"></a>

```typescript
public readonly corsRule: S3BucketCorsRuleList;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList">S3BucketCorsRuleList</a>

---

##### `grant`<sup>Required</sup> <a name="grant" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.grant"></a>

```typescript
public readonly grant: S3BucketGrantList;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList">S3BucketGrantList</a>

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `lifecycleRule`<sup>Required</sup> <a name="lifecycleRule" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.lifecycleRule"></a>

```typescript
public readonly lifecycleRule: S3BucketLifecycleRuleList;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList">S3BucketLifecycleRuleList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.logging"></a>

```typescript
public readonly logging: S3BucketLoggingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference">S3BucketLoggingOutputReference</a>

---

##### `objectLockConfiguration`<sup>Required</sup> <a name="objectLockConfiguration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.objectLockConfiguration"></a>

```typescript
public readonly objectLockConfiguration: S3BucketObjectLockConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference">S3BucketObjectLockConfigurationOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `replicationConfiguration`<sup>Required</sup> <a name="replicationConfiguration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: S3BucketReplicationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference">S3BucketReplicationConfigurationOutputReference</a>

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="serverSideEncryptionConfiguration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.serverSideEncryptionConfiguration"></a>

```typescript
public readonly serverSideEncryptionConfiguration: S3BucketServerSideEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference">S3BucketServerSideEncryptionConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.timeouts"></a>

```typescript
public readonly timeouts: S3BucketTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference">S3BucketTimeoutsOutputReference</a>

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.versioning"></a>

```typescript
public readonly versioning: S3BucketVersioningOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference">S3BucketVersioningOutputReference</a>

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.website"></a>

```typescript
public readonly website: S3BucketWebsiteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference">S3BucketWebsiteOutputReference</a>

---

##### `websiteDomain`<sup>Required</sup> <a name="websiteDomain" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.websiteDomain"></a>

```typescript
public readonly websiteDomain: string;
```

- *Type:* string

---

##### `websiteEndpoint`<sup>Required</sup> <a name="websiteEndpoint" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.websiteEndpoint"></a>

```typescript
public readonly websiteEndpoint: string;
```

- *Type:* string

---

##### `accelerationStatusInput`<sup>Optional</sup> <a name="accelerationStatusInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.accelerationStatusInput"></a>

```typescript
public readonly accelerationStatusInput: string;
```

- *Type:* string

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.aclInput"></a>

```typescript
public readonly aclInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucketPrefixInput"></a>

```typescript
public readonly bucketPrefixInput: string;
```

- *Type:* string

---

##### `corsRuleInput`<sup>Optional</sup> <a name="corsRuleInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.corsRuleInput"></a>

```typescript
public readonly corsRuleInput: IResolvable | S3BucketCorsRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>[]

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `grantInput`<sup>Optional</sup> <a name="grantInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.grantInput"></a>

```typescript
public readonly grantInput: IResolvable | S3BucketGrant[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant">S3BucketGrant</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lifecycleRuleInput`<sup>Optional</sup> <a name="lifecycleRuleInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.lifecycleRuleInput"></a>

```typescript
public readonly lifecycleRuleInput: IResolvable | S3BucketLifecycleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>[]

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.loggingInput"></a>

```typescript
public readonly loggingInput: S3BucketLogging;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLogging">S3BucketLogging</a>

---

##### `objectLockConfigurationInput`<sup>Optional</sup> <a name="objectLockConfigurationInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.objectLockConfigurationInput"></a>

```typescript
public readonly objectLockConfigurationInput: S3BucketObjectLockConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration">S3BucketObjectLockConfiguration</a>

---

##### `objectLockEnabledInput`<sup>Optional</sup> <a name="objectLockEnabledInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.objectLockEnabledInput"></a>

```typescript
public readonly objectLockEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `replicationConfigurationInput`<sup>Optional</sup> <a name="replicationConfigurationInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.replicationConfigurationInput"></a>

```typescript
public readonly replicationConfigurationInput: S3BucketReplicationConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration">S3BucketReplicationConfiguration</a>

---

##### `requestPayerInput`<sup>Optional</sup> <a name="requestPayerInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.requestPayerInput"></a>

```typescript
public readonly requestPayerInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionConfigurationInput`<sup>Optional</sup> <a name="serverSideEncryptionConfigurationInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.serverSideEncryptionConfigurationInput"></a>

```typescript
public readonly serverSideEncryptionConfigurationInput: S3BucketServerSideEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration">S3BucketServerSideEncryptionConfiguration</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: S3BucketTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts">S3BucketTimeouts</a> | cdktf.IResolvable

---

##### `versioningInput`<sup>Optional</sup> <a name="versioningInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.versioningInput"></a>

```typescript
public readonly versioningInput: S3BucketVersioning;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

---

##### `websiteInput`<sup>Optional</sup> <a name="websiteInput" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.websiteInput"></a>

```typescript
public readonly websiteInput: S3BucketWebsite;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

---

##### `accelerationStatus`<sup>Required</sup> <a name="accelerationStatus" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.accelerationStatus"></a>

```typescript
public readonly accelerationStatus: string;
```

- *Type:* string

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `objectLockEnabled`<sup>Required</sup> <a name="objectLockEnabled" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.objectLockEnabled"></a>

```typescript
public readonly objectLockEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `requestPayer`<sup>Required</sup> <a name="requestPayer" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.requestPayer"></a>

```typescript
public readonly requestPayer: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketConfig <a name="S3BucketConfig" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketConfig: s3Bucket.S3BucketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.accelerationStatus">accelerationStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#acceleration_status S3Bucket#acceleration_status}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.acl">acl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#acl S3Bucket#acl}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket S3Bucket#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.corsRule">corsRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>[]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#force_destroy S3Bucket#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.grant">grant</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant">S3BucketGrant</a>[]</code> | grant block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#id S3Bucket#id}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.lifecycleRule">lifecycleRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>[]</code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLogging">S3BucketLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.objectLockConfiguration">objectLockConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration">S3BucketObjectLockConfiguration</a></code> | object_lock_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.objectLockEnabled">objectLockEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#policy S3Bucket#policy}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration">S3BucketReplicationConfiguration</a></code> | replication_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.requestPayer">requestPayer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#request_payer S3Bucket#request_payer}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration">S3BucketServerSideEncryptionConfiguration</a></code> | server_side_encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags S3Bucket#tags}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags_all S3Bucket#tags_all}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts">S3BucketTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioning">S3BucketVersioning</a></code> | versioning block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.website">website</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite">S3BucketWebsite</a></code> | website block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accelerationStatus`<sup>Optional</sup> <a name="accelerationStatus" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.accelerationStatus"></a>

```typescript
public readonly accelerationStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#acceleration_status S3Bucket#acceleration_status}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#acl S3Bucket#acl}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket S3Bucket#bucket}.

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}.

---

##### `corsRule`<sup>Optional</sup> <a name="corsRule" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.corsRule"></a>

```typescript
public readonly corsRule: IResolvable | S3BucketCorsRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>[]

cors_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#cors_rule S3Bucket#cors_rule}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#force_destroy S3Bucket#force_destroy}.

---

##### `grant`<sup>Optional</sup> <a name="grant" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.grant"></a>

```typescript
public readonly grant: IResolvable | S3BucketGrant[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant">S3BucketGrant</a>[]

grant block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#grant S3Bucket#grant}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#id S3Bucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycleRule`<sup>Optional</sup> <a name="lifecycleRule" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.lifecycleRule"></a>

```typescript
public readonly lifecycleRule: IResolvable | S3BucketLifecycleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>[]

lifecycle_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#lifecycle_rule S3Bucket#lifecycle_rule}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.logging"></a>

```typescript
public readonly logging: S3BucketLogging;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLogging">S3BucketLogging</a>

logging block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#logging S3Bucket#logging}

---

##### `objectLockConfiguration`<sup>Optional</sup> <a name="objectLockConfiguration" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.objectLockConfiguration"></a>

```typescript
public readonly objectLockConfiguration: S3BucketObjectLockConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration">S3BucketObjectLockConfiguration</a>

object_lock_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#object_lock_configuration S3Bucket#object_lock_configuration}

---

##### `objectLockEnabled`<sup>Optional</sup> <a name="objectLockEnabled" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.objectLockEnabled"></a>

```typescript
public readonly objectLockEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#policy S3Bucket#policy}.

---

##### `replicationConfiguration`<sup>Optional</sup> <a name="replicationConfiguration" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: S3BucketReplicationConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration">S3BucketReplicationConfiguration</a>

replication_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#replication_configuration S3Bucket#replication_configuration}

---

##### `requestPayer`<sup>Optional</sup> <a name="requestPayer" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.requestPayer"></a>

```typescript
public readonly requestPayer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#request_payer S3Bucket#request_payer}.

---

##### `serverSideEncryptionConfiguration`<sup>Optional</sup> <a name="serverSideEncryptionConfiguration" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.serverSideEncryptionConfiguration"></a>

```typescript
public readonly serverSideEncryptionConfiguration: S3BucketServerSideEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration">S3BucketServerSideEncryptionConfiguration</a>

server_side_encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#server_side_encryption_configuration S3Bucket#server_side_encryption_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags S3Bucket#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags_all S3Bucket#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.timeouts"></a>

```typescript
public readonly timeouts: S3BucketTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts">S3BucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#timeouts S3Bucket#timeouts}

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.versioning"></a>

```typescript
public readonly versioning: S3BucketVersioning;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#versioning S3Bucket#versioning}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.website"></a>

```typescript
public readonly website: S3BucketWebsite;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#website S3Bucket#website}

---

### S3BucketCorsRule <a name="S3BucketCorsRule" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketCorsRule: s3Bucket.S3BucketCorsRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#allowed_methods S3Bucket#allowed_methods}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#allowed_origins S3Bucket#allowed_origins}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#allowed_headers S3Bucket#allowed_headers}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.property.exposeHeaders">exposeHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#expose_headers S3Bucket#expose_headers}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#max_age_seconds S3Bucket#max_age_seconds}. |

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#allowed_methods S3Bucket#allowed_methods}.

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#allowed_origins S3Bucket#allowed_origins}.

---

##### `allowedHeaders`<sup>Optional</sup> <a name="allowedHeaders" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#allowed_headers S3Bucket#allowed_headers}.

---

##### `exposeHeaders`<sup>Optional</sup> <a name="exposeHeaders" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.property.exposeHeaders"></a>

```typescript
public readonly exposeHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#expose_headers S3Bucket#expose_headers}.

---

##### `maxAgeSeconds`<sup>Optional</sup> <a name="maxAgeSeconds" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.property.maxAgeSeconds"></a>

```typescript
public readonly maxAgeSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#max_age_seconds S3Bucket#max_age_seconds}.

---

### S3BucketGrant <a name="S3BucketGrant" id="@cdktf/provider-aws.s3Bucket.S3BucketGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketGrant.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketGrant: s3Bucket.S3BucketGrant = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant.property.permissions">permissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#permissions S3Bucket#permissions}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#type S3Bucket#type}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#id S3Bucket#id}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#uri S3Bucket#uri}. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.s3Bucket.S3BucketGrant.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#permissions S3Bucket#permissions}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3Bucket.S3BucketGrant.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#type S3Bucket#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3Bucket.S3BucketGrant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#id S3Bucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.s3Bucket.S3BucketGrant.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#uri S3Bucket#uri}.

---

### S3BucketLifecycleRule <a name="S3BucketLifecycleRule" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketLifecycleRule: s3Bucket.S3BucketLifecycleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#enabled S3Bucket#enabled}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.abortIncompleteMultipartUploadDays">abortIncompleteMultipartUploadDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#abort_incomplete_multipart_upload_days S3Bucket#abort_incomplete_multipart_upload_days}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a></code> | expiration block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#id S3Bucket#id}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.noncurrentVersionExpiration">noncurrentVersionExpiration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a></code> | noncurrent_version_expiration block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.noncurrentVersionTransition">noncurrentVersionTransition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition">S3BucketLifecycleRuleNoncurrentVersionTransition</a>[]</code> | noncurrent_version_transition block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#prefix S3Bucket#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags S3Bucket#tags}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.transition">transition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition">S3BucketLifecycleRuleTransition</a>[]</code> | transition block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#enabled S3Bucket#enabled}.

---

##### `abortIncompleteMultipartUploadDays`<sup>Optional</sup> <a name="abortIncompleteMultipartUploadDays" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.abortIncompleteMultipartUploadDays"></a>

```typescript
public readonly abortIncompleteMultipartUploadDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#abort_incomplete_multipart_upload_days S3Bucket#abort_incomplete_multipart_upload_days}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.expiration"></a>

```typescript
public readonly expiration: S3BucketLifecycleRuleExpiration;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>

expiration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#expiration S3Bucket#expiration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#id S3Bucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `noncurrentVersionExpiration`<sup>Optional</sup> <a name="noncurrentVersionExpiration" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.noncurrentVersionExpiration"></a>

```typescript
public readonly noncurrentVersionExpiration: S3BucketLifecycleRuleNoncurrentVersionExpiration;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>

noncurrent_version_expiration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#noncurrent_version_expiration S3Bucket#noncurrent_version_expiration}

---

##### `noncurrentVersionTransition`<sup>Optional</sup> <a name="noncurrentVersionTransition" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.noncurrentVersionTransition"></a>

```typescript
public readonly noncurrentVersionTransition: IResolvable | S3BucketLifecycleRuleNoncurrentVersionTransition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition">S3BucketLifecycleRuleNoncurrentVersionTransition</a>[]

noncurrent_version_transition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#noncurrent_version_transition S3Bucket#noncurrent_version_transition}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#prefix S3Bucket#prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags S3Bucket#tags}.

---

##### `transition`<sup>Optional</sup> <a name="transition" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.transition"></a>

```typescript
public readonly transition: IResolvable | S3BucketLifecycleRuleTransition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition">S3BucketLifecycleRuleTransition</a>[]

transition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#transition S3Bucket#transition}

---

### S3BucketLifecycleRuleExpiration <a name="S3BucketLifecycleRuleExpiration" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketLifecycleRuleExpiration: s3Bucket.S3BucketLifecycleRuleExpiration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration.property.date">date</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#date S3Bucket#date}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration.property.days">days</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration.property.expiredObjectDeleteMarker">expiredObjectDeleteMarker</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#expired_object_delete_marker S3Bucket#expired_object_delete_marker}. |

---

##### `date`<sup>Optional</sup> <a name="date" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration.property.date"></a>

```typescript
public readonly date: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#date S3Bucket#date}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}.

---

##### `expiredObjectDeleteMarker`<sup>Optional</sup> <a name="expiredObjectDeleteMarker" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration.property.expiredObjectDeleteMarker"></a>

```typescript
public readonly expiredObjectDeleteMarker: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#expired_object_delete_marker S3Bucket#expired_object_delete_marker}.

---

### S3BucketLifecycleRuleNoncurrentVersionExpiration <a name="S3BucketLifecycleRuleNoncurrentVersionExpiration" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketLifecycleRuleNoncurrentVersionExpiration: s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration.property.days">days</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}.

---

### S3BucketLifecycleRuleNoncurrentVersionTransition <a name="S3BucketLifecycleRuleNoncurrentVersionTransition" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketLifecycleRuleNoncurrentVersionTransition: s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition.property.storageClass">storageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#storage_class S3Bucket#storage_class}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition.property.days">days</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}. |

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#storage_class S3Bucket#storage_class}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}.

---

### S3BucketLifecycleRuleTransition <a name="S3BucketLifecycleRuleTransition" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketLifecycleRuleTransition: s3Bucket.S3BucketLifecycleRuleTransition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition.property.storageClass">storageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#storage_class S3Bucket#storage_class}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition.property.date">date</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#date S3Bucket#date}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition.property.days">days</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}. |

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#storage_class S3Bucket#storage_class}.

---

##### `date`<sup>Optional</sup> <a name="date" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition.property.date"></a>

```typescript
public readonly date: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#date S3Bucket#date}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}.

---

### S3BucketLogging <a name="S3BucketLogging" id="@cdktf/provider-aws.s3Bucket.S3BucketLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketLogging.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketLogging: s3Bucket.S3BucketLogging = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLogging.property.targetBucket">targetBucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#target_bucket S3Bucket#target_bucket}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLogging.property.targetPrefix">targetPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#target_prefix S3Bucket#target_prefix}. |

---

##### `targetBucket`<sup>Required</sup> <a name="targetBucket" id="@cdktf/provider-aws.s3Bucket.S3BucketLogging.property.targetBucket"></a>

```typescript
public readonly targetBucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#target_bucket S3Bucket#target_bucket}.

---

##### `targetPrefix`<sup>Optional</sup> <a name="targetPrefix" id="@cdktf/provider-aws.s3Bucket.S3BucketLogging.property.targetPrefix"></a>

```typescript
public readonly targetPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#target_prefix S3Bucket#target_prefix}.

---

### S3BucketObjectLockConfiguration <a name="S3BucketObjectLockConfiguration" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketObjectLockConfiguration: s3Bucket.S3BucketObjectLockConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration.property.objectLockEnabled">objectLockEnabled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a></code> | rule block. |

---

##### `objectLockEnabled`<sup>Optional</sup> <a name="objectLockEnabled" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration.property.objectLockEnabled"></a>

```typescript
public readonly objectLockEnabled: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration.property.rule"></a>

```typescript
public readonly rule: S3BucketObjectLockConfigurationRule;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#rule S3Bucket#rule}

---

### S3BucketObjectLockConfigurationRule <a name="S3BucketObjectLockConfigurationRule" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketObjectLockConfigurationRule: s3Bucket.S3BucketObjectLockConfigurationRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule.property.defaultRetention">defaultRetention</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a></code> | default_retention block. |

---

##### `defaultRetention`<sup>Required</sup> <a name="defaultRetention" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule.property.defaultRetention"></a>

```typescript
public readonly defaultRetention: S3BucketObjectLockConfigurationRuleDefaultRetention;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a>

default_retention block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#default_retention S3Bucket#default_retention}

---

### S3BucketObjectLockConfigurationRuleDefaultRetention <a name="S3BucketObjectLockConfigurationRuleDefaultRetention" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketObjectLockConfigurationRuleDefaultRetention: s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#mode S3Bucket#mode}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention.property.days">days</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention.property.years">years</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#years S3Bucket#years}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#mode S3Bucket#mode}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}.

---

##### `years`<sup>Optional</sup> <a name="years" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention.property.years"></a>

```typescript
public readonly years: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#years S3Bucket#years}.

---

### S3BucketReplicationConfiguration <a name="S3BucketReplicationConfiguration" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketReplicationConfiguration: s3Bucket.S3BucketReplicationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#role S3Bucket#role}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules">S3BucketReplicationConfigurationRules</a>[]</code> | rules block. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#role S3Bucket#role}.

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration.property.rules"></a>

```typescript
public readonly rules: IResolvable | S3BucketReplicationConfigurationRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules">S3BucketReplicationConfigurationRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#rules S3Bucket#rules}

---

### S3BucketReplicationConfigurationRules <a name="S3BucketReplicationConfigurationRules" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketReplicationConfigurationRules: s3Bucket.S3BucketReplicationConfigurationRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination">S3BucketReplicationConfigurationRulesDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#status S3Bucket#status}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.deleteMarkerReplicationStatus">deleteMarkerReplicationStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#delete_marker_replication_status S3Bucket#delete_marker_replication_status}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter">S3BucketReplicationConfigurationRulesFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#id S3Bucket#id}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#prefix S3Bucket#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#priority S3Bucket#priority}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.sourceSelectionCriteria">sourceSelectionCriteria</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria">S3BucketReplicationConfigurationRulesSourceSelectionCriteria</a></code> | source_selection_criteria block. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.destination"></a>

```typescript
public readonly destination: S3BucketReplicationConfigurationRulesDestination;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination">S3BucketReplicationConfigurationRulesDestination</a>

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#destination S3Bucket#destination}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#status S3Bucket#status}.

---

##### `deleteMarkerReplicationStatus`<sup>Optional</sup> <a name="deleteMarkerReplicationStatus" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.deleteMarkerReplicationStatus"></a>

```typescript
public readonly deleteMarkerReplicationStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#delete_marker_replication_status S3Bucket#delete_marker_replication_status}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.filter"></a>

```typescript
public readonly filter: S3BucketReplicationConfigurationRulesFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter">S3BucketReplicationConfigurationRulesFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#filter S3Bucket#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#id S3Bucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#prefix S3Bucket#prefix}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#priority S3Bucket#priority}.

---

##### `sourceSelectionCriteria`<sup>Optional</sup> <a name="sourceSelectionCriteria" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.sourceSelectionCriteria"></a>

```typescript
public readonly sourceSelectionCriteria: S3BucketReplicationConfigurationRulesSourceSelectionCriteria;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria">S3BucketReplicationConfigurationRulesSourceSelectionCriteria</a>

source_selection_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#source_selection_criteria S3Bucket#source_selection_criteria}

---

### S3BucketReplicationConfigurationRulesDestination <a name="S3BucketReplicationConfigurationRulesDestination" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketReplicationConfigurationRulesDestination: s3Bucket.S3BucketReplicationConfigurationRulesDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket S3Bucket#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.accessControlTranslation">accessControlTranslation</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation">S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation</a></code> | access_control_translation block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#account_id S3Bucket#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics">S3BucketReplicationConfigurationRulesDestinationMetrics</a></code> | metrics block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.replicaKmsKeyId">replicaKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#replica_kms_key_id S3Bucket#replica_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.replicationTime">replicationTime</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime">S3BucketReplicationConfigurationRulesDestinationReplicationTime</a></code> | replication_time block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.storageClass">storageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#storage_class S3Bucket#storage_class}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket S3Bucket#bucket}.

---

##### `accessControlTranslation`<sup>Optional</sup> <a name="accessControlTranslation" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.accessControlTranslation"></a>

```typescript
public readonly accessControlTranslation: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation">S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation</a>

access_control_translation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#access_control_translation S3Bucket#access_control_translation}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#account_id S3Bucket#account_id}.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.metrics"></a>

```typescript
public readonly metrics: S3BucketReplicationConfigurationRulesDestinationMetrics;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics">S3BucketReplicationConfigurationRulesDestinationMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#metrics S3Bucket#metrics}

---

##### `replicaKmsKeyId`<sup>Optional</sup> <a name="replicaKmsKeyId" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.replicaKmsKeyId"></a>

```typescript
public readonly replicaKmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#replica_kms_key_id S3Bucket#replica_kms_key_id}.

---

##### `replicationTime`<sup>Optional</sup> <a name="replicationTime" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.replicationTime"></a>

```typescript
public readonly replicationTime: S3BucketReplicationConfigurationRulesDestinationReplicationTime;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime">S3BucketReplicationConfigurationRulesDestinationReplicationTime</a>

replication_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#replication_time S3Bucket#replication_time}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#storage_class S3Bucket#storage_class}.

---

### S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation <a name="S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketReplicationConfigurationRulesDestinationAccessControlTranslation: s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#owner S3Bucket#owner}. |

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#owner S3Bucket#owner}.

---

### S3BucketReplicationConfigurationRulesDestinationMetrics <a name="S3BucketReplicationConfigurationRulesDestinationMetrics" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketReplicationConfigurationRulesDestinationMetrics: s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics.property.minutes">minutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#minutes S3Bucket#minutes}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#status S3Bucket#status}. |

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#minutes S3Bucket#minutes}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#status S3Bucket#status}.

---

### S3BucketReplicationConfigurationRulesDestinationReplicationTime <a name="S3BucketReplicationConfigurationRulesDestinationReplicationTime" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketReplicationConfigurationRulesDestinationReplicationTime: s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime.property.minutes">minutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#minutes S3Bucket#minutes}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#status S3Bucket#status}. |

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#minutes S3Bucket#minutes}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#status S3Bucket#status}.

---

### S3BucketReplicationConfigurationRulesFilter <a name="S3BucketReplicationConfigurationRulesFilter" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketReplicationConfigurationRulesFilter: s3Bucket.S3BucketReplicationConfigurationRulesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#prefix S3Bucket#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags S3Bucket#tags}. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#prefix S3Bucket#prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags S3Bucket#tags}.

---

### S3BucketReplicationConfigurationRulesSourceSelectionCriteria <a name="S3BucketReplicationConfigurationRulesSourceSelectionCriteria" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketReplicationConfigurationRulesSourceSelectionCriteria: s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria.property.sseKmsEncryptedObjects">sseKmsEncryptedObjects</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects</a></code> | sse_kms_encrypted_objects block. |

---

##### `sseKmsEncryptedObjects`<sup>Optional</sup> <a name="sseKmsEncryptedObjects" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria.property.sseKmsEncryptedObjects"></a>

```typescript
public readonly sseKmsEncryptedObjects: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects</a>

sse_kms_encrypted_objects block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#sse_kms_encrypted_objects S3Bucket#sse_kms_encrypted_objects}

---

### S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects <a name="S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects: s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#enabled S3Bucket#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#enabled S3Bucket#enabled}.

---

### S3BucketServerSideEncryptionConfiguration <a name="S3BucketServerSideEncryptionConfiguration" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketServerSideEncryptionConfiguration: s3Bucket.S3BucketServerSideEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule">S3BucketServerSideEncryptionConfigurationRule</a></code> | rule block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration.property.rule"></a>

```typescript
public readonly rule: S3BucketServerSideEncryptionConfigurationRule;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule">S3BucketServerSideEncryptionConfigurationRule</a>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#rule S3Bucket#rule}

---

### S3BucketServerSideEncryptionConfigurationRule <a name="S3BucketServerSideEncryptionConfigurationRule" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketServerSideEncryptionConfigurationRule: s3Bucket.S3BucketServerSideEncryptionConfigurationRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule.property.applyServerSideEncryptionByDefault">applyServerSideEncryptionByDefault</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault</a></code> | apply_server_side_encryption_by_default block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket_key_enabled S3Bucket#bucket_key_enabled}. |

---

##### `applyServerSideEncryptionByDefault`<sup>Required</sup> <a name="applyServerSideEncryptionByDefault" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule.property.applyServerSideEncryptionByDefault"></a>

```typescript
public readonly applyServerSideEncryptionByDefault: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault</a>

apply_server_side_encryption_by_default block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#apply_server_side_encryption_by_default S3Bucket#apply_server_side_encryption_by_default}

---

##### `bucketKeyEnabled`<sup>Optional</sup> <a name="bucketKeyEnabled" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule.property.bucketKeyEnabled"></a>

```typescript
public readonly bucketKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket_key_enabled S3Bucket#bucket_key_enabled}.

---

### S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault <a name="S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault: s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault.property.sseAlgorithm">sseAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#sse_algorithm S3Bucket#sse_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#kms_master_key_id S3Bucket#kms_master_key_id}. |

---

##### `sseAlgorithm`<sup>Required</sup> <a name="sseAlgorithm" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault.property.sseAlgorithm"></a>

```typescript
public readonly sseAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#sse_algorithm S3Bucket#sse_algorithm}.

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="kmsMasterKeyId" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#kms_master_key_id S3Bucket#kms_master_key_id}.

---

### S3BucketTimeouts <a name="S3BucketTimeouts" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeouts.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketTimeouts: s3Bucket.S3BucketTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#create S3Bucket#create}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#delete S3Bucket#delete}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#read S3Bucket#read}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#update S3Bucket#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#create S3Bucket#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#delete S3Bucket#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#read S3Bucket#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#update S3Bucket#update}.

---

### S3BucketVersioning <a name="S3BucketVersioning" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioning.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketVersioning: s3Bucket.S3BucketVersioning = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioning.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#enabled S3Bucket#enabled}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioning.property.mfaDelete">mfaDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#mfa_delete S3Bucket#mfa_delete}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioning.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#enabled S3Bucket#enabled}.

---

##### `mfaDelete`<sup>Optional</sup> <a name="mfaDelete" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioning.property.mfaDelete"></a>

```typescript
public readonly mfaDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#mfa_delete S3Bucket#mfa_delete}.

---

### S3BucketWebsite <a name="S3BucketWebsite" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsite.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

const s3BucketWebsite: s3Bucket.S3BucketWebsite = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite.property.errorDocument">errorDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#error_document S3Bucket#error_document}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite.property.indexDocument">indexDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#index_document S3Bucket#index_document}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite.property.redirectAllRequestsTo">redirectAllRequestsTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#redirect_all_requests_to S3Bucket#redirect_all_requests_to}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite.property.routingRules">routingRules</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#routing_rules S3Bucket#routing_rules}. |

---

##### `errorDocument`<sup>Optional</sup> <a name="errorDocument" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsite.property.errorDocument"></a>

```typescript
public readonly errorDocument: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#error_document S3Bucket#error_document}.

---

##### `indexDocument`<sup>Optional</sup> <a name="indexDocument" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsite.property.indexDocument"></a>

```typescript
public readonly indexDocument: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#index_document S3Bucket#index_document}.

---

##### `redirectAllRequestsTo`<sup>Optional</sup> <a name="redirectAllRequestsTo" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsite.property.redirectAllRequestsTo"></a>

```typescript
public readonly redirectAllRequestsTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#redirect_all_requests_to S3Bucket#redirect_all_requests_to}.

---

##### `routingRules`<sup>Optional</sup> <a name="routingRules" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsite.property.routingRules"></a>

```typescript
public readonly routingRules: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#routing_rules S3Bucket#routing_rules}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketCorsRuleList <a name="S3BucketCorsRuleList" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketCorsRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.get"></a>

```typescript
public get(index: number): S3BucketCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3BucketCorsRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>[]

---


### S3BucketCorsRuleOutputReference <a name="S3BucketCorsRuleOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketCorsRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.resetAllowedHeaders">resetAllowedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.resetExposeHeaders">resetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.resetMaxAgeSeconds">resetMaxAgeSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedHeaders` <a name="resetAllowedHeaders" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.resetAllowedHeaders"></a>

```typescript
public resetAllowedHeaders(): void
```

##### `resetExposeHeaders` <a name="resetExposeHeaders" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.resetExposeHeaders"></a>

```typescript
public resetExposeHeaders(): void
```

##### `resetMaxAgeSeconds` <a name="resetMaxAgeSeconds" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.resetMaxAgeSeconds"></a>

```typescript
public resetMaxAgeSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.exposeHeadersInput">exposeHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.maxAgeSecondsInput">maxAgeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.exposeHeaders">exposeHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedHeadersInput"></a>

```typescript
public readonly allowedHeadersInput: string[];
```

- *Type:* string[]

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedMethodsInput"></a>

```typescript
public readonly allowedMethodsInput: string[];
```

- *Type:* string[]

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `exposeHeadersInput`<sup>Optional</sup> <a name="exposeHeadersInput" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.exposeHeadersInput"></a>

```typescript
public readonly exposeHeadersInput: string[];
```

- *Type:* string[]

---

##### `maxAgeSecondsInput`<sup>Optional</sup> <a name="maxAgeSecondsInput" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.maxAgeSecondsInput"></a>

```typescript
public readonly maxAgeSecondsInput: number;
```

- *Type:* number

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `exposeHeaders`<sup>Required</sup> <a name="exposeHeaders" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.exposeHeaders"></a>

```typescript
public readonly exposeHeaders: string[];
```

- *Type:* string[]

---

##### `maxAgeSeconds`<sup>Required</sup> <a name="maxAgeSeconds" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.maxAgeSeconds"></a>

```typescript
public readonly maxAgeSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketCorsRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a> | cdktf.IResolvable

---


### S3BucketGrantList <a name="S3BucketGrantList" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketGrantList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.get"></a>

```typescript
public get(index: number): S3BucketGrantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant">S3BucketGrant</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3BucketGrant[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant">S3BucketGrant</a>[]

---


### S3BucketGrantOutputReference <a name="S3BucketGrantOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketGrantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant">S3BucketGrant</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketGrant | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant">S3BucketGrant</a> | cdktf.IResolvable

---


### S3BucketLifecycleRuleExpirationOutputReference <a name="S3BucketLifecycleRuleExpirationOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketLifecycleRuleExpirationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetDate">resetDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetExpiredObjectDeleteMarker">resetExpiredObjectDeleteMarker</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDate` <a name="resetDate" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetDate"></a>

```typescript
public resetDate(): void
```

##### `resetDays` <a name="resetDays" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```

##### `resetExpiredObjectDeleteMarker` <a name="resetExpiredObjectDeleteMarker" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetExpiredObjectDeleteMarker"></a>

```typescript
public resetExpiredObjectDeleteMarker(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.dateInput">dateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput">expiredObjectDeleteMarkerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.date">date</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarker">expiredObjectDeleteMarker</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateInput`<sup>Optional</sup> <a name="dateInput" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.dateInput"></a>

```typescript
public readonly dateInput: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `expiredObjectDeleteMarkerInput`<sup>Optional</sup> <a name="expiredObjectDeleteMarkerInput" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput"></a>

```typescript
public readonly expiredObjectDeleteMarkerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.date"></a>

```typescript
public readonly date: string;
```

- *Type:* string

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `expiredObjectDeleteMarker`<sup>Required</sup> <a name="expiredObjectDeleteMarker" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarker"></a>

```typescript
public readonly expiredObjectDeleteMarker: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketLifecycleRuleExpiration;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>

---


### S3BucketLifecycleRuleList <a name="S3BucketLifecycleRuleList" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketLifecycleRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.get"></a>

```typescript
public get(index: number): S3BucketLifecycleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3BucketLifecycleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>[]

---


### S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference <a name="S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resetDays">resetDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketLifecycleRuleNoncurrentVersionExpiration;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>

---


### S3BucketLifecycleRuleNoncurrentVersionTransitionList <a name="S3BucketLifecycleRuleNoncurrentVersionTransitionList" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.get"></a>

```typescript
public get(index: number): S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition">S3BucketLifecycleRuleNoncurrentVersionTransition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3BucketLifecycleRuleNoncurrentVersionTransition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition">S3BucketLifecycleRuleNoncurrentVersionTransition</a>[]

---


### S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference <a name="S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resetDays">resetDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition">S3BucketLifecycleRuleNoncurrentVersionTransition</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketLifecycleRuleNoncurrentVersionTransition | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition">S3BucketLifecycleRuleNoncurrentVersionTransition</a> | cdktf.IResolvable

---


### S3BucketLifecycleRuleOutputReference <a name="S3BucketLifecycleRuleOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketLifecycleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putExpiration">putExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration">putNoncurrentVersionExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionTransition">putNoncurrentVersionTransition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putTransition">putTransition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetAbortIncompleteMultipartUploadDays">resetAbortIncompleteMultipartUploadDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetNoncurrentVersionExpiration">resetNoncurrentVersionExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetNoncurrentVersionTransition">resetNoncurrentVersionTransition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetTransition">resetTransition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpiration` <a name="putExpiration" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putExpiration"></a>

```typescript
public putExpiration(value: S3BucketLifecycleRuleExpiration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putExpiration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>

---

##### `putNoncurrentVersionExpiration` <a name="putNoncurrentVersionExpiration" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration"></a>

```typescript
public putNoncurrentVersionExpiration(value: S3BucketLifecycleRuleNoncurrentVersionExpiration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>

---

##### `putNoncurrentVersionTransition` <a name="putNoncurrentVersionTransition" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionTransition"></a>

```typescript
public putNoncurrentVersionTransition(value: IResolvable | S3BucketLifecycleRuleNoncurrentVersionTransition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionTransition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition">S3BucketLifecycleRuleNoncurrentVersionTransition</a>[]

---

##### `putTransition` <a name="putTransition" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putTransition"></a>

```typescript
public putTransition(value: IResolvable | S3BucketLifecycleRuleTransition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putTransition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition">S3BucketLifecycleRuleTransition</a>[]

---

##### `resetAbortIncompleteMultipartUploadDays` <a name="resetAbortIncompleteMultipartUploadDays" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetAbortIncompleteMultipartUploadDays"></a>

```typescript
public resetAbortIncompleteMultipartUploadDays(): void
```

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetExpiration"></a>

```typescript
public resetExpiration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNoncurrentVersionExpiration` <a name="resetNoncurrentVersionExpiration" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetNoncurrentVersionExpiration"></a>

```typescript
public resetNoncurrentVersionExpiration(): void
```

##### `resetNoncurrentVersionTransition` <a name="resetNoncurrentVersionTransition" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetNoncurrentVersionTransition"></a>

```typescript
public resetNoncurrentVersionTransition(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTransition` <a name="resetTransition" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetTransition"></a>

```typescript
public resetTransition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference">S3BucketLifecycleRuleExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionExpiration">noncurrentVersionExpiration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference">S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionTransition">noncurrentVersionTransition</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList">S3BucketLifecycleRuleNoncurrentVersionTransitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.transition">transition</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList">S3BucketLifecycleRuleTransitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDaysInput">abortIncompleteMultipartUploadDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.expirationInput">expirationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionExpirationInput">noncurrentVersionExpirationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionTransitionInput">noncurrentVersionTransitionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition">S3BucketLifecycleRuleNoncurrentVersionTransition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.transitionInput">transitionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition">S3BucketLifecycleRuleTransition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDays">abortIncompleteMultipartUploadDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.expiration"></a>

```typescript
public readonly expiration: S3BucketLifecycleRuleExpirationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference">S3BucketLifecycleRuleExpirationOutputReference</a>

---

##### `noncurrentVersionExpiration`<sup>Required</sup> <a name="noncurrentVersionExpiration" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionExpiration"></a>

```typescript
public readonly noncurrentVersionExpiration: S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference">S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference</a>

---

##### `noncurrentVersionTransition`<sup>Required</sup> <a name="noncurrentVersionTransition" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionTransition"></a>

```typescript
public readonly noncurrentVersionTransition: S3BucketLifecycleRuleNoncurrentVersionTransitionList;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList">S3BucketLifecycleRuleNoncurrentVersionTransitionList</a>

---

##### `transition`<sup>Required</sup> <a name="transition" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.transition"></a>

```typescript
public readonly transition: S3BucketLifecycleRuleTransitionList;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList">S3BucketLifecycleRuleTransitionList</a>

---

##### `abortIncompleteMultipartUploadDaysInput`<sup>Optional</sup> <a name="abortIncompleteMultipartUploadDaysInput" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDaysInput"></a>

```typescript
public readonly abortIncompleteMultipartUploadDaysInput: number;
```

- *Type:* number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.expirationInput"></a>

```typescript
public readonly expirationInput: S3BucketLifecycleRuleExpiration;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `noncurrentVersionExpirationInput`<sup>Optional</sup> <a name="noncurrentVersionExpirationInput" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionExpirationInput"></a>

```typescript
public readonly noncurrentVersionExpirationInput: S3BucketLifecycleRuleNoncurrentVersionExpiration;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>

---

##### `noncurrentVersionTransitionInput`<sup>Optional</sup> <a name="noncurrentVersionTransitionInput" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionTransitionInput"></a>

```typescript
public readonly noncurrentVersionTransitionInput: IResolvable | S3BucketLifecycleRuleNoncurrentVersionTransition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition">S3BucketLifecycleRuleNoncurrentVersionTransition</a>[]

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transitionInput`<sup>Optional</sup> <a name="transitionInput" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.transitionInput"></a>

```typescript
public readonly transitionInput: IResolvable | S3BucketLifecycleRuleTransition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition">S3BucketLifecycleRuleTransition</a>[]

---

##### `abortIncompleteMultipartUploadDays`<sup>Required</sup> <a name="abortIncompleteMultipartUploadDays" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDays"></a>

```typescript
public readonly abortIncompleteMultipartUploadDays: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketLifecycleRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a> | cdktf.IResolvable

---


### S3BucketLifecycleRuleTransitionList <a name="S3BucketLifecycleRuleTransitionList" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketLifecycleRuleTransitionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.get"></a>

```typescript
public get(index: number): S3BucketLifecycleRuleTransitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition">S3BucketLifecycleRuleTransition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3BucketLifecycleRuleTransition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition">S3BucketLifecycleRuleTransition</a>[]

---


### S3BucketLifecycleRuleTransitionOutputReference <a name="S3BucketLifecycleRuleTransitionOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketLifecycleRuleTransitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.resetDate">resetDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.resetDays">resetDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDate` <a name="resetDate" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.resetDate"></a>

```typescript
public resetDate(): void
```

##### `resetDays` <a name="resetDays" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.dateInput">dateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.date">date</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition">S3BucketLifecycleRuleTransition</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateInput`<sup>Optional</sup> <a name="dateInput" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.dateInput"></a>

```typescript
public readonly dateInput: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.date"></a>

```typescript
public readonly date: string;
```

- *Type:* string

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketLifecycleRuleTransition | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition">S3BucketLifecycleRuleTransition</a> | cdktf.IResolvable

---


### S3BucketLoggingOutputReference <a name="S3BucketLoggingOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketLoggingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.resetTargetPrefix">resetTargetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetPrefix` <a name="resetTargetPrefix" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.resetTargetPrefix"></a>

```typescript
public resetTargetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.targetBucketInput">targetBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.targetPrefixInput">targetPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.targetBucket">targetBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.targetPrefix">targetPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLogging">S3BucketLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetBucketInput`<sup>Optional</sup> <a name="targetBucketInput" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.targetBucketInput"></a>

```typescript
public readonly targetBucketInput: string;
```

- *Type:* string

---

##### `targetPrefixInput`<sup>Optional</sup> <a name="targetPrefixInput" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.targetPrefixInput"></a>

```typescript
public readonly targetPrefixInput: string;
```

- *Type:* string

---

##### `targetBucket`<sup>Required</sup> <a name="targetBucket" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.targetBucket"></a>

```typescript
public readonly targetBucket: string;
```

- *Type:* string

---

##### `targetPrefix`<sup>Required</sup> <a name="targetPrefix" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.targetPrefix"></a>

```typescript
public readonly targetPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketLogging;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLogging">S3BucketLogging</a>

---


### S3BucketObjectLockConfigurationOutputReference <a name="S3BucketObjectLockConfigurationOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketObjectLockConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.resetObjectLockEnabled">resetObjectLockEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.resetRule">resetRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.putRule"></a>

```typescript
public putRule(value: S3BucketObjectLockConfigurationRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a>

---

##### `resetObjectLockEnabled` <a name="resetObjectLockEnabled" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.resetObjectLockEnabled"></a>

```typescript
public resetObjectLockEnabled(): void
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.resetRule"></a>

```typescript
public resetRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference">S3BucketObjectLockConfigurationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.objectLockEnabledInput">objectLockEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.ruleInput">ruleInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.objectLockEnabled">objectLockEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration">S3BucketObjectLockConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.rule"></a>

```typescript
public readonly rule: S3BucketObjectLockConfigurationRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference">S3BucketObjectLockConfigurationRuleOutputReference</a>

---

##### `objectLockEnabledInput`<sup>Optional</sup> <a name="objectLockEnabledInput" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.objectLockEnabledInput"></a>

```typescript
public readonly objectLockEnabledInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: S3BucketObjectLockConfigurationRule;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a>

---

##### `objectLockEnabled`<sup>Required</sup> <a name="objectLockEnabled" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.objectLockEnabled"></a>

```typescript
public readonly objectLockEnabled: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketObjectLockConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration">S3BucketObjectLockConfiguration</a>

---


### S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference <a name="S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resetYears">resetYears</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```

##### `resetYears` <a name="resetYears" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resetYears"></a>

```typescript
public resetYears(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.yearsInput">yearsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.years">years</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `yearsInput`<sup>Optional</sup> <a name="yearsInput" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.yearsInput"></a>

```typescript
public readonly yearsInput: number;
```

- *Type:* number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `years`<sup>Required</sup> <a name="years" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.years"></a>

```typescript
public readonly years: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketObjectLockConfigurationRuleDefaultRetention;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a>

---


### S3BucketObjectLockConfigurationRuleOutputReference <a name="S3BucketObjectLockConfigurationRuleOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.putDefaultRetention">putDefaultRetention</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultRetention` <a name="putDefaultRetention" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.putDefaultRetention"></a>

```typescript
public putDefaultRetention(value: S3BucketObjectLockConfigurationRuleDefaultRetention): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.putDefaultRetention.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetention">defaultRetention</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference">S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetentionInput">defaultRetentionInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultRetention`<sup>Required</sup> <a name="defaultRetention" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetention"></a>

```typescript
public readonly defaultRetention: S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference">S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference</a>

---

##### `defaultRetentionInput`<sup>Optional</sup> <a name="defaultRetentionInput" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetentionInput"></a>

```typescript
public readonly defaultRetentionInput: S3BucketObjectLockConfigurationRuleDefaultRetention;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketObjectLockConfigurationRule;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a>

---


### S3BucketReplicationConfigurationOutputReference <a name="S3BucketReplicationConfigurationOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketReplicationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.putRules">putRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | S3BucketReplicationConfigurationRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules">S3BucketReplicationConfigurationRules</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList">S3BucketReplicationConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules">S3BucketReplicationConfigurationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration">S3BucketReplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.rules"></a>

```typescript
public readonly rules: S3BucketReplicationConfigurationRulesList;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList">S3BucketReplicationConfigurationRulesList</a>

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | S3BucketReplicationConfigurationRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules">S3BucketReplicationConfigurationRules</a>[]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketReplicationConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration">S3BucketReplicationConfiguration</a>

---


### S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference <a name="S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation">S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation">S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation</a>

---


### S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference <a name="S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics">S3BucketReplicationConfigurationRulesDestinationMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketReplicationConfigurationRulesDestinationMetrics;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics">S3BucketReplicationConfigurationRulesDestinationMetrics</a>

---


### S3BucketReplicationConfigurationRulesDestinationOutputReference <a name="S3BucketReplicationConfigurationRulesDestinationOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.putAccessControlTranslation">putAccessControlTranslation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.putMetrics">putMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.putReplicationTime">putReplicationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetAccessControlTranslation">resetAccessControlTranslation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetMetrics">resetMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetReplicaKmsKeyId">resetReplicaKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetReplicationTime">resetReplicationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetStorageClass">resetStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessControlTranslation` <a name="putAccessControlTranslation" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.putAccessControlTranslation"></a>

```typescript
public putAccessControlTranslation(value: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.putAccessControlTranslation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation">S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation</a>

---

##### `putMetrics` <a name="putMetrics" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.putMetrics"></a>

```typescript
public putMetrics(value: S3BucketReplicationConfigurationRulesDestinationMetrics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.putMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics">S3BucketReplicationConfigurationRulesDestinationMetrics</a>

---

##### `putReplicationTime` <a name="putReplicationTime" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.putReplicationTime"></a>

```typescript
public putReplicationTime(value: S3BucketReplicationConfigurationRulesDestinationReplicationTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.putReplicationTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime">S3BucketReplicationConfigurationRulesDestinationReplicationTime</a>

---

##### `resetAccessControlTranslation` <a name="resetAccessControlTranslation" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetAccessControlTranslation"></a>

```typescript
public resetAccessControlTranslation(): void
```

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetMetrics` <a name="resetMetrics" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetMetrics"></a>

```typescript
public resetMetrics(): void
```

##### `resetReplicaKmsKeyId` <a name="resetReplicaKmsKeyId" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetReplicaKmsKeyId"></a>

```typescript
public resetReplicaKmsKeyId(): void
```

##### `resetReplicationTime` <a name="resetReplicationTime" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetReplicationTime"></a>

```typescript
public resetReplicationTime(): void
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetStorageClass"></a>

```typescript
public resetStorageClass(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.accessControlTranslation">accessControlTranslation</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference">S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference">S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.replicationTime">replicationTime</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference">S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.accessControlTranslationInput">accessControlTranslationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation">S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.metricsInput">metricsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics">S3BucketReplicationConfigurationRulesDestinationMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.replicaKmsKeyIdInput">replicaKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.replicationTimeInput">replicationTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime">S3BucketReplicationConfigurationRulesDestinationReplicationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.replicaKmsKeyId">replicaKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination">S3BucketReplicationConfigurationRulesDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessControlTranslation`<sup>Required</sup> <a name="accessControlTranslation" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.accessControlTranslation"></a>

```typescript
public readonly accessControlTranslation: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference">S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference</a>

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.metrics"></a>

```typescript
public readonly metrics: S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference">S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference</a>

---

##### `replicationTime`<sup>Required</sup> <a name="replicationTime" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.replicationTime"></a>

```typescript
public readonly replicationTime: S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference">S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference</a>

---

##### `accessControlTranslationInput`<sup>Optional</sup> <a name="accessControlTranslationInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.accessControlTranslationInput"></a>

```typescript
public readonly accessControlTranslationInput: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation">S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.metricsInput"></a>

```typescript
public readonly metricsInput: S3BucketReplicationConfigurationRulesDestinationMetrics;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics">S3BucketReplicationConfigurationRulesDestinationMetrics</a>

---

##### `replicaKmsKeyIdInput`<sup>Optional</sup> <a name="replicaKmsKeyIdInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.replicaKmsKeyIdInput"></a>

```typescript
public readonly replicaKmsKeyIdInput: string;
```

- *Type:* string

---

##### `replicationTimeInput`<sup>Optional</sup> <a name="replicationTimeInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.replicationTimeInput"></a>

```typescript
public readonly replicationTimeInput: S3BucketReplicationConfigurationRulesDestinationReplicationTime;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime">S3BucketReplicationConfigurationRulesDestinationReplicationTime</a>

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `replicaKmsKeyId`<sup>Required</sup> <a name="replicaKmsKeyId" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.replicaKmsKeyId"></a>

```typescript
public readonly replicaKmsKeyId: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketReplicationConfigurationRulesDestination;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination">S3BucketReplicationConfigurationRulesDestination</a>

---


### S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference <a name="S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime">S3BucketReplicationConfigurationRulesDestinationReplicationTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketReplicationConfigurationRulesDestinationReplicationTime;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime">S3BucketReplicationConfigurationRulesDestinationReplicationTime</a>

---


### S3BucketReplicationConfigurationRulesFilterOutputReference <a name="S3BucketReplicationConfigurationRulesFilterOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter">S3BucketReplicationConfigurationRulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketReplicationConfigurationRulesFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter">S3BucketReplicationConfigurationRulesFilter</a>

---


### S3BucketReplicationConfigurationRulesList <a name="S3BucketReplicationConfigurationRulesList" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketReplicationConfigurationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.get"></a>

```typescript
public get(index: number): S3BucketReplicationConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules">S3BucketReplicationConfigurationRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3BucketReplicationConfigurationRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules">S3BucketReplicationConfigurationRules</a>[]

---


### S3BucketReplicationConfigurationRulesOutputReference <a name="S3BucketReplicationConfigurationRulesOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketReplicationConfigurationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putSourceSelectionCriteria">putSourceSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetDeleteMarkerReplicationStatus">resetDeleteMarkerReplicationStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetSourceSelectionCriteria">resetSourceSelectionCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putDestination"></a>

```typescript
public putDestination(value: S3BucketReplicationConfigurationRulesDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination">S3BucketReplicationConfigurationRulesDestination</a>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putFilter"></a>

```typescript
public putFilter(value: S3BucketReplicationConfigurationRulesFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter">S3BucketReplicationConfigurationRulesFilter</a>

---

##### `putSourceSelectionCriteria` <a name="putSourceSelectionCriteria" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putSourceSelectionCriteria"></a>

```typescript
public putSourceSelectionCriteria(value: S3BucketReplicationConfigurationRulesSourceSelectionCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putSourceSelectionCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria">S3BucketReplicationConfigurationRulesSourceSelectionCriteria</a>

---

##### `resetDeleteMarkerReplicationStatus` <a name="resetDeleteMarkerReplicationStatus" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetDeleteMarkerReplicationStatus"></a>

```typescript
public resetDeleteMarkerReplicationStatus(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetSourceSelectionCriteria` <a name="resetSourceSelectionCriteria" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetSourceSelectionCriteria"></a>

```typescript
public resetSourceSelectionCriteria(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference">S3BucketReplicationConfigurationRulesDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference">S3BucketReplicationConfigurationRulesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.sourceSelectionCriteria">sourceSelectionCriteria</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.deleteMarkerReplicationStatusInput">deleteMarkerReplicationStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.destinationInput">destinationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination">S3BucketReplicationConfigurationRulesDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter">S3BucketReplicationConfigurationRulesFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.sourceSelectionCriteriaInput">sourceSelectionCriteriaInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria">S3BucketReplicationConfigurationRulesSourceSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.deleteMarkerReplicationStatus">deleteMarkerReplicationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules">S3BucketReplicationConfigurationRules</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.destination"></a>

```typescript
public readonly destination: S3BucketReplicationConfigurationRulesDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference">S3BucketReplicationConfigurationRulesDestinationOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.filter"></a>

```typescript
public readonly filter: S3BucketReplicationConfigurationRulesFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference">S3BucketReplicationConfigurationRulesFilterOutputReference</a>

---

##### `sourceSelectionCriteria`<sup>Required</sup> <a name="sourceSelectionCriteria" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.sourceSelectionCriteria"></a>

```typescript
public readonly sourceSelectionCriteria: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference</a>

---

##### `deleteMarkerReplicationStatusInput`<sup>Optional</sup> <a name="deleteMarkerReplicationStatusInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.deleteMarkerReplicationStatusInput"></a>

```typescript
public readonly deleteMarkerReplicationStatusInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: S3BucketReplicationConfigurationRulesDestination;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination">S3BucketReplicationConfigurationRulesDestination</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: S3BucketReplicationConfigurationRulesFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter">S3BucketReplicationConfigurationRulesFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `sourceSelectionCriteriaInput`<sup>Optional</sup> <a name="sourceSelectionCriteriaInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.sourceSelectionCriteriaInput"></a>

```typescript
public readonly sourceSelectionCriteriaInput: S3BucketReplicationConfigurationRulesSourceSelectionCriteria;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria">S3BucketReplicationConfigurationRulesSourceSelectionCriteria</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `deleteMarkerReplicationStatus`<sup>Required</sup> <a name="deleteMarkerReplicationStatus" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.deleteMarkerReplicationStatus"></a>

```typescript
public readonly deleteMarkerReplicationStatus: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketReplicationConfigurationRules | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules">S3BucketReplicationConfigurationRules</a> | cdktf.IResolvable

---


### S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference <a name="S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.putSseKmsEncryptedObjects">putSseKmsEncryptedObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.resetSseKmsEncryptedObjects">resetSseKmsEncryptedObjects</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSseKmsEncryptedObjects` <a name="putSseKmsEncryptedObjects" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.putSseKmsEncryptedObjects"></a>

```typescript
public putSseKmsEncryptedObjects(value: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.putSseKmsEncryptedObjects.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects</a>

---

##### `resetSseKmsEncryptedObjects` <a name="resetSseKmsEncryptedObjects" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.resetSseKmsEncryptedObjects"></a>

```typescript
public resetSseKmsEncryptedObjects(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjects">sseKmsEncryptedObjects</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjectsInput">sseKmsEncryptedObjectsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria">S3BucketReplicationConfigurationRulesSourceSelectionCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sseKmsEncryptedObjects`<sup>Required</sup> <a name="sseKmsEncryptedObjects" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjects"></a>

```typescript
public readonly sseKmsEncryptedObjects: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference</a>

---

##### `sseKmsEncryptedObjectsInput`<sup>Optional</sup> <a name="sseKmsEncryptedObjectsInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjectsInput"></a>

```typescript
public readonly sseKmsEncryptedObjectsInput: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketReplicationConfigurationRulesSourceSelectionCriteria;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria">S3BucketReplicationConfigurationRulesSourceSelectionCriteria</a>

---


### S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference <a name="S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects</a>

---


### S3BucketServerSideEncryptionConfigurationOutputReference <a name="S3BucketServerSideEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.putRule">putRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.putRule"></a>

```typescript
public putRule(value: S3BucketServerSideEncryptionConfigurationRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule">S3BucketServerSideEncryptionConfigurationRule</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference">S3BucketServerSideEncryptionConfigurationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.property.ruleInput">ruleInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule">S3BucketServerSideEncryptionConfigurationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration">S3BucketServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.property.rule"></a>

```typescript
public readonly rule: S3BucketServerSideEncryptionConfigurationRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference">S3BucketServerSideEncryptionConfigurationRuleOutputReference</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: S3BucketServerSideEncryptionConfigurationRule;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule">S3BucketServerSideEncryptionConfigurationRule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketServerSideEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration">S3BucketServerSideEncryptionConfiguration</a>

---


### S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference <a name="S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.resetKmsMasterKeyId">resetKmsMasterKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsMasterKeyId` <a name="resetKmsMasterKeyId" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.resetKmsMasterKeyId"></a>

```typescript
public resetKmsMasterKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyIdInput">kmsMasterKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.sseAlgorithmInput">sseAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.sseAlgorithm">sseAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsMasterKeyIdInput`<sup>Optional</sup> <a name="kmsMasterKeyIdInput" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyIdInput"></a>

```typescript
public readonly kmsMasterKeyIdInput: string;
```

- *Type:* string

---

##### `sseAlgorithmInput`<sup>Optional</sup> <a name="sseAlgorithmInput" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.sseAlgorithmInput"></a>

```typescript
public readonly sseAlgorithmInput: string;
```

- *Type:* string

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

---

##### `sseAlgorithm`<sup>Required</sup> <a name="sseAlgorithm" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.sseAlgorithm"></a>

```typescript
public readonly sseAlgorithm: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault</a>

---


### S3BucketServerSideEncryptionConfigurationRuleOutputReference <a name="S3BucketServerSideEncryptionConfigurationRuleOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.putApplyServerSideEncryptionByDefault">putApplyServerSideEncryptionByDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.resetBucketKeyEnabled">resetBucketKeyEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplyServerSideEncryptionByDefault` <a name="putApplyServerSideEncryptionByDefault" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.putApplyServerSideEncryptionByDefault"></a>

```typescript
public putApplyServerSideEncryptionByDefault(value: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.putApplyServerSideEncryptionByDefault.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault</a>

---

##### `resetBucketKeyEnabled` <a name="resetBucketKeyEnabled" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.resetBucketKeyEnabled"></a>

```typescript
public resetBucketKeyEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.applyServerSideEncryptionByDefault">applyServerSideEncryptionByDefault</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.applyServerSideEncryptionByDefaultInput">applyServerSideEncryptionByDefaultInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.bucketKeyEnabledInput">bucketKeyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule">S3BucketServerSideEncryptionConfigurationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applyServerSideEncryptionByDefault`<sup>Required</sup> <a name="applyServerSideEncryptionByDefault" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.applyServerSideEncryptionByDefault"></a>

```typescript
public readonly applyServerSideEncryptionByDefault: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference</a>

---

##### `applyServerSideEncryptionByDefaultInput`<sup>Optional</sup> <a name="applyServerSideEncryptionByDefaultInput" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.applyServerSideEncryptionByDefaultInput"></a>

```typescript
public readonly applyServerSideEncryptionByDefaultInput: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault</a>

---

##### `bucketKeyEnabledInput`<sup>Optional</sup> <a name="bucketKeyEnabledInput" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.bucketKeyEnabledInput"></a>

```typescript
public readonly bucketKeyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bucketKeyEnabled`<sup>Required</sup> <a name="bucketKeyEnabled" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.bucketKeyEnabled"></a>

```typescript
public readonly bucketKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketServerSideEncryptionConfigurationRule;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule">S3BucketServerSideEncryptionConfigurationRule</a>

---


### S3BucketTimeoutsOutputReference <a name="S3BucketTimeoutsOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts">S3BucketTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts">S3BucketTimeouts</a> | cdktf.IResolvable

---


### S3BucketVersioningOutputReference <a name="S3BucketVersioningOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketVersioningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.resetMfaDelete">resetMfaDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetMfaDelete` <a name="resetMfaDelete" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.resetMfaDelete"></a>

```typescript
public resetMfaDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.mfaDeleteInput">mfaDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.mfaDelete">mfaDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioning">S3BucketVersioning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mfaDeleteInput`<sup>Optional</sup> <a name="mfaDeleteInput" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.mfaDeleteInput"></a>

```typescript
public readonly mfaDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mfaDelete`<sup>Required</sup> <a name="mfaDelete" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.mfaDelete"></a>

```typescript
public readonly mfaDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketVersioning;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

---


### S3BucketWebsiteOutputReference <a name="S3BucketWebsiteOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.Initializer"></a>

```typescript
import { s3Bucket } from '@cdktf/provider-aws'

new s3Bucket.S3BucketWebsiteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resetErrorDocument">resetErrorDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resetIndexDocument">resetIndexDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resetRedirectAllRequestsTo">resetRedirectAllRequestsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resetRoutingRules">resetRoutingRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetErrorDocument` <a name="resetErrorDocument" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resetErrorDocument"></a>

```typescript
public resetErrorDocument(): void
```

##### `resetIndexDocument` <a name="resetIndexDocument" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resetIndexDocument"></a>

```typescript
public resetIndexDocument(): void
```

##### `resetRedirectAllRequestsTo` <a name="resetRedirectAllRequestsTo" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resetRedirectAllRequestsTo"></a>

```typescript
public resetRedirectAllRequestsTo(): void
```

##### `resetRoutingRules` <a name="resetRoutingRules" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resetRoutingRules"></a>

```typescript
public resetRoutingRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.errorDocumentInput">errorDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.indexDocumentInput">indexDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.redirectAllRequestsToInput">redirectAllRequestsToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.routingRulesInput">routingRulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.errorDocument">errorDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.indexDocument">indexDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.redirectAllRequestsTo">redirectAllRequestsTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.routingRules">routingRules</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite">S3BucketWebsite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorDocumentInput`<sup>Optional</sup> <a name="errorDocumentInput" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.errorDocumentInput"></a>

```typescript
public readonly errorDocumentInput: string;
```

- *Type:* string

---

##### `indexDocumentInput`<sup>Optional</sup> <a name="indexDocumentInput" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.indexDocumentInput"></a>

```typescript
public readonly indexDocumentInput: string;
```

- *Type:* string

---

##### `redirectAllRequestsToInput`<sup>Optional</sup> <a name="redirectAllRequestsToInput" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.redirectAllRequestsToInput"></a>

```typescript
public readonly redirectAllRequestsToInput: string;
```

- *Type:* string

---

##### `routingRulesInput`<sup>Optional</sup> <a name="routingRulesInput" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.routingRulesInput"></a>

```typescript
public readonly routingRulesInput: string;
```

- *Type:* string

---

##### `errorDocument`<sup>Required</sup> <a name="errorDocument" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.errorDocument"></a>

```typescript
public readonly errorDocument: string;
```

- *Type:* string

---

##### `indexDocument`<sup>Required</sup> <a name="indexDocument" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.indexDocument"></a>

```typescript
public readonly indexDocument: string;
```

- *Type:* string

---

##### `redirectAllRequestsTo`<sup>Required</sup> <a name="redirectAllRequestsTo" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.redirectAllRequestsTo"></a>

```typescript
public readonly redirectAllRequestsTo: string;
```

- *Type:* string

---

##### `routingRules`<sup>Required</sup> <a name="routingRules" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.routingRules"></a>

```typescript
public readonly routingRules: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketWebsite;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

---



