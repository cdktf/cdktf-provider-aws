# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-aws.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsProvider <a name="AwsProvider" id="@cdktf/provider-aws.provider.AwsProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws aws}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.provider.AwsProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-aws'

new provider.AwsProvider(scope: Construct, id: string, config?: AwsProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig">AwsProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.provider.AwsProviderConfig">AwsProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetAllowedAccountIds">resetAllowedAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetAssumeRole">resetAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetAssumeRoleWithWebIdentity">resetAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetCustomCaBundle">resetCustomCaBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetDefaultTags">resetDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetEc2MetadataServiceEndpoint">resetEc2MetadataServiceEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetEc2MetadataServiceEndpointMode">resetEc2MetadataServiceEndpointMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetEndpoints">resetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetForbiddenAccountIds">resetForbiddenAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetHttpProxy">resetHttpProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetIgnoreTags">resetIgnoreTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetS3ForcePathStyle">resetS3ForcePathStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetS3UsePathStyle">resetS3UsePathStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSecretKey">resetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSharedConfigFiles">resetSharedConfigFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSharedCredentialsFile">resetSharedCredentialsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSharedCredentialsFiles">resetSharedCredentialsFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSkipCredentialsValidation">resetSkipCredentialsValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSkipGetEc2Platforms">resetSkipGetEc2Platforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSkipMetadataApiCheck">resetSkipMetadataApiCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSkipRegionValidation">resetSkipRegionValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSkipRequestingAccountId">resetSkipRequestingAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetStsRegion">resetStsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetUseDualstackEndpoint">resetUseDualstackEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetUseFipsEndpoint">resetUseFipsEndpoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.provider.AwsProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.provider.AwsProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.provider.AwsProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.provider.AwsProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.provider.AwsProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.provider.AwsProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.provider.AwsProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.provider.AwsProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.provider.AwsProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-aws.provider.AwsProvider.resetAccessKey"></a>

```typescript
public resetAccessKey(): void
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-aws.provider.AwsProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAllowedAccountIds` <a name="resetAllowedAccountIds" id="@cdktf/provider-aws.provider.AwsProvider.resetAllowedAccountIds"></a>

```typescript
public resetAllowedAccountIds(): void
```

##### `resetAssumeRole` <a name="resetAssumeRole" id="@cdktf/provider-aws.provider.AwsProvider.resetAssumeRole"></a>

```typescript
public resetAssumeRole(): void
```

##### `resetAssumeRoleWithWebIdentity` <a name="resetAssumeRoleWithWebIdentity" id="@cdktf/provider-aws.provider.AwsProvider.resetAssumeRoleWithWebIdentity"></a>

```typescript
public resetAssumeRoleWithWebIdentity(): void
```

##### `resetCustomCaBundle` <a name="resetCustomCaBundle" id="@cdktf/provider-aws.provider.AwsProvider.resetCustomCaBundle"></a>

```typescript
public resetCustomCaBundle(): void
```

##### `resetDefaultTags` <a name="resetDefaultTags" id="@cdktf/provider-aws.provider.AwsProvider.resetDefaultTags"></a>

```typescript
public resetDefaultTags(): void
```

##### `resetEc2MetadataServiceEndpoint` <a name="resetEc2MetadataServiceEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.resetEc2MetadataServiceEndpoint"></a>

```typescript
public resetEc2MetadataServiceEndpoint(): void
```

##### `resetEc2MetadataServiceEndpointMode` <a name="resetEc2MetadataServiceEndpointMode" id="@cdktf/provider-aws.provider.AwsProvider.resetEc2MetadataServiceEndpointMode"></a>

```typescript
public resetEc2MetadataServiceEndpointMode(): void
```

##### `resetEndpoints` <a name="resetEndpoints" id="@cdktf/provider-aws.provider.AwsProvider.resetEndpoints"></a>

```typescript
public resetEndpoints(): void
```

##### `resetForbiddenAccountIds` <a name="resetForbiddenAccountIds" id="@cdktf/provider-aws.provider.AwsProvider.resetForbiddenAccountIds"></a>

```typescript
public resetForbiddenAccountIds(): void
```

##### `resetHttpProxy` <a name="resetHttpProxy" id="@cdktf/provider-aws.provider.AwsProvider.resetHttpProxy"></a>

```typescript
public resetHttpProxy(): void
```

##### `resetIgnoreTags` <a name="resetIgnoreTags" id="@cdktf/provider-aws.provider.AwsProvider.resetIgnoreTags"></a>

```typescript
public resetIgnoreTags(): void
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktf/provider-aws.provider.AwsProvider.resetInsecure"></a>

```typescript
public resetInsecure(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-aws.provider.AwsProvider.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetProfile` <a name="resetProfile" id="@cdktf/provider-aws.provider.AwsProvider.resetProfile"></a>

```typescript
public resetProfile(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.provider.AwsProvider.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetS3ForcePathStyle` <a name="resetS3ForcePathStyle" id="@cdktf/provider-aws.provider.AwsProvider.resetS3ForcePathStyle"></a>

```typescript
public resetS3ForcePathStyle(): void
```

##### `resetS3UsePathStyle` <a name="resetS3UsePathStyle" id="@cdktf/provider-aws.provider.AwsProvider.resetS3UsePathStyle"></a>

```typescript
public resetS3UsePathStyle(): void
```

##### `resetSecretKey` <a name="resetSecretKey" id="@cdktf/provider-aws.provider.AwsProvider.resetSecretKey"></a>

```typescript
public resetSecretKey(): void
```

##### `resetSharedConfigFiles` <a name="resetSharedConfigFiles" id="@cdktf/provider-aws.provider.AwsProvider.resetSharedConfigFiles"></a>

```typescript
public resetSharedConfigFiles(): void
```

##### `resetSharedCredentialsFile` <a name="resetSharedCredentialsFile" id="@cdktf/provider-aws.provider.AwsProvider.resetSharedCredentialsFile"></a>

```typescript
public resetSharedCredentialsFile(): void
```

##### `resetSharedCredentialsFiles` <a name="resetSharedCredentialsFiles" id="@cdktf/provider-aws.provider.AwsProvider.resetSharedCredentialsFiles"></a>

```typescript
public resetSharedCredentialsFiles(): void
```

##### `resetSkipCredentialsValidation` <a name="resetSkipCredentialsValidation" id="@cdktf/provider-aws.provider.AwsProvider.resetSkipCredentialsValidation"></a>

```typescript
public resetSkipCredentialsValidation(): void
```

##### `resetSkipGetEc2Platforms` <a name="resetSkipGetEc2Platforms" id="@cdktf/provider-aws.provider.AwsProvider.resetSkipGetEc2Platforms"></a>

```typescript
public resetSkipGetEc2Platforms(): void
```

##### `resetSkipMetadataApiCheck` <a name="resetSkipMetadataApiCheck" id="@cdktf/provider-aws.provider.AwsProvider.resetSkipMetadataApiCheck"></a>

```typescript
public resetSkipMetadataApiCheck(): void
```

##### `resetSkipRegionValidation` <a name="resetSkipRegionValidation" id="@cdktf/provider-aws.provider.AwsProvider.resetSkipRegionValidation"></a>

```typescript
public resetSkipRegionValidation(): void
```

##### `resetSkipRequestingAccountId` <a name="resetSkipRequestingAccountId" id="@cdktf/provider-aws.provider.AwsProvider.resetSkipRequestingAccountId"></a>

```typescript
public resetSkipRequestingAccountId(): void
```

##### `resetStsRegion` <a name="resetStsRegion" id="@cdktf/provider-aws.provider.AwsProvider.resetStsRegion"></a>

```typescript
public resetStsRegion(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-aws.provider.AwsProvider.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetUseDualstackEndpoint` <a name="resetUseDualstackEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.resetUseDualstackEndpoint"></a>

```typescript
public resetUseDualstackEndpoint(): void
```

##### `resetUseFipsEndpoint` <a name="resetUseFipsEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.resetUseFipsEndpoint"></a>

```typescript
public resetUseFipsEndpoint(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.provider.AwsProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-aws'

provider.AwsProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.provider.AwsProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.provider.AwsProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-aws'

provider.AwsProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.provider.AwsProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-aws.provider.AwsProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-aws'

provider.AwsProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.provider.AwsProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.allowedAccountIdsInput">allowedAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleInput">assumeRoleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleWithWebIdentityInput">assumeRoleWithWebIdentityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.customCaBundleInput">customCaBundleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.defaultTagsInput">defaultTagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointInput">ec2MetadataServiceEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointModeInput">ec2MetadataServiceEndpointModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.endpointsInput">endpointsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.forbiddenAccountIdsInput">forbiddenAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.httpProxyInput">httpProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ignoreTagsInput">ignoreTagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.insecureInput">insecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.profileInput">profileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.s3ForcePathStyleInput">s3ForcePathStyleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.s3UsePathStyleInput">s3UsePathStyleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.secretKeyInput">secretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedConfigFilesInput">sharedConfigFilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFileInput">sharedCredentialsFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFilesInput">sharedCredentialsFilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipCredentialsValidationInput">skipCredentialsValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipGetEc2PlatformsInput">skipGetEc2PlatformsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipMetadataApiCheckInput">skipMetadataApiCheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipRegionValidationInput">skipRegionValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipRequestingAccountIdInput">skipRequestingAccountIdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.stsRegionInput">stsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.useDualstackEndpointInput">useDualstackEndpointInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.useFipsEndpointInput">useFipsEndpointInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.allowedAccountIds">allowedAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.assumeRole">assumeRole</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleWithWebIdentity">assumeRoleWithWebIdentity</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.customCaBundle">customCaBundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.defaultTags">defaultTags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpoint">ec2MetadataServiceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointMode">ec2MetadataServiceEndpointMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.endpoints">endpoints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.forbiddenAccountIds">forbiddenAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.httpProxy">httpProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ignoreTags">ignoreTags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.s3ForcePathStyle">s3ForcePathStyle</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.s3UsePathStyle">s3UsePathStyle</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedConfigFiles">sharedConfigFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFile">sharedCredentialsFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFiles">sharedCredentialsFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipCredentialsValidation">skipCredentialsValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipGetEc2Platforms">skipGetEc2Platforms</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipMetadataApiCheck">skipMetadataApiCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipRegionValidation">skipRegionValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipRequestingAccountId">skipRequestingAccountId</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.stsRegion">stsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.useDualstackEndpoint">useDualstackEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.useFipsEndpoint">useFipsEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.provider.AwsProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.provider.AwsProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.provider.AwsProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.provider.AwsProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-aws.provider.AwsProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.provider.AwsProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.provider.AwsProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-aws.provider.AwsProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.provider.AwsProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-aws.provider.AwsProvider.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-aws.provider.AwsProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `allowedAccountIdsInput`<sup>Optional</sup> <a name="allowedAccountIdsInput" id="@cdktf/provider-aws.provider.AwsProvider.property.allowedAccountIdsInput"></a>

```typescript
public readonly allowedAccountIdsInput: string[];
```

- *Type:* string[]

---

##### `assumeRoleInput`<sup>Optional</sup> <a name="assumeRoleInput" id="@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleInput"></a>

```typescript
public readonly assumeRoleInput: IResolvable | AwsProviderAssumeRole[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>[]

---

##### `assumeRoleWithWebIdentityInput`<sup>Optional</sup> <a name="assumeRoleWithWebIdentityInput" id="@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleWithWebIdentityInput"></a>

```typescript
public readonly assumeRoleWithWebIdentityInput: IResolvable | AwsProviderAssumeRoleWithWebIdentity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>[]

---

##### `customCaBundleInput`<sup>Optional</sup> <a name="customCaBundleInput" id="@cdktf/provider-aws.provider.AwsProvider.property.customCaBundleInput"></a>

```typescript
public readonly customCaBundleInput: string;
```

- *Type:* string

---

##### `defaultTagsInput`<sup>Optional</sup> <a name="defaultTagsInput" id="@cdktf/provider-aws.provider.AwsProvider.property.defaultTagsInput"></a>

```typescript
public readonly defaultTagsInput: IResolvable | AwsProviderDefaultTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>[]

---

##### `ec2MetadataServiceEndpointInput`<sup>Optional</sup> <a name="ec2MetadataServiceEndpointInput" id="@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointInput"></a>

```typescript
public readonly ec2MetadataServiceEndpointInput: string;
```

- *Type:* string

---

##### `ec2MetadataServiceEndpointModeInput`<sup>Optional</sup> <a name="ec2MetadataServiceEndpointModeInput" id="@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointModeInput"></a>

```typescript
public readonly ec2MetadataServiceEndpointModeInput: string;
```

- *Type:* string

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktf/provider-aws.provider.AwsProvider.property.endpointsInput"></a>

```typescript
public readonly endpointsInput: IResolvable | AwsProviderEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>[]

---

##### `forbiddenAccountIdsInput`<sup>Optional</sup> <a name="forbiddenAccountIdsInput" id="@cdktf/provider-aws.provider.AwsProvider.property.forbiddenAccountIdsInput"></a>

```typescript
public readonly forbiddenAccountIdsInput: string[];
```

- *Type:* string[]

---

##### `httpProxyInput`<sup>Optional</sup> <a name="httpProxyInput" id="@cdktf/provider-aws.provider.AwsProvider.property.httpProxyInput"></a>

```typescript
public readonly httpProxyInput: string;
```

- *Type:* string

---

##### `ignoreTagsInput`<sup>Optional</sup> <a name="ignoreTagsInput" id="@cdktf/provider-aws.provider.AwsProvider.property.ignoreTagsInput"></a>

```typescript
public readonly ignoreTagsInput: IResolvable | AwsProviderIgnoreTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>[]

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktf/provider-aws.provider.AwsProvider.property.insecureInput"></a>

```typescript
public readonly insecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-aws.provider.AwsProvider.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-aws.provider.AwsProvider.property.profileInput"></a>

```typescript
public readonly profileInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.provider.AwsProvider.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `s3ForcePathStyleInput`<sup>Optional</sup> <a name="s3ForcePathStyleInput" id="@cdktf/provider-aws.provider.AwsProvider.property.s3ForcePathStyleInput"></a>

```typescript
public readonly s3ForcePathStyleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `s3UsePathStyleInput`<sup>Optional</sup> <a name="s3UsePathStyleInput" id="@cdktf/provider-aws.provider.AwsProvider.property.s3UsePathStyleInput"></a>

```typescript
public readonly s3UsePathStyleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktf/provider-aws.provider.AwsProvider.property.secretKeyInput"></a>

```typescript
public readonly secretKeyInput: string;
```

- *Type:* string

---

##### `sharedConfigFilesInput`<sup>Optional</sup> <a name="sharedConfigFilesInput" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedConfigFilesInput"></a>

```typescript
public readonly sharedConfigFilesInput: string[];
```

- *Type:* string[]

---

##### `sharedCredentialsFileInput`<sup>Optional</sup> <a name="sharedCredentialsFileInput" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFileInput"></a>

```typescript
public readonly sharedCredentialsFileInput: string;
```

- *Type:* string

---

##### `sharedCredentialsFilesInput`<sup>Optional</sup> <a name="sharedCredentialsFilesInput" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFilesInput"></a>

```typescript
public readonly sharedCredentialsFilesInput: string[];
```

- *Type:* string[]

---

##### `skipCredentialsValidationInput`<sup>Optional</sup> <a name="skipCredentialsValidationInput" id="@cdktf/provider-aws.provider.AwsProvider.property.skipCredentialsValidationInput"></a>

```typescript
public readonly skipCredentialsValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipGetEc2PlatformsInput`<sup>Optional</sup> <a name="skipGetEc2PlatformsInput" id="@cdktf/provider-aws.provider.AwsProvider.property.skipGetEc2PlatformsInput"></a>

```typescript
public readonly skipGetEc2PlatformsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipMetadataApiCheckInput`<sup>Optional</sup> <a name="skipMetadataApiCheckInput" id="@cdktf/provider-aws.provider.AwsProvider.property.skipMetadataApiCheckInput"></a>

```typescript
public readonly skipMetadataApiCheckInput: string;
```

- *Type:* string

---

##### `skipRegionValidationInput`<sup>Optional</sup> <a name="skipRegionValidationInput" id="@cdktf/provider-aws.provider.AwsProvider.property.skipRegionValidationInput"></a>

```typescript
public readonly skipRegionValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipRequestingAccountIdInput`<sup>Optional</sup> <a name="skipRequestingAccountIdInput" id="@cdktf/provider-aws.provider.AwsProvider.property.skipRequestingAccountIdInput"></a>

```typescript
public readonly skipRequestingAccountIdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stsRegionInput`<sup>Optional</sup> <a name="stsRegionInput" id="@cdktf/provider-aws.provider.AwsProvider.property.stsRegionInput"></a>

```typescript
public readonly stsRegionInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-aws.provider.AwsProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `useDualstackEndpointInput`<sup>Optional</sup> <a name="useDualstackEndpointInput" id="@cdktf/provider-aws.provider.AwsProvider.property.useDualstackEndpointInput"></a>

```typescript
public readonly useDualstackEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useFipsEndpointInput`<sup>Optional</sup> <a name="useFipsEndpointInput" id="@cdktf/provider-aws.provider.AwsProvider.property.useFipsEndpointInput"></a>

```typescript
public readonly useFipsEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-aws.provider.AwsProvider.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `allowedAccountIds`<sup>Optional</sup> <a name="allowedAccountIds" id="@cdktf/provider-aws.provider.AwsProvider.property.allowedAccountIds"></a>

```typescript
public readonly allowedAccountIds: string[];
```

- *Type:* string[]

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktf/provider-aws.provider.AwsProvider.property.assumeRole"></a>

```typescript
public readonly assumeRole: IResolvable | AwsProviderAssumeRole[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>[]

---

##### `assumeRoleWithWebIdentity`<sup>Optional</sup> <a name="assumeRoleWithWebIdentity" id="@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleWithWebIdentity"></a>

```typescript
public readonly assumeRoleWithWebIdentity: IResolvable | AwsProviderAssumeRoleWithWebIdentity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>[]

---

##### `customCaBundle`<sup>Optional</sup> <a name="customCaBundle" id="@cdktf/provider-aws.provider.AwsProvider.property.customCaBundle"></a>

```typescript
public readonly customCaBundle: string;
```

- *Type:* string

---

##### `defaultTags`<sup>Optional</sup> <a name="defaultTags" id="@cdktf/provider-aws.provider.AwsProvider.property.defaultTags"></a>

```typescript
public readonly defaultTags: IResolvable | AwsProviderDefaultTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>[]

---

##### `ec2MetadataServiceEndpoint`<sup>Optional</sup> <a name="ec2MetadataServiceEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpoint"></a>

```typescript
public readonly ec2MetadataServiceEndpoint: string;
```

- *Type:* string

---

##### `ec2MetadataServiceEndpointMode`<sup>Optional</sup> <a name="ec2MetadataServiceEndpointMode" id="@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointMode"></a>

```typescript
public readonly ec2MetadataServiceEndpointMode: string;
```

- *Type:* string

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/provider-aws.provider.AwsProvider.property.endpoints"></a>

```typescript
public readonly endpoints: IResolvable | AwsProviderEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>[]

---

##### `forbiddenAccountIds`<sup>Optional</sup> <a name="forbiddenAccountIds" id="@cdktf/provider-aws.provider.AwsProvider.property.forbiddenAccountIds"></a>

```typescript
public readonly forbiddenAccountIds: string[];
```

- *Type:* string[]

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktf/provider-aws.provider.AwsProvider.property.httpProxy"></a>

```typescript
public readonly httpProxy: string;
```

- *Type:* string

---

##### `ignoreTags`<sup>Optional</sup> <a name="ignoreTags" id="@cdktf/provider-aws.provider.AwsProvider.property.ignoreTags"></a>

```typescript
public readonly ignoreTags: IResolvable | AwsProviderIgnoreTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>[]

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-aws.provider.AwsProvider.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-aws.provider.AwsProvider.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-aws.provider.AwsProvider.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.provider.AwsProvider.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `s3ForcePathStyle`<sup>Optional</sup> <a name="s3ForcePathStyle" id="@cdktf/provider-aws.provider.AwsProvider.property.s3ForcePathStyle"></a>

```typescript
public readonly s3ForcePathStyle: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `s3UsePathStyle`<sup>Optional</sup> <a name="s3UsePathStyle" id="@cdktf/provider-aws.provider.AwsProvider.property.s3UsePathStyle"></a>

```typescript
public readonly s3UsePathStyle: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-aws.provider.AwsProvider.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `sharedConfigFiles`<sup>Optional</sup> <a name="sharedConfigFiles" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedConfigFiles"></a>

```typescript
public readonly sharedConfigFiles: string[];
```

- *Type:* string[]

---

##### `sharedCredentialsFile`<sup>Optional</sup> <a name="sharedCredentialsFile" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFile"></a>

```typescript
public readonly sharedCredentialsFile: string;
```

- *Type:* string

---

##### `sharedCredentialsFiles`<sup>Optional</sup> <a name="sharedCredentialsFiles" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFiles"></a>

```typescript
public readonly sharedCredentialsFiles: string[];
```

- *Type:* string[]

---

##### `skipCredentialsValidation`<sup>Optional</sup> <a name="skipCredentialsValidation" id="@cdktf/provider-aws.provider.AwsProvider.property.skipCredentialsValidation"></a>

```typescript
public readonly skipCredentialsValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipGetEc2Platforms`<sup>Optional</sup> <a name="skipGetEc2Platforms" id="@cdktf/provider-aws.provider.AwsProvider.property.skipGetEc2Platforms"></a>

```typescript
public readonly skipGetEc2Platforms: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipMetadataApiCheck`<sup>Optional</sup> <a name="skipMetadataApiCheck" id="@cdktf/provider-aws.provider.AwsProvider.property.skipMetadataApiCheck"></a>

```typescript
public readonly skipMetadataApiCheck: string;
```

- *Type:* string

---

##### `skipRegionValidation`<sup>Optional</sup> <a name="skipRegionValidation" id="@cdktf/provider-aws.provider.AwsProvider.property.skipRegionValidation"></a>

```typescript
public readonly skipRegionValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipRequestingAccountId`<sup>Optional</sup> <a name="skipRequestingAccountId" id="@cdktf/provider-aws.provider.AwsProvider.property.skipRequestingAccountId"></a>

```typescript
public readonly skipRequestingAccountId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stsRegion`<sup>Optional</sup> <a name="stsRegion" id="@cdktf/provider-aws.provider.AwsProvider.property.stsRegion"></a>

```typescript
public readonly stsRegion: string;
```

- *Type:* string

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-aws.provider.AwsProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `useDualstackEndpoint`<sup>Optional</sup> <a name="useDualstackEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.property.useDualstackEndpoint"></a>

```typescript
public readonly useDualstackEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useFipsEndpoint`<sup>Optional</sup> <a name="useFipsEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.property.useFipsEndpoint"></a>

```typescript
public readonly useFipsEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.provider.AwsProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsProviderAssumeRole <a name="AwsProviderAssumeRole" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-aws'

const awsProviderAssumeRole: provider.AwsProviderAssumeRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.duration">duration</a></code> | <code>string</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | The duration, in seconds, of the role session. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.externalId">externalId</a></code> | <code>string</code> | A unique identifier that might be required when you assume a role in another account. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.policy">policy</a></code> | <code>string</code> | IAM Policy JSON describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.policyArns">policyArns</a></code> | <code>string[]</code> | Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.roleArn">roleArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.sessionName">sessionName</a></code> | <code>string</code> | An identifier for the assumed role session. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.sourceIdentity">sourceIdentity</a></code> | <code>string</code> | Source identity specified by the principal assuming the role. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Assume role session tags. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.transitiveTagKeys">transitiveTagKeys</a></code> | <code>string[]</code> | Assume role session tag keys to pass to any subsequent sessions. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#duration AwsProvider#duration}

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

The duration, in seconds, of the role session.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#duration_seconds AwsProvider#duration_seconds}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

A unique identifier that might be required when you assume a role in another account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#external_id AwsProvider#external_id}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#policy AwsProvider#policy}

---

##### `policyArns`<sup>Optional</sup> <a name="policyArns" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.policyArns"></a>

```typescript
public readonly policyArns: string[];
```

- *Type:* string[]

Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#policy_arns AwsProvider#policy_arns}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#role_arn AwsProvider#role_arn}

---

##### `sessionName`<sup>Optional</sup> <a name="sessionName" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.sessionName"></a>

```typescript
public readonly sessionName: string;
```

- *Type:* string

An identifier for the assumed role session.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#session_name AwsProvider#session_name}

---

##### `sourceIdentity`<sup>Optional</sup> <a name="sourceIdentity" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.sourceIdentity"></a>

```typescript
public readonly sourceIdentity: string;
```

- *Type:* string

Source identity specified by the principal assuming the role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#source_identity AwsProvider#source_identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Assume role session tags.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#tags AwsProvider#tags}

---

##### `transitiveTagKeys`<sup>Optional</sup> <a name="transitiveTagKeys" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.transitiveTagKeys"></a>

```typescript
public readonly transitiveTagKeys: string[];
```

- *Type:* string[]

Assume role session tag keys to pass to any subsequent sessions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transitive_tag_keys AwsProvider#transitive_tag_keys}

---

### AwsProviderAssumeRoleWithWebIdentity <a name="AwsProviderAssumeRoleWithWebIdentity" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-aws'

const awsProviderAssumeRoleWithWebIdentity: provider.AwsProviderAssumeRoleWithWebIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.duration">duration</a></code> | <code>string</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.policy">policy</a></code> | <code>string</code> | IAM Policy JSON describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.policyArns">policyArns</a></code> | <code>string[]</code> | Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.roleArn">roleArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.sessionName">sessionName</a></code> | <code>string</code> | An identifier for the assumed role session. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.webIdentityToken">webIdentityToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#web_identity_token AwsProvider#web_identity_token}. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile">webIdentityTokenFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#web_identity_token_file AwsProvider#web_identity_token_file}. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#duration AwsProvider#duration}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#policy AwsProvider#policy}

---

##### `policyArns`<sup>Optional</sup> <a name="policyArns" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.policyArns"></a>

```typescript
public readonly policyArns: string[];
```

- *Type:* string[]

Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#policy_arns AwsProvider#policy_arns}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#role_arn AwsProvider#role_arn}

---

##### `sessionName`<sup>Optional</sup> <a name="sessionName" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.sessionName"></a>

```typescript
public readonly sessionName: string;
```

- *Type:* string

An identifier for the assumed role session.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#session_name AwsProvider#session_name}

---

##### `webIdentityToken`<sup>Optional</sup> <a name="webIdentityToken" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.webIdentityToken"></a>

```typescript
public readonly webIdentityToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#web_identity_token AwsProvider#web_identity_token}.

---

##### `webIdentityTokenFile`<sup>Optional</sup> <a name="webIdentityTokenFile" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile"></a>

```typescript
public readonly webIdentityTokenFile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#web_identity_token_file AwsProvider#web_identity_token_file}.

---

### AwsProviderConfig <a name="AwsProviderConfig" id="@cdktf/provider-aws.provider.AwsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-aws'

const awsProviderConfig: provider.AwsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.accessKey">accessKey</a></code> | <code>string</code> | The access key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.allowedAccountIds">allowedAccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#allowed_account_ids AwsProvider#allowed_account_ids}. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.assumeRole">assumeRole</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>[]</code> | assume_role block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.assumeRoleWithWebIdentity">assumeRoleWithWebIdentity</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>[]</code> | assume_role_with_web_identity block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.customCaBundle">customCaBundle</a></code> | <code>string</code> | File containing custom root and intermediate certificates. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.defaultTags">defaultTags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>[]</code> | default_tags block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.ec2MetadataServiceEndpoint">ec2MetadataServiceEndpoint</a></code> | <code>string</code> | Address of the EC2 metadata service endpoint to use. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT` environment variable. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.ec2MetadataServiceEndpointMode">ec2MetadataServiceEndpointMode</a></code> | <code>string</code> | Protocol to use with EC2 metadata service endpoint.Valid values are `IPv4` and `IPv6`. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE` environment variable. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.endpoints">endpoints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>[]</code> | endpoints block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.forbiddenAccountIds">forbiddenAccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forbidden_account_ids AwsProvider#forbidden_account_ids}. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.httpProxy">httpProxy</a></code> | <code>string</code> | The address of an HTTP proxy to use when accessing the AWS API. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.ignoreTags">ignoreTags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>[]</code> | ignore_tags block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | The maximum number of times an AWS API request is being executed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.profile">profile</a></code> | <code>string</code> | The profile for API operations. If not set, the default profile created with `aws configure` will be used. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.region">region</a></code> | <code>string</code> | The region where AWS operations will take place. Examples are us-east-1, us-west-2, etc. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.s3ForcePathStyle">s3ForcePathStyle</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.s3UsePathStyle">s3UsePathStyle</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.secretKey">secretKey</a></code> | <code>string</code> | The secret key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedConfigFiles">sharedConfigFiles</a></code> | <code>string[]</code> | List of paths to shared config files. If not set, defaults to [~/.aws/config]. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedCredentialsFile">sharedCredentialsFile</a></code> | <code>string</code> | The path to the shared credentials file. If not set, defaults to ~/.aws/credentials. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedCredentialsFiles">sharedCredentialsFiles</a></code> | <code>string[]</code> | List of paths to shared credentials files. If not set, defaults to [~/.aws/credentials]. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.skipCredentialsValidation">skipCredentialsValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.skipGetEc2Platforms">skipGetEc2Platforms</a></code> | <code>boolean \| cdktf.IResolvable</code> | Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.skipMetadataApiCheck">skipMetadataApiCheck</a></code> | <code>string</code> | Skip the AWS Metadata API check. Used for AWS API implementations that do not have a metadata api endpoint. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.skipRegionValidation">skipRegionValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Skip static validation of region name. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.skipRequestingAccountId">skipRequestingAccountId</a></code> | <code>boolean \| cdktf.IResolvable</code> | Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.stsRegion">stsRegion</a></code> | <code>string</code> | The region where AWS STS operations will take place. Examples are us-east-1 and us-west-2. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.token">token</a></code> | <code>string</code> | session token. A session token is only required if you are using temporary security credentials. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.useDualstackEndpoint">useDualstackEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | Resolve an endpoint with DualStack capability. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.useFipsEndpoint">useFipsEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | Resolve an endpoint with FIPS capability. |

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

The access key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#access_key AwsProvider#access_key}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#alias AwsProvider#alias}

---

##### `allowedAccountIds`<sup>Optional</sup> <a name="allowedAccountIds" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.allowedAccountIds"></a>

```typescript
public readonly allowedAccountIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#allowed_account_ids AwsProvider#allowed_account_ids}.

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.assumeRole"></a>

```typescript
public readonly assumeRole: IResolvable | AwsProviderAssumeRole[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>[]

assume_role block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#assume_role AwsProvider#assume_role}

---

##### `assumeRoleWithWebIdentity`<sup>Optional</sup> <a name="assumeRoleWithWebIdentity" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.assumeRoleWithWebIdentity"></a>

```typescript
public readonly assumeRoleWithWebIdentity: IResolvable | AwsProviderAssumeRoleWithWebIdentity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>[]

assume_role_with_web_identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#assume_role_with_web_identity AwsProvider#assume_role_with_web_identity}

---

##### `customCaBundle`<sup>Optional</sup> <a name="customCaBundle" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.customCaBundle"></a>

```typescript
public readonly customCaBundle: string;
```

- *Type:* string

File containing custom root and intermediate certificates.

Can also be configured using the `AWS_CA_BUNDLE` environment variable. (Setting `ca_bundle` in the shared config file is not supported.)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#custom_ca_bundle AwsProvider#custom_ca_bundle}

---

##### `defaultTags`<sup>Optional</sup> <a name="defaultTags" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.defaultTags"></a>

```typescript
public readonly defaultTags: IResolvable | AwsProviderDefaultTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>[]

default_tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#default_tags AwsProvider#default_tags}

---

##### `ec2MetadataServiceEndpoint`<sup>Optional</sup> <a name="ec2MetadataServiceEndpoint" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.ec2MetadataServiceEndpoint"></a>

```typescript
public readonly ec2MetadataServiceEndpoint: string;
```

- *Type:* string

Address of the EC2 metadata service endpoint to use. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2_metadata_service_endpoint AwsProvider#ec2_metadata_service_endpoint}

---

##### `ec2MetadataServiceEndpointMode`<sup>Optional</sup> <a name="ec2MetadataServiceEndpointMode" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.ec2MetadataServiceEndpointMode"></a>

```typescript
public readonly ec2MetadataServiceEndpointMode: string;
```

- *Type:* string

Protocol to use with EC2 metadata service endpoint.Valid values are `IPv4` and `IPv6`. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2_metadata_service_endpoint_mode AwsProvider#ec2_metadata_service_endpoint_mode}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.endpoints"></a>

```typescript
public readonly endpoints: IResolvable | AwsProviderEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>[]

endpoints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#endpoints AwsProvider#endpoints}

---

##### `forbiddenAccountIds`<sup>Optional</sup> <a name="forbiddenAccountIds" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.forbiddenAccountIds"></a>

```typescript
public readonly forbiddenAccountIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forbidden_account_ids AwsProvider#forbidden_account_ids}.

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.httpProxy"></a>

```typescript
public readonly httpProxy: string;
```

- *Type:* string

The address of an HTTP proxy to use when accessing the AWS API.

Can also be configured using the `HTTP_PROXY` or `HTTPS_PROXY` environment variables.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#http_proxy AwsProvider#http_proxy}

---

##### `ignoreTags`<sup>Optional</sup> <a name="ignoreTags" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.ignoreTags"></a>

```typescript
public readonly ignoreTags: IResolvable | AwsProviderIgnoreTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>[]

ignore_tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ignore_tags AwsProvider#ignore_tags}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#insecure AwsProvider#insecure}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

The maximum number of times an AWS API request is being executed.

If the API request still fails, an error is
thrown.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#max_retries AwsProvider#max_retries}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

The profile for API operations. If not set, the default profile created with `aws configure` will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#profile AwsProvider#profile}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region where AWS operations will take place. Examples are us-east-1, us-west-2, etc.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#region AwsProvider#region}

---

##### `s3ForcePathStyle`<sup>Optional</sup> <a name="s3ForcePathStyle" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.s3ForcePathStyle"></a>

```typescript
public readonly s3ForcePathStyle: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3_force_path_style AwsProvider#s3_force_path_style}

---

##### `s3UsePathStyle`<sup>Optional</sup> <a name="s3UsePathStyle" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.s3UsePathStyle"></a>

```typescript
public readonly s3UsePathStyle: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3_use_path_style AwsProvider#s3_use_path_style}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

The secret key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#secret_key AwsProvider#secret_key}

---

##### `sharedConfigFiles`<sup>Optional</sup> <a name="sharedConfigFiles" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedConfigFiles"></a>

```typescript
public readonly sharedConfigFiles: string[];
```

- *Type:* string[]

List of paths to shared config files. If not set, defaults to [~/.aws/config].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shared_config_files AwsProvider#shared_config_files}

---

##### `sharedCredentialsFile`<sup>Optional</sup> <a name="sharedCredentialsFile" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedCredentialsFile"></a>

```typescript
public readonly sharedCredentialsFile: string;
```

- *Type:* string

The path to the shared credentials file. If not set, defaults to ~/.aws/credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shared_credentials_file AwsProvider#shared_credentials_file}

---

##### `sharedCredentialsFiles`<sup>Optional</sup> <a name="sharedCredentialsFiles" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedCredentialsFiles"></a>

```typescript
public readonly sharedCredentialsFiles: string[];
```

- *Type:* string[]

List of paths to shared credentials files. If not set, defaults to [~/.aws/credentials].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shared_credentials_files AwsProvider#shared_credentials_files}

---

##### `skipCredentialsValidation`<sup>Optional</sup> <a name="skipCredentialsValidation" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.skipCredentialsValidation"></a>

```typescript
public readonly skipCredentialsValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_credentials_validation AwsProvider#skip_credentials_validation}

---

##### `skipGetEc2Platforms`<sup>Optional</sup> <a name="skipGetEc2Platforms" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.skipGetEc2Platforms"></a>

```typescript
public readonly skipGetEc2Platforms: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_get_ec2_platforms AwsProvider#skip_get_ec2_platforms}

---

##### `skipMetadataApiCheck`<sup>Optional</sup> <a name="skipMetadataApiCheck" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.skipMetadataApiCheck"></a>

```typescript
public readonly skipMetadataApiCheck: string;
```

- *Type:* string

Skip the AWS Metadata API check. Used for AWS API implementations that do not have a metadata api endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_metadata_api_check AwsProvider#skip_metadata_api_check}

---

##### `skipRegionValidation`<sup>Optional</sup> <a name="skipRegionValidation" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.skipRegionValidation"></a>

```typescript
public readonly skipRegionValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Skip static validation of region name.

Used by users of alternative AWS-like APIs or users w/ access to regions that are not public (yet).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_region_validation AwsProvider#skip_region_validation}

---

##### `skipRequestingAccountId`<sup>Optional</sup> <a name="skipRequestingAccountId" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.skipRequestingAccountId"></a>

```typescript
public readonly skipRequestingAccountId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_requesting_account_id AwsProvider#skip_requesting_account_id}

---

##### `stsRegion`<sup>Optional</sup> <a name="stsRegion" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.stsRegion"></a>

```typescript
public readonly stsRegion: string;
```

- *Type:* string

The region where AWS STS operations will take place. Examples are us-east-1 and us-west-2.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sts_region AwsProvider#sts_region}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

session token. A session token is only required if you are using temporary security credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#token AwsProvider#token}

---

##### `useDualstackEndpoint`<sup>Optional</sup> <a name="useDualstackEndpoint" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.useDualstackEndpoint"></a>

```typescript
public readonly useDualstackEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Resolve an endpoint with DualStack capability.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#use_dualstack_endpoint AwsProvider#use_dualstack_endpoint}

---

##### `useFipsEndpoint`<sup>Optional</sup> <a name="useFipsEndpoint" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.useFipsEndpoint"></a>

```typescript
public readonly useFipsEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Resolve an endpoint with FIPS capability.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#use_fips_endpoint AwsProvider#use_fips_endpoint}

---

### AwsProviderDefaultTags <a name="AwsProviderDefaultTags" id="@cdktf/provider-aws.provider.AwsProviderDefaultTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderDefaultTags.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-aws'

const awsProviderDefaultTags: provider.AwsProviderDefaultTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Resource tags to default across all resources. |

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.provider.AwsProviderDefaultTags.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource tags to default across all resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#tags AwsProvider#tags}

---

### AwsProviderEndpoints <a name="AwsProviderEndpoints" id="@cdktf/provider-aws.provider.AwsProviderEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-aws'

const awsProviderEndpoints: provider.AwsProviderEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.accessanalyzer">accessanalyzer</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.account">account</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.acm">acm</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.acmpca">acmpca</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.alexaforbusiness">alexaforbusiness</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amg">amg</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amp">amp</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplify">amplify</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplifybackend">amplifybackend</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplifyuibuilder">amplifyuibuilder</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigateway">apigateway</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigatewaymanagementapi">apigatewaymanagementapi</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigatewayv2">apigatewayv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appautoscaling">appautoscaling</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appconfig">appconfig</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appconfigdata">appconfigdata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appflow">appflow</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appintegrations">appintegrations</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appintegrationsservice">appintegrationsservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationautoscaling">applicationautoscaling</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationcostprofiler">applicationcostprofiler</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationdiscovery">applicationdiscovery</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationdiscoveryservice">applicationdiscoveryservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationinsights">applicationinsights</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appmesh">appmesh</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appregistry">appregistry</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apprunner">apprunner</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appstream">appstream</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appsync">appsync</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.athena">athena</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.auditmanager">auditmanager</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.augmentedairuntime">augmentedairuntime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.autoscaling">autoscaling</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.autoscalingplans">autoscalingplans</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.backup">backup</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.backupgateway">backupgateway</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.batch">batch</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.beanstalk">beanstalk</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.billingconductor">billingconductor</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.braket">braket</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.budgets">budgets</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ce">ce</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chime">chime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkidentity">chimesdkidentity</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkmeetings">chimesdkmeetings</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkmessaging">chimesdkmessaging</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloud9">cloud9</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudcontrol">cloudcontrol</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudcontrolapi">cloudcontrolapi</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.clouddirectory">clouddirectory</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudformation">cloudformation</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudfront">cloudfront</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudhsm">cloudhsm</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudhsmv2">cloudhsmv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudsearch">cloudsearch</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudsearchdomain">cloudsearchdomain</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudtrail">cloudtrail</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatch">cloudwatch</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchevents">cloudwatchevents</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchevidently">cloudwatchevidently</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchlog">cloudwatchlog</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchlogs">cloudwatchlogs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchobservabilityaccessmanager">cloudwatchobservabilityaccessmanager</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchrum">cloudwatchrum</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codeartifact">codeartifact</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codebuild">codebuild</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codecommit">codecommit</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codedeploy">codedeploy</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codeguruprofiler">codeguruprofiler</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codegurureviewer">codegurureviewer</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codepipeline">codepipeline</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestar">codestar</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestarconnections">codestarconnections</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestarnotifications">codestarnotifications</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidentity">cognitoidentity</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidentityprovider">cognitoidentityprovider</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidp">cognitoidp</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitosync">cognitosync</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.comprehend">comprehend</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.comprehendmedical">comprehendmedical</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.computeoptimizer">computeoptimizer</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.config">config</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.configservice">configservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connect">connect</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectcontactlens">connectcontactlens</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectparticipant">connectparticipant</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectwisdomservice">connectwisdomservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.controltower">controltower</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.costandusagereportservice">costandusagereportservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.costexplorer">costexplorer</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cur">cur</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.customerprofiles">customerprofiles</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databasemigration">databasemigration</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databasemigrationservice">databasemigrationservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databrew">databrew</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dataexchange">dataexchange</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.datapipeline">datapipeline</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.datasync">datasync</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dax">dax</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.deploy">deploy</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.detective">detective</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.devicefarm">devicefarm</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.devopsguru">devopsguru</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.directconnect">directconnect</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.directoryservice">directoryservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.discovery">discovery</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dlm">dlm</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dms">dms</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.docdb">docdb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.drs">drs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ds">ds</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dynamodb">dynamodb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dynamodbstreams">dynamodbstreams</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ebs">ebs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ec2">ec2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ec2Instanceconnect">ec2Instanceconnect</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecr">ecr</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecrpublic">ecrpublic</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecs">ecs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.efs">efs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.eks">eks</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticache">elasticache</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticbeanstalk">elasticbeanstalk</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticinference">elasticinference</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticloadbalancing">elasticloadbalancing</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticloadbalancingv2">elasticloadbalancingv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticsearch">elasticsearch</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticsearchservice">elasticsearchservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elastictranscoder">elastictranscoder</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elb">elb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elbv2">elbv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emr">emr</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emrcontainers">emrcontainers</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emrserverless">emrserverless</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.es">es</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.eventbridge">eventbridge</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.events">events</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.evidently">evidently</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.finspace">finspace</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.finspacedata">finspacedata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.firehose">firehose</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fis">fis</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fms">fms</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecast">forecast</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastquery">forecastquery</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastqueryservice">forecastqueryservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastservice">forecastservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.frauddetector">frauddetector</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fsx">fsx</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.gamelift">gamelift</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.glacier">glacier</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.globalaccelerator">globalaccelerator</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.glue">glue</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.gluedatabrew">gluedatabrew</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.grafana">grafana</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.greengrass">greengrass</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.greengrassv2">greengrassv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.groundstation">groundstation</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.guardduty">guardduty</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.health">health</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.healthlake">healthlake</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.honeycode">honeycode</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iam">iam</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.identitystore">identitystore</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.imagebuilder">imagebuilder</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspector">inspector</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspector2">inspector2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspectorv2">inspectorv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot">iot</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickdevices">iot1Clickdevices</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickdevicesservice">iot1Clickdevicesservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickprojects">iot1Clickprojects</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotanalytics">iotanalytics</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdata">iotdata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdataplane">iotdataplane</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdeviceadvisor">iotdeviceadvisor</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotevents">iotevents</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ioteventsdata">ioteventsdata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotfleethub">iotfleethub</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotjobsdata">iotjobsdata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotjobsdataplane">iotjobsdataplane</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotsecuretunneling">iotsecuretunneling</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotsitewise">iotsitewise</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotthingsgraph">iotthingsgraph</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iottwinmaker">iottwinmaker</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotwireless">iotwireless</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ivs">ivs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ivschat">ivschat</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kafka">kafka</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kafkaconnect">kafkaconnect</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kendra">kendra</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.keyspaces">keyspaces</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesis">kinesis</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisanalytics">kinesisanalytics</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisanalyticsv2">kinesisanalyticsv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideo">kinesisvideo</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideoarchivedmedia">kinesisvideoarchivedmedia</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideomedia">kinesisvideomedia</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideosignaling">kinesisvideosignaling</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideosignalingchannels">kinesisvideosignalingchannels</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kms">kms</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lakeformation">lakeformation</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lambda">lambda</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lex">lex</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelbuilding">lexmodelbuilding</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelbuildingservice">lexmodelbuildingservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodels">lexmodels</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelsv2">lexmodelsv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntime">lexruntime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntimeservice">lexruntimeservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntimev2">lexruntimev2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexv2Models">lexv2Models</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexv2Runtime">lexv2Runtime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.licensemanager">licensemanager</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lightsail">lightsail</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.location">location</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.locationservice">locationservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.logs">logs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutequipment">lookoutequipment</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutforvision">lookoutforvision</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutmetrics">lookoutmetrics</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutvision">lookoutvision</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.machinelearning">machinelearning</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.macie">macie</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.macie2">macie2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.managedblockchain">managedblockchain</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.managedgrafana">managedgrafana</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacecatalog">marketplacecatalog</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacecommerceanalytics">marketplacecommerceanalytics</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplaceentitlement">marketplaceentitlement</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplaceentitlementservice">marketplaceentitlementservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacemetering">marketplacemetering</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediaconnect">mediaconnect</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediaconvert">mediaconvert</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.medialive">medialive</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediapackage">mediapackage</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediapackagevod">mediapackagevod</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediastore">mediastore</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediastoredata">mediastoredata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediatailor">mediatailor</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.memorydb">memorydb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.meteringmarketplace">meteringmarketplace</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mgh">mgh</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mgn">mgn</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhub">migrationhub</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubconfig">migrationhubconfig</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubrefactorspaces">migrationhubrefactorspaces</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubstrategy">migrationhubstrategy</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubstrategyrecommendations">migrationhubstrategyrecommendations</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mobile">mobile</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mq">mq</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.msk">msk</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mturk">mturk</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mwaa">mwaa</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.neptune">neptune</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.networkfirewall">networkfirewall</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.networkmanager">networkmanager</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.nimble">nimble</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.nimblestudio">nimblestudio</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.oam">oam</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearch">opensearch</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearchserverless">opensearchserverless</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearchservice">opensearchservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opsworks">opsworks</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opsworkscm">opsworkscm</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.organizations">organizations</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.outposts">outposts</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.panorama">panorama</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalize">personalize</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalizeevents">personalizeevents</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalizeruntime">personalizeruntime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pi">pi</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpoint">pinpoint</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpointemail">pinpointemail</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpointsmsvoice">pinpointsmsvoice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pipes">pipes</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.polly">polly</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pricing">pricing</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.prometheus">prometheus</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.prometheusservice">prometheusservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.proton">proton</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.qldb">qldb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.qldbsession">qldbsession</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.quicksight">quicksight</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ram">ram</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rbin">rbin</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rds">rds</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rdsdata">rdsdata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rdsdataservice">rdsdataservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.recyclebin">recyclebin</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshift">redshift</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftdata">redshiftdata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftdataapiservice">redshiftdataapiservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftserverless">redshiftserverless</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rekognition">rekognition</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resiliencehub">resiliencehub</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourceexplorer2">resourceexplorer2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroups">resourcegroups</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroupstagging">resourcegroupstagging</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroupstaggingapi">resourcegroupstaggingapi</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.robomaker">robomaker</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rolesanywhere">rolesanywhere</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53">route53</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Domains">route53Domains</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoverycluster">route53Recoverycluster</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoverycontrolconfig">route53Recoverycontrolconfig</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoveryreadiness">route53Recoveryreadiness</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Resolver">route53Resolver</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rum">rum</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3">s3</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Api">s3Api</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Control">s3Control</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Outposts">s3Outposts</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemaker">sagemaker</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakera2Iruntime">sagemakera2Iruntime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakeredge">sagemakeredge</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakeredgemanager">sagemakeredgemanager</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakerfeaturestoreruntime">sagemakerfeaturestoreruntime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakerruntime">sagemakerruntime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.savingsplans">savingsplans</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.scheduler">scheduler</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.schemas">schemas</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sdb">sdb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.secretsmanager">secretsmanager</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.securityhub">securityhub</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessapplicationrepository">serverlessapplicationrepository</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessapprepo">serverlessapprepo</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessrepo">serverlessrepo</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicecatalog">servicecatalog</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicecatalogappregistry">servicecatalogappregistry</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicediscovery">servicediscovery</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicequotas">servicequotas</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ses">ses</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sesv2">sesv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sfn">sfn</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.shield">shield</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.signer">signer</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.simpledb">simpledb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sms">sms</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.snowball">snowball</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.snowdevicemanagement">snowdevicemanagement</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sns">sns</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sqs">sqs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssm">ssm</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssmcontacts">ssmcontacts</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssmincidents">ssmincidents</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sso">sso</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssoadmin">ssoadmin</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssooidc">ssooidc</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.stepfunctions">stepfunctions</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.storagegateway">storagegateway</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sts">sts</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.support">support</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.swf">swf</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.synthetics">synthetics</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.textract">textract</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.timestreamquery">timestreamquery</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.timestreamwrite">timestreamwrite</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribe">transcribe</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribeservice">transcribeservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribestreaming">transcribestreaming</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribestreamingservice">transcribestreamingservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transfer">transfer</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.translate">translate</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.voiceid">voiceid</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.waf">waf</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wafregional">wafregional</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wafv2">wafv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wellarchitected">wellarchitected</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wisdom">wisdom</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workdocs">workdocs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.worklink">worklink</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workmail">workmail</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workmailmessageflow">workmailmessageflow</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workspaces">workspaces</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workspacesweb">workspacesweb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.xray">xray</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |

---

##### `accessanalyzer`<sup>Optional</sup> <a name="accessanalyzer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.accessanalyzer"></a>

```typescript
public readonly accessanalyzer: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#accessanalyzer AwsProvider#accessanalyzer}

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#account AwsProvider#account}

---

##### `acm`<sup>Optional</sup> <a name="acm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.acm"></a>

```typescript
public readonly acm: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#acm AwsProvider#acm}

---

##### `acmpca`<sup>Optional</sup> <a name="acmpca" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.acmpca"></a>

```typescript
public readonly acmpca: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#acmpca AwsProvider#acmpca}

---

##### `alexaforbusiness`<sup>Optional</sup> <a name="alexaforbusiness" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.alexaforbusiness"></a>

```typescript
public readonly alexaforbusiness: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#alexaforbusiness AwsProvider#alexaforbusiness}

---

##### `amg`<sup>Optional</sup> <a name="amg" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amg"></a>

```typescript
public readonly amg: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amg AwsProvider#amg}

---

##### `amp`<sup>Optional</sup> <a name="amp" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amp"></a>

```typescript
public readonly amp: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amp AwsProvider#amp}

---

##### `amplify`<sup>Optional</sup> <a name="amplify" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplify"></a>

```typescript
public readonly amplify: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amplify AwsProvider#amplify}

---

##### `amplifybackend`<sup>Optional</sup> <a name="amplifybackend" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplifybackend"></a>

```typescript
public readonly amplifybackend: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amplifybackend AwsProvider#amplifybackend}

---

##### `amplifyuibuilder`<sup>Optional</sup> <a name="amplifyuibuilder" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplifyuibuilder"></a>

```typescript
public readonly amplifyuibuilder: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amplifyuibuilder AwsProvider#amplifyuibuilder}

---

##### `apigateway`<sup>Optional</sup> <a name="apigateway" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigateway"></a>

```typescript
public readonly apigateway: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#apigateway AwsProvider#apigateway}

---

##### `apigatewaymanagementapi`<sup>Optional</sup> <a name="apigatewaymanagementapi" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigatewaymanagementapi"></a>

```typescript
public readonly apigatewaymanagementapi: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#apigatewaymanagementapi AwsProvider#apigatewaymanagementapi}

---

##### `apigatewayv2`<sup>Optional</sup> <a name="apigatewayv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigatewayv2"></a>

```typescript
public readonly apigatewayv2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#apigatewayv2 AwsProvider#apigatewayv2}

---

##### `appautoscaling`<sup>Optional</sup> <a name="appautoscaling" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appautoscaling"></a>

```typescript
public readonly appautoscaling: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appautoscaling AwsProvider#appautoscaling}

---

##### `appconfig`<sup>Optional</sup> <a name="appconfig" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appconfig"></a>

```typescript
public readonly appconfig: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appconfig AwsProvider#appconfig}

---

##### `appconfigdata`<sup>Optional</sup> <a name="appconfigdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appconfigdata"></a>

```typescript
public readonly appconfigdata: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appconfigdata AwsProvider#appconfigdata}

---

##### `appflow`<sup>Optional</sup> <a name="appflow" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appflow"></a>

```typescript
public readonly appflow: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appflow AwsProvider#appflow}

---

##### `appintegrations`<sup>Optional</sup> <a name="appintegrations" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appintegrations"></a>

```typescript
public readonly appintegrations: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appintegrations AwsProvider#appintegrations}

---

##### `appintegrationsservice`<sup>Optional</sup> <a name="appintegrationsservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appintegrationsservice"></a>

```typescript
public readonly appintegrationsservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appintegrationsservice AwsProvider#appintegrationsservice}

---

##### `applicationautoscaling`<sup>Optional</sup> <a name="applicationautoscaling" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationautoscaling"></a>

```typescript
public readonly applicationautoscaling: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationautoscaling AwsProvider#applicationautoscaling}

---

##### `applicationcostprofiler`<sup>Optional</sup> <a name="applicationcostprofiler" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationcostprofiler"></a>

```typescript
public readonly applicationcostprofiler: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationcostprofiler AwsProvider#applicationcostprofiler}

---

##### `applicationdiscovery`<sup>Optional</sup> <a name="applicationdiscovery" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationdiscovery"></a>

```typescript
public readonly applicationdiscovery: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationdiscovery AwsProvider#applicationdiscovery}

---

##### `applicationdiscoveryservice`<sup>Optional</sup> <a name="applicationdiscoveryservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationdiscoveryservice"></a>

```typescript
public readonly applicationdiscoveryservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationdiscoveryservice AwsProvider#applicationdiscoveryservice}

---

##### `applicationinsights`<sup>Optional</sup> <a name="applicationinsights" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationinsights"></a>

```typescript
public readonly applicationinsights: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationinsights AwsProvider#applicationinsights}

---

##### `appmesh`<sup>Optional</sup> <a name="appmesh" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appmesh"></a>

```typescript
public readonly appmesh: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appmesh AwsProvider#appmesh}

---

##### `appregistry`<sup>Optional</sup> <a name="appregistry" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appregistry"></a>

```typescript
public readonly appregistry: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appregistry AwsProvider#appregistry}

---

##### `apprunner`<sup>Optional</sup> <a name="apprunner" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apprunner"></a>

```typescript
public readonly apprunner: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#apprunner AwsProvider#apprunner}

---

##### `appstream`<sup>Optional</sup> <a name="appstream" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appstream"></a>

```typescript
public readonly appstream: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appstream AwsProvider#appstream}

---

##### `appsync`<sup>Optional</sup> <a name="appsync" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appsync"></a>

```typescript
public readonly appsync: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appsync AwsProvider#appsync}

---

##### `athena`<sup>Optional</sup> <a name="athena" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.athena"></a>

```typescript
public readonly athena: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#athena AwsProvider#athena}

---

##### `auditmanager`<sup>Optional</sup> <a name="auditmanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.auditmanager"></a>

```typescript
public readonly auditmanager: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#auditmanager AwsProvider#auditmanager}

---

##### `augmentedairuntime`<sup>Optional</sup> <a name="augmentedairuntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.augmentedairuntime"></a>

```typescript
public readonly augmentedairuntime: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#augmentedairuntime AwsProvider#augmentedairuntime}

---

##### `autoscaling`<sup>Optional</sup> <a name="autoscaling" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.autoscaling"></a>

```typescript
public readonly autoscaling: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#autoscaling AwsProvider#autoscaling}

---

##### `autoscalingplans`<sup>Optional</sup> <a name="autoscalingplans" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.autoscalingplans"></a>

```typescript
public readonly autoscalingplans: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#autoscalingplans AwsProvider#autoscalingplans}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.backup"></a>

```typescript
public readonly backup: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#backup AwsProvider#backup}

---

##### `backupgateway`<sup>Optional</sup> <a name="backupgateway" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.backupgateway"></a>

```typescript
public readonly backupgateway: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#backupgateway AwsProvider#backupgateway}

---

##### `batch`<sup>Optional</sup> <a name="batch" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.batch"></a>

```typescript
public readonly batch: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#batch AwsProvider#batch}

---

##### `beanstalk`<sup>Optional</sup> <a name="beanstalk" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.beanstalk"></a>

```typescript
public readonly beanstalk: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#beanstalk AwsProvider#beanstalk}

---

##### `billingconductor`<sup>Optional</sup> <a name="billingconductor" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.billingconductor"></a>

```typescript
public readonly billingconductor: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#billingconductor AwsProvider#billingconductor}

---

##### `braket`<sup>Optional</sup> <a name="braket" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.braket"></a>

```typescript
public readonly braket: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#braket AwsProvider#braket}

---

##### `budgets`<sup>Optional</sup> <a name="budgets" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.budgets"></a>

```typescript
public readonly budgets: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#budgets AwsProvider#budgets}

---

##### `ce`<sup>Optional</sup> <a name="ce" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ce"></a>

```typescript
public readonly ce: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ce AwsProvider#ce}

---

##### `chime`<sup>Optional</sup> <a name="chime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chime"></a>

```typescript
public readonly chime: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#chime AwsProvider#chime}

---

##### `chimesdkidentity`<sup>Optional</sup> <a name="chimesdkidentity" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkidentity"></a>

```typescript
public readonly chimesdkidentity: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#chimesdkidentity AwsProvider#chimesdkidentity}

---

##### `chimesdkmeetings`<sup>Optional</sup> <a name="chimesdkmeetings" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkmeetings"></a>

```typescript
public readonly chimesdkmeetings: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#chimesdkmeetings AwsProvider#chimesdkmeetings}

---

##### `chimesdkmessaging`<sup>Optional</sup> <a name="chimesdkmessaging" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkmessaging"></a>

```typescript
public readonly chimesdkmessaging: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#chimesdkmessaging AwsProvider#chimesdkmessaging}

---

##### `cloud9`<sup>Optional</sup> <a name="cloud9" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloud9"></a>

```typescript
public readonly cloud9: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloud9 AwsProvider#cloud9}

---

##### `cloudcontrol`<sup>Optional</sup> <a name="cloudcontrol" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudcontrol"></a>

```typescript
public readonly cloudcontrol: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudcontrol AwsProvider#cloudcontrol}

---

##### `cloudcontrolapi`<sup>Optional</sup> <a name="cloudcontrolapi" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudcontrolapi"></a>

```typescript
public readonly cloudcontrolapi: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudcontrolapi AwsProvider#cloudcontrolapi}

---

##### `clouddirectory`<sup>Optional</sup> <a name="clouddirectory" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.clouddirectory"></a>

```typescript
public readonly clouddirectory: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#clouddirectory AwsProvider#clouddirectory}

---

##### `cloudformation`<sup>Optional</sup> <a name="cloudformation" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudformation"></a>

```typescript
public readonly cloudformation: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudformation AwsProvider#cloudformation}

---

##### `cloudfront`<sup>Optional</sup> <a name="cloudfront" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudfront"></a>

```typescript
public readonly cloudfront: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudfront AwsProvider#cloudfront}

---

##### `cloudhsm`<sup>Optional</sup> <a name="cloudhsm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudhsm"></a>

```typescript
public readonly cloudhsm: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudhsm AwsProvider#cloudhsm}

---

##### `cloudhsmv2`<sup>Optional</sup> <a name="cloudhsmv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudhsmv2"></a>

```typescript
public readonly cloudhsmv2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudhsmv2 AwsProvider#cloudhsmv2}

---

##### `cloudsearch`<sup>Optional</sup> <a name="cloudsearch" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudsearch"></a>

```typescript
public readonly cloudsearch: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudsearch AwsProvider#cloudsearch}

---

##### `cloudsearchdomain`<sup>Optional</sup> <a name="cloudsearchdomain" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudsearchdomain"></a>

```typescript
public readonly cloudsearchdomain: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudsearchdomain AwsProvider#cloudsearchdomain}

---

##### `cloudtrail`<sup>Optional</sup> <a name="cloudtrail" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudtrail"></a>

```typescript
public readonly cloudtrail: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudtrail AwsProvider#cloudtrail}

---

##### `cloudwatch`<sup>Optional</sup> <a name="cloudwatch" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatch"></a>

```typescript
public readonly cloudwatch: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatch AwsProvider#cloudwatch}

---

##### `cloudwatchevents`<sup>Optional</sup> <a name="cloudwatchevents" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchevents"></a>

```typescript
public readonly cloudwatchevents: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchevents AwsProvider#cloudwatchevents}

---

##### `cloudwatchevidently`<sup>Optional</sup> <a name="cloudwatchevidently" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchevidently"></a>

```typescript
public readonly cloudwatchevidently: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchevidently AwsProvider#cloudwatchevidently}

---

##### `cloudwatchlog`<sup>Optional</sup> <a name="cloudwatchlog" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchlog"></a>

```typescript
public readonly cloudwatchlog: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchlog AwsProvider#cloudwatchlog}

---

##### `cloudwatchlogs`<sup>Optional</sup> <a name="cloudwatchlogs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchlogs"></a>

```typescript
public readonly cloudwatchlogs: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchlogs AwsProvider#cloudwatchlogs}

---

##### `cloudwatchobservabilityaccessmanager`<sup>Optional</sup> <a name="cloudwatchobservabilityaccessmanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchobservabilityaccessmanager"></a>

```typescript
public readonly cloudwatchobservabilityaccessmanager: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchobservabilityaccessmanager AwsProvider#cloudwatchobservabilityaccessmanager}

---

##### `cloudwatchrum`<sup>Optional</sup> <a name="cloudwatchrum" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchrum"></a>

```typescript
public readonly cloudwatchrum: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchrum AwsProvider#cloudwatchrum}

---

##### `codeartifact`<sup>Optional</sup> <a name="codeartifact" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codeartifact"></a>

```typescript
public readonly codeartifact: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codeartifact AwsProvider#codeartifact}

---

##### `codebuild`<sup>Optional</sup> <a name="codebuild" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codebuild"></a>

```typescript
public readonly codebuild: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codebuild AwsProvider#codebuild}

---

##### `codecommit`<sup>Optional</sup> <a name="codecommit" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codecommit"></a>

```typescript
public readonly codecommit: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codecommit AwsProvider#codecommit}

---

##### `codedeploy`<sup>Optional</sup> <a name="codedeploy" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codedeploy"></a>

```typescript
public readonly codedeploy: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codedeploy AwsProvider#codedeploy}

---

##### `codeguruprofiler`<sup>Optional</sup> <a name="codeguruprofiler" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codeguruprofiler"></a>

```typescript
public readonly codeguruprofiler: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codeguruprofiler AwsProvider#codeguruprofiler}

---

##### `codegurureviewer`<sup>Optional</sup> <a name="codegurureviewer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codegurureviewer"></a>

```typescript
public readonly codegurureviewer: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codegurureviewer AwsProvider#codegurureviewer}

---

##### `codepipeline`<sup>Optional</sup> <a name="codepipeline" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codepipeline"></a>

```typescript
public readonly codepipeline: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codepipeline AwsProvider#codepipeline}

---

##### `codestar`<sup>Optional</sup> <a name="codestar" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestar"></a>

```typescript
public readonly codestar: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codestar AwsProvider#codestar}

---

##### `codestarconnections`<sup>Optional</sup> <a name="codestarconnections" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestarconnections"></a>

```typescript
public readonly codestarconnections: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codestarconnections AwsProvider#codestarconnections}

---

##### `codestarnotifications`<sup>Optional</sup> <a name="codestarnotifications" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestarnotifications"></a>

```typescript
public readonly codestarnotifications: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codestarnotifications AwsProvider#codestarnotifications}

---

##### `cognitoidentity`<sup>Optional</sup> <a name="cognitoidentity" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidentity"></a>

```typescript
public readonly cognitoidentity: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cognitoidentity AwsProvider#cognitoidentity}

---

##### `cognitoidentityprovider`<sup>Optional</sup> <a name="cognitoidentityprovider" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidentityprovider"></a>

```typescript
public readonly cognitoidentityprovider: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cognitoidentityprovider AwsProvider#cognitoidentityprovider}

---

##### `cognitoidp`<sup>Optional</sup> <a name="cognitoidp" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidp"></a>

```typescript
public readonly cognitoidp: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cognitoidp AwsProvider#cognitoidp}

---

##### `cognitosync`<sup>Optional</sup> <a name="cognitosync" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitosync"></a>

```typescript
public readonly cognitosync: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cognitosync AwsProvider#cognitosync}

---

##### `comprehend`<sup>Optional</sup> <a name="comprehend" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.comprehend"></a>

```typescript
public readonly comprehend: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#comprehend AwsProvider#comprehend}

---

##### `comprehendmedical`<sup>Optional</sup> <a name="comprehendmedical" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.comprehendmedical"></a>

```typescript
public readonly comprehendmedical: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#comprehendmedical AwsProvider#comprehendmedical}

---

##### `computeoptimizer`<sup>Optional</sup> <a name="computeoptimizer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.computeoptimizer"></a>

```typescript
public readonly computeoptimizer: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#computeoptimizer AwsProvider#computeoptimizer}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#config AwsProvider#config}

---

##### `configservice`<sup>Optional</sup> <a name="configservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.configservice"></a>

```typescript
public readonly configservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#configservice AwsProvider#configservice}

---

##### `connect`<sup>Optional</sup> <a name="connect" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connect"></a>

```typescript
public readonly connect: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#connect AwsProvider#connect}

---

##### `connectcontactlens`<sup>Optional</sup> <a name="connectcontactlens" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectcontactlens"></a>

```typescript
public readonly connectcontactlens: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#connectcontactlens AwsProvider#connectcontactlens}

---

##### `connectparticipant`<sup>Optional</sup> <a name="connectparticipant" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectparticipant"></a>

```typescript
public readonly connectparticipant: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#connectparticipant AwsProvider#connectparticipant}

---

##### `connectwisdomservice`<sup>Optional</sup> <a name="connectwisdomservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectwisdomservice"></a>

```typescript
public readonly connectwisdomservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#connectwisdomservice AwsProvider#connectwisdomservice}

---

##### `controltower`<sup>Optional</sup> <a name="controltower" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.controltower"></a>

```typescript
public readonly controltower: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#controltower AwsProvider#controltower}

---

##### `costandusagereportservice`<sup>Optional</sup> <a name="costandusagereportservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.costandusagereportservice"></a>

```typescript
public readonly costandusagereportservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#costandusagereportservice AwsProvider#costandusagereportservice}

---

##### `costexplorer`<sup>Optional</sup> <a name="costexplorer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.costexplorer"></a>

```typescript
public readonly costexplorer: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#costexplorer AwsProvider#costexplorer}

---

##### `cur`<sup>Optional</sup> <a name="cur" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cur"></a>

```typescript
public readonly cur: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cur AwsProvider#cur}

---

##### `customerprofiles`<sup>Optional</sup> <a name="customerprofiles" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.customerprofiles"></a>

```typescript
public readonly customerprofiles: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#customerprofiles AwsProvider#customerprofiles}

---

##### `databasemigration`<sup>Optional</sup> <a name="databasemigration" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databasemigration"></a>

```typescript
public readonly databasemigration: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#databasemigration AwsProvider#databasemigration}

---

##### `databasemigrationservice`<sup>Optional</sup> <a name="databasemigrationservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databasemigrationservice"></a>

```typescript
public readonly databasemigrationservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#databasemigrationservice AwsProvider#databasemigrationservice}

---

##### `databrew`<sup>Optional</sup> <a name="databrew" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databrew"></a>

```typescript
public readonly databrew: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#databrew AwsProvider#databrew}

---

##### `dataexchange`<sup>Optional</sup> <a name="dataexchange" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dataexchange"></a>

```typescript
public readonly dataexchange: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dataexchange AwsProvider#dataexchange}

---

##### `datapipeline`<sup>Optional</sup> <a name="datapipeline" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.datapipeline"></a>

```typescript
public readonly datapipeline: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#datapipeline AwsProvider#datapipeline}

---

##### `datasync`<sup>Optional</sup> <a name="datasync" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.datasync"></a>

```typescript
public readonly datasync: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#datasync AwsProvider#datasync}

---

##### `dax`<sup>Optional</sup> <a name="dax" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dax"></a>

```typescript
public readonly dax: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dax AwsProvider#dax}

---

##### `deploy`<sup>Optional</sup> <a name="deploy" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.deploy"></a>

```typescript
public readonly deploy: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#deploy AwsProvider#deploy}

---

##### `detective`<sup>Optional</sup> <a name="detective" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.detective"></a>

```typescript
public readonly detective: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#detective AwsProvider#detective}

---

##### `devicefarm`<sup>Optional</sup> <a name="devicefarm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.devicefarm"></a>

```typescript
public readonly devicefarm: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#devicefarm AwsProvider#devicefarm}

---

##### `devopsguru`<sup>Optional</sup> <a name="devopsguru" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.devopsguru"></a>

```typescript
public readonly devopsguru: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#devopsguru AwsProvider#devopsguru}

---

##### `directconnect`<sup>Optional</sup> <a name="directconnect" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.directconnect"></a>

```typescript
public readonly directconnect: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#directconnect AwsProvider#directconnect}

---

##### `directoryservice`<sup>Optional</sup> <a name="directoryservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.directoryservice"></a>

```typescript
public readonly directoryservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#directoryservice AwsProvider#directoryservice}

---

##### `discovery`<sup>Optional</sup> <a name="discovery" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.discovery"></a>

```typescript
public readonly discovery: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#discovery AwsProvider#discovery}

---

##### `dlm`<sup>Optional</sup> <a name="dlm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dlm"></a>

```typescript
public readonly dlm: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dlm AwsProvider#dlm}

---

##### `dms`<sup>Optional</sup> <a name="dms" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dms"></a>

```typescript
public readonly dms: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dms AwsProvider#dms}

---

##### `docdb`<sup>Optional</sup> <a name="docdb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.docdb"></a>

```typescript
public readonly docdb: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#docdb AwsProvider#docdb}

---

##### `drs`<sup>Optional</sup> <a name="drs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.drs"></a>

```typescript
public readonly drs: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#drs AwsProvider#drs}

---

##### `ds`<sup>Optional</sup> <a name="ds" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ds"></a>

```typescript
public readonly ds: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ds AwsProvider#ds}

---

##### `dynamodb`<sup>Optional</sup> <a name="dynamodb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dynamodb"></a>

```typescript
public readonly dynamodb: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dynamodb AwsProvider#dynamodb}

---

##### `dynamodbstreams`<sup>Optional</sup> <a name="dynamodbstreams" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dynamodbstreams"></a>

```typescript
public readonly dynamodbstreams: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dynamodbstreams AwsProvider#dynamodbstreams}

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ebs"></a>

```typescript
public readonly ebs: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ebs AwsProvider#ebs}

---

##### `ec2`<sup>Optional</sup> <a name="ec2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ec2"></a>

```typescript
public readonly ec2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2 AwsProvider#ec2}

---

##### `ec2Instanceconnect`<sup>Optional</sup> <a name="ec2Instanceconnect" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ec2Instanceconnect"></a>

```typescript
public readonly ec2Instanceconnect: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2instanceconnect AwsProvider#ec2instanceconnect}

---

##### `ecr`<sup>Optional</sup> <a name="ecr" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecr"></a>

```typescript
public readonly ecr: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ecr AwsProvider#ecr}

---

##### `ecrpublic`<sup>Optional</sup> <a name="ecrpublic" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecrpublic"></a>

```typescript
public readonly ecrpublic: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ecrpublic AwsProvider#ecrpublic}

---

##### `ecs`<sup>Optional</sup> <a name="ecs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecs"></a>

```typescript
public readonly ecs: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ecs AwsProvider#ecs}

---

##### `efs`<sup>Optional</sup> <a name="efs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.efs"></a>

```typescript
public readonly efs: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#efs AwsProvider#efs}

---

##### `eks`<sup>Optional</sup> <a name="eks" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.eks"></a>

```typescript
public readonly eks: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#eks AwsProvider#eks}

---

##### `elasticache`<sup>Optional</sup> <a name="elasticache" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticache"></a>

```typescript
public readonly elasticache: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticache AwsProvider#elasticache}

---

##### `elasticbeanstalk`<sup>Optional</sup> <a name="elasticbeanstalk" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticbeanstalk"></a>

```typescript
public readonly elasticbeanstalk: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticbeanstalk AwsProvider#elasticbeanstalk}

---

##### `elasticinference`<sup>Optional</sup> <a name="elasticinference" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticinference"></a>

```typescript
public readonly elasticinference: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticinference AwsProvider#elasticinference}

---

##### `elasticloadbalancing`<sup>Optional</sup> <a name="elasticloadbalancing" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticloadbalancing"></a>

```typescript
public readonly elasticloadbalancing: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticloadbalancing AwsProvider#elasticloadbalancing}

---

##### `elasticloadbalancingv2`<sup>Optional</sup> <a name="elasticloadbalancingv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticloadbalancingv2"></a>

```typescript
public readonly elasticloadbalancingv2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticloadbalancingv2 AwsProvider#elasticloadbalancingv2}

---

##### `elasticsearch`<sup>Optional</sup> <a name="elasticsearch" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticsearch"></a>

```typescript
public readonly elasticsearch: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticsearch AwsProvider#elasticsearch}

---

##### `elasticsearchservice`<sup>Optional</sup> <a name="elasticsearchservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticsearchservice"></a>

```typescript
public readonly elasticsearchservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticsearchservice AwsProvider#elasticsearchservice}

---

##### `elastictranscoder`<sup>Optional</sup> <a name="elastictranscoder" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elastictranscoder"></a>

```typescript
public readonly elastictranscoder: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elastictranscoder AwsProvider#elastictranscoder}

---

##### `elb`<sup>Optional</sup> <a name="elb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elb"></a>

```typescript
public readonly elb: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elb AwsProvider#elb}

---

##### `elbv2`<sup>Optional</sup> <a name="elbv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elbv2"></a>

```typescript
public readonly elbv2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elbv2 AwsProvider#elbv2}

---

##### `emr`<sup>Optional</sup> <a name="emr" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emr"></a>

```typescript
public readonly emr: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#emr AwsProvider#emr}

---

##### `emrcontainers`<sup>Optional</sup> <a name="emrcontainers" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emrcontainers"></a>

```typescript
public readonly emrcontainers: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#emrcontainers AwsProvider#emrcontainers}

---

##### `emrserverless`<sup>Optional</sup> <a name="emrserverless" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emrserverless"></a>

```typescript
public readonly emrserverless: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#emrserverless AwsProvider#emrserverless}

---

##### `es`<sup>Optional</sup> <a name="es" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.es"></a>

```typescript
public readonly es: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#es AwsProvider#es}

---

##### `eventbridge`<sup>Optional</sup> <a name="eventbridge" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.eventbridge"></a>

```typescript
public readonly eventbridge: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#eventbridge AwsProvider#eventbridge}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.events"></a>

```typescript
public readonly events: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#events AwsProvider#events}

---

##### `evidently`<sup>Optional</sup> <a name="evidently" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.evidently"></a>

```typescript
public readonly evidently: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#evidently AwsProvider#evidently}

---

##### `finspace`<sup>Optional</sup> <a name="finspace" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.finspace"></a>

```typescript
public readonly finspace: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#finspace AwsProvider#finspace}

---

##### `finspacedata`<sup>Optional</sup> <a name="finspacedata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.finspacedata"></a>

```typescript
public readonly finspacedata: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#finspacedata AwsProvider#finspacedata}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.firehose"></a>

```typescript
public readonly firehose: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#firehose AwsProvider#firehose}

---

##### `fis`<sup>Optional</sup> <a name="fis" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fis"></a>

```typescript
public readonly fis: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#fis AwsProvider#fis}

---

##### `fms`<sup>Optional</sup> <a name="fms" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fms"></a>

```typescript
public readonly fms: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#fms AwsProvider#fms}

---

##### `forecast`<sup>Optional</sup> <a name="forecast" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecast"></a>

```typescript
public readonly forecast: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forecast AwsProvider#forecast}

---

##### `forecastquery`<sup>Optional</sup> <a name="forecastquery" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastquery"></a>

```typescript
public readonly forecastquery: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forecastquery AwsProvider#forecastquery}

---

##### `forecastqueryservice`<sup>Optional</sup> <a name="forecastqueryservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastqueryservice"></a>

```typescript
public readonly forecastqueryservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forecastqueryservice AwsProvider#forecastqueryservice}

---

##### `forecastservice`<sup>Optional</sup> <a name="forecastservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastservice"></a>

```typescript
public readonly forecastservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forecastservice AwsProvider#forecastservice}

---

##### `frauddetector`<sup>Optional</sup> <a name="frauddetector" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.frauddetector"></a>

```typescript
public readonly frauddetector: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#frauddetector AwsProvider#frauddetector}

---

##### `fsx`<sup>Optional</sup> <a name="fsx" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fsx"></a>

```typescript
public readonly fsx: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#fsx AwsProvider#fsx}

---

##### `gamelift`<sup>Optional</sup> <a name="gamelift" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.gamelift"></a>

```typescript
public readonly gamelift: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#gamelift AwsProvider#gamelift}

---

##### `glacier`<sup>Optional</sup> <a name="glacier" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.glacier"></a>

```typescript
public readonly glacier: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#glacier AwsProvider#glacier}

---

##### `globalaccelerator`<sup>Optional</sup> <a name="globalaccelerator" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.globalaccelerator"></a>

```typescript
public readonly globalaccelerator: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#globalaccelerator AwsProvider#globalaccelerator}

---

##### `glue`<sup>Optional</sup> <a name="glue" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.glue"></a>

```typescript
public readonly glue: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#glue AwsProvider#glue}

---

##### `gluedatabrew`<sup>Optional</sup> <a name="gluedatabrew" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.gluedatabrew"></a>

```typescript
public readonly gluedatabrew: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#gluedatabrew AwsProvider#gluedatabrew}

---

##### `grafana`<sup>Optional</sup> <a name="grafana" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.grafana"></a>

```typescript
public readonly grafana: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#grafana AwsProvider#grafana}

---

##### `greengrass`<sup>Optional</sup> <a name="greengrass" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.greengrass"></a>

```typescript
public readonly greengrass: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#greengrass AwsProvider#greengrass}

---

##### `greengrassv2`<sup>Optional</sup> <a name="greengrassv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.greengrassv2"></a>

```typescript
public readonly greengrassv2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#greengrassv2 AwsProvider#greengrassv2}

---

##### `groundstation`<sup>Optional</sup> <a name="groundstation" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.groundstation"></a>

```typescript
public readonly groundstation: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#groundstation AwsProvider#groundstation}

---

##### `guardduty`<sup>Optional</sup> <a name="guardduty" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.guardduty"></a>

```typescript
public readonly guardduty: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#guardduty AwsProvider#guardduty}

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.health"></a>

```typescript
public readonly health: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#health AwsProvider#health}

---

##### `healthlake`<sup>Optional</sup> <a name="healthlake" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.healthlake"></a>

```typescript
public readonly healthlake: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#healthlake AwsProvider#healthlake}

---

##### `honeycode`<sup>Optional</sup> <a name="honeycode" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.honeycode"></a>

```typescript
public readonly honeycode: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#honeycode AwsProvider#honeycode}

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iam"></a>

```typescript
public readonly iam: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iam AwsProvider#iam}

---

##### `identitystore`<sup>Optional</sup> <a name="identitystore" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.identitystore"></a>

```typescript
public readonly identitystore: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#identitystore AwsProvider#identitystore}

---

##### `imagebuilder`<sup>Optional</sup> <a name="imagebuilder" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.imagebuilder"></a>

```typescript
public readonly imagebuilder: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#imagebuilder AwsProvider#imagebuilder}

---

##### `inspector`<sup>Optional</sup> <a name="inspector" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspector"></a>

```typescript
public readonly inspector: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#inspector AwsProvider#inspector}

---

##### `inspector2`<sup>Optional</sup> <a name="inspector2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspector2"></a>

```typescript
public readonly inspector2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#inspector2 AwsProvider#inspector2}

---

##### `inspectorv2`<sup>Optional</sup> <a name="inspectorv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspectorv2"></a>

```typescript
public readonly inspectorv2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#inspectorv2 AwsProvider#inspectorv2}

---

##### `iot`<sup>Optional</sup> <a name="iot" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot"></a>

```typescript
public readonly iot: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iot AwsProvider#iot}

---

##### `iot1Clickdevices`<sup>Optional</sup> <a name="iot1Clickdevices" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickdevices"></a>

```typescript
public readonly iot1Clickdevices: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iot1clickdevices AwsProvider#iot1clickdevices}

---

##### `iot1Clickdevicesservice`<sup>Optional</sup> <a name="iot1Clickdevicesservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickdevicesservice"></a>

```typescript
public readonly iot1Clickdevicesservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iot1clickdevicesservice AwsProvider#iot1clickdevicesservice}

---

##### `iot1Clickprojects`<sup>Optional</sup> <a name="iot1Clickprojects" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickprojects"></a>

```typescript
public readonly iot1Clickprojects: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iot1clickprojects AwsProvider#iot1clickprojects}

---

##### `iotanalytics`<sup>Optional</sup> <a name="iotanalytics" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotanalytics"></a>

```typescript
public readonly iotanalytics: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotanalytics AwsProvider#iotanalytics}

---

##### `iotdata`<sup>Optional</sup> <a name="iotdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdata"></a>

```typescript
public readonly iotdata: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotdata AwsProvider#iotdata}

---

##### `iotdataplane`<sup>Optional</sup> <a name="iotdataplane" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdataplane"></a>

```typescript
public readonly iotdataplane: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotdataplane AwsProvider#iotdataplane}

---

##### `iotdeviceadvisor`<sup>Optional</sup> <a name="iotdeviceadvisor" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdeviceadvisor"></a>

```typescript
public readonly iotdeviceadvisor: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotdeviceadvisor AwsProvider#iotdeviceadvisor}

---

##### `iotevents`<sup>Optional</sup> <a name="iotevents" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotevents"></a>

```typescript
public readonly iotevents: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotevents AwsProvider#iotevents}

---

##### `ioteventsdata`<sup>Optional</sup> <a name="ioteventsdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ioteventsdata"></a>

```typescript
public readonly ioteventsdata: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ioteventsdata AwsProvider#ioteventsdata}

---

##### `iotfleethub`<sup>Optional</sup> <a name="iotfleethub" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotfleethub"></a>

```typescript
public readonly iotfleethub: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotfleethub AwsProvider#iotfleethub}

---

##### `iotjobsdata`<sup>Optional</sup> <a name="iotjobsdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotjobsdata"></a>

```typescript
public readonly iotjobsdata: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotjobsdata AwsProvider#iotjobsdata}

---

##### `iotjobsdataplane`<sup>Optional</sup> <a name="iotjobsdataplane" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotjobsdataplane"></a>

```typescript
public readonly iotjobsdataplane: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotjobsdataplane AwsProvider#iotjobsdataplane}

---

##### `iotsecuretunneling`<sup>Optional</sup> <a name="iotsecuretunneling" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotsecuretunneling"></a>

```typescript
public readonly iotsecuretunneling: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotsecuretunneling AwsProvider#iotsecuretunneling}

---

##### `iotsitewise`<sup>Optional</sup> <a name="iotsitewise" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotsitewise"></a>

```typescript
public readonly iotsitewise: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotsitewise AwsProvider#iotsitewise}

---

##### `iotthingsgraph`<sup>Optional</sup> <a name="iotthingsgraph" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotthingsgraph"></a>

```typescript
public readonly iotthingsgraph: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotthingsgraph AwsProvider#iotthingsgraph}

---

##### `iottwinmaker`<sup>Optional</sup> <a name="iottwinmaker" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iottwinmaker"></a>

```typescript
public readonly iottwinmaker: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iottwinmaker AwsProvider#iottwinmaker}

---

##### `iotwireless`<sup>Optional</sup> <a name="iotwireless" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotwireless"></a>

```typescript
public readonly iotwireless: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotwireless AwsProvider#iotwireless}

---

##### `ivs`<sup>Optional</sup> <a name="ivs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ivs"></a>

```typescript
public readonly ivs: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ivs AwsProvider#ivs}

---

##### `ivschat`<sup>Optional</sup> <a name="ivschat" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ivschat"></a>

```typescript
public readonly ivschat: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ivschat AwsProvider#ivschat}

---

##### `kafka`<sup>Optional</sup> <a name="kafka" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kafka"></a>

```typescript
public readonly kafka: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kafka AwsProvider#kafka}

---

##### `kafkaconnect`<sup>Optional</sup> <a name="kafkaconnect" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kafkaconnect"></a>

```typescript
public readonly kafkaconnect: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kafkaconnect AwsProvider#kafkaconnect}

---

##### `kendra`<sup>Optional</sup> <a name="kendra" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kendra"></a>

```typescript
public readonly kendra: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kendra AwsProvider#kendra}

---

##### `keyspaces`<sup>Optional</sup> <a name="keyspaces" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.keyspaces"></a>

```typescript
public readonly keyspaces: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#keyspaces AwsProvider#keyspaces}

---

##### `kinesis`<sup>Optional</sup> <a name="kinesis" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesis"></a>

```typescript
public readonly kinesis: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesis AwsProvider#kinesis}

---

##### `kinesisanalytics`<sup>Optional</sup> <a name="kinesisanalytics" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisanalytics"></a>

```typescript
public readonly kinesisanalytics: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisanalytics AwsProvider#kinesisanalytics}

---

##### `kinesisanalyticsv2`<sup>Optional</sup> <a name="kinesisanalyticsv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisanalyticsv2"></a>

```typescript
public readonly kinesisanalyticsv2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisanalyticsv2 AwsProvider#kinesisanalyticsv2}

---

##### `kinesisvideo`<sup>Optional</sup> <a name="kinesisvideo" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideo"></a>

```typescript
public readonly kinesisvideo: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideo AwsProvider#kinesisvideo}

---

##### `kinesisvideoarchivedmedia`<sup>Optional</sup> <a name="kinesisvideoarchivedmedia" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideoarchivedmedia"></a>

```typescript
public readonly kinesisvideoarchivedmedia: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideoarchivedmedia AwsProvider#kinesisvideoarchivedmedia}

---

##### `kinesisvideomedia`<sup>Optional</sup> <a name="kinesisvideomedia" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideomedia"></a>

```typescript
public readonly kinesisvideomedia: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideomedia AwsProvider#kinesisvideomedia}

---

##### `kinesisvideosignaling`<sup>Optional</sup> <a name="kinesisvideosignaling" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideosignaling"></a>

```typescript
public readonly kinesisvideosignaling: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideosignaling AwsProvider#kinesisvideosignaling}

---

##### `kinesisvideosignalingchannels`<sup>Optional</sup> <a name="kinesisvideosignalingchannels" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideosignalingchannels"></a>

```typescript
public readonly kinesisvideosignalingchannels: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideosignalingchannels AwsProvider#kinesisvideosignalingchannels}

---

##### `kms`<sup>Optional</sup> <a name="kms" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kms"></a>

```typescript
public readonly kms: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kms AwsProvider#kms}

---

##### `lakeformation`<sup>Optional</sup> <a name="lakeformation" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lakeformation"></a>

```typescript
public readonly lakeformation: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lakeformation AwsProvider#lakeformation}

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lambda"></a>

```typescript
public readonly lambda: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lambda AwsProvider#lambda}

---

##### `lex`<sup>Optional</sup> <a name="lex" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lex"></a>

```typescript
public readonly lex: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lex AwsProvider#lex}

---

##### `lexmodelbuilding`<sup>Optional</sup> <a name="lexmodelbuilding" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelbuilding"></a>

```typescript
public readonly lexmodelbuilding: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexmodelbuilding AwsProvider#lexmodelbuilding}

---

##### `lexmodelbuildingservice`<sup>Optional</sup> <a name="lexmodelbuildingservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelbuildingservice"></a>

```typescript
public readonly lexmodelbuildingservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexmodelbuildingservice AwsProvider#lexmodelbuildingservice}

---

##### `lexmodels`<sup>Optional</sup> <a name="lexmodels" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodels"></a>

```typescript
public readonly lexmodels: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexmodels AwsProvider#lexmodels}

---

##### `lexmodelsv2`<sup>Optional</sup> <a name="lexmodelsv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelsv2"></a>

```typescript
public readonly lexmodelsv2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexmodelsv2 AwsProvider#lexmodelsv2}

---

##### `lexruntime`<sup>Optional</sup> <a name="lexruntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntime"></a>

```typescript
public readonly lexruntime: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexruntime AwsProvider#lexruntime}

---

##### `lexruntimeservice`<sup>Optional</sup> <a name="lexruntimeservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntimeservice"></a>

```typescript
public readonly lexruntimeservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexruntimeservice AwsProvider#lexruntimeservice}

---

##### `lexruntimev2`<sup>Optional</sup> <a name="lexruntimev2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntimev2"></a>

```typescript
public readonly lexruntimev2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexruntimev2 AwsProvider#lexruntimev2}

---

##### `lexv2Models`<sup>Optional</sup> <a name="lexv2Models" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexv2Models"></a>

```typescript
public readonly lexv2Models: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexv2models AwsProvider#lexv2models}

---

##### `lexv2Runtime`<sup>Optional</sup> <a name="lexv2Runtime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexv2Runtime"></a>

```typescript
public readonly lexv2Runtime: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexv2runtime AwsProvider#lexv2runtime}

---

##### `licensemanager`<sup>Optional</sup> <a name="licensemanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.licensemanager"></a>

```typescript
public readonly licensemanager: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#licensemanager AwsProvider#licensemanager}

---

##### `lightsail`<sup>Optional</sup> <a name="lightsail" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lightsail"></a>

```typescript
public readonly lightsail: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lightsail AwsProvider#lightsail}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#location AwsProvider#location}

---

##### `locationservice`<sup>Optional</sup> <a name="locationservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.locationservice"></a>

```typescript
public readonly locationservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#locationservice AwsProvider#locationservice}

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.logs"></a>

```typescript
public readonly logs: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#logs AwsProvider#logs}

---

##### `lookoutequipment`<sup>Optional</sup> <a name="lookoutequipment" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutequipment"></a>

```typescript
public readonly lookoutequipment: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lookoutequipment AwsProvider#lookoutequipment}

---

##### `lookoutforvision`<sup>Optional</sup> <a name="lookoutforvision" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutforvision"></a>

```typescript
public readonly lookoutforvision: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lookoutforvision AwsProvider#lookoutforvision}

---

##### `lookoutmetrics`<sup>Optional</sup> <a name="lookoutmetrics" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutmetrics"></a>

```typescript
public readonly lookoutmetrics: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lookoutmetrics AwsProvider#lookoutmetrics}

---

##### `lookoutvision`<sup>Optional</sup> <a name="lookoutvision" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutvision"></a>

```typescript
public readonly lookoutvision: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lookoutvision AwsProvider#lookoutvision}

---

##### `machinelearning`<sup>Optional</sup> <a name="machinelearning" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.machinelearning"></a>

```typescript
public readonly machinelearning: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#machinelearning AwsProvider#machinelearning}

---

##### `macie`<sup>Optional</sup> <a name="macie" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.macie"></a>

```typescript
public readonly macie: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#macie AwsProvider#macie}

---

##### `macie2`<sup>Optional</sup> <a name="macie2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.macie2"></a>

```typescript
public readonly macie2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#macie2 AwsProvider#macie2}

---

##### `managedblockchain`<sup>Optional</sup> <a name="managedblockchain" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.managedblockchain"></a>

```typescript
public readonly managedblockchain: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#managedblockchain AwsProvider#managedblockchain}

---

##### `managedgrafana`<sup>Optional</sup> <a name="managedgrafana" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.managedgrafana"></a>

```typescript
public readonly managedgrafana: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#managedgrafana AwsProvider#managedgrafana}

---

##### `marketplacecatalog`<sup>Optional</sup> <a name="marketplacecatalog" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacecatalog"></a>

```typescript
public readonly marketplacecatalog: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplacecatalog AwsProvider#marketplacecatalog}

---

##### `marketplacecommerceanalytics`<sup>Optional</sup> <a name="marketplacecommerceanalytics" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacecommerceanalytics"></a>

```typescript
public readonly marketplacecommerceanalytics: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplacecommerceanalytics AwsProvider#marketplacecommerceanalytics}

---

##### `marketplaceentitlement`<sup>Optional</sup> <a name="marketplaceentitlement" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplaceentitlement"></a>

```typescript
public readonly marketplaceentitlement: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplaceentitlement AwsProvider#marketplaceentitlement}

---

##### `marketplaceentitlementservice`<sup>Optional</sup> <a name="marketplaceentitlementservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplaceentitlementservice"></a>

```typescript
public readonly marketplaceentitlementservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplaceentitlementservice AwsProvider#marketplaceentitlementservice}

---

##### `marketplacemetering`<sup>Optional</sup> <a name="marketplacemetering" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacemetering"></a>

```typescript
public readonly marketplacemetering: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplacemetering AwsProvider#marketplacemetering}

---

##### `mediaconnect`<sup>Optional</sup> <a name="mediaconnect" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediaconnect"></a>

```typescript
public readonly mediaconnect: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediaconnect AwsProvider#mediaconnect}

---

##### `mediaconvert`<sup>Optional</sup> <a name="mediaconvert" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediaconvert"></a>

```typescript
public readonly mediaconvert: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediaconvert AwsProvider#mediaconvert}

---

##### `medialive`<sup>Optional</sup> <a name="medialive" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.medialive"></a>

```typescript
public readonly medialive: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#medialive AwsProvider#medialive}

---

##### `mediapackage`<sup>Optional</sup> <a name="mediapackage" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediapackage"></a>

```typescript
public readonly mediapackage: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediapackage AwsProvider#mediapackage}

---

##### `mediapackagevod`<sup>Optional</sup> <a name="mediapackagevod" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediapackagevod"></a>

```typescript
public readonly mediapackagevod: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediapackagevod AwsProvider#mediapackagevod}

---

##### `mediastore`<sup>Optional</sup> <a name="mediastore" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediastore"></a>

```typescript
public readonly mediastore: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediastore AwsProvider#mediastore}

---

##### `mediastoredata`<sup>Optional</sup> <a name="mediastoredata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediastoredata"></a>

```typescript
public readonly mediastoredata: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediastoredata AwsProvider#mediastoredata}

---

##### `mediatailor`<sup>Optional</sup> <a name="mediatailor" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediatailor"></a>

```typescript
public readonly mediatailor: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediatailor AwsProvider#mediatailor}

---

##### `memorydb`<sup>Optional</sup> <a name="memorydb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.memorydb"></a>

```typescript
public readonly memorydb: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#memorydb AwsProvider#memorydb}

---

##### `meteringmarketplace`<sup>Optional</sup> <a name="meteringmarketplace" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.meteringmarketplace"></a>

```typescript
public readonly meteringmarketplace: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#meteringmarketplace AwsProvider#meteringmarketplace}

---

##### `mgh`<sup>Optional</sup> <a name="mgh" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mgh"></a>

```typescript
public readonly mgh: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mgh AwsProvider#mgh}

---

##### `mgn`<sup>Optional</sup> <a name="mgn" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mgn"></a>

```typescript
public readonly mgn: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mgn AwsProvider#mgn}

---

##### `migrationhub`<sup>Optional</sup> <a name="migrationhub" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhub"></a>

```typescript
public readonly migrationhub: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#migrationhub AwsProvider#migrationhub}

---

##### `migrationhubconfig`<sup>Optional</sup> <a name="migrationhubconfig" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubconfig"></a>

```typescript
public readonly migrationhubconfig: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#migrationhubconfig AwsProvider#migrationhubconfig}

---

##### `migrationhubrefactorspaces`<sup>Optional</sup> <a name="migrationhubrefactorspaces" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubrefactorspaces"></a>

```typescript
public readonly migrationhubrefactorspaces: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#migrationhubrefactorspaces AwsProvider#migrationhubrefactorspaces}

---

##### `migrationhubstrategy`<sup>Optional</sup> <a name="migrationhubstrategy" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubstrategy"></a>

```typescript
public readonly migrationhubstrategy: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#migrationhubstrategy AwsProvider#migrationhubstrategy}

---

##### `migrationhubstrategyrecommendations`<sup>Optional</sup> <a name="migrationhubstrategyrecommendations" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubstrategyrecommendations"></a>

```typescript
public readonly migrationhubstrategyrecommendations: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#migrationhubstrategyrecommendations AwsProvider#migrationhubstrategyrecommendations}

---

##### `mobile`<sup>Optional</sup> <a name="mobile" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mobile"></a>

```typescript
public readonly mobile: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mobile AwsProvider#mobile}

---

##### `mq`<sup>Optional</sup> <a name="mq" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mq"></a>

```typescript
public readonly mq: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mq AwsProvider#mq}

---

##### `msk`<sup>Optional</sup> <a name="msk" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.msk"></a>

```typescript
public readonly msk: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#msk AwsProvider#msk}

---

##### `mturk`<sup>Optional</sup> <a name="mturk" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mturk"></a>

```typescript
public readonly mturk: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mturk AwsProvider#mturk}

---

##### `mwaa`<sup>Optional</sup> <a name="mwaa" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mwaa"></a>

```typescript
public readonly mwaa: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mwaa AwsProvider#mwaa}

---

##### `neptune`<sup>Optional</sup> <a name="neptune" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.neptune"></a>

```typescript
public readonly neptune: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#neptune AwsProvider#neptune}

---

##### `networkfirewall`<sup>Optional</sup> <a name="networkfirewall" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.networkfirewall"></a>

```typescript
public readonly networkfirewall: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#networkfirewall AwsProvider#networkfirewall}

---

##### `networkmanager`<sup>Optional</sup> <a name="networkmanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.networkmanager"></a>

```typescript
public readonly networkmanager: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#networkmanager AwsProvider#networkmanager}

---

##### `nimble`<sup>Optional</sup> <a name="nimble" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.nimble"></a>

```typescript
public readonly nimble: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#nimble AwsProvider#nimble}

---

##### `nimblestudio`<sup>Optional</sup> <a name="nimblestudio" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.nimblestudio"></a>

```typescript
public readonly nimblestudio: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#nimblestudio AwsProvider#nimblestudio}

---

##### `oam`<sup>Optional</sup> <a name="oam" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.oam"></a>

```typescript
public readonly oam: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#oam AwsProvider#oam}

---

##### `opensearch`<sup>Optional</sup> <a name="opensearch" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearch"></a>

```typescript
public readonly opensearch: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opensearch AwsProvider#opensearch}

---

##### `opensearchserverless`<sup>Optional</sup> <a name="opensearchserverless" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearchserverless"></a>

```typescript
public readonly opensearchserverless: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opensearchserverless AwsProvider#opensearchserverless}

---

##### `opensearchservice`<sup>Optional</sup> <a name="opensearchservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearchservice"></a>

```typescript
public readonly opensearchservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opensearchservice AwsProvider#opensearchservice}

---

##### `opsworks`<sup>Optional</sup> <a name="opsworks" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opsworks"></a>

```typescript
public readonly opsworks: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opsworks AwsProvider#opsworks}

---

##### `opsworkscm`<sup>Optional</sup> <a name="opsworkscm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opsworkscm"></a>

```typescript
public readonly opsworkscm: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opsworkscm AwsProvider#opsworkscm}

---

##### `organizations`<sup>Optional</sup> <a name="organizations" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.organizations"></a>

```typescript
public readonly organizations: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#organizations AwsProvider#organizations}

---

##### `outposts`<sup>Optional</sup> <a name="outposts" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.outposts"></a>

```typescript
public readonly outposts: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#outposts AwsProvider#outposts}

---

##### `panorama`<sup>Optional</sup> <a name="panorama" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.panorama"></a>

```typescript
public readonly panorama: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#panorama AwsProvider#panorama}

---

##### `personalize`<sup>Optional</sup> <a name="personalize" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalize"></a>

```typescript
public readonly personalize: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#personalize AwsProvider#personalize}

---

##### `personalizeevents`<sup>Optional</sup> <a name="personalizeevents" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalizeevents"></a>

```typescript
public readonly personalizeevents: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#personalizeevents AwsProvider#personalizeevents}

---

##### `personalizeruntime`<sup>Optional</sup> <a name="personalizeruntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalizeruntime"></a>

```typescript
public readonly personalizeruntime: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#personalizeruntime AwsProvider#personalizeruntime}

---

##### `pi`<sup>Optional</sup> <a name="pi" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pi"></a>

```typescript
public readonly pi: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pi AwsProvider#pi}

---

##### `pinpoint`<sup>Optional</sup> <a name="pinpoint" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpoint"></a>

```typescript
public readonly pinpoint: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pinpoint AwsProvider#pinpoint}

---

##### `pinpointemail`<sup>Optional</sup> <a name="pinpointemail" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpointemail"></a>

```typescript
public readonly pinpointemail: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pinpointemail AwsProvider#pinpointemail}

---

##### `pinpointsmsvoice`<sup>Optional</sup> <a name="pinpointsmsvoice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpointsmsvoice"></a>

```typescript
public readonly pinpointsmsvoice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pinpointsmsvoice AwsProvider#pinpointsmsvoice}

---

##### `pipes`<sup>Optional</sup> <a name="pipes" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pipes"></a>

```typescript
public readonly pipes: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pipes AwsProvider#pipes}

---

##### `polly`<sup>Optional</sup> <a name="polly" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.polly"></a>

```typescript
public readonly polly: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#polly AwsProvider#polly}

---

##### `pricing`<sup>Optional</sup> <a name="pricing" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pricing"></a>

```typescript
public readonly pricing: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pricing AwsProvider#pricing}

---

##### `prometheus`<sup>Optional</sup> <a name="prometheus" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.prometheus"></a>

```typescript
public readonly prometheus: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#prometheus AwsProvider#prometheus}

---

##### `prometheusservice`<sup>Optional</sup> <a name="prometheusservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.prometheusservice"></a>

```typescript
public readonly prometheusservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#prometheusservice AwsProvider#prometheusservice}

---

##### `proton`<sup>Optional</sup> <a name="proton" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.proton"></a>

```typescript
public readonly proton: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#proton AwsProvider#proton}

---

##### `qldb`<sup>Optional</sup> <a name="qldb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.qldb"></a>

```typescript
public readonly qldb: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#qldb AwsProvider#qldb}

---

##### `qldbsession`<sup>Optional</sup> <a name="qldbsession" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.qldbsession"></a>

```typescript
public readonly qldbsession: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#qldbsession AwsProvider#qldbsession}

---

##### `quicksight`<sup>Optional</sup> <a name="quicksight" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.quicksight"></a>

```typescript
public readonly quicksight: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#quicksight AwsProvider#quicksight}

---

##### `ram`<sup>Optional</sup> <a name="ram" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ram"></a>

```typescript
public readonly ram: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ram AwsProvider#ram}

---

##### `rbin`<sup>Optional</sup> <a name="rbin" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rbin"></a>

```typescript
public readonly rbin: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rbin AwsProvider#rbin}

---

##### `rds`<sup>Optional</sup> <a name="rds" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rds"></a>

```typescript
public readonly rds: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rds AwsProvider#rds}

---

##### `rdsdata`<sup>Optional</sup> <a name="rdsdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rdsdata"></a>

```typescript
public readonly rdsdata: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rdsdata AwsProvider#rdsdata}

---

##### `rdsdataservice`<sup>Optional</sup> <a name="rdsdataservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rdsdataservice"></a>

```typescript
public readonly rdsdataservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rdsdataservice AwsProvider#rdsdataservice}

---

##### `recyclebin`<sup>Optional</sup> <a name="recyclebin" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.recyclebin"></a>

```typescript
public readonly recyclebin: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#recyclebin AwsProvider#recyclebin}

---

##### `redshift`<sup>Optional</sup> <a name="redshift" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshift"></a>

```typescript
public readonly redshift: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#redshift AwsProvider#redshift}

---

##### `redshiftdata`<sup>Optional</sup> <a name="redshiftdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftdata"></a>

```typescript
public readonly redshiftdata: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#redshiftdata AwsProvider#redshiftdata}

---

##### `redshiftdataapiservice`<sup>Optional</sup> <a name="redshiftdataapiservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftdataapiservice"></a>

```typescript
public readonly redshiftdataapiservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#redshiftdataapiservice AwsProvider#redshiftdataapiservice}

---

##### `redshiftserverless`<sup>Optional</sup> <a name="redshiftserverless" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftserverless"></a>

```typescript
public readonly redshiftserverless: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#redshiftserverless AwsProvider#redshiftserverless}

---

##### `rekognition`<sup>Optional</sup> <a name="rekognition" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rekognition"></a>

```typescript
public readonly rekognition: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rekognition AwsProvider#rekognition}

---

##### `resiliencehub`<sup>Optional</sup> <a name="resiliencehub" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resiliencehub"></a>

```typescript
public readonly resiliencehub: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resiliencehub AwsProvider#resiliencehub}

---

##### `resourceexplorer2`<sup>Optional</sup> <a name="resourceexplorer2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourceexplorer2"></a>

```typescript
public readonly resourceexplorer2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resourceexplorer2 AwsProvider#resourceexplorer2}

---

##### `resourcegroups`<sup>Optional</sup> <a name="resourcegroups" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroups"></a>

```typescript
public readonly resourcegroups: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resourcegroups AwsProvider#resourcegroups}

---

##### `resourcegroupstagging`<sup>Optional</sup> <a name="resourcegroupstagging" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroupstagging"></a>

```typescript
public readonly resourcegroupstagging: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resourcegroupstagging AwsProvider#resourcegroupstagging}

---

##### `resourcegroupstaggingapi`<sup>Optional</sup> <a name="resourcegroupstaggingapi" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroupstaggingapi"></a>

```typescript
public readonly resourcegroupstaggingapi: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resourcegroupstaggingapi AwsProvider#resourcegroupstaggingapi}

---

##### `robomaker`<sup>Optional</sup> <a name="robomaker" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.robomaker"></a>

```typescript
public readonly robomaker: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#robomaker AwsProvider#robomaker}

---

##### `rolesanywhere`<sup>Optional</sup> <a name="rolesanywhere" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rolesanywhere"></a>

```typescript
public readonly rolesanywhere: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rolesanywhere AwsProvider#rolesanywhere}

---

##### `route53`<sup>Optional</sup> <a name="route53" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53"></a>

```typescript
public readonly route53: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53 AwsProvider#route53}

---

##### `route53Domains`<sup>Optional</sup> <a name="route53Domains" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Domains"></a>

```typescript
public readonly route53Domains: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53domains AwsProvider#route53domains}

---

##### `route53Recoverycluster`<sup>Optional</sup> <a name="route53Recoverycluster" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoverycluster"></a>

```typescript
public readonly route53Recoverycluster: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53recoverycluster AwsProvider#route53recoverycluster}

---

##### `route53Recoverycontrolconfig`<sup>Optional</sup> <a name="route53Recoverycontrolconfig" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoverycontrolconfig"></a>

```typescript
public readonly route53Recoverycontrolconfig: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53recoverycontrolconfig AwsProvider#route53recoverycontrolconfig}

---

##### `route53Recoveryreadiness`<sup>Optional</sup> <a name="route53Recoveryreadiness" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoveryreadiness"></a>

```typescript
public readonly route53Recoveryreadiness: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53recoveryreadiness AwsProvider#route53recoveryreadiness}

---

##### `route53Resolver`<sup>Optional</sup> <a name="route53Resolver" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Resolver"></a>

```typescript
public readonly route53Resolver: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53resolver AwsProvider#route53resolver}

---

##### `rum`<sup>Optional</sup> <a name="rum" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rum"></a>

```typescript
public readonly rum: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rum AwsProvider#rum}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3"></a>

```typescript
public readonly s3: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3 AwsProvider#s3}

---

##### `s3Api`<sup>Optional</sup> <a name="s3Api" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Api"></a>

```typescript
public readonly s3Api: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3api AwsProvider#s3api}

---

##### `s3Control`<sup>Optional</sup> <a name="s3Control" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Control"></a>

```typescript
public readonly s3Control: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3control AwsProvider#s3control}

---

##### `s3Outposts`<sup>Optional</sup> <a name="s3Outposts" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Outposts"></a>

```typescript
public readonly s3Outposts: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3outposts AwsProvider#s3outposts}

---

##### `sagemaker`<sup>Optional</sup> <a name="sagemaker" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemaker"></a>

```typescript
public readonly sagemaker: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemaker AwsProvider#sagemaker}

---

##### `sagemakera2Iruntime`<sup>Optional</sup> <a name="sagemakera2Iruntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakera2Iruntime"></a>

```typescript
public readonly sagemakera2Iruntime: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemakera2iruntime AwsProvider#sagemakera2iruntime}

---

##### `sagemakeredge`<sup>Optional</sup> <a name="sagemakeredge" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakeredge"></a>

```typescript
public readonly sagemakeredge: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemakeredge AwsProvider#sagemakeredge}

---

##### `sagemakeredgemanager`<sup>Optional</sup> <a name="sagemakeredgemanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakeredgemanager"></a>

```typescript
public readonly sagemakeredgemanager: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemakeredgemanager AwsProvider#sagemakeredgemanager}

---

##### `sagemakerfeaturestoreruntime`<sup>Optional</sup> <a name="sagemakerfeaturestoreruntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakerfeaturestoreruntime"></a>

```typescript
public readonly sagemakerfeaturestoreruntime: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemakerfeaturestoreruntime AwsProvider#sagemakerfeaturestoreruntime}

---

##### `sagemakerruntime`<sup>Optional</sup> <a name="sagemakerruntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakerruntime"></a>

```typescript
public readonly sagemakerruntime: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemakerruntime AwsProvider#sagemakerruntime}

---

##### `savingsplans`<sup>Optional</sup> <a name="savingsplans" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.savingsplans"></a>

```typescript
public readonly savingsplans: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#savingsplans AwsProvider#savingsplans}

---

##### `scheduler`<sup>Optional</sup> <a name="scheduler" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.scheduler"></a>

```typescript
public readonly scheduler: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#scheduler AwsProvider#scheduler}

---

##### `schemas`<sup>Optional</sup> <a name="schemas" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.schemas"></a>

```typescript
public readonly schemas: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#schemas AwsProvider#schemas}

---

##### `sdb`<sup>Optional</sup> <a name="sdb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sdb"></a>

```typescript
public readonly sdb: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sdb AwsProvider#sdb}

---

##### `secretsmanager`<sup>Optional</sup> <a name="secretsmanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.secretsmanager"></a>

```typescript
public readonly secretsmanager: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#secretsmanager AwsProvider#secretsmanager}

---

##### `securityhub`<sup>Optional</sup> <a name="securityhub" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.securityhub"></a>

```typescript
public readonly securityhub: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#securityhub AwsProvider#securityhub}

---

##### `serverlessapplicationrepository`<sup>Optional</sup> <a name="serverlessapplicationrepository" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessapplicationrepository"></a>

```typescript
public readonly serverlessapplicationrepository: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#serverlessapplicationrepository AwsProvider#serverlessapplicationrepository}

---

##### `serverlessapprepo`<sup>Optional</sup> <a name="serverlessapprepo" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessapprepo"></a>

```typescript
public readonly serverlessapprepo: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#serverlessapprepo AwsProvider#serverlessapprepo}

---

##### `serverlessrepo`<sup>Optional</sup> <a name="serverlessrepo" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessrepo"></a>

```typescript
public readonly serverlessrepo: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#serverlessrepo AwsProvider#serverlessrepo}

---

##### `servicecatalog`<sup>Optional</sup> <a name="servicecatalog" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicecatalog"></a>

```typescript
public readonly servicecatalog: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#servicecatalog AwsProvider#servicecatalog}

---

##### `servicecatalogappregistry`<sup>Optional</sup> <a name="servicecatalogappregistry" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicecatalogappregistry"></a>

```typescript
public readonly servicecatalogappregistry: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#servicecatalogappregistry AwsProvider#servicecatalogappregistry}

---

##### `servicediscovery`<sup>Optional</sup> <a name="servicediscovery" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicediscovery"></a>

```typescript
public readonly servicediscovery: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#servicediscovery AwsProvider#servicediscovery}

---

##### `servicequotas`<sup>Optional</sup> <a name="servicequotas" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicequotas"></a>

```typescript
public readonly servicequotas: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#servicequotas AwsProvider#servicequotas}

---

##### `ses`<sup>Optional</sup> <a name="ses" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ses"></a>

```typescript
public readonly ses: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ses AwsProvider#ses}

---

##### `sesv2`<sup>Optional</sup> <a name="sesv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sesv2"></a>

```typescript
public readonly sesv2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sesv2 AwsProvider#sesv2}

---

##### `sfn`<sup>Optional</sup> <a name="sfn" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sfn"></a>

```typescript
public readonly sfn: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sfn AwsProvider#sfn}

---

##### `shield`<sup>Optional</sup> <a name="shield" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.shield"></a>

```typescript
public readonly shield: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shield AwsProvider#shield}

---

##### `signer`<sup>Optional</sup> <a name="signer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.signer"></a>

```typescript
public readonly signer: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#signer AwsProvider#signer}

---

##### `simpledb`<sup>Optional</sup> <a name="simpledb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.simpledb"></a>

```typescript
public readonly simpledb: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#simpledb AwsProvider#simpledb}

---

##### `sms`<sup>Optional</sup> <a name="sms" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sms"></a>

```typescript
public readonly sms: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sms AwsProvider#sms}

---

##### `snowball`<sup>Optional</sup> <a name="snowball" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.snowball"></a>

```typescript
public readonly snowball: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#snowball AwsProvider#snowball}

---

##### `snowdevicemanagement`<sup>Optional</sup> <a name="snowdevicemanagement" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.snowdevicemanagement"></a>

```typescript
public readonly snowdevicemanagement: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#snowdevicemanagement AwsProvider#snowdevicemanagement}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sns"></a>

```typescript
public readonly sns: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sns AwsProvider#sns}

---

##### `sqs`<sup>Optional</sup> <a name="sqs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sqs"></a>

```typescript
public readonly sqs: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sqs AwsProvider#sqs}

---

##### `ssm`<sup>Optional</sup> <a name="ssm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssm"></a>

```typescript
public readonly ssm: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssm AwsProvider#ssm}

---

##### `ssmcontacts`<sup>Optional</sup> <a name="ssmcontacts" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssmcontacts"></a>

```typescript
public readonly ssmcontacts: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssmcontacts AwsProvider#ssmcontacts}

---

##### `ssmincidents`<sup>Optional</sup> <a name="ssmincidents" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssmincidents"></a>

```typescript
public readonly ssmincidents: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssmincidents AwsProvider#ssmincidents}

---

##### `sso`<sup>Optional</sup> <a name="sso" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sso"></a>

```typescript
public readonly sso: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sso AwsProvider#sso}

---

##### `ssoadmin`<sup>Optional</sup> <a name="ssoadmin" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssoadmin"></a>

```typescript
public readonly ssoadmin: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssoadmin AwsProvider#ssoadmin}

---

##### `ssooidc`<sup>Optional</sup> <a name="ssooidc" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssooidc"></a>

```typescript
public readonly ssooidc: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssooidc AwsProvider#ssooidc}

---

##### `stepfunctions`<sup>Optional</sup> <a name="stepfunctions" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.stepfunctions"></a>

```typescript
public readonly stepfunctions: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#stepfunctions AwsProvider#stepfunctions}

---

##### `storagegateway`<sup>Optional</sup> <a name="storagegateway" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.storagegateway"></a>

```typescript
public readonly storagegateway: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#storagegateway AwsProvider#storagegateway}

---

##### `sts`<sup>Optional</sup> <a name="sts" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sts"></a>

```typescript
public readonly sts: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sts AwsProvider#sts}

---

##### `support`<sup>Optional</sup> <a name="support" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.support"></a>

```typescript
public readonly support: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#support AwsProvider#support}

---

##### `swf`<sup>Optional</sup> <a name="swf" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.swf"></a>

```typescript
public readonly swf: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#swf AwsProvider#swf}

---

##### `synthetics`<sup>Optional</sup> <a name="synthetics" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.synthetics"></a>

```typescript
public readonly synthetics: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#synthetics AwsProvider#synthetics}

---

##### `textract`<sup>Optional</sup> <a name="textract" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.textract"></a>

```typescript
public readonly textract: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#textract AwsProvider#textract}

---

##### `timestreamquery`<sup>Optional</sup> <a name="timestreamquery" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.timestreamquery"></a>

```typescript
public readonly timestreamquery: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#timestreamquery AwsProvider#timestreamquery}

---

##### `timestreamwrite`<sup>Optional</sup> <a name="timestreamwrite" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.timestreamwrite"></a>

```typescript
public readonly timestreamwrite: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#timestreamwrite AwsProvider#timestreamwrite}

---

##### `transcribe`<sup>Optional</sup> <a name="transcribe" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribe"></a>

```typescript
public readonly transcribe: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transcribe AwsProvider#transcribe}

---

##### `transcribeservice`<sup>Optional</sup> <a name="transcribeservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribeservice"></a>

```typescript
public readonly transcribeservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transcribeservice AwsProvider#transcribeservice}

---

##### `transcribestreaming`<sup>Optional</sup> <a name="transcribestreaming" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribestreaming"></a>

```typescript
public readonly transcribestreaming: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transcribestreaming AwsProvider#transcribestreaming}

---

##### `transcribestreamingservice`<sup>Optional</sup> <a name="transcribestreamingservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribestreamingservice"></a>

```typescript
public readonly transcribestreamingservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transcribestreamingservice AwsProvider#transcribestreamingservice}

---

##### `transfer`<sup>Optional</sup> <a name="transfer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transfer"></a>

```typescript
public readonly transfer: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transfer AwsProvider#transfer}

---

##### `translate`<sup>Optional</sup> <a name="translate" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.translate"></a>

```typescript
public readonly translate: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#translate AwsProvider#translate}

---

##### `voiceid`<sup>Optional</sup> <a name="voiceid" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.voiceid"></a>

```typescript
public readonly voiceid: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#voiceid AwsProvider#voiceid}

---

##### `waf`<sup>Optional</sup> <a name="waf" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.waf"></a>

```typescript
public readonly waf: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#waf AwsProvider#waf}

---

##### `wafregional`<sup>Optional</sup> <a name="wafregional" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wafregional"></a>

```typescript
public readonly wafregional: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#wafregional AwsProvider#wafregional}

---

##### `wafv2`<sup>Optional</sup> <a name="wafv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wafv2"></a>

```typescript
public readonly wafv2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#wafv2 AwsProvider#wafv2}

---

##### `wellarchitected`<sup>Optional</sup> <a name="wellarchitected" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wellarchitected"></a>

```typescript
public readonly wellarchitected: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#wellarchitected AwsProvider#wellarchitected}

---

##### `wisdom`<sup>Optional</sup> <a name="wisdom" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wisdom"></a>

```typescript
public readonly wisdom: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#wisdom AwsProvider#wisdom}

---

##### `workdocs`<sup>Optional</sup> <a name="workdocs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workdocs"></a>

```typescript
public readonly workdocs: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workdocs AwsProvider#workdocs}

---

##### `worklink`<sup>Optional</sup> <a name="worklink" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.worklink"></a>

```typescript
public readonly worklink: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#worklink AwsProvider#worklink}

---

##### `workmail`<sup>Optional</sup> <a name="workmail" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workmail"></a>

```typescript
public readonly workmail: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workmail AwsProvider#workmail}

---

##### `workmailmessageflow`<sup>Optional</sup> <a name="workmailmessageflow" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workmailmessageflow"></a>

```typescript
public readonly workmailmessageflow: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workmailmessageflow AwsProvider#workmailmessageflow}

---

##### `workspaces`<sup>Optional</sup> <a name="workspaces" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workspaces"></a>

```typescript
public readonly workspaces: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workspaces AwsProvider#workspaces}

---

##### `workspacesweb`<sup>Optional</sup> <a name="workspacesweb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workspacesweb"></a>

```typescript
public readonly workspacesweb: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workspacesweb AwsProvider#workspacesweb}

---

##### `xray`<sup>Optional</sup> <a name="xray" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.xray"></a>

```typescript
public readonly xray: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#xray AwsProvider#xray}

---

### AwsProviderIgnoreTags <a name="AwsProviderIgnoreTags" id="@cdktf/provider-aws.provider.AwsProviderIgnoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderIgnoreTags.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-aws'

const awsProviderIgnoreTags: provider.AwsProviderIgnoreTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags.property.keyPrefixes">keyPrefixes</a></code> | <code>string[]</code> | Resource tag key prefixes to ignore across all resources. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags.property.keys">keys</a></code> | <code>string[]</code> | Resource tag keys to ignore across all resources. |

---

##### `keyPrefixes`<sup>Optional</sup> <a name="keyPrefixes" id="@cdktf/provider-aws.provider.AwsProviderIgnoreTags.property.keyPrefixes"></a>

```typescript
public readonly keyPrefixes: string[];
```

- *Type:* string[]

Resource tag key prefixes to ignore across all resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#key_prefixes AwsProvider#key_prefixes}

---

##### `keys`<sup>Optional</sup> <a name="keys" id="@cdktf/provider-aws.provider.AwsProviderIgnoreTags.property.keys"></a>

```typescript
public readonly keys: string[];
```

- *Type:* string[]

Resource tag keys to ignore across all resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#keys AwsProvider#keys}

---



