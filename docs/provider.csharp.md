# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-aws.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsProvider <a name="AwsProvider" id="@cdktf/provider-aws.provider.AwsProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws aws}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.provider.AwsProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AwsProvider(Construct Scope, string Id, AwsProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig">AwsProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.provider.AwsProviderConfig">AwsProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetAccessKey">ResetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetAllowedAccountIds">ResetAllowedAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetAssumeRole">ResetAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetAssumeRoleWithWebIdentity">ResetAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetCustomCaBundle">ResetCustomCaBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetDefaultTags">ResetDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetEc2MetadataServiceEndpoint">ResetEc2MetadataServiceEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetEc2MetadataServiceEndpointMode">ResetEc2MetadataServiceEndpointMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetEndpoints">ResetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetForbiddenAccountIds">ResetForbiddenAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetHttpProxy">ResetHttpProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetIgnoreTags">ResetIgnoreTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetS3ForcePathStyle">ResetS3ForcePathStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetS3UsePathStyle">ResetS3UsePathStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSecretKey">ResetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSharedConfigFiles">ResetSharedConfigFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSharedCredentialsFile">ResetSharedCredentialsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSharedCredentialsFiles">ResetSharedCredentialsFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSkipCredentialsValidation">ResetSkipCredentialsValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSkipGetEc2Platforms">ResetSkipGetEc2Platforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSkipMetadataApiCheck">ResetSkipMetadataApiCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSkipRegionValidation">ResetSkipRegionValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSkipRequestingAccountId">ResetSkipRequestingAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetStsRegion">ResetStsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetUseDualstackEndpoint">ResetUseDualstackEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetUseFipsEndpoint">ResetUseFipsEndpoint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.provider.AwsProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.provider.AwsProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.provider.AwsProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.provider.AwsProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.provider.AwsProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.provider.AwsProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.provider.AwsProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.provider.AwsProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.provider.AwsProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktf/provider-aws.provider.AwsProvider.resetAccessKey"></a>

```csharp
private void ResetAccessKey()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-aws.provider.AwsProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetAllowedAccountIds` <a name="ResetAllowedAccountIds" id="@cdktf/provider-aws.provider.AwsProvider.resetAllowedAccountIds"></a>

```csharp
private void ResetAllowedAccountIds()
```

##### `ResetAssumeRole` <a name="ResetAssumeRole" id="@cdktf/provider-aws.provider.AwsProvider.resetAssumeRole"></a>

```csharp
private void ResetAssumeRole()
```

##### `ResetAssumeRoleWithWebIdentity` <a name="ResetAssumeRoleWithWebIdentity" id="@cdktf/provider-aws.provider.AwsProvider.resetAssumeRoleWithWebIdentity"></a>

```csharp
private void ResetAssumeRoleWithWebIdentity()
```

##### `ResetCustomCaBundle` <a name="ResetCustomCaBundle" id="@cdktf/provider-aws.provider.AwsProvider.resetCustomCaBundle"></a>

```csharp
private void ResetCustomCaBundle()
```

##### `ResetDefaultTags` <a name="ResetDefaultTags" id="@cdktf/provider-aws.provider.AwsProvider.resetDefaultTags"></a>

```csharp
private void ResetDefaultTags()
```

##### `ResetEc2MetadataServiceEndpoint` <a name="ResetEc2MetadataServiceEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.resetEc2MetadataServiceEndpoint"></a>

```csharp
private void ResetEc2MetadataServiceEndpoint()
```

##### `ResetEc2MetadataServiceEndpointMode` <a name="ResetEc2MetadataServiceEndpointMode" id="@cdktf/provider-aws.provider.AwsProvider.resetEc2MetadataServiceEndpointMode"></a>

```csharp
private void ResetEc2MetadataServiceEndpointMode()
```

##### `ResetEndpoints` <a name="ResetEndpoints" id="@cdktf/provider-aws.provider.AwsProvider.resetEndpoints"></a>

```csharp
private void ResetEndpoints()
```

##### `ResetForbiddenAccountIds` <a name="ResetForbiddenAccountIds" id="@cdktf/provider-aws.provider.AwsProvider.resetForbiddenAccountIds"></a>

```csharp
private void ResetForbiddenAccountIds()
```

##### `ResetHttpProxy` <a name="ResetHttpProxy" id="@cdktf/provider-aws.provider.AwsProvider.resetHttpProxy"></a>

```csharp
private void ResetHttpProxy()
```

##### `ResetIgnoreTags` <a name="ResetIgnoreTags" id="@cdktf/provider-aws.provider.AwsProvider.resetIgnoreTags"></a>

```csharp
private void ResetIgnoreTags()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktf/provider-aws.provider.AwsProvider.resetInsecure"></a>

```csharp
private void ResetInsecure()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-aws.provider.AwsProvider.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktf/provider-aws.provider.AwsProvider.resetProfile"></a>

```csharp
private void ResetProfile()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.provider.AwsProvider.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetS3ForcePathStyle` <a name="ResetS3ForcePathStyle" id="@cdktf/provider-aws.provider.AwsProvider.resetS3ForcePathStyle"></a>

```csharp
private void ResetS3ForcePathStyle()
```

##### `ResetS3UsePathStyle` <a name="ResetS3UsePathStyle" id="@cdktf/provider-aws.provider.AwsProvider.resetS3UsePathStyle"></a>

```csharp
private void ResetS3UsePathStyle()
```

##### `ResetSecretKey` <a name="ResetSecretKey" id="@cdktf/provider-aws.provider.AwsProvider.resetSecretKey"></a>

```csharp
private void ResetSecretKey()
```

##### `ResetSharedConfigFiles` <a name="ResetSharedConfigFiles" id="@cdktf/provider-aws.provider.AwsProvider.resetSharedConfigFiles"></a>

```csharp
private void ResetSharedConfigFiles()
```

##### `ResetSharedCredentialsFile` <a name="ResetSharedCredentialsFile" id="@cdktf/provider-aws.provider.AwsProvider.resetSharedCredentialsFile"></a>

```csharp
private void ResetSharedCredentialsFile()
```

##### `ResetSharedCredentialsFiles` <a name="ResetSharedCredentialsFiles" id="@cdktf/provider-aws.provider.AwsProvider.resetSharedCredentialsFiles"></a>

```csharp
private void ResetSharedCredentialsFiles()
```

##### `ResetSkipCredentialsValidation` <a name="ResetSkipCredentialsValidation" id="@cdktf/provider-aws.provider.AwsProvider.resetSkipCredentialsValidation"></a>

```csharp
private void ResetSkipCredentialsValidation()
```

##### `ResetSkipGetEc2Platforms` <a name="ResetSkipGetEc2Platforms" id="@cdktf/provider-aws.provider.AwsProvider.resetSkipGetEc2Platforms"></a>

```csharp
private void ResetSkipGetEc2Platforms()
```

##### `ResetSkipMetadataApiCheck` <a name="ResetSkipMetadataApiCheck" id="@cdktf/provider-aws.provider.AwsProvider.resetSkipMetadataApiCheck"></a>

```csharp
private void ResetSkipMetadataApiCheck()
```

##### `ResetSkipRegionValidation` <a name="ResetSkipRegionValidation" id="@cdktf/provider-aws.provider.AwsProvider.resetSkipRegionValidation"></a>

```csharp
private void ResetSkipRegionValidation()
```

##### `ResetSkipRequestingAccountId` <a name="ResetSkipRequestingAccountId" id="@cdktf/provider-aws.provider.AwsProvider.resetSkipRequestingAccountId"></a>

```csharp
private void ResetSkipRequestingAccountId()
```

##### `ResetStsRegion` <a name="ResetStsRegion" id="@cdktf/provider-aws.provider.AwsProvider.resetStsRegion"></a>

```csharp
private void ResetStsRegion()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-aws.provider.AwsProvider.resetToken"></a>

```csharp
private void ResetToken()
```

##### `ResetUseDualstackEndpoint` <a name="ResetUseDualstackEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.resetUseDualstackEndpoint"></a>

```csharp
private void ResetUseDualstackEndpoint()
```

##### `ResetUseFipsEndpoint` <a name="ResetUseFipsEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.resetUseFipsEndpoint"></a>

```csharp
private void ResetUseFipsEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.provider.AwsProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AwsProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.provider.AwsProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.provider.AwsProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AwsProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.provider.AwsProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-aws.provider.AwsProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AwsProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.provider.AwsProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.accessKeyInput">AccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.allowedAccountIdsInput">AllowedAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleInput">AssumeRoleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleWithWebIdentityInput">AssumeRoleWithWebIdentityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.customCaBundleInput">CustomCaBundleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.defaultTagsInput">DefaultTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointInput">Ec2MetadataServiceEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointModeInput">Ec2MetadataServiceEndpointModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.endpointsInput">EndpointsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.forbiddenAccountIdsInput">ForbiddenAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.httpProxyInput">HttpProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ignoreTagsInput">IgnoreTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.insecureInput">InsecureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.profileInput">ProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.s3ForcePathStyleInput">S3ForcePathStyleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.s3UsePathStyleInput">S3UsePathStyleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.secretKeyInput">SecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedConfigFilesInput">SharedConfigFilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFileInput">SharedCredentialsFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFilesInput">SharedCredentialsFilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipCredentialsValidationInput">SkipCredentialsValidationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipGetEc2PlatformsInput">SkipGetEc2PlatformsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipMetadataApiCheckInput">SkipMetadataApiCheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipRegionValidationInput">SkipRegionValidationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipRequestingAccountIdInput">SkipRequestingAccountIdInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.stsRegionInput">StsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.useDualstackEndpointInput">UseDualstackEndpointInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.useFipsEndpointInput">UseFipsEndpointInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.accessKey">AccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.allowedAccountIds">AllowedAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.assumeRole">AssumeRole</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleWithWebIdentity">AssumeRoleWithWebIdentity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.customCaBundle">CustomCaBundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.defaultTags">DefaultTags</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpoint">Ec2MetadataServiceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointMode">Ec2MetadataServiceEndpointMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.endpoints">Endpoints</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.forbiddenAccountIds">ForbiddenAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.httpProxy">HttpProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ignoreTags">IgnoreTags</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.insecure">Insecure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.profile">Profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.s3ForcePathStyle">S3ForcePathStyle</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.s3UsePathStyle">S3UsePathStyle</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.secretKey">SecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedConfigFiles">SharedConfigFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFile">SharedCredentialsFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFiles">SharedCredentialsFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipCredentialsValidation">SkipCredentialsValidation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipGetEc2Platforms">SkipGetEc2Platforms</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipMetadataApiCheck">SkipMetadataApiCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipRegionValidation">SkipRegionValidation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipRequestingAccountId">SkipRequestingAccountId</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.stsRegion">StsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.useDualstackEndpoint">UseDualstackEndpoint</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.useFipsEndpoint">UseFipsEndpoint</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.provider.AwsProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.provider.AwsProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.provider.AwsProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.provider.AwsProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-aws.provider.AwsProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.provider.AwsProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.provider.AwsProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-aws.provider.AwsProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-aws.provider.AwsProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktf/provider-aws.provider.AwsProvider.property.accessKeyInput"></a>

```csharp
public string AccessKeyInput { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-aws.provider.AwsProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AllowedAccountIdsInput`<sup>Optional</sup> <a name="AllowedAccountIdsInput" id="@cdktf/provider-aws.provider.AwsProvider.property.allowedAccountIdsInput"></a>

```csharp
public string[] AllowedAccountIdsInput { get; }
```

- *Type:* string[]

---

##### `AssumeRoleInput`<sup>Optional</sup> <a name="AssumeRoleInput" id="@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleInput"></a>

```csharp
public object AssumeRoleInput { get; }
```

- *Type:* object

---

##### `AssumeRoleWithWebIdentityInput`<sup>Optional</sup> <a name="AssumeRoleWithWebIdentityInput" id="@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleWithWebIdentityInput"></a>

```csharp
public object AssumeRoleWithWebIdentityInput { get; }
```

- *Type:* object

---

##### `CustomCaBundleInput`<sup>Optional</sup> <a name="CustomCaBundleInput" id="@cdktf/provider-aws.provider.AwsProvider.property.customCaBundleInput"></a>

```csharp
public string CustomCaBundleInput { get; }
```

- *Type:* string

---

##### `DefaultTagsInput`<sup>Optional</sup> <a name="DefaultTagsInput" id="@cdktf/provider-aws.provider.AwsProvider.property.defaultTagsInput"></a>

```csharp
public object DefaultTagsInput { get; }
```

- *Type:* object

---

##### `Ec2MetadataServiceEndpointInput`<sup>Optional</sup> <a name="Ec2MetadataServiceEndpointInput" id="@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointInput"></a>

```csharp
public string Ec2MetadataServiceEndpointInput { get; }
```

- *Type:* string

---

##### `Ec2MetadataServiceEndpointModeInput`<sup>Optional</sup> <a name="Ec2MetadataServiceEndpointModeInput" id="@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointModeInput"></a>

```csharp
public string Ec2MetadataServiceEndpointModeInput { get; }
```

- *Type:* string

---

##### `EndpointsInput`<sup>Optional</sup> <a name="EndpointsInput" id="@cdktf/provider-aws.provider.AwsProvider.property.endpointsInput"></a>

```csharp
public object EndpointsInput { get; }
```

- *Type:* object

---

##### `ForbiddenAccountIdsInput`<sup>Optional</sup> <a name="ForbiddenAccountIdsInput" id="@cdktf/provider-aws.provider.AwsProvider.property.forbiddenAccountIdsInput"></a>

```csharp
public string[] ForbiddenAccountIdsInput { get; }
```

- *Type:* string[]

---

##### `HttpProxyInput`<sup>Optional</sup> <a name="HttpProxyInput" id="@cdktf/provider-aws.provider.AwsProvider.property.httpProxyInput"></a>

```csharp
public string HttpProxyInput { get; }
```

- *Type:* string

---

##### `IgnoreTagsInput`<sup>Optional</sup> <a name="IgnoreTagsInput" id="@cdktf/provider-aws.provider.AwsProvider.property.ignoreTagsInput"></a>

```csharp
public object IgnoreTagsInput { get; }
```

- *Type:* object

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktf/provider-aws.provider.AwsProvider.property.insecureInput"></a>

```csharp
public object InsecureInput { get; }
```

- *Type:* object

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-aws.provider.AwsProvider.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-aws.provider.AwsProvider.property.profileInput"></a>

```csharp
public string ProfileInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.provider.AwsProvider.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `S3ForcePathStyleInput`<sup>Optional</sup> <a name="S3ForcePathStyleInput" id="@cdktf/provider-aws.provider.AwsProvider.property.s3ForcePathStyleInput"></a>

```csharp
public object S3ForcePathStyleInput { get; }
```

- *Type:* object

---

##### `S3UsePathStyleInput`<sup>Optional</sup> <a name="S3UsePathStyleInput" id="@cdktf/provider-aws.provider.AwsProvider.property.s3UsePathStyleInput"></a>

```csharp
public object S3UsePathStyleInput { get; }
```

- *Type:* object

---

##### `SecretKeyInput`<sup>Optional</sup> <a name="SecretKeyInput" id="@cdktf/provider-aws.provider.AwsProvider.property.secretKeyInput"></a>

```csharp
public string SecretKeyInput { get; }
```

- *Type:* string

---

##### `SharedConfigFilesInput`<sup>Optional</sup> <a name="SharedConfigFilesInput" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedConfigFilesInput"></a>

```csharp
public string[] SharedConfigFilesInput { get; }
```

- *Type:* string[]

---

##### `SharedCredentialsFileInput`<sup>Optional</sup> <a name="SharedCredentialsFileInput" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFileInput"></a>

```csharp
public string SharedCredentialsFileInput { get; }
```

- *Type:* string

---

##### `SharedCredentialsFilesInput`<sup>Optional</sup> <a name="SharedCredentialsFilesInput" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFilesInput"></a>

```csharp
public string[] SharedCredentialsFilesInput { get; }
```

- *Type:* string[]

---

##### `SkipCredentialsValidationInput`<sup>Optional</sup> <a name="SkipCredentialsValidationInput" id="@cdktf/provider-aws.provider.AwsProvider.property.skipCredentialsValidationInput"></a>

```csharp
public object SkipCredentialsValidationInput { get; }
```

- *Type:* object

---

##### `SkipGetEc2PlatformsInput`<sup>Optional</sup> <a name="SkipGetEc2PlatformsInput" id="@cdktf/provider-aws.provider.AwsProvider.property.skipGetEc2PlatformsInput"></a>

```csharp
public object SkipGetEc2PlatformsInput { get; }
```

- *Type:* object

---

##### `SkipMetadataApiCheckInput`<sup>Optional</sup> <a name="SkipMetadataApiCheckInput" id="@cdktf/provider-aws.provider.AwsProvider.property.skipMetadataApiCheckInput"></a>

```csharp
public string SkipMetadataApiCheckInput { get; }
```

- *Type:* string

---

##### `SkipRegionValidationInput`<sup>Optional</sup> <a name="SkipRegionValidationInput" id="@cdktf/provider-aws.provider.AwsProvider.property.skipRegionValidationInput"></a>

```csharp
public object SkipRegionValidationInput { get; }
```

- *Type:* object

---

##### `SkipRequestingAccountIdInput`<sup>Optional</sup> <a name="SkipRequestingAccountIdInput" id="@cdktf/provider-aws.provider.AwsProvider.property.skipRequestingAccountIdInput"></a>

```csharp
public object SkipRequestingAccountIdInput { get; }
```

- *Type:* object

---

##### `StsRegionInput`<sup>Optional</sup> <a name="StsRegionInput" id="@cdktf/provider-aws.provider.AwsProvider.property.stsRegionInput"></a>

```csharp
public string StsRegionInput { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-aws.provider.AwsProvider.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `UseDualstackEndpointInput`<sup>Optional</sup> <a name="UseDualstackEndpointInput" id="@cdktf/provider-aws.provider.AwsProvider.property.useDualstackEndpointInput"></a>

```csharp
public object UseDualstackEndpointInput { get; }
```

- *Type:* object

---

##### `UseFipsEndpointInput`<sup>Optional</sup> <a name="UseFipsEndpointInput" id="@cdktf/provider-aws.provider.AwsProvider.property.useFipsEndpointInput"></a>

```csharp
public object UseFipsEndpointInput { get; }
```

- *Type:* object

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktf/provider-aws.provider.AwsProvider.property.accessKey"></a>

```csharp
public string AccessKey { get; }
```

- *Type:* string

---

##### `AllowedAccountIds`<sup>Optional</sup> <a name="AllowedAccountIds" id="@cdktf/provider-aws.provider.AwsProvider.property.allowedAccountIds"></a>

```csharp
public string[] AllowedAccountIds { get; }
```

- *Type:* string[]

---

##### `AssumeRole`<sup>Optional</sup> <a name="AssumeRole" id="@cdktf/provider-aws.provider.AwsProvider.property.assumeRole"></a>

```csharp
public object AssumeRole { get; }
```

- *Type:* object

---

##### `AssumeRoleWithWebIdentity`<sup>Optional</sup> <a name="AssumeRoleWithWebIdentity" id="@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleWithWebIdentity"></a>

```csharp
public object AssumeRoleWithWebIdentity { get; }
```

- *Type:* object

---

##### `CustomCaBundle`<sup>Optional</sup> <a name="CustomCaBundle" id="@cdktf/provider-aws.provider.AwsProvider.property.customCaBundle"></a>

```csharp
public string CustomCaBundle { get; }
```

- *Type:* string

---

##### `DefaultTags`<sup>Optional</sup> <a name="DefaultTags" id="@cdktf/provider-aws.provider.AwsProvider.property.defaultTags"></a>

```csharp
public object DefaultTags { get; }
```

- *Type:* object

---

##### `Ec2MetadataServiceEndpoint`<sup>Optional</sup> <a name="Ec2MetadataServiceEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpoint"></a>

```csharp
public string Ec2MetadataServiceEndpoint { get; }
```

- *Type:* string

---

##### `Ec2MetadataServiceEndpointMode`<sup>Optional</sup> <a name="Ec2MetadataServiceEndpointMode" id="@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointMode"></a>

```csharp
public string Ec2MetadataServiceEndpointMode { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Optional</sup> <a name="Endpoints" id="@cdktf/provider-aws.provider.AwsProvider.property.endpoints"></a>

```csharp
public object Endpoints { get; }
```

- *Type:* object

---

##### `ForbiddenAccountIds`<sup>Optional</sup> <a name="ForbiddenAccountIds" id="@cdktf/provider-aws.provider.AwsProvider.property.forbiddenAccountIds"></a>

```csharp
public string[] ForbiddenAccountIds { get; }
```

- *Type:* string[]

---

##### `HttpProxy`<sup>Optional</sup> <a name="HttpProxy" id="@cdktf/provider-aws.provider.AwsProvider.property.httpProxy"></a>

```csharp
public string HttpProxy { get; }
```

- *Type:* string

---

##### `IgnoreTags`<sup>Optional</sup> <a name="IgnoreTags" id="@cdktf/provider-aws.provider.AwsProvider.property.ignoreTags"></a>

```csharp
public object IgnoreTags { get; }
```

- *Type:* object

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-aws.provider.AwsProvider.property.insecure"></a>

```csharp
public object Insecure { get; }
```

- *Type:* object

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-aws.provider.AwsProvider.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-aws.provider.AwsProvider.property.profile"></a>

```csharp
public string Profile { get; }
```

- *Type:* string

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.provider.AwsProvider.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `S3ForcePathStyle`<sup>Optional</sup> <a name="S3ForcePathStyle" id="@cdktf/provider-aws.provider.AwsProvider.property.s3ForcePathStyle"></a>

```csharp
public object S3ForcePathStyle { get; }
```

- *Type:* object

---

##### `S3UsePathStyle`<sup>Optional</sup> <a name="S3UsePathStyle" id="@cdktf/provider-aws.provider.AwsProvider.property.s3UsePathStyle"></a>

```csharp
public object S3UsePathStyle { get; }
```

- *Type:* object

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktf/provider-aws.provider.AwsProvider.property.secretKey"></a>

```csharp
public string SecretKey { get; }
```

- *Type:* string

---

##### `SharedConfigFiles`<sup>Optional</sup> <a name="SharedConfigFiles" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedConfigFiles"></a>

```csharp
public string[] SharedConfigFiles { get; }
```

- *Type:* string[]

---

##### `SharedCredentialsFile`<sup>Optional</sup> <a name="SharedCredentialsFile" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFile"></a>

```csharp
public string SharedCredentialsFile { get; }
```

- *Type:* string

---

##### `SharedCredentialsFiles`<sup>Optional</sup> <a name="SharedCredentialsFiles" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFiles"></a>

```csharp
public string[] SharedCredentialsFiles { get; }
```

- *Type:* string[]

---

##### `SkipCredentialsValidation`<sup>Optional</sup> <a name="SkipCredentialsValidation" id="@cdktf/provider-aws.provider.AwsProvider.property.skipCredentialsValidation"></a>

```csharp
public object SkipCredentialsValidation { get; }
```

- *Type:* object

---

##### `SkipGetEc2Platforms`<sup>Optional</sup> <a name="SkipGetEc2Platforms" id="@cdktf/provider-aws.provider.AwsProvider.property.skipGetEc2Platforms"></a>

```csharp
public object SkipGetEc2Platforms { get; }
```

- *Type:* object

---

##### `SkipMetadataApiCheck`<sup>Optional</sup> <a name="SkipMetadataApiCheck" id="@cdktf/provider-aws.provider.AwsProvider.property.skipMetadataApiCheck"></a>

```csharp
public string SkipMetadataApiCheck { get; }
```

- *Type:* string

---

##### `SkipRegionValidation`<sup>Optional</sup> <a name="SkipRegionValidation" id="@cdktf/provider-aws.provider.AwsProvider.property.skipRegionValidation"></a>

```csharp
public object SkipRegionValidation { get; }
```

- *Type:* object

---

##### `SkipRequestingAccountId`<sup>Optional</sup> <a name="SkipRequestingAccountId" id="@cdktf/provider-aws.provider.AwsProvider.property.skipRequestingAccountId"></a>

```csharp
public object SkipRequestingAccountId { get; }
```

- *Type:* object

---

##### `StsRegion`<sup>Optional</sup> <a name="StsRegion" id="@cdktf/provider-aws.provider.AwsProvider.property.stsRegion"></a>

```csharp
public string StsRegion { get; }
```

- *Type:* string

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-aws.provider.AwsProvider.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `UseDualstackEndpoint`<sup>Optional</sup> <a name="UseDualstackEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.property.useDualstackEndpoint"></a>

```csharp
public object UseDualstackEndpoint { get; }
```

- *Type:* object

---

##### `UseFipsEndpoint`<sup>Optional</sup> <a name="UseFipsEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.property.useFipsEndpoint"></a>

```csharp
public object UseFipsEndpoint { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.provider.AwsProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsProviderAssumeRole <a name="AwsProviderAssumeRole" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AwsProviderAssumeRole {
    string Duration = null,
    double DurationSeconds = null,
    string ExternalId = null,
    string Policy = null,
    string[] PolicyArns = null,
    string RoleArn = null,
    string SessionName = null,
    string SourceIdentity = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string[] TransitiveTagKeys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.duration">Duration</a></code> | <code>string</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.durationSeconds">DurationSeconds</a></code> | <code>double</code> | The duration, in seconds, of the role session. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.externalId">ExternalId</a></code> | <code>string</code> | A unique identifier that might be required when you assume a role in another account. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.policy">Policy</a></code> | <code>string</code> | IAM Policy JSON describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.policyArns">PolicyArns</a></code> | <code>string[]</code> | Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.roleArn">RoleArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.sessionName">SessionName</a></code> | <code>string</code> | An identifier for the assumed role session. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.sourceIdentity">SourceIdentity</a></code> | <code>string</code> | Source identity specified by the principal assuming the role. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Assume role session tags. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.transitiveTagKeys">TransitiveTagKeys</a></code> | <code>string[]</code> | Assume role session tag keys to pass to any subsequent sessions. |

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#duration AwsProvider#duration}

---

##### `DurationSeconds`<sup>Optional</sup> <a name="DurationSeconds" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.durationSeconds"></a>

```csharp
public double DurationSeconds { get; set; }
```

- *Type:* double

The duration, in seconds, of the role session.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#duration_seconds AwsProvider#duration_seconds}

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

A unique identifier that might be required when you assume a role in another account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#external_id AwsProvider#external_id}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#policy AwsProvider#policy}

---

##### `PolicyArns`<sup>Optional</sup> <a name="PolicyArns" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.policyArns"></a>

```csharp
public string[] PolicyArns { get; set; }
```

- *Type:* string[]

Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#policy_arns AwsProvider#policy_arns}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#role_arn AwsProvider#role_arn}

---

##### `SessionName`<sup>Optional</sup> <a name="SessionName" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.sessionName"></a>

```csharp
public string SessionName { get; set; }
```

- *Type:* string

An identifier for the assumed role session.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#session_name AwsProvider#session_name}

---

##### `SourceIdentity`<sup>Optional</sup> <a name="SourceIdentity" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.sourceIdentity"></a>

```csharp
public string SourceIdentity { get; set; }
```

- *Type:* string

Source identity specified by the principal assuming the role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#source_identity AwsProvider#source_identity}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Assume role session tags.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#tags AwsProvider#tags}

---

##### `TransitiveTagKeys`<sup>Optional</sup> <a name="TransitiveTagKeys" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.transitiveTagKeys"></a>

```csharp
public string[] TransitiveTagKeys { get; set; }
```

- *Type:* string[]

Assume role session tag keys to pass to any subsequent sessions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transitive_tag_keys AwsProvider#transitive_tag_keys}

---

### AwsProviderAssumeRoleWithWebIdentity <a name="AwsProviderAssumeRoleWithWebIdentity" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AwsProviderAssumeRoleWithWebIdentity {
    string Duration = null,
    string Policy = null,
    string[] PolicyArns = null,
    string RoleArn = null,
    string SessionName = null,
    string WebIdentityToken = null,
    string WebIdentityTokenFile = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.duration">Duration</a></code> | <code>string</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.policy">Policy</a></code> | <code>string</code> | IAM Policy JSON describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.policyArns">PolicyArns</a></code> | <code>string[]</code> | Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.roleArn">RoleArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.sessionName">SessionName</a></code> | <code>string</code> | An identifier for the assumed role session. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.webIdentityToken">WebIdentityToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#web_identity_token AwsProvider#web_identity_token}. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile">WebIdentityTokenFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#web_identity_token_file AwsProvider#web_identity_token_file}. |

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#duration AwsProvider#duration}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#policy AwsProvider#policy}

---

##### `PolicyArns`<sup>Optional</sup> <a name="PolicyArns" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.policyArns"></a>

```csharp
public string[] PolicyArns { get; set; }
```

- *Type:* string[]

Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#policy_arns AwsProvider#policy_arns}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#role_arn AwsProvider#role_arn}

---

##### `SessionName`<sup>Optional</sup> <a name="SessionName" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.sessionName"></a>

```csharp
public string SessionName { get; set; }
```

- *Type:* string

An identifier for the assumed role session.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#session_name AwsProvider#session_name}

---

##### `WebIdentityToken`<sup>Optional</sup> <a name="WebIdentityToken" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.webIdentityToken"></a>

```csharp
public string WebIdentityToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#web_identity_token AwsProvider#web_identity_token}.

---

##### `WebIdentityTokenFile`<sup>Optional</sup> <a name="WebIdentityTokenFile" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile"></a>

```csharp
public string WebIdentityTokenFile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#web_identity_token_file AwsProvider#web_identity_token_file}.

---

### AwsProviderConfig <a name="AwsProviderConfig" id="@cdktf/provider-aws.provider.AwsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AwsProviderConfig {
    string AccessKey = null,
    string Alias = null,
    string[] AllowedAccountIds = null,
    object AssumeRole = null,
    object AssumeRoleWithWebIdentity = null,
    string CustomCaBundle = null,
    object DefaultTags = null,
    string Ec2MetadataServiceEndpoint = null,
    string Ec2MetadataServiceEndpointMode = null,
    object Endpoints = null,
    string[] ForbiddenAccountIds = null,
    string HttpProxy = null,
    object IgnoreTags = null,
    object Insecure = null,
    double MaxRetries = null,
    string Profile = null,
    string Region = null,
    object S3ForcePathStyle = null,
    object S3UsePathStyle = null,
    string SecretKey = null,
    string[] SharedConfigFiles = null,
    string SharedCredentialsFile = null,
    string[] SharedCredentialsFiles = null,
    object SkipCredentialsValidation = null,
    object SkipGetEc2Platforms = null,
    string SkipMetadataApiCheck = null,
    object SkipRegionValidation = null,
    object SkipRequestingAccountId = null,
    string StsRegion = null,
    string Token = null,
    object UseDualstackEndpoint = null,
    object UseFipsEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.accessKey">AccessKey</a></code> | <code>string</code> | The access key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.allowedAccountIds">AllowedAccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#allowed_account_ids AwsProvider#allowed_account_ids}. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.assumeRole">AssumeRole</a></code> | <code>object</code> | assume_role block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.assumeRoleWithWebIdentity">AssumeRoleWithWebIdentity</a></code> | <code>object</code> | assume_role_with_web_identity block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.customCaBundle">CustomCaBundle</a></code> | <code>string</code> | File containing custom root and intermediate certificates. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.defaultTags">DefaultTags</a></code> | <code>object</code> | default_tags block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.ec2MetadataServiceEndpoint">Ec2MetadataServiceEndpoint</a></code> | <code>string</code> | Address of the EC2 metadata service endpoint to use. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT` environment variable. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.ec2MetadataServiceEndpointMode">Ec2MetadataServiceEndpointMode</a></code> | <code>string</code> | Protocol to use with EC2 metadata service endpoint.Valid values are `IPv4` and `IPv6`. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE` environment variable. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.endpoints">Endpoints</a></code> | <code>object</code> | endpoints block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.forbiddenAccountIds">ForbiddenAccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forbidden_account_ids AwsProvider#forbidden_account_ids}. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.httpProxy">HttpProxy</a></code> | <code>string</code> | The address of an HTTP proxy to use when accessing the AWS API. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.ignoreTags">IgnoreTags</a></code> | <code>object</code> | ignore_tags block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.insecure">Insecure</a></code> | <code>object</code> | Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.maxRetries">MaxRetries</a></code> | <code>double</code> | The maximum number of times an AWS API request is being executed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.profile">Profile</a></code> | <code>string</code> | The profile for API operations. If not set, the default profile created with `aws configure` will be used. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.region">Region</a></code> | <code>string</code> | The region where AWS operations will take place. Examples are us-east-1, us-west-2, etc. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.s3ForcePathStyle">S3ForcePathStyle</a></code> | <code>object</code> | Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.s3UsePathStyle">S3UsePathStyle</a></code> | <code>object</code> | Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.secretKey">SecretKey</a></code> | <code>string</code> | The secret key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedConfigFiles">SharedConfigFiles</a></code> | <code>string[]</code> | List of paths to shared config files. If not set, defaults to [~/.aws/config]. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedCredentialsFile">SharedCredentialsFile</a></code> | <code>string</code> | The path to the shared credentials file. If not set, defaults to ~/.aws/credentials. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedCredentialsFiles">SharedCredentialsFiles</a></code> | <code>string[]</code> | List of paths to shared credentials files. If not set, defaults to [~/.aws/credentials]. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.skipCredentialsValidation">SkipCredentialsValidation</a></code> | <code>object</code> | Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.skipGetEc2Platforms">SkipGetEc2Platforms</a></code> | <code>object</code> | Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.skipMetadataApiCheck">SkipMetadataApiCheck</a></code> | <code>string</code> | Skip the AWS Metadata API check. Used for AWS API implementations that do not have a metadata api endpoint. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.skipRegionValidation">SkipRegionValidation</a></code> | <code>object</code> | Skip static validation of region name. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.skipRequestingAccountId">SkipRequestingAccountId</a></code> | <code>object</code> | Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.stsRegion">StsRegion</a></code> | <code>string</code> | The region where AWS STS operations will take place. Examples are us-east-1 and us-west-2. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.token">Token</a></code> | <code>string</code> | session token. A session token is only required if you are using temporary security credentials. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.useDualstackEndpoint">UseDualstackEndpoint</a></code> | <code>object</code> | Resolve an endpoint with DualStack capability. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.useFipsEndpoint">UseFipsEndpoint</a></code> | <code>object</code> | Resolve an endpoint with FIPS capability. |

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.accessKey"></a>

```csharp
public string AccessKey { get; set; }
```

- *Type:* string

The access key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#access_key AwsProvider#access_key}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#alias AwsProvider#alias}

---

##### `AllowedAccountIds`<sup>Optional</sup> <a name="AllowedAccountIds" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.allowedAccountIds"></a>

```csharp
public string[] AllowedAccountIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#allowed_account_ids AwsProvider#allowed_account_ids}.

---

##### `AssumeRole`<sup>Optional</sup> <a name="AssumeRole" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.assumeRole"></a>

```csharp
public object AssumeRole { get; set; }
```

- *Type:* object

assume_role block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#assume_role AwsProvider#assume_role}

---

##### `AssumeRoleWithWebIdentity`<sup>Optional</sup> <a name="AssumeRoleWithWebIdentity" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.assumeRoleWithWebIdentity"></a>

```csharp
public object AssumeRoleWithWebIdentity { get; set; }
```

- *Type:* object

assume_role_with_web_identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#assume_role_with_web_identity AwsProvider#assume_role_with_web_identity}

---

##### `CustomCaBundle`<sup>Optional</sup> <a name="CustomCaBundle" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.customCaBundle"></a>

```csharp
public string CustomCaBundle { get; set; }
```

- *Type:* string

File containing custom root and intermediate certificates.

Can also be configured using the `AWS_CA_BUNDLE` environment variable. (Setting `ca_bundle` in the shared config file is not supported.)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#custom_ca_bundle AwsProvider#custom_ca_bundle}

---

##### `DefaultTags`<sup>Optional</sup> <a name="DefaultTags" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.defaultTags"></a>

```csharp
public object DefaultTags { get; set; }
```

- *Type:* object

default_tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#default_tags AwsProvider#default_tags}

---

##### `Ec2MetadataServiceEndpoint`<sup>Optional</sup> <a name="Ec2MetadataServiceEndpoint" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.ec2MetadataServiceEndpoint"></a>

```csharp
public string Ec2MetadataServiceEndpoint { get; set; }
```

- *Type:* string

Address of the EC2 metadata service endpoint to use. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2_metadata_service_endpoint AwsProvider#ec2_metadata_service_endpoint}

---

##### `Ec2MetadataServiceEndpointMode`<sup>Optional</sup> <a name="Ec2MetadataServiceEndpointMode" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.ec2MetadataServiceEndpointMode"></a>

```csharp
public string Ec2MetadataServiceEndpointMode { get; set; }
```

- *Type:* string

Protocol to use with EC2 metadata service endpoint.Valid values are `IPv4` and `IPv6`. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2_metadata_service_endpoint_mode AwsProvider#ec2_metadata_service_endpoint_mode}

---

##### `Endpoints`<sup>Optional</sup> <a name="Endpoints" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.endpoints"></a>

```csharp
public object Endpoints { get; set; }
```

- *Type:* object

endpoints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#endpoints AwsProvider#endpoints}

---

##### `ForbiddenAccountIds`<sup>Optional</sup> <a name="ForbiddenAccountIds" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.forbiddenAccountIds"></a>

```csharp
public string[] ForbiddenAccountIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forbidden_account_ids AwsProvider#forbidden_account_ids}.

---

##### `HttpProxy`<sup>Optional</sup> <a name="HttpProxy" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.httpProxy"></a>

```csharp
public string HttpProxy { get; set; }
```

- *Type:* string

The address of an HTTP proxy to use when accessing the AWS API.

Can also be configured using the `HTTP_PROXY` or `HTTPS_PROXY` environment variables.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#http_proxy AwsProvider#http_proxy}

---

##### `IgnoreTags`<sup>Optional</sup> <a name="IgnoreTags" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.ignoreTags"></a>

```csharp
public object IgnoreTags { get; set; }
```

- *Type:* object

ignore_tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ignore_tags AwsProvider#ignore_tags}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.insecure"></a>

```csharp
public object Insecure { get; set; }
```

- *Type:* object

Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#insecure AwsProvider#insecure}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

The maximum number of times an AWS API request is being executed.

If the API request still fails, an error is
thrown.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#max_retries AwsProvider#max_retries}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.profile"></a>

```csharp
public string Profile { get; set; }
```

- *Type:* string

The profile for API operations. If not set, the default profile created with `aws configure` will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#profile AwsProvider#profile}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region where AWS operations will take place. Examples are us-east-1, us-west-2, etc.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#region AwsProvider#region}

---

##### `S3ForcePathStyle`<sup>Optional</sup> <a name="S3ForcePathStyle" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.s3ForcePathStyle"></a>

```csharp
public object S3ForcePathStyle { get; set; }
```

- *Type:* object

Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3_force_path_style AwsProvider#s3_force_path_style}

---

##### `S3UsePathStyle`<sup>Optional</sup> <a name="S3UsePathStyle" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.s3UsePathStyle"></a>

```csharp
public object S3UsePathStyle { get; set; }
```

- *Type:* object

Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3_use_path_style AwsProvider#s3_use_path_style}

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.secretKey"></a>

```csharp
public string SecretKey { get; set; }
```

- *Type:* string

The secret key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#secret_key AwsProvider#secret_key}

---

##### `SharedConfigFiles`<sup>Optional</sup> <a name="SharedConfigFiles" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedConfigFiles"></a>

```csharp
public string[] SharedConfigFiles { get; set; }
```

- *Type:* string[]

List of paths to shared config files. If not set, defaults to [~/.aws/config].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shared_config_files AwsProvider#shared_config_files}

---

##### `SharedCredentialsFile`<sup>Optional</sup> <a name="SharedCredentialsFile" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedCredentialsFile"></a>

```csharp
public string SharedCredentialsFile { get; set; }
```

- *Type:* string

The path to the shared credentials file. If not set, defaults to ~/.aws/credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shared_credentials_file AwsProvider#shared_credentials_file}

---

##### `SharedCredentialsFiles`<sup>Optional</sup> <a name="SharedCredentialsFiles" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedCredentialsFiles"></a>

```csharp
public string[] SharedCredentialsFiles { get; set; }
```

- *Type:* string[]

List of paths to shared credentials files. If not set, defaults to [~/.aws/credentials].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shared_credentials_files AwsProvider#shared_credentials_files}

---

##### `SkipCredentialsValidation`<sup>Optional</sup> <a name="SkipCredentialsValidation" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.skipCredentialsValidation"></a>

```csharp
public object SkipCredentialsValidation { get; set; }
```

- *Type:* object

Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_credentials_validation AwsProvider#skip_credentials_validation}

---

##### `SkipGetEc2Platforms`<sup>Optional</sup> <a name="SkipGetEc2Platforms" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.skipGetEc2Platforms"></a>

```csharp
public object SkipGetEc2Platforms { get; set; }
```

- *Type:* object

Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_get_ec2_platforms AwsProvider#skip_get_ec2_platforms}

---

##### `SkipMetadataApiCheck`<sup>Optional</sup> <a name="SkipMetadataApiCheck" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.skipMetadataApiCheck"></a>

```csharp
public string SkipMetadataApiCheck { get; set; }
```

- *Type:* string

Skip the AWS Metadata API check. Used for AWS API implementations that do not have a metadata api endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_metadata_api_check AwsProvider#skip_metadata_api_check}

---

##### `SkipRegionValidation`<sup>Optional</sup> <a name="SkipRegionValidation" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.skipRegionValidation"></a>

```csharp
public object SkipRegionValidation { get; set; }
```

- *Type:* object

Skip static validation of region name.

Used by users of alternative AWS-like APIs or users w/ access to regions that are not public (yet).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_region_validation AwsProvider#skip_region_validation}

---

##### `SkipRequestingAccountId`<sup>Optional</sup> <a name="SkipRequestingAccountId" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.skipRequestingAccountId"></a>

```csharp
public object SkipRequestingAccountId { get; set; }
```

- *Type:* object

Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_requesting_account_id AwsProvider#skip_requesting_account_id}

---

##### `StsRegion`<sup>Optional</sup> <a name="StsRegion" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.stsRegion"></a>

```csharp
public string StsRegion { get; set; }
```

- *Type:* string

The region where AWS STS operations will take place. Examples are us-east-1 and us-west-2.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sts_region AwsProvider#sts_region}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

session token. A session token is only required if you are using temporary security credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#token AwsProvider#token}

---

##### `UseDualstackEndpoint`<sup>Optional</sup> <a name="UseDualstackEndpoint" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.useDualstackEndpoint"></a>

```csharp
public object UseDualstackEndpoint { get; set; }
```

- *Type:* object

Resolve an endpoint with DualStack capability.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#use_dualstack_endpoint AwsProvider#use_dualstack_endpoint}

---

##### `UseFipsEndpoint`<sup>Optional</sup> <a name="UseFipsEndpoint" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.useFipsEndpoint"></a>

```csharp
public object UseFipsEndpoint { get; set; }
```

- *Type:* object

Resolve an endpoint with FIPS capability.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#use_fips_endpoint AwsProvider#use_fips_endpoint}

---

### AwsProviderDefaultTags <a name="AwsProviderDefaultTags" id="@cdktf/provider-aws.provider.AwsProviderDefaultTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderDefaultTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AwsProviderDefaultTags {
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource tags to default across all resources. |

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.provider.AwsProviderDefaultTags.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource tags to default across all resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#tags AwsProvider#tags}

---

### AwsProviderEndpoints <a name="AwsProviderEndpoints" id="@cdktf/provider-aws.provider.AwsProviderEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AwsProviderEndpoints {
    string Accessanalyzer = null,
    string Account = null,
    string Acm = null,
    string Acmpca = null,
    string Alexaforbusiness = null,
    string Amg = null,
    string Amp = null,
    string Amplify = null,
    string Amplifybackend = null,
    string Amplifyuibuilder = null,
    string Apigateway = null,
    string Apigatewaymanagementapi = null,
    string Apigatewayv2 = null,
    string Appautoscaling = null,
    string Appconfig = null,
    string Appconfigdata = null,
    string Appflow = null,
    string Appintegrations = null,
    string Appintegrationsservice = null,
    string Applicationautoscaling = null,
    string Applicationcostprofiler = null,
    string Applicationdiscovery = null,
    string Applicationdiscoveryservice = null,
    string Applicationinsights = null,
    string Appmesh = null,
    string Appregistry = null,
    string Apprunner = null,
    string Appstream = null,
    string Appsync = null,
    string Athena = null,
    string Auditmanager = null,
    string Augmentedairuntime = null,
    string Autoscaling = null,
    string Autoscalingplans = null,
    string Backup = null,
    string Backupgateway = null,
    string Batch = null,
    string Beanstalk = null,
    string Billingconductor = null,
    string Braket = null,
    string Budgets = null,
    string Ce = null,
    string Chime = null,
    string Chimesdkidentity = null,
    string Chimesdkmeetings = null,
    string Chimesdkmessaging = null,
    string Cloud9 = null,
    string Cloudcontrol = null,
    string Cloudcontrolapi = null,
    string Clouddirectory = null,
    string Cloudformation = null,
    string Cloudfront = null,
    string Cloudhsm = null,
    string Cloudhsmv2 = null,
    string Cloudsearch = null,
    string Cloudsearchdomain = null,
    string Cloudtrail = null,
    string Cloudwatch = null,
    string Cloudwatchevents = null,
    string Cloudwatchevidently = null,
    string Cloudwatchlog = null,
    string Cloudwatchlogs = null,
    string Cloudwatchobservabilityaccessmanager = null,
    string Cloudwatchrum = null,
    string Codeartifact = null,
    string Codebuild = null,
    string Codecommit = null,
    string Codedeploy = null,
    string Codeguruprofiler = null,
    string Codegurureviewer = null,
    string Codepipeline = null,
    string Codestar = null,
    string Codestarconnections = null,
    string Codestarnotifications = null,
    string Cognitoidentity = null,
    string Cognitoidentityprovider = null,
    string Cognitoidp = null,
    string Cognitosync = null,
    string Comprehend = null,
    string Comprehendmedical = null,
    string Computeoptimizer = null,
    string Config = null,
    string Configservice = null,
    string Connect = null,
    string Connectcontactlens = null,
    string Connectparticipant = null,
    string Connectwisdomservice = null,
    string Controltower = null,
    string Costandusagereportservice = null,
    string Costexplorer = null,
    string Cur = null,
    string Customerprofiles = null,
    string Databasemigration = null,
    string Databasemigrationservice = null,
    string Databrew = null,
    string Dataexchange = null,
    string Datapipeline = null,
    string Datasync = null,
    string Dax = null,
    string Deploy = null,
    string Detective = null,
    string Devicefarm = null,
    string Devopsguru = null,
    string Directconnect = null,
    string Directoryservice = null,
    string Discovery = null,
    string Dlm = null,
    string Dms = null,
    string Docdb = null,
    string Drs = null,
    string Ds = null,
    string Dynamodb = null,
    string Dynamodbstreams = null,
    string Ebs = null,
    string Ec2 = null,
    string Ec2Instanceconnect = null,
    string Ecr = null,
    string Ecrpublic = null,
    string Ecs = null,
    string Efs = null,
    string Eks = null,
    string Elasticache = null,
    string Elasticbeanstalk = null,
    string Elasticinference = null,
    string Elasticloadbalancing = null,
    string Elasticloadbalancingv2 = null,
    string Elasticsearch = null,
    string Elasticsearchservice = null,
    string Elastictranscoder = null,
    string Elb = null,
    string Elbv2 = null,
    string Emr = null,
    string Emrcontainers = null,
    string Emrserverless = null,
    string Es = null,
    string Eventbridge = null,
    string Events = null,
    string Evidently = null,
    string Finspace = null,
    string Finspacedata = null,
    string Firehose = null,
    string Fis = null,
    string Fms = null,
    string Forecast = null,
    string Forecastquery = null,
    string Forecastqueryservice = null,
    string Forecastservice = null,
    string Frauddetector = null,
    string Fsx = null,
    string Gamelift = null,
    string Glacier = null,
    string Globalaccelerator = null,
    string Glue = null,
    string Gluedatabrew = null,
    string Grafana = null,
    string Greengrass = null,
    string Greengrassv2 = null,
    string Groundstation = null,
    string Guardduty = null,
    string Health = null,
    string Healthlake = null,
    string Honeycode = null,
    string Iam = null,
    string Identitystore = null,
    string Imagebuilder = null,
    string Inspector = null,
    string Inspector2 = null,
    string Inspectorv2 = null,
    string Iot = null,
    string Iot1Clickdevices = null,
    string Iot1Clickdevicesservice = null,
    string Iot1Clickprojects = null,
    string Iotanalytics = null,
    string Iotdata = null,
    string Iotdataplane = null,
    string Iotdeviceadvisor = null,
    string Iotevents = null,
    string Ioteventsdata = null,
    string Iotfleethub = null,
    string Iotjobsdata = null,
    string Iotjobsdataplane = null,
    string Iotsecuretunneling = null,
    string Iotsitewise = null,
    string Iotthingsgraph = null,
    string Iottwinmaker = null,
    string Iotwireless = null,
    string Ivs = null,
    string Ivschat = null,
    string Kafka = null,
    string Kafkaconnect = null,
    string Kendra = null,
    string Keyspaces = null,
    string Kinesis = null,
    string Kinesisanalytics = null,
    string Kinesisanalyticsv2 = null,
    string Kinesisvideo = null,
    string Kinesisvideoarchivedmedia = null,
    string Kinesisvideomedia = null,
    string Kinesisvideosignaling = null,
    string Kinesisvideosignalingchannels = null,
    string Kms = null,
    string Lakeformation = null,
    string Lambda = null,
    string Lex = null,
    string Lexmodelbuilding = null,
    string Lexmodelbuildingservice = null,
    string Lexmodels = null,
    string Lexmodelsv2 = null,
    string Lexruntime = null,
    string Lexruntimeservice = null,
    string Lexruntimev2 = null,
    string Lexv2Models = null,
    string Lexv2Runtime = null,
    string Licensemanager = null,
    string Lightsail = null,
    string Location = null,
    string Locationservice = null,
    string Logs = null,
    string Lookoutequipment = null,
    string Lookoutforvision = null,
    string Lookoutmetrics = null,
    string Lookoutvision = null,
    string Machinelearning = null,
    string Macie = null,
    string Macie2 = null,
    string Managedblockchain = null,
    string Managedgrafana = null,
    string Marketplacecatalog = null,
    string Marketplacecommerceanalytics = null,
    string Marketplaceentitlement = null,
    string Marketplaceentitlementservice = null,
    string Marketplacemetering = null,
    string Mediaconnect = null,
    string Mediaconvert = null,
    string Medialive = null,
    string Mediapackage = null,
    string Mediapackagevod = null,
    string Mediastore = null,
    string Mediastoredata = null,
    string Mediatailor = null,
    string Memorydb = null,
    string Meteringmarketplace = null,
    string Mgh = null,
    string Mgn = null,
    string Migrationhub = null,
    string Migrationhubconfig = null,
    string Migrationhubrefactorspaces = null,
    string Migrationhubstrategy = null,
    string Migrationhubstrategyrecommendations = null,
    string Mobile = null,
    string Mq = null,
    string Msk = null,
    string Mturk = null,
    string Mwaa = null,
    string Neptune = null,
    string Networkfirewall = null,
    string Networkmanager = null,
    string Nimble = null,
    string Nimblestudio = null,
    string Oam = null,
    string Opensearch = null,
    string Opensearchserverless = null,
    string Opensearchservice = null,
    string Opsworks = null,
    string Opsworkscm = null,
    string Organizations = null,
    string Outposts = null,
    string Panorama = null,
    string Personalize = null,
    string Personalizeevents = null,
    string Personalizeruntime = null,
    string Pi = null,
    string Pinpoint = null,
    string Pinpointemail = null,
    string Pinpointsmsvoice = null,
    string Pipes = null,
    string Polly = null,
    string Pricing = null,
    string Prometheus = null,
    string Prometheusservice = null,
    string Proton = null,
    string Qldb = null,
    string Qldbsession = null,
    string Quicksight = null,
    string Ram = null,
    string Rbin = null,
    string Rds = null,
    string Rdsdata = null,
    string Rdsdataservice = null,
    string Recyclebin = null,
    string Redshift = null,
    string Redshiftdata = null,
    string Redshiftdataapiservice = null,
    string Redshiftserverless = null,
    string Rekognition = null,
    string Resiliencehub = null,
    string Resourceexplorer2 = null,
    string Resourcegroups = null,
    string Resourcegroupstagging = null,
    string Resourcegroupstaggingapi = null,
    string Robomaker = null,
    string Rolesanywhere = null,
    string Route53 = null,
    string Route53Domains = null,
    string Route53Recoverycluster = null,
    string Route53Recoverycontrolconfig = null,
    string Route53Recoveryreadiness = null,
    string Route53Resolver = null,
    string Rum = null,
    string S3 = null,
    string S3Api = null,
    string S3Control = null,
    string S3Outposts = null,
    string Sagemaker = null,
    string Sagemakera2Iruntime = null,
    string Sagemakeredge = null,
    string Sagemakeredgemanager = null,
    string Sagemakerfeaturestoreruntime = null,
    string Sagemakerruntime = null,
    string Savingsplans = null,
    string Scheduler = null,
    string Schemas = null,
    string Sdb = null,
    string Secretsmanager = null,
    string Securityhub = null,
    string Serverlessapplicationrepository = null,
    string Serverlessapprepo = null,
    string Serverlessrepo = null,
    string Servicecatalog = null,
    string Servicecatalogappregistry = null,
    string Servicediscovery = null,
    string Servicequotas = null,
    string Ses = null,
    string Sesv2 = null,
    string Sfn = null,
    string Shield = null,
    string Signer = null,
    string Simpledb = null,
    string Sms = null,
    string Snowball = null,
    string Snowdevicemanagement = null,
    string Sns = null,
    string Sqs = null,
    string Ssm = null,
    string Ssmcontacts = null,
    string Ssmincidents = null,
    string Sso = null,
    string Ssoadmin = null,
    string Ssooidc = null,
    string Stepfunctions = null,
    string Storagegateway = null,
    string Sts = null,
    string Support = null,
    string Swf = null,
    string Synthetics = null,
    string Textract = null,
    string Timestreamquery = null,
    string Timestreamwrite = null,
    string Transcribe = null,
    string Transcribeservice = null,
    string Transcribestreaming = null,
    string Transcribestreamingservice = null,
    string Transfer = null,
    string Translate = null,
    string Voiceid = null,
    string Waf = null,
    string Wafregional = null,
    string Wafv2 = null,
    string Wellarchitected = null,
    string Wisdom = null,
    string Workdocs = null,
    string Worklink = null,
    string Workmail = null,
    string Workmailmessageflow = null,
    string Workspaces = null,
    string Workspacesweb = null,
    string Xray = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.accessanalyzer">Accessanalyzer</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.account">Account</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.acm">Acm</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.acmpca">Acmpca</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.alexaforbusiness">Alexaforbusiness</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amg">Amg</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amp">Amp</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplify">Amplify</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplifybackend">Amplifybackend</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplifyuibuilder">Amplifyuibuilder</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigateway">Apigateway</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigatewaymanagementapi">Apigatewaymanagementapi</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigatewayv2">Apigatewayv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appautoscaling">Appautoscaling</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appconfig">Appconfig</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appconfigdata">Appconfigdata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appflow">Appflow</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appintegrations">Appintegrations</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appintegrationsservice">Appintegrationsservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationautoscaling">Applicationautoscaling</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationcostprofiler">Applicationcostprofiler</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationdiscovery">Applicationdiscovery</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationdiscoveryservice">Applicationdiscoveryservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationinsights">Applicationinsights</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appmesh">Appmesh</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appregistry">Appregistry</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apprunner">Apprunner</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appstream">Appstream</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appsync">Appsync</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.athena">Athena</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.auditmanager">Auditmanager</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.augmentedairuntime">Augmentedairuntime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.autoscaling">Autoscaling</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.autoscalingplans">Autoscalingplans</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.backup">Backup</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.backupgateway">Backupgateway</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.batch">Batch</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.beanstalk">Beanstalk</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.billingconductor">Billingconductor</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.braket">Braket</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.budgets">Budgets</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ce">Ce</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chime">Chime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkidentity">Chimesdkidentity</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkmeetings">Chimesdkmeetings</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkmessaging">Chimesdkmessaging</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloud9">Cloud9</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudcontrol">Cloudcontrol</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudcontrolapi">Cloudcontrolapi</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.clouddirectory">Clouddirectory</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudformation">Cloudformation</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudfront">Cloudfront</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudhsm">Cloudhsm</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudhsmv2">Cloudhsmv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudsearch">Cloudsearch</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudsearchdomain">Cloudsearchdomain</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudtrail">Cloudtrail</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatch">Cloudwatch</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchevents">Cloudwatchevents</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchevidently">Cloudwatchevidently</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchlog">Cloudwatchlog</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchlogs">Cloudwatchlogs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchobservabilityaccessmanager">Cloudwatchobservabilityaccessmanager</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchrum">Cloudwatchrum</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codeartifact">Codeartifact</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codebuild">Codebuild</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codecommit">Codecommit</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codedeploy">Codedeploy</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codeguruprofiler">Codeguruprofiler</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codegurureviewer">Codegurureviewer</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codepipeline">Codepipeline</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestar">Codestar</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestarconnections">Codestarconnections</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestarnotifications">Codestarnotifications</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidentity">Cognitoidentity</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidentityprovider">Cognitoidentityprovider</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidp">Cognitoidp</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitosync">Cognitosync</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.comprehend">Comprehend</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.comprehendmedical">Comprehendmedical</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.computeoptimizer">Computeoptimizer</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.config">Config</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.configservice">Configservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connect">Connect</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectcontactlens">Connectcontactlens</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectparticipant">Connectparticipant</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectwisdomservice">Connectwisdomservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.controltower">Controltower</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.costandusagereportservice">Costandusagereportservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.costexplorer">Costexplorer</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cur">Cur</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.customerprofiles">Customerprofiles</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databasemigration">Databasemigration</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databasemigrationservice">Databasemigrationservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databrew">Databrew</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dataexchange">Dataexchange</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.datapipeline">Datapipeline</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.datasync">Datasync</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dax">Dax</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.deploy">Deploy</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.detective">Detective</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.devicefarm">Devicefarm</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.devopsguru">Devopsguru</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.directconnect">Directconnect</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.directoryservice">Directoryservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.discovery">Discovery</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dlm">Dlm</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dms">Dms</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.docdb">Docdb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.drs">Drs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ds">Ds</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dynamodb">Dynamodb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dynamodbstreams">Dynamodbstreams</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ebs">Ebs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ec2">Ec2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ec2Instanceconnect">Ec2Instanceconnect</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecr">Ecr</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecrpublic">Ecrpublic</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecs">Ecs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.efs">Efs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.eks">Eks</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticache">Elasticache</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticbeanstalk">Elasticbeanstalk</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticinference">Elasticinference</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticloadbalancing">Elasticloadbalancing</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticloadbalancingv2">Elasticloadbalancingv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticsearch">Elasticsearch</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticsearchservice">Elasticsearchservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elastictranscoder">Elastictranscoder</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elb">Elb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elbv2">Elbv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emr">Emr</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emrcontainers">Emrcontainers</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emrserverless">Emrserverless</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.es">Es</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.eventbridge">Eventbridge</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.events">Events</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.evidently">Evidently</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.finspace">Finspace</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.finspacedata">Finspacedata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.firehose">Firehose</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fis">Fis</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fms">Fms</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecast">Forecast</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastquery">Forecastquery</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastqueryservice">Forecastqueryservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastservice">Forecastservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.frauddetector">Frauddetector</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fsx">Fsx</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.gamelift">Gamelift</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.glacier">Glacier</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.globalaccelerator">Globalaccelerator</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.glue">Glue</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.gluedatabrew">Gluedatabrew</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.grafana">Grafana</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.greengrass">Greengrass</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.greengrassv2">Greengrassv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.groundstation">Groundstation</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.guardduty">Guardduty</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.health">Health</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.healthlake">Healthlake</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.honeycode">Honeycode</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iam">Iam</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.identitystore">Identitystore</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.imagebuilder">Imagebuilder</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspector">Inspector</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspector2">Inspector2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspectorv2">Inspectorv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot">Iot</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickdevices">Iot1Clickdevices</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickdevicesservice">Iot1Clickdevicesservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickprojects">Iot1Clickprojects</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotanalytics">Iotanalytics</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdata">Iotdata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdataplane">Iotdataplane</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdeviceadvisor">Iotdeviceadvisor</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotevents">Iotevents</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ioteventsdata">Ioteventsdata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotfleethub">Iotfleethub</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotjobsdata">Iotjobsdata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotjobsdataplane">Iotjobsdataplane</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotsecuretunneling">Iotsecuretunneling</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotsitewise">Iotsitewise</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotthingsgraph">Iotthingsgraph</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iottwinmaker">Iottwinmaker</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotwireless">Iotwireless</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ivs">Ivs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ivschat">Ivschat</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kafka">Kafka</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kafkaconnect">Kafkaconnect</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kendra">Kendra</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.keyspaces">Keyspaces</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesis">Kinesis</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisanalytics">Kinesisanalytics</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisanalyticsv2">Kinesisanalyticsv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideo">Kinesisvideo</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideoarchivedmedia">Kinesisvideoarchivedmedia</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideomedia">Kinesisvideomedia</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideosignaling">Kinesisvideosignaling</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideosignalingchannels">Kinesisvideosignalingchannels</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kms">Kms</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lakeformation">Lakeformation</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lambda">Lambda</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lex">Lex</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelbuilding">Lexmodelbuilding</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelbuildingservice">Lexmodelbuildingservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodels">Lexmodels</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelsv2">Lexmodelsv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntime">Lexruntime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntimeservice">Lexruntimeservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntimev2">Lexruntimev2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexv2Models">Lexv2Models</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexv2Runtime">Lexv2Runtime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.licensemanager">Licensemanager</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lightsail">Lightsail</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.location">Location</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.locationservice">Locationservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.logs">Logs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutequipment">Lookoutequipment</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutforvision">Lookoutforvision</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutmetrics">Lookoutmetrics</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutvision">Lookoutvision</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.machinelearning">Machinelearning</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.macie">Macie</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.macie2">Macie2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.managedblockchain">Managedblockchain</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.managedgrafana">Managedgrafana</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacecatalog">Marketplacecatalog</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacecommerceanalytics">Marketplacecommerceanalytics</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplaceentitlement">Marketplaceentitlement</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplaceentitlementservice">Marketplaceentitlementservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacemetering">Marketplacemetering</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediaconnect">Mediaconnect</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediaconvert">Mediaconvert</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.medialive">Medialive</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediapackage">Mediapackage</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediapackagevod">Mediapackagevod</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediastore">Mediastore</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediastoredata">Mediastoredata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediatailor">Mediatailor</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.memorydb">Memorydb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.meteringmarketplace">Meteringmarketplace</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mgh">Mgh</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mgn">Mgn</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhub">Migrationhub</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubconfig">Migrationhubconfig</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubrefactorspaces">Migrationhubrefactorspaces</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubstrategy">Migrationhubstrategy</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubstrategyrecommendations">Migrationhubstrategyrecommendations</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mobile">Mobile</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mq">Mq</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.msk">Msk</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mturk">Mturk</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mwaa">Mwaa</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.neptune">Neptune</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.networkfirewall">Networkfirewall</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.networkmanager">Networkmanager</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.nimble">Nimble</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.nimblestudio">Nimblestudio</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.oam">Oam</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearch">Opensearch</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearchserverless">Opensearchserverless</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearchservice">Opensearchservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opsworks">Opsworks</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opsworkscm">Opsworkscm</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.organizations">Organizations</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.outposts">Outposts</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.panorama">Panorama</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalize">Personalize</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalizeevents">Personalizeevents</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalizeruntime">Personalizeruntime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pi">Pi</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpoint">Pinpoint</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpointemail">Pinpointemail</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpointsmsvoice">Pinpointsmsvoice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pipes">Pipes</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.polly">Polly</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pricing">Pricing</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.prometheus">Prometheus</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.prometheusservice">Prometheusservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.proton">Proton</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.qldb">Qldb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.qldbsession">Qldbsession</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.quicksight">Quicksight</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ram">Ram</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rbin">Rbin</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rds">Rds</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rdsdata">Rdsdata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rdsdataservice">Rdsdataservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.recyclebin">Recyclebin</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshift">Redshift</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftdata">Redshiftdata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftdataapiservice">Redshiftdataapiservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftserverless">Redshiftserverless</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rekognition">Rekognition</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resiliencehub">Resiliencehub</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourceexplorer2">Resourceexplorer2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroups">Resourcegroups</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroupstagging">Resourcegroupstagging</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroupstaggingapi">Resourcegroupstaggingapi</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.robomaker">Robomaker</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rolesanywhere">Rolesanywhere</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53">Route53</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Domains">Route53Domains</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoverycluster">Route53Recoverycluster</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoverycontrolconfig">Route53Recoverycontrolconfig</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoveryreadiness">Route53Recoveryreadiness</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Resolver">Route53Resolver</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rum">Rum</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3">S3</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Api">S3Api</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Control">S3Control</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Outposts">S3Outposts</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemaker">Sagemaker</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakera2Iruntime">Sagemakera2Iruntime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakeredge">Sagemakeredge</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakeredgemanager">Sagemakeredgemanager</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakerfeaturestoreruntime">Sagemakerfeaturestoreruntime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakerruntime">Sagemakerruntime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.savingsplans">Savingsplans</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.scheduler">Scheduler</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.schemas">Schemas</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sdb">Sdb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.secretsmanager">Secretsmanager</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.securityhub">Securityhub</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessapplicationrepository">Serverlessapplicationrepository</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessapprepo">Serverlessapprepo</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessrepo">Serverlessrepo</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicecatalog">Servicecatalog</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicecatalogappregistry">Servicecatalogappregistry</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicediscovery">Servicediscovery</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicequotas">Servicequotas</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ses">Ses</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sesv2">Sesv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sfn">Sfn</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.shield">Shield</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.signer">Signer</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.simpledb">Simpledb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sms">Sms</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.snowball">Snowball</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.snowdevicemanagement">Snowdevicemanagement</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sns">Sns</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sqs">Sqs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssm">Ssm</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssmcontacts">Ssmcontacts</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssmincidents">Ssmincidents</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sso">Sso</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssoadmin">Ssoadmin</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssooidc">Ssooidc</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.stepfunctions">Stepfunctions</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.storagegateway">Storagegateway</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sts">Sts</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.support">Support</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.swf">Swf</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.synthetics">Synthetics</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.textract">Textract</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.timestreamquery">Timestreamquery</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.timestreamwrite">Timestreamwrite</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribe">Transcribe</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribeservice">Transcribeservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribestreaming">Transcribestreaming</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribestreamingservice">Transcribestreamingservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transfer">Transfer</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.translate">Translate</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.voiceid">Voiceid</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.waf">Waf</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wafregional">Wafregional</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wafv2">Wafv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wellarchitected">Wellarchitected</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wisdom">Wisdom</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workdocs">Workdocs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.worklink">Worklink</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workmail">Workmail</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workmailmessageflow">Workmailmessageflow</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workspaces">Workspaces</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workspacesweb">Workspacesweb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.xray">Xray</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |

---

##### `Accessanalyzer`<sup>Optional</sup> <a name="Accessanalyzer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.accessanalyzer"></a>

```csharp
public string Accessanalyzer { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#accessanalyzer AwsProvider#accessanalyzer}

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.account"></a>

```csharp
public string Account { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#account AwsProvider#account}

---

##### `Acm`<sup>Optional</sup> <a name="Acm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.acm"></a>

```csharp
public string Acm { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#acm AwsProvider#acm}

---

##### `Acmpca`<sup>Optional</sup> <a name="Acmpca" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.acmpca"></a>

```csharp
public string Acmpca { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#acmpca AwsProvider#acmpca}

---

##### `Alexaforbusiness`<sup>Optional</sup> <a name="Alexaforbusiness" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.alexaforbusiness"></a>

```csharp
public string Alexaforbusiness { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#alexaforbusiness AwsProvider#alexaforbusiness}

---

##### `Amg`<sup>Optional</sup> <a name="Amg" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amg"></a>

```csharp
public string Amg { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amg AwsProvider#amg}

---

##### `Amp`<sup>Optional</sup> <a name="Amp" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amp"></a>

```csharp
public string Amp { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amp AwsProvider#amp}

---

##### `Amplify`<sup>Optional</sup> <a name="Amplify" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplify"></a>

```csharp
public string Amplify { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amplify AwsProvider#amplify}

---

##### `Amplifybackend`<sup>Optional</sup> <a name="Amplifybackend" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplifybackend"></a>

```csharp
public string Amplifybackend { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amplifybackend AwsProvider#amplifybackend}

---

##### `Amplifyuibuilder`<sup>Optional</sup> <a name="Amplifyuibuilder" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplifyuibuilder"></a>

```csharp
public string Amplifyuibuilder { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amplifyuibuilder AwsProvider#amplifyuibuilder}

---

##### `Apigateway`<sup>Optional</sup> <a name="Apigateway" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigateway"></a>

```csharp
public string Apigateway { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#apigateway AwsProvider#apigateway}

---

##### `Apigatewaymanagementapi`<sup>Optional</sup> <a name="Apigatewaymanagementapi" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigatewaymanagementapi"></a>

```csharp
public string Apigatewaymanagementapi { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#apigatewaymanagementapi AwsProvider#apigatewaymanagementapi}

---

##### `Apigatewayv2`<sup>Optional</sup> <a name="Apigatewayv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigatewayv2"></a>

```csharp
public string Apigatewayv2 { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#apigatewayv2 AwsProvider#apigatewayv2}

---

##### `Appautoscaling`<sup>Optional</sup> <a name="Appautoscaling" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appautoscaling"></a>

```csharp
public string Appautoscaling { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appautoscaling AwsProvider#appautoscaling}

---

##### `Appconfig`<sup>Optional</sup> <a name="Appconfig" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appconfig"></a>

```csharp
public string Appconfig { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appconfig AwsProvider#appconfig}

---

##### `Appconfigdata`<sup>Optional</sup> <a name="Appconfigdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appconfigdata"></a>

```csharp
public string Appconfigdata { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appconfigdata AwsProvider#appconfigdata}

---

##### `Appflow`<sup>Optional</sup> <a name="Appflow" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appflow"></a>

```csharp
public string Appflow { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appflow AwsProvider#appflow}

---

##### `Appintegrations`<sup>Optional</sup> <a name="Appintegrations" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appintegrations"></a>

```csharp
public string Appintegrations { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appintegrations AwsProvider#appintegrations}

---

##### `Appintegrationsservice`<sup>Optional</sup> <a name="Appintegrationsservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appintegrationsservice"></a>

```csharp
public string Appintegrationsservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appintegrationsservice AwsProvider#appintegrationsservice}

---

##### `Applicationautoscaling`<sup>Optional</sup> <a name="Applicationautoscaling" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationautoscaling"></a>

```csharp
public string Applicationautoscaling { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationautoscaling AwsProvider#applicationautoscaling}

---

##### `Applicationcostprofiler`<sup>Optional</sup> <a name="Applicationcostprofiler" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationcostprofiler"></a>

```csharp
public string Applicationcostprofiler { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationcostprofiler AwsProvider#applicationcostprofiler}

---

##### `Applicationdiscovery`<sup>Optional</sup> <a name="Applicationdiscovery" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationdiscovery"></a>

```csharp
public string Applicationdiscovery { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationdiscovery AwsProvider#applicationdiscovery}

---

##### `Applicationdiscoveryservice`<sup>Optional</sup> <a name="Applicationdiscoveryservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationdiscoveryservice"></a>

```csharp
public string Applicationdiscoveryservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationdiscoveryservice AwsProvider#applicationdiscoveryservice}

---

##### `Applicationinsights`<sup>Optional</sup> <a name="Applicationinsights" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationinsights"></a>

```csharp
public string Applicationinsights { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationinsights AwsProvider#applicationinsights}

---

##### `Appmesh`<sup>Optional</sup> <a name="Appmesh" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appmesh"></a>

```csharp
public string Appmesh { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appmesh AwsProvider#appmesh}

---

##### `Appregistry`<sup>Optional</sup> <a name="Appregistry" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appregistry"></a>

```csharp
public string Appregistry { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appregistry AwsProvider#appregistry}

---

##### `Apprunner`<sup>Optional</sup> <a name="Apprunner" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apprunner"></a>

```csharp
public string Apprunner { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#apprunner AwsProvider#apprunner}

---

##### `Appstream`<sup>Optional</sup> <a name="Appstream" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appstream"></a>

```csharp
public string Appstream { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appstream AwsProvider#appstream}

---

##### `Appsync`<sup>Optional</sup> <a name="Appsync" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appsync"></a>

```csharp
public string Appsync { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appsync AwsProvider#appsync}

---

##### `Athena`<sup>Optional</sup> <a name="Athena" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.athena"></a>

```csharp
public string Athena { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#athena AwsProvider#athena}

---

##### `Auditmanager`<sup>Optional</sup> <a name="Auditmanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.auditmanager"></a>

```csharp
public string Auditmanager { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#auditmanager AwsProvider#auditmanager}

---

##### `Augmentedairuntime`<sup>Optional</sup> <a name="Augmentedairuntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.augmentedairuntime"></a>

```csharp
public string Augmentedairuntime { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#augmentedairuntime AwsProvider#augmentedairuntime}

---

##### `Autoscaling`<sup>Optional</sup> <a name="Autoscaling" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.autoscaling"></a>

```csharp
public string Autoscaling { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#autoscaling AwsProvider#autoscaling}

---

##### `Autoscalingplans`<sup>Optional</sup> <a name="Autoscalingplans" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.autoscalingplans"></a>

```csharp
public string Autoscalingplans { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#autoscalingplans AwsProvider#autoscalingplans}

---

##### `Backup`<sup>Optional</sup> <a name="Backup" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.backup"></a>

```csharp
public string Backup { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#backup AwsProvider#backup}

---

##### `Backupgateway`<sup>Optional</sup> <a name="Backupgateway" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.backupgateway"></a>

```csharp
public string Backupgateway { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#backupgateway AwsProvider#backupgateway}

---

##### `Batch`<sup>Optional</sup> <a name="Batch" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.batch"></a>

```csharp
public string Batch { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#batch AwsProvider#batch}

---

##### `Beanstalk`<sup>Optional</sup> <a name="Beanstalk" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.beanstalk"></a>

```csharp
public string Beanstalk { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#beanstalk AwsProvider#beanstalk}

---

##### `Billingconductor`<sup>Optional</sup> <a name="Billingconductor" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.billingconductor"></a>

```csharp
public string Billingconductor { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#billingconductor AwsProvider#billingconductor}

---

##### `Braket`<sup>Optional</sup> <a name="Braket" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.braket"></a>

```csharp
public string Braket { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#braket AwsProvider#braket}

---

##### `Budgets`<sup>Optional</sup> <a name="Budgets" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.budgets"></a>

```csharp
public string Budgets { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#budgets AwsProvider#budgets}

---

##### `Ce`<sup>Optional</sup> <a name="Ce" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ce"></a>

```csharp
public string Ce { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ce AwsProvider#ce}

---

##### `Chime`<sup>Optional</sup> <a name="Chime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chime"></a>

```csharp
public string Chime { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#chime AwsProvider#chime}

---

##### `Chimesdkidentity`<sup>Optional</sup> <a name="Chimesdkidentity" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkidentity"></a>

```csharp
public string Chimesdkidentity { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#chimesdkidentity AwsProvider#chimesdkidentity}

---

##### `Chimesdkmeetings`<sup>Optional</sup> <a name="Chimesdkmeetings" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkmeetings"></a>

```csharp
public string Chimesdkmeetings { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#chimesdkmeetings AwsProvider#chimesdkmeetings}

---

##### `Chimesdkmessaging`<sup>Optional</sup> <a name="Chimesdkmessaging" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkmessaging"></a>

```csharp
public string Chimesdkmessaging { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#chimesdkmessaging AwsProvider#chimesdkmessaging}

---

##### `Cloud9`<sup>Optional</sup> <a name="Cloud9" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloud9"></a>

```csharp
public string Cloud9 { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloud9 AwsProvider#cloud9}

---

##### `Cloudcontrol`<sup>Optional</sup> <a name="Cloudcontrol" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudcontrol"></a>

```csharp
public string Cloudcontrol { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudcontrol AwsProvider#cloudcontrol}

---

##### `Cloudcontrolapi`<sup>Optional</sup> <a name="Cloudcontrolapi" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudcontrolapi"></a>

```csharp
public string Cloudcontrolapi { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudcontrolapi AwsProvider#cloudcontrolapi}

---

##### `Clouddirectory`<sup>Optional</sup> <a name="Clouddirectory" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.clouddirectory"></a>

```csharp
public string Clouddirectory { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#clouddirectory AwsProvider#clouddirectory}

---

##### `Cloudformation`<sup>Optional</sup> <a name="Cloudformation" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudformation"></a>

```csharp
public string Cloudformation { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudformation AwsProvider#cloudformation}

---

##### `Cloudfront`<sup>Optional</sup> <a name="Cloudfront" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudfront"></a>

```csharp
public string Cloudfront { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudfront AwsProvider#cloudfront}

---

##### `Cloudhsm`<sup>Optional</sup> <a name="Cloudhsm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudhsm"></a>

```csharp
public string Cloudhsm { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudhsm AwsProvider#cloudhsm}

---

##### `Cloudhsmv2`<sup>Optional</sup> <a name="Cloudhsmv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudhsmv2"></a>

```csharp
public string Cloudhsmv2 { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudhsmv2 AwsProvider#cloudhsmv2}

---

##### `Cloudsearch`<sup>Optional</sup> <a name="Cloudsearch" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudsearch"></a>

```csharp
public string Cloudsearch { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudsearch AwsProvider#cloudsearch}

---

##### `Cloudsearchdomain`<sup>Optional</sup> <a name="Cloudsearchdomain" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudsearchdomain"></a>

```csharp
public string Cloudsearchdomain { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudsearchdomain AwsProvider#cloudsearchdomain}

---

##### `Cloudtrail`<sup>Optional</sup> <a name="Cloudtrail" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudtrail"></a>

```csharp
public string Cloudtrail { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudtrail AwsProvider#cloudtrail}

---

##### `Cloudwatch`<sup>Optional</sup> <a name="Cloudwatch" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatch"></a>

```csharp
public string Cloudwatch { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatch AwsProvider#cloudwatch}

---

##### `Cloudwatchevents`<sup>Optional</sup> <a name="Cloudwatchevents" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchevents"></a>

```csharp
public string Cloudwatchevents { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchevents AwsProvider#cloudwatchevents}

---

##### `Cloudwatchevidently`<sup>Optional</sup> <a name="Cloudwatchevidently" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchevidently"></a>

```csharp
public string Cloudwatchevidently { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchevidently AwsProvider#cloudwatchevidently}

---

##### `Cloudwatchlog`<sup>Optional</sup> <a name="Cloudwatchlog" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchlog"></a>

```csharp
public string Cloudwatchlog { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchlog AwsProvider#cloudwatchlog}

---

##### `Cloudwatchlogs`<sup>Optional</sup> <a name="Cloudwatchlogs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchlogs"></a>

```csharp
public string Cloudwatchlogs { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchlogs AwsProvider#cloudwatchlogs}

---

##### `Cloudwatchobservabilityaccessmanager`<sup>Optional</sup> <a name="Cloudwatchobservabilityaccessmanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchobservabilityaccessmanager"></a>

```csharp
public string Cloudwatchobservabilityaccessmanager { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchobservabilityaccessmanager AwsProvider#cloudwatchobservabilityaccessmanager}

---

##### `Cloudwatchrum`<sup>Optional</sup> <a name="Cloudwatchrum" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchrum"></a>

```csharp
public string Cloudwatchrum { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchrum AwsProvider#cloudwatchrum}

---

##### `Codeartifact`<sup>Optional</sup> <a name="Codeartifact" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codeartifact"></a>

```csharp
public string Codeartifact { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codeartifact AwsProvider#codeartifact}

---

##### `Codebuild`<sup>Optional</sup> <a name="Codebuild" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codebuild"></a>

```csharp
public string Codebuild { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codebuild AwsProvider#codebuild}

---

##### `Codecommit`<sup>Optional</sup> <a name="Codecommit" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codecommit"></a>

```csharp
public string Codecommit { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codecommit AwsProvider#codecommit}

---

##### `Codedeploy`<sup>Optional</sup> <a name="Codedeploy" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codedeploy"></a>

```csharp
public string Codedeploy { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codedeploy AwsProvider#codedeploy}

---

##### `Codeguruprofiler`<sup>Optional</sup> <a name="Codeguruprofiler" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codeguruprofiler"></a>

```csharp
public string Codeguruprofiler { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codeguruprofiler AwsProvider#codeguruprofiler}

---

##### `Codegurureviewer`<sup>Optional</sup> <a name="Codegurureviewer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codegurureviewer"></a>

```csharp
public string Codegurureviewer { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codegurureviewer AwsProvider#codegurureviewer}

---

##### `Codepipeline`<sup>Optional</sup> <a name="Codepipeline" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codepipeline"></a>

```csharp
public string Codepipeline { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codepipeline AwsProvider#codepipeline}

---

##### `Codestar`<sup>Optional</sup> <a name="Codestar" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestar"></a>

```csharp
public string Codestar { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codestar AwsProvider#codestar}

---

##### `Codestarconnections`<sup>Optional</sup> <a name="Codestarconnections" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestarconnections"></a>

```csharp
public string Codestarconnections { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codestarconnections AwsProvider#codestarconnections}

---

##### `Codestarnotifications`<sup>Optional</sup> <a name="Codestarnotifications" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestarnotifications"></a>

```csharp
public string Codestarnotifications { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codestarnotifications AwsProvider#codestarnotifications}

---

##### `Cognitoidentity`<sup>Optional</sup> <a name="Cognitoidentity" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidentity"></a>

```csharp
public string Cognitoidentity { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cognitoidentity AwsProvider#cognitoidentity}

---

##### `Cognitoidentityprovider`<sup>Optional</sup> <a name="Cognitoidentityprovider" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidentityprovider"></a>

```csharp
public string Cognitoidentityprovider { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cognitoidentityprovider AwsProvider#cognitoidentityprovider}

---

##### `Cognitoidp`<sup>Optional</sup> <a name="Cognitoidp" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidp"></a>

```csharp
public string Cognitoidp { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cognitoidp AwsProvider#cognitoidp}

---

##### `Cognitosync`<sup>Optional</sup> <a name="Cognitosync" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitosync"></a>

```csharp
public string Cognitosync { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cognitosync AwsProvider#cognitosync}

---

##### `Comprehend`<sup>Optional</sup> <a name="Comprehend" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.comprehend"></a>

```csharp
public string Comprehend { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#comprehend AwsProvider#comprehend}

---

##### `Comprehendmedical`<sup>Optional</sup> <a name="Comprehendmedical" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.comprehendmedical"></a>

```csharp
public string Comprehendmedical { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#comprehendmedical AwsProvider#comprehendmedical}

---

##### `Computeoptimizer`<sup>Optional</sup> <a name="Computeoptimizer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.computeoptimizer"></a>

```csharp
public string Computeoptimizer { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#computeoptimizer AwsProvider#computeoptimizer}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.config"></a>

```csharp
public string Config { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#config AwsProvider#config}

---

##### `Configservice`<sup>Optional</sup> <a name="Configservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.configservice"></a>

```csharp
public string Configservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#configservice AwsProvider#configservice}

---

##### `Connect`<sup>Optional</sup> <a name="Connect" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connect"></a>

```csharp
public string Connect { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#connect AwsProvider#connect}

---

##### `Connectcontactlens`<sup>Optional</sup> <a name="Connectcontactlens" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectcontactlens"></a>

```csharp
public string Connectcontactlens { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#connectcontactlens AwsProvider#connectcontactlens}

---

##### `Connectparticipant`<sup>Optional</sup> <a name="Connectparticipant" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectparticipant"></a>

```csharp
public string Connectparticipant { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#connectparticipant AwsProvider#connectparticipant}

---

##### `Connectwisdomservice`<sup>Optional</sup> <a name="Connectwisdomservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectwisdomservice"></a>

```csharp
public string Connectwisdomservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#connectwisdomservice AwsProvider#connectwisdomservice}

---

##### `Controltower`<sup>Optional</sup> <a name="Controltower" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.controltower"></a>

```csharp
public string Controltower { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#controltower AwsProvider#controltower}

---

##### `Costandusagereportservice`<sup>Optional</sup> <a name="Costandusagereportservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.costandusagereportservice"></a>

```csharp
public string Costandusagereportservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#costandusagereportservice AwsProvider#costandusagereportservice}

---

##### `Costexplorer`<sup>Optional</sup> <a name="Costexplorer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.costexplorer"></a>

```csharp
public string Costexplorer { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#costexplorer AwsProvider#costexplorer}

---

##### `Cur`<sup>Optional</sup> <a name="Cur" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cur"></a>

```csharp
public string Cur { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cur AwsProvider#cur}

---

##### `Customerprofiles`<sup>Optional</sup> <a name="Customerprofiles" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.customerprofiles"></a>

```csharp
public string Customerprofiles { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#customerprofiles AwsProvider#customerprofiles}

---

##### `Databasemigration`<sup>Optional</sup> <a name="Databasemigration" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databasemigration"></a>

```csharp
public string Databasemigration { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#databasemigration AwsProvider#databasemigration}

---

##### `Databasemigrationservice`<sup>Optional</sup> <a name="Databasemigrationservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databasemigrationservice"></a>

```csharp
public string Databasemigrationservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#databasemigrationservice AwsProvider#databasemigrationservice}

---

##### `Databrew`<sup>Optional</sup> <a name="Databrew" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databrew"></a>

```csharp
public string Databrew { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#databrew AwsProvider#databrew}

---

##### `Dataexchange`<sup>Optional</sup> <a name="Dataexchange" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dataexchange"></a>

```csharp
public string Dataexchange { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dataexchange AwsProvider#dataexchange}

---

##### `Datapipeline`<sup>Optional</sup> <a name="Datapipeline" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.datapipeline"></a>

```csharp
public string Datapipeline { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#datapipeline AwsProvider#datapipeline}

---

##### `Datasync`<sup>Optional</sup> <a name="Datasync" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.datasync"></a>

```csharp
public string Datasync { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#datasync AwsProvider#datasync}

---

##### `Dax`<sup>Optional</sup> <a name="Dax" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dax"></a>

```csharp
public string Dax { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dax AwsProvider#dax}

---

##### `Deploy`<sup>Optional</sup> <a name="Deploy" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.deploy"></a>

```csharp
public string Deploy { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#deploy AwsProvider#deploy}

---

##### `Detective`<sup>Optional</sup> <a name="Detective" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.detective"></a>

```csharp
public string Detective { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#detective AwsProvider#detective}

---

##### `Devicefarm`<sup>Optional</sup> <a name="Devicefarm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.devicefarm"></a>

```csharp
public string Devicefarm { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#devicefarm AwsProvider#devicefarm}

---

##### `Devopsguru`<sup>Optional</sup> <a name="Devopsguru" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.devopsguru"></a>

```csharp
public string Devopsguru { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#devopsguru AwsProvider#devopsguru}

---

##### `Directconnect`<sup>Optional</sup> <a name="Directconnect" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.directconnect"></a>

```csharp
public string Directconnect { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#directconnect AwsProvider#directconnect}

---

##### `Directoryservice`<sup>Optional</sup> <a name="Directoryservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.directoryservice"></a>

```csharp
public string Directoryservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#directoryservice AwsProvider#directoryservice}

---

##### `Discovery`<sup>Optional</sup> <a name="Discovery" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.discovery"></a>

```csharp
public string Discovery { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#discovery AwsProvider#discovery}

---

##### `Dlm`<sup>Optional</sup> <a name="Dlm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dlm"></a>

```csharp
public string Dlm { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dlm AwsProvider#dlm}

---

##### `Dms`<sup>Optional</sup> <a name="Dms" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dms"></a>

```csharp
public string Dms { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dms AwsProvider#dms}

---

##### `Docdb`<sup>Optional</sup> <a name="Docdb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.docdb"></a>

```csharp
public string Docdb { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#docdb AwsProvider#docdb}

---

##### `Drs`<sup>Optional</sup> <a name="Drs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.drs"></a>

```csharp
public string Drs { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#drs AwsProvider#drs}

---

##### `Ds`<sup>Optional</sup> <a name="Ds" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ds"></a>

```csharp
public string Ds { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ds AwsProvider#ds}

---

##### `Dynamodb`<sup>Optional</sup> <a name="Dynamodb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dynamodb"></a>

```csharp
public string Dynamodb { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dynamodb AwsProvider#dynamodb}

---

##### `Dynamodbstreams`<sup>Optional</sup> <a name="Dynamodbstreams" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dynamodbstreams"></a>

```csharp
public string Dynamodbstreams { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dynamodbstreams AwsProvider#dynamodbstreams}

---

##### `Ebs`<sup>Optional</sup> <a name="Ebs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ebs"></a>

```csharp
public string Ebs { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ebs AwsProvider#ebs}

---

##### `Ec2`<sup>Optional</sup> <a name="Ec2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ec2"></a>

```csharp
public string Ec2 { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2 AwsProvider#ec2}

---

##### `Ec2Instanceconnect`<sup>Optional</sup> <a name="Ec2Instanceconnect" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ec2Instanceconnect"></a>

```csharp
public string Ec2Instanceconnect { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2instanceconnect AwsProvider#ec2instanceconnect}

---

##### `Ecr`<sup>Optional</sup> <a name="Ecr" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecr"></a>

```csharp
public string Ecr { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ecr AwsProvider#ecr}

---

##### `Ecrpublic`<sup>Optional</sup> <a name="Ecrpublic" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecrpublic"></a>

```csharp
public string Ecrpublic { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ecrpublic AwsProvider#ecrpublic}

---

##### `Ecs`<sup>Optional</sup> <a name="Ecs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecs"></a>

```csharp
public string Ecs { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ecs AwsProvider#ecs}

---

##### `Efs`<sup>Optional</sup> <a name="Efs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.efs"></a>

```csharp
public string Efs { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#efs AwsProvider#efs}

---

##### `Eks`<sup>Optional</sup> <a name="Eks" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.eks"></a>

```csharp
public string Eks { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#eks AwsProvider#eks}

---

##### `Elasticache`<sup>Optional</sup> <a name="Elasticache" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticache"></a>

```csharp
public string Elasticache { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticache AwsProvider#elasticache}

---

##### `Elasticbeanstalk`<sup>Optional</sup> <a name="Elasticbeanstalk" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticbeanstalk"></a>

```csharp
public string Elasticbeanstalk { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticbeanstalk AwsProvider#elasticbeanstalk}

---

##### `Elasticinference`<sup>Optional</sup> <a name="Elasticinference" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticinference"></a>

```csharp
public string Elasticinference { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticinference AwsProvider#elasticinference}

---

##### `Elasticloadbalancing`<sup>Optional</sup> <a name="Elasticloadbalancing" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticloadbalancing"></a>

```csharp
public string Elasticloadbalancing { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticloadbalancing AwsProvider#elasticloadbalancing}

---

##### `Elasticloadbalancingv2`<sup>Optional</sup> <a name="Elasticloadbalancingv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticloadbalancingv2"></a>

```csharp
public string Elasticloadbalancingv2 { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticloadbalancingv2 AwsProvider#elasticloadbalancingv2}

---

##### `Elasticsearch`<sup>Optional</sup> <a name="Elasticsearch" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticsearch"></a>

```csharp
public string Elasticsearch { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticsearch AwsProvider#elasticsearch}

---

##### `Elasticsearchservice`<sup>Optional</sup> <a name="Elasticsearchservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticsearchservice"></a>

```csharp
public string Elasticsearchservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticsearchservice AwsProvider#elasticsearchservice}

---

##### `Elastictranscoder`<sup>Optional</sup> <a name="Elastictranscoder" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elastictranscoder"></a>

```csharp
public string Elastictranscoder { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elastictranscoder AwsProvider#elastictranscoder}

---

##### `Elb`<sup>Optional</sup> <a name="Elb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elb"></a>

```csharp
public string Elb { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elb AwsProvider#elb}

---

##### `Elbv2`<sup>Optional</sup> <a name="Elbv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elbv2"></a>

```csharp
public string Elbv2 { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elbv2 AwsProvider#elbv2}

---

##### `Emr`<sup>Optional</sup> <a name="Emr" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emr"></a>

```csharp
public string Emr { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#emr AwsProvider#emr}

---

##### `Emrcontainers`<sup>Optional</sup> <a name="Emrcontainers" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emrcontainers"></a>

```csharp
public string Emrcontainers { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#emrcontainers AwsProvider#emrcontainers}

---

##### `Emrserverless`<sup>Optional</sup> <a name="Emrserverless" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emrserverless"></a>

```csharp
public string Emrserverless { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#emrserverless AwsProvider#emrserverless}

---

##### `Es`<sup>Optional</sup> <a name="Es" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.es"></a>

```csharp
public string Es { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#es AwsProvider#es}

---

##### `Eventbridge`<sup>Optional</sup> <a name="Eventbridge" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.eventbridge"></a>

```csharp
public string Eventbridge { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#eventbridge AwsProvider#eventbridge}

---

##### `Events`<sup>Optional</sup> <a name="Events" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.events"></a>

```csharp
public string Events { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#events AwsProvider#events}

---

##### `Evidently`<sup>Optional</sup> <a name="Evidently" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.evidently"></a>

```csharp
public string Evidently { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#evidently AwsProvider#evidently}

---

##### `Finspace`<sup>Optional</sup> <a name="Finspace" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.finspace"></a>

```csharp
public string Finspace { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#finspace AwsProvider#finspace}

---

##### `Finspacedata`<sup>Optional</sup> <a name="Finspacedata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.finspacedata"></a>

```csharp
public string Finspacedata { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#finspacedata AwsProvider#finspacedata}

---

##### `Firehose`<sup>Optional</sup> <a name="Firehose" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.firehose"></a>

```csharp
public string Firehose { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#firehose AwsProvider#firehose}

---

##### `Fis`<sup>Optional</sup> <a name="Fis" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fis"></a>

```csharp
public string Fis { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#fis AwsProvider#fis}

---

##### `Fms`<sup>Optional</sup> <a name="Fms" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fms"></a>

```csharp
public string Fms { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#fms AwsProvider#fms}

---

##### `Forecast`<sup>Optional</sup> <a name="Forecast" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecast"></a>

```csharp
public string Forecast { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forecast AwsProvider#forecast}

---

##### `Forecastquery`<sup>Optional</sup> <a name="Forecastquery" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastquery"></a>

```csharp
public string Forecastquery { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forecastquery AwsProvider#forecastquery}

---

##### `Forecastqueryservice`<sup>Optional</sup> <a name="Forecastqueryservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastqueryservice"></a>

```csharp
public string Forecastqueryservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forecastqueryservice AwsProvider#forecastqueryservice}

---

##### `Forecastservice`<sup>Optional</sup> <a name="Forecastservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastservice"></a>

```csharp
public string Forecastservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forecastservice AwsProvider#forecastservice}

---

##### `Frauddetector`<sup>Optional</sup> <a name="Frauddetector" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.frauddetector"></a>

```csharp
public string Frauddetector { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#frauddetector AwsProvider#frauddetector}

---

##### `Fsx`<sup>Optional</sup> <a name="Fsx" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fsx"></a>

```csharp
public string Fsx { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#fsx AwsProvider#fsx}

---

##### `Gamelift`<sup>Optional</sup> <a name="Gamelift" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.gamelift"></a>

```csharp
public string Gamelift { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#gamelift AwsProvider#gamelift}

---

##### `Glacier`<sup>Optional</sup> <a name="Glacier" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.glacier"></a>

```csharp
public string Glacier { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#glacier AwsProvider#glacier}

---

##### `Globalaccelerator`<sup>Optional</sup> <a name="Globalaccelerator" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.globalaccelerator"></a>

```csharp
public string Globalaccelerator { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#globalaccelerator AwsProvider#globalaccelerator}

---

##### `Glue`<sup>Optional</sup> <a name="Glue" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.glue"></a>

```csharp
public string Glue { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#glue AwsProvider#glue}

---

##### `Gluedatabrew`<sup>Optional</sup> <a name="Gluedatabrew" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.gluedatabrew"></a>

```csharp
public string Gluedatabrew { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#gluedatabrew AwsProvider#gluedatabrew}

---

##### `Grafana`<sup>Optional</sup> <a name="Grafana" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.grafana"></a>

```csharp
public string Grafana { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#grafana AwsProvider#grafana}

---

##### `Greengrass`<sup>Optional</sup> <a name="Greengrass" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.greengrass"></a>

```csharp
public string Greengrass { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#greengrass AwsProvider#greengrass}

---

##### `Greengrassv2`<sup>Optional</sup> <a name="Greengrassv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.greengrassv2"></a>

```csharp
public string Greengrassv2 { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#greengrassv2 AwsProvider#greengrassv2}

---

##### `Groundstation`<sup>Optional</sup> <a name="Groundstation" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.groundstation"></a>

```csharp
public string Groundstation { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#groundstation AwsProvider#groundstation}

---

##### `Guardduty`<sup>Optional</sup> <a name="Guardduty" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.guardduty"></a>

```csharp
public string Guardduty { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#guardduty AwsProvider#guardduty}

---

##### `Health`<sup>Optional</sup> <a name="Health" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.health"></a>

```csharp
public string Health { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#health AwsProvider#health}

---

##### `Healthlake`<sup>Optional</sup> <a name="Healthlake" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.healthlake"></a>

```csharp
public string Healthlake { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#healthlake AwsProvider#healthlake}

---

##### `Honeycode`<sup>Optional</sup> <a name="Honeycode" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.honeycode"></a>

```csharp
public string Honeycode { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#honeycode AwsProvider#honeycode}

---

##### `Iam`<sup>Optional</sup> <a name="Iam" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iam"></a>

```csharp
public string Iam { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iam AwsProvider#iam}

---

##### `Identitystore`<sup>Optional</sup> <a name="Identitystore" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.identitystore"></a>

```csharp
public string Identitystore { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#identitystore AwsProvider#identitystore}

---

##### `Imagebuilder`<sup>Optional</sup> <a name="Imagebuilder" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.imagebuilder"></a>

```csharp
public string Imagebuilder { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#imagebuilder AwsProvider#imagebuilder}

---

##### `Inspector`<sup>Optional</sup> <a name="Inspector" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspector"></a>

```csharp
public string Inspector { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#inspector AwsProvider#inspector}

---

##### `Inspector2`<sup>Optional</sup> <a name="Inspector2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspector2"></a>

```csharp
public string Inspector2 { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#inspector2 AwsProvider#inspector2}

---

##### `Inspectorv2`<sup>Optional</sup> <a name="Inspectorv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspectorv2"></a>

```csharp
public string Inspectorv2 { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#inspectorv2 AwsProvider#inspectorv2}

---

##### `Iot`<sup>Optional</sup> <a name="Iot" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot"></a>

```csharp
public string Iot { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iot AwsProvider#iot}

---

##### `Iot1Clickdevices`<sup>Optional</sup> <a name="Iot1Clickdevices" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickdevices"></a>

```csharp
public string Iot1Clickdevices { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iot1clickdevices AwsProvider#iot1clickdevices}

---

##### `Iot1Clickdevicesservice`<sup>Optional</sup> <a name="Iot1Clickdevicesservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickdevicesservice"></a>

```csharp
public string Iot1Clickdevicesservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iot1clickdevicesservice AwsProvider#iot1clickdevicesservice}

---

##### `Iot1Clickprojects`<sup>Optional</sup> <a name="Iot1Clickprojects" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickprojects"></a>

```csharp
public string Iot1Clickprojects { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iot1clickprojects AwsProvider#iot1clickprojects}

---

##### `Iotanalytics`<sup>Optional</sup> <a name="Iotanalytics" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotanalytics"></a>

```csharp
public string Iotanalytics { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotanalytics AwsProvider#iotanalytics}

---

##### `Iotdata`<sup>Optional</sup> <a name="Iotdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdata"></a>

```csharp
public string Iotdata { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotdata AwsProvider#iotdata}

---

##### `Iotdataplane`<sup>Optional</sup> <a name="Iotdataplane" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdataplane"></a>

```csharp
public string Iotdataplane { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotdataplane AwsProvider#iotdataplane}

---

##### `Iotdeviceadvisor`<sup>Optional</sup> <a name="Iotdeviceadvisor" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdeviceadvisor"></a>

```csharp
public string Iotdeviceadvisor { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotdeviceadvisor AwsProvider#iotdeviceadvisor}

---

##### `Iotevents`<sup>Optional</sup> <a name="Iotevents" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotevents"></a>

```csharp
public string Iotevents { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotevents AwsProvider#iotevents}

---

##### `Ioteventsdata`<sup>Optional</sup> <a name="Ioteventsdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ioteventsdata"></a>

```csharp
public string Ioteventsdata { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ioteventsdata AwsProvider#ioteventsdata}

---

##### `Iotfleethub`<sup>Optional</sup> <a name="Iotfleethub" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotfleethub"></a>

```csharp
public string Iotfleethub { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotfleethub AwsProvider#iotfleethub}

---

##### `Iotjobsdata`<sup>Optional</sup> <a name="Iotjobsdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotjobsdata"></a>

```csharp
public string Iotjobsdata { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotjobsdata AwsProvider#iotjobsdata}

---

##### `Iotjobsdataplane`<sup>Optional</sup> <a name="Iotjobsdataplane" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotjobsdataplane"></a>

```csharp
public string Iotjobsdataplane { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotjobsdataplane AwsProvider#iotjobsdataplane}

---

##### `Iotsecuretunneling`<sup>Optional</sup> <a name="Iotsecuretunneling" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotsecuretunneling"></a>

```csharp
public string Iotsecuretunneling { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotsecuretunneling AwsProvider#iotsecuretunneling}

---

##### `Iotsitewise`<sup>Optional</sup> <a name="Iotsitewise" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotsitewise"></a>

```csharp
public string Iotsitewise { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotsitewise AwsProvider#iotsitewise}

---

##### `Iotthingsgraph`<sup>Optional</sup> <a name="Iotthingsgraph" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotthingsgraph"></a>

```csharp
public string Iotthingsgraph { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotthingsgraph AwsProvider#iotthingsgraph}

---

##### `Iottwinmaker`<sup>Optional</sup> <a name="Iottwinmaker" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iottwinmaker"></a>

```csharp
public string Iottwinmaker { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iottwinmaker AwsProvider#iottwinmaker}

---

##### `Iotwireless`<sup>Optional</sup> <a name="Iotwireless" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotwireless"></a>

```csharp
public string Iotwireless { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotwireless AwsProvider#iotwireless}

---

##### `Ivs`<sup>Optional</sup> <a name="Ivs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ivs"></a>

```csharp
public string Ivs { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ivs AwsProvider#ivs}

---

##### `Ivschat`<sup>Optional</sup> <a name="Ivschat" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ivschat"></a>

```csharp
public string Ivschat { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ivschat AwsProvider#ivschat}

---

##### `Kafka`<sup>Optional</sup> <a name="Kafka" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kafka"></a>

```csharp
public string Kafka { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kafka AwsProvider#kafka}

---

##### `Kafkaconnect`<sup>Optional</sup> <a name="Kafkaconnect" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kafkaconnect"></a>

```csharp
public string Kafkaconnect { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kafkaconnect AwsProvider#kafkaconnect}

---

##### `Kendra`<sup>Optional</sup> <a name="Kendra" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kendra"></a>

```csharp
public string Kendra { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kendra AwsProvider#kendra}

---

##### `Keyspaces`<sup>Optional</sup> <a name="Keyspaces" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.keyspaces"></a>

```csharp
public string Keyspaces { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#keyspaces AwsProvider#keyspaces}

---

##### `Kinesis`<sup>Optional</sup> <a name="Kinesis" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesis"></a>

```csharp
public string Kinesis { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesis AwsProvider#kinesis}

---

##### `Kinesisanalytics`<sup>Optional</sup> <a name="Kinesisanalytics" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisanalytics"></a>

```csharp
public string Kinesisanalytics { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisanalytics AwsProvider#kinesisanalytics}

---

##### `Kinesisanalyticsv2`<sup>Optional</sup> <a name="Kinesisanalyticsv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisanalyticsv2"></a>

```csharp
public string Kinesisanalyticsv2 { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisanalyticsv2 AwsProvider#kinesisanalyticsv2}

---

##### `Kinesisvideo`<sup>Optional</sup> <a name="Kinesisvideo" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideo"></a>

```csharp
public string Kinesisvideo { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideo AwsProvider#kinesisvideo}

---

##### `Kinesisvideoarchivedmedia`<sup>Optional</sup> <a name="Kinesisvideoarchivedmedia" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideoarchivedmedia"></a>

```csharp
public string Kinesisvideoarchivedmedia { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideoarchivedmedia AwsProvider#kinesisvideoarchivedmedia}

---

##### `Kinesisvideomedia`<sup>Optional</sup> <a name="Kinesisvideomedia" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideomedia"></a>

```csharp
public string Kinesisvideomedia { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideomedia AwsProvider#kinesisvideomedia}

---

##### `Kinesisvideosignaling`<sup>Optional</sup> <a name="Kinesisvideosignaling" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideosignaling"></a>

```csharp
public string Kinesisvideosignaling { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideosignaling AwsProvider#kinesisvideosignaling}

---

##### `Kinesisvideosignalingchannels`<sup>Optional</sup> <a name="Kinesisvideosignalingchannels" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideosignalingchannels"></a>

```csharp
public string Kinesisvideosignalingchannels { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideosignalingchannels AwsProvider#kinesisvideosignalingchannels}

---

##### `Kms`<sup>Optional</sup> <a name="Kms" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kms"></a>

```csharp
public string Kms { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kms AwsProvider#kms}

---

##### `Lakeformation`<sup>Optional</sup> <a name="Lakeformation" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lakeformation"></a>

```csharp
public string Lakeformation { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lakeformation AwsProvider#lakeformation}

---

##### `Lambda`<sup>Optional</sup> <a name="Lambda" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lambda"></a>

```csharp
public string Lambda { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lambda AwsProvider#lambda}

---

##### `Lex`<sup>Optional</sup> <a name="Lex" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lex"></a>

```csharp
public string Lex { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lex AwsProvider#lex}

---

##### `Lexmodelbuilding`<sup>Optional</sup> <a name="Lexmodelbuilding" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelbuilding"></a>

```csharp
public string Lexmodelbuilding { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexmodelbuilding AwsProvider#lexmodelbuilding}

---

##### `Lexmodelbuildingservice`<sup>Optional</sup> <a name="Lexmodelbuildingservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelbuildingservice"></a>

```csharp
public string Lexmodelbuildingservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexmodelbuildingservice AwsProvider#lexmodelbuildingservice}

---

##### `Lexmodels`<sup>Optional</sup> <a name="Lexmodels" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodels"></a>

```csharp
public string Lexmodels { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexmodels AwsProvider#lexmodels}

---

##### `Lexmodelsv2`<sup>Optional</sup> <a name="Lexmodelsv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelsv2"></a>

```csharp
public string Lexmodelsv2 { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexmodelsv2 AwsProvider#lexmodelsv2}

---

##### `Lexruntime`<sup>Optional</sup> <a name="Lexruntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntime"></a>

```csharp
public string Lexruntime { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexruntime AwsProvider#lexruntime}

---

##### `Lexruntimeservice`<sup>Optional</sup> <a name="Lexruntimeservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntimeservice"></a>

```csharp
public string Lexruntimeservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexruntimeservice AwsProvider#lexruntimeservice}

---

##### `Lexruntimev2`<sup>Optional</sup> <a name="Lexruntimev2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntimev2"></a>

```csharp
public string Lexruntimev2 { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexruntimev2 AwsProvider#lexruntimev2}

---

##### `Lexv2Models`<sup>Optional</sup> <a name="Lexv2Models" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexv2Models"></a>

```csharp
public string Lexv2Models { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexv2models AwsProvider#lexv2models}

---

##### `Lexv2Runtime`<sup>Optional</sup> <a name="Lexv2Runtime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexv2Runtime"></a>

```csharp
public string Lexv2Runtime { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexv2runtime AwsProvider#lexv2runtime}

---

##### `Licensemanager`<sup>Optional</sup> <a name="Licensemanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.licensemanager"></a>

```csharp
public string Licensemanager { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#licensemanager AwsProvider#licensemanager}

---

##### `Lightsail`<sup>Optional</sup> <a name="Lightsail" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lightsail"></a>

```csharp
public string Lightsail { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lightsail AwsProvider#lightsail}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#location AwsProvider#location}

---

##### `Locationservice`<sup>Optional</sup> <a name="Locationservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.locationservice"></a>

```csharp
public string Locationservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#locationservice AwsProvider#locationservice}

---

##### `Logs`<sup>Optional</sup> <a name="Logs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.logs"></a>

```csharp
public string Logs { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#logs AwsProvider#logs}

---

##### `Lookoutequipment`<sup>Optional</sup> <a name="Lookoutequipment" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutequipment"></a>

```csharp
public string Lookoutequipment { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lookoutequipment AwsProvider#lookoutequipment}

---

##### `Lookoutforvision`<sup>Optional</sup> <a name="Lookoutforvision" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutforvision"></a>

```csharp
public string Lookoutforvision { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lookoutforvision AwsProvider#lookoutforvision}

---

##### `Lookoutmetrics`<sup>Optional</sup> <a name="Lookoutmetrics" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutmetrics"></a>

```csharp
public string Lookoutmetrics { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lookoutmetrics AwsProvider#lookoutmetrics}

---

##### `Lookoutvision`<sup>Optional</sup> <a name="Lookoutvision" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutvision"></a>

```csharp
public string Lookoutvision { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lookoutvision AwsProvider#lookoutvision}

---

##### `Machinelearning`<sup>Optional</sup> <a name="Machinelearning" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.machinelearning"></a>

```csharp
public string Machinelearning { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#machinelearning AwsProvider#machinelearning}

---

##### `Macie`<sup>Optional</sup> <a name="Macie" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.macie"></a>

```csharp
public string Macie { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#macie AwsProvider#macie}

---

##### `Macie2`<sup>Optional</sup> <a name="Macie2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.macie2"></a>

```csharp
public string Macie2 { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#macie2 AwsProvider#macie2}

---

##### `Managedblockchain`<sup>Optional</sup> <a name="Managedblockchain" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.managedblockchain"></a>

```csharp
public string Managedblockchain { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#managedblockchain AwsProvider#managedblockchain}

---

##### `Managedgrafana`<sup>Optional</sup> <a name="Managedgrafana" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.managedgrafana"></a>

```csharp
public string Managedgrafana { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#managedgrafana AwsProvider#managedgrafana}

---

##### `Marketplacecatalog`<sup>Optional</sup> <a name="Marketplacecatalog" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacecatalog"></a>

```csharp
public string Marketplacecatalog { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplacecatalog AwsProvider#marketplacecatalog}

---

##### `Marketplacecommerceanalytics`<sup>Optional</sup> <a name="Marketplacecommerceanalytics" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacecommerceanalytics"></a>

```csharp
public string Marketplacecommerceanalytics { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplacecommerceanalytics AwsProvider#marketplacecommerceanalytics}

---

##### `Marketplaceentitlement`<sup>Optional</sup> <a name="Marketplaceentitlement" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplaceentitlement"></a>

```csharp
public string Marketplaceentitlement { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplaceentitlement AwsProvider#marketplaceentitlement}

---

##### `Marketplaceentitlementservice`<sup>Optional</sup> <a name="Marketplaceentitlementservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplaceentitlementservice"></a>

```csharp
public string Marketplaceentitlementservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplaceentitlementservice AwsProvider#marketplaceentitlementservice}

---

##### `Marketplacemetering`<sup>Optional</sup> <a name="Marketplacemetering" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacemetering"></a>

```csharp
public string Marketplacemetering { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplacemetering AwsProvider#marketplacemetering}

---

##### `Mediaconnect`<sup>Optional</sup> <a name="Mediaconnect" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediaconnect"></a>

```csharp
public string Mediaconnect { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediaconnect AwsProvider#mediaconnect}

---

##### `Mediaconvert`<sup>Optional</sup> <a name="Mediaconvert" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediaconvert"></a>

```csharp
public string Mediaconvert { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediaconvert AwsProvider#mediaconvert}

---

##### `Medialive`<sup>Optional</sup> <a name="Medialive" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.medialive"></a>

```csharp
public string Medialive { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#medialive AwsProvider#medialive}

---

##### `Mediapackage`<sup>Optional</sup> <a name="Mediapackage" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediapackage"></a>

```csharp
public string Mediapackage { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediapackage AwsProvider#mediapackage}

---

##### `Mediapackagevod`<sup>Optional</sup> <a name="Mediapackagevod" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediapackagevod"></a>

```csharp
public string Mediapackagevod { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediapackagevod AwsProvider#mediapackagevod}

---

##### `Mediastore`<sup>Optional</sup> <a name="Mediastore" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediastore"></a>

```csharp
public string Mediastore { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediastore AwsProvider#mediastore}

---

##### `Mediastoredata`<sup>Optional</sup> <a name="Mediastoredata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediastoredata"></a>

```csharp
public string Mediastoredata { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediastoredata AwsProvider#mediastoredata}

---

##### `Mediatailor`<sup>Optional</sup> <a name="Mediatailor" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediatailor"></a>

```csharp
public string Mediatailor { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediatailor AwsProvider#mediatailor}

---

##### `Memorydb`<sup>Optional</sup> <a name="Memorydb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.memorydb"></a>

```csharp
public string Memorydb { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#memorydb AwsProvider#memorydb}

---

##### `Meteringmarketplace`<sup>Optional</sup> <a name="Meteringmarketplace" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.meteringmarketplace"></a>

```csharp
public string Meteringmarketplace { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#meteringmarketplace AwsProvider#meteringmarketplace}

---

##### `Mgh`<sup>Optional</sup> <a name="Mgh" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mgh"></a>

```csharp
public string Mgh { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mgh AwsProvider#mgh}

---

##### `Mgn`<sup>Optional</sup> <a name="Mgn" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mgn"></a>

```csharp
public string Mgn { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mgn AwsProvider#mgn}

---

##### `Migrationhub`<sup>Optional</sup> <a name="Migrationhub" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhub"></a>

```csharp
public string Migrationhub { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#migrationhub AwsProvider#migrationhub}

---

##### `Migrationhubconfig`<sup>Optional</sup> <a name="Migrationhubconfig" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubconfig"></a>

```csharp
public string Migrationhubconfig { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#migrationhubconfig AwsProvider#migrationhubconfig}

---

##### `Migrationhubrefactorspaces`<sup>Optional</sup> <a name="Migrationhubrefactorspaces" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubrefactorspaces"></a>

```csharp
public string Migrationhubrefactorspaces { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#migrationhubrefactorspaces AwsProvider#migrationhubrefactorspaces}

---

##### `Migrationhubstrategy`<sup>Optional</sup> <a name="Migrationhubstrategy" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubstrategy"></a>

```csharp
public string Migrationhubstrategy { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#migrationhubstrategy AwsProvider#migrationhubstrategy}

---

##### `Migrationhubstrategyrecommendations`<sup>Optional</sup> <a name="Migrationhubstrategyrecommendations" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubstrategyrecommendations"></a>

```csharp
public string Migrationhubstrategyrecommendations { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#migrationhubstrategyrecommendations AwsProvider#migrationhubstrategyrecommendations}

---

##### `Mobile`<sup>Optional</sup> <a name="Mobile" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mobile"></a>

```csharp
public string Mobile { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mobile AwsProvider#mobile}

---

##### `Mq`<sup>Optional</sup> <a name="Mq" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mq"></a>

```csharp
public string Mq { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mq AwsProvider#mq}

---

##### `Msk`<sup>Optional</sup> <a name="Msk" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.msk"></a>

```csharp
public string Msk { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#msk AwsProvider#msk}

---

##### `Mturk`<sup>Optional</sup> <a name="Mturk" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mturk"></a>

```csharp
public string Mturk { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mturk AwsProvider#mturk}

---

##### `Mwaa`<sup>Optional</sup> <a name="Mwaa" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mwaa"></a>

```csharp
public string Mwaa { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mwaa AwsProvider#mwaa}

---

##### `Neptune`<sup>Optional</sup> <a name="Neptune" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.neptune"></a>

```csharp
public string Neptune { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#neptune AwsProvider#neptune}

---

##### `Networkfirewall`<sup>Optional</sup> <a name="Networkfirewall" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.networkfirewall"></a>

```csharp
public string Networkfirewall { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#networkfirewall AwsProvider#networkfirewall}

---

##### `Networkmanager`<sup>Optional</sup> <a name="Networkmanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.networkmanager"></a>

```csharp
public string Networkmanager { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#networkmanager AwsProvider#networkmanager}

---

##### `Nimble`<sup>Optional</sup> <a name="Nimble" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.nimble"></a>

```csharp
public string Nimble { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#nimble AwsProvider#nimble}

---

##### `Nimblestudio`<sup>Optional</sup> <a name="Nimblestudio" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.nimblestudio"></a>

```csharp
public string Nimblestudio { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#nimblestudio AwsProvider#nimblestudio}

---

##### `Oam`<sup>Optional</sup> <a name="Oam" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.oam"></a>

```csharp
public string Oam { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#oam AwsProvider#oam}

---

##### `Opensearch`<sup>Optional</sup> <a name="Opensearch" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearch"></a>

```csharp
public string Opensearch { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opensearch AwsProvider#opensearch}

---

##### `Opensearchserverless`<sup>Optional</sup> <a name="Opensearchserverless" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearchserverless"></a>

```csharp
public string Opensearchserverless { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opensearchserverless AwsProvider#opensearchserverless}

---

##### `Opensearchservice`<sup>Optional</sup> <a name="Opensearchservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearchservice"></a>

```csharp
public string Opensearchservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opensearchservice AwsProvider#opensearchservice}

---

##### `Opsworks`<sup>Optional</sup> <a name="Opsworks" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opsworks"></a>

```csharp
public string Opsworks { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opsworks AwsProvider#opsworks}

---

##### `Opsworkscm`<sup>Optional</sup> <a name="Opsworkscm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opsworkscm"></a>

```csharp
public string Opsworkscm { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opsworkscm AwsProvider#opsworkscm}

---

##### `Organizations`<sup>Optional</sup> <a name="Organizations" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.organizations"></a>

```csharp
public string Organizations { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#organizations AwsProvider#organizations}

---

##### `Outposts`<sup>Optional</sup> <a name="Outposts" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.outposts"></a>

```csharp
public string Outposts { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#outposts AwsProvider#outposts}

---

##### `Panorama`<sup>Optional</sup> <a name="Panorama" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.panorama"></a>

```csharp
public string Panorama { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#panorama AwsProvider#panorama}

---

##### `Personalize`<sup>Optional</sup> <a name="Personalize" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalize"></a>

```csharp
public string Personalize { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#personalize AwsProvider#personalize}

---

##### `Personalizeevents`<sup>Optional</sup> <a name="Personalizeevents" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalizeevents"></a>

```csharp
public string Personalizeevents { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#personalizeevents AwsProvider#personalizeevents}

---

##### `Personalizeruntime`<sup>Optional</sup> <a name="Personalizeruntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalizeruntime"></a>

```csharp
public string Personalizeruntime { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#personalizeruntime AwsProvider#personalizeruntime}

---

##### `Pi`<sup>Optional</sup> <a name="Pi" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pi"></a>

```csharp
public string Pi { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pi AwsProvider#pi}

---

##### `Pinpoint`<sup>Optional</sup> <a name="Pinpoint" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpoint"></a>

```csharp
public string Pinpoint { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pinpoint AwsProvider#pinpoint}

---

##### `Pinpointemail`<sup>Optional</sup> <a name="Pinpointemail" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpointemail"></a>

```csharp
public string Pinpointemail { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pinpointemail AwsProvider#pinpointemail}

---

##### `Pinpointsmsvoice`<sup>Optional</sup> <a name="Pinpointsmsvoice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpointsmsvoice"></a>

```csharp
public string Pinpointsmsvoice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pinpointsmsvoice AwsProvider#pinpointsmsvoice}

---

##### `Pipes`<sup>Optional</sup> <a name="Pipes" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pipes"></a>

```csharp
public string Pipes { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pipes AwsProvider#pipes}

---

##### `Polly`<sup>Optional</sup> <a name="Polly" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.polly"></a>

```csharp
public string Polly { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#polly AwsProvider#polly}

---

##### `Pricing`<sup>Optional</sup> <a name="Pricing" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pricing"></a>

```csharp
public string Pricing { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pricing AwsProvider#pricing}

---

##### `Prometheus`<sup>Optional</sup> <a name="Prometheus" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.prometheus"></a>

```csharp
public string Prometheus { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#prometheus AwsProvider#prometheus}

---

##### `Prometheusservice`<sup>Optional</sup> <a name="Prometheusservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.prometheusservice"></a>

```csharp
public string Prometheusservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#prometheusservice AwsProvider#prometheusservice}

---

##### `Proton`<sup>Optional</sup> <a name="Proton" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.proton"></a>

```csharp
public string Proton { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#proton AwsProvider#proton}

---

##### `Qldb`<sup>Optional</sup> <a name="Qldb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.qldb"></a>

```csharp
public string Qldb { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#qldb AwsProvider#qldb}

---

##### `Qldbsession`<sup>Optional</sup> <a name="Qldbsession" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.qldbsession"></a>

```csharp
public string Qldbsession { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#qldbsession AwsProvider#qldbsession}

---

##### `Quicksight`<sup>Optional</sup> <a name="Quicksight" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.quicksight"></a>

```csharp
public string Quicksight { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#quicksight AwsProvider#quicksight}

---

##### `Ram`<sup>Optional</sup> <a name="Ram" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ram"></a>

```csharp
public string Ram { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ram AwsProvider#ram}

---

##### `Rbin`<sup>Optional</sup> <a name="Rbin" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rbin"></a>

```csharp
public string Rbin { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rbin AwsProvider#rbin}

---

##### `Rds`<sup>Optional</sup> <a name="Rds" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rds"></a>

```csharp
public string Rds { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rds AwsProvider#rds}

---

##### `Rdsdata`<sup>Optional</sup> <a name="Rdsdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rdsdata"></a>

```csharp
public string Rdsdata { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rdsdata AwsProvider#rdsdata}

---

##### `Rdsdataservice`<sup>Optional</sup> <a name="Rdsdataservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rdsdataservice"></a>

```csharp
public string Rdsdataservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rdsdataservice AwsProvider#rdsdataservice}

---

##### `Recyclebin`<sup>Optional</sup> <a name="Recyclebin" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.recyclebin"></a>

```csharp
public string Recyclebin { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#recyclebin AwsProvider#recyclebin}

---

##### `Redshift`<sup>Optional</sup> <a name="Redshift" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshift"></a>

```csharp
public string Redshift { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#redshift AwsProvider#redshift}

---

##### `Redshiftdata`<sup>Optional</sup> <a name="Redshiftdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftdata"></a>

```csharp
public string Redshiftdata { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#redshiftdata AwsProvider#redshiftdata}

---

##### `Redshiftdataapiservice`<sup>Optional</sup> <a name="Redshiftdataapiservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftdataapiservice"></a>

```csharp
public string Redshiftdataapiservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#redshiftdataapiservice AwsProvider#redshiftdataapiservice}

---

##### `Redshiftserverless`<sup>Optional</sup> <a name="Redshiftserverless" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftserverless"></a>

```csharp
public string Redshiftserverless { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#redshiftserverless AwsProvider#redshiftserverless}

---

##### `Rekognition`<sup>Optional</sup> <a name="Rekognition" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rekognition"></a>

```csharp
public string Rekognition { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rekognition AwsProvider#rekognition}

---

##### `Resiliencehub`<sup>Optional</sup> <a name="Resiliencehub" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resiliencehub"></a>

```csharp
public string Resiliencehub { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resiliencehub AwsProvider#resiliencehub}

---

##### `Resourceexplorer2`<sup>Optional</sup> <a name="Resourceexplorer2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourceexplorer2"></a>

```csharp
public string Resourceexplorer2 { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resourceexplorer2 AwsProvider#resourceexplorer2}

---

##### `Resourcegroups`<sup>Optional</sup> <a name="Resourcegroups" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroups"></a>

```csharp
public string Resourcegroups { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resourcegroups AwsProvider#resourcegroups}

---

##### `Resourcegroupstagging`<sup>Optional</sup> <a name="Resourcegroupstagging" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroupstagging"></a>

```csharp
public string Resourcegroupstagging { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resourcegroupstagging AwsProvider#resourcegroupstagging}

---

##### `Resourcegroupstaggingapi`<sup>Optional</sup> <a name="Resourcegroupstaggingapi" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroupstaggingapi"></a>

```csharp
public string Resourcegroupstaggingapi { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resourcegroupstaggingapi AwsProvider#resourcegroupstaggingapi}

---

##### `Robomaker`<sup>Optional</sup> <a name="Robomaker" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.robomaker"></a>

```csharp
public string Robomaker { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#robomaker AwsProvider#robomaker}

---

##### `Rolesanywhere`<sup>Optional</sup> <a name="Rolesanywhere" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rolesanywhere"></a>

```csharp
public string Rolesanywhere { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rolesanywhere AwsProvider#rolesanywhere}

---

##### `Route53`<sup>Optional</sup> <a name="Route53" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53"></a>

```csharp
public string Route53 { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53 AwsProvider#route53}

---

##### `Route53Domains`<sup>Optional</sup> <a name="Route53Domains" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Domains"></a>

```csharp
public string Route53Domains { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53domains AwsProvider#route53domains}

---

##### `Route53Recoverycluster`<sup>Optional</sup> <a name="Route53Recoverycluster" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoverycluster"></a>

```csharp
public string Route53Recoverycluster { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53recoverycluster AwsProvider#route53recoverycluster}

---

##### `Route53Recoverycontrolconfig`<sup>Optional</sup> <a name="Route53Recoverycontrolconfig" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoverycontrolconfig"></a>

```csharp
public string Route53Recoverycontrolconfig { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53recoverycontrolconfig AwsProvider#route53recoverycontrolconfig}

---

##### `Route53Recoveryreadiness`<sup>Optional</sup> <a name="Route53Recoveryreadiness" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoveryreadiness"></a>

```csharp
public string Route53Recoveryreadiness { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53recoveryreadiness AwsProvider#route53recoveryreadiness}

---

##### `Route53Resolver`<sup>Optional</sup> <a name="Route53Resolver" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Resolver"></a>

```csharp
public string Route53Resolver { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53resolver AwsProvider#route53resolver}

---

##### `Rum`<sup>Optional</sup> <a name="Rum" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rum"></a>

```csharp
public string Rum { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rum AwsProvider#rum}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3"></a>

```csharp
public string S3 { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3 AwsProvider#s3}

---

##### `S3Api`<sup>Optional</sup> <a name="S3Api" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Api"></a>

```csharp
public string S3Api { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3api AwsProvider#s3api}

---

##### `S3Control`<sup>Optional</sup> <a name="S3Control" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Control"></a>

```csharp
public string S3Control { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3control AwsProvider#s3control}

---

##### `S3Outposts`<sup>Optional</sup> <a name="S3Outposts" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Outposts"></a>

```csharp
public string S3Outposts { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3outposts AwsProvider#s3outposts}

---

##### `Sagemaker`<sup>Optional</sup> <a name="Sagemaker" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemaker"></a>

```csharp
public string Sagemaker { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemaker AwsProvider#sagemaker}

---

##### `Sagemakera2Iruntime`<sup>Optional</sup> <a name="Sagemakera2Iruntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakera2Iruntime"></a>

```csharp
public string Sagemakera2Iruntime { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemakera2iruntime AwsProvider#sagemakera2iruntime}

---

##### `Sagemakeredge`<sup>Optional</sup> <a name="Sagemakeredge" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakeredge"></a>

```csharp
public string Sagemakeredge { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemakeredge AwsProvider#sagemakeredge}

---

##### `Sagemakeredgemanager`<sup>Optional</sup> <a name="Sagemakeredgemanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakeredgemanager"></a>

```csharp
public string Sagemakeredgemanager { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemakeredgemanager AwsProvider#sagemakeredgemanager}

---

##### `Sagemakerfeaturestoreruntime`<sup>Optional</sup> <a name="Sagemakerfeaturestoreruntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakerfeaturestoreruntime"></a>

```csharp
public string Sagemakerfeaturestoreruntime { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemakerfeaturestoreruntime AwsProvider#sagemakerfeaturestoreruntime}

---

##### `Sagemakerruntime`<sup>Optional</sup> <a name="Sagemakerruntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakerruntime"></a>

```csharp
public string Sagemakerruntime { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemakerruntime AwsProvider#sagemakerruntime}

---

##### `Savingsplans`<sup>Optional</sup> <a name="Savingsplans" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.savingsplans"></a>

```csharp
public string Savingsplans { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#savingsplans AwsProvider#savingsplans}

---

##### `Scheduler`<sup>Optional</sup> <a name="Scheduler" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.scheduler"></a>

```csharp
public string Scheduler { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#scheduler AwsProvider#scheduler}

---

##### `Schemas`<sup>Optional</sup> <a name="Schemas" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.schemas"></a>

```csharp
public string Schemas { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#schemas AwsProvider#schemas}

---

##### `Sdb`<sup>Optional</sup> <a name="Sdb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sdb"></a>

```csharp
public string Sdb { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sdb AwsProvider#sdb}

---

##### `Secretsmanager`<sup>Optional</sup> <a name="Secretsmanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.secretsmanager"></a>

```csharp
public string Secretsmanager { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#secretsmanager AwsProvider#secretsmanager}

---

##### `Securityhub`<sup>Optional</sup> <a name="Securityhub" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.securityhub"></a>

```csharp
public string Securityhub { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#securityhub AwsProvider#securityhub}

---

##### `Serverlessapplicationrepository`<sup>Optional</sup> <a name="Serverlessapplicationrepository" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessapplicationrepository"></a>

```csharp
public string Serverlessapplicationrepository { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#serverlessapplicationrepository AwsProvider#serverlessapplicationrepository}

---

##### `Serverlessapprepo`<sup>Optional</sup> <a name="Serverlessapprepo" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessapprepo"></a>

```csharp
public string Serverlessapprepo { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#serverlessapprepo AwsProvider#serverlessapprepo}

---

##### `Serverlessrepo`<sup>Optional</sup> <a name="Serverlessrepo" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessrepo"></a>

```csharp
public string Serverlessrepo { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#serverlessrepo AwsProvider#serverlessrepo}

---

##### `Servicecatalog`<sup>Optional</sup> <a name="Servicecatalog" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicecatalog"></a>

```csharp
public string Servicecatalog { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#servicecatalog AwsProvider#servicecatalog}

---

##### `Servicecatalogappregistry`<sup>Optional</sup> <a name="Servicecatalogappregistry" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicecatalogappregistry"></a>

```csharp
public string Servicecatalogappregistry { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#servicecatalogappregistry AwsProvider#servicecatalogappregistry}

---

##### `Servicediscovery`<sup>Optional</sup> <a name="Servicediscovery" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicediscovery"></a>

```csharp
public string Servicediscovery { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#servicediscovery AwsProvider#servicediscovery}

---

##### `Servicequotas`<sup>Optional</sup> <a name="Servicequotas" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicequotas"></a>

```csharp
public string Servicequotas { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#servicequotas AwsProvider#servicequotas}

---

##### `Ses`<sup>Optional</sup> <a name="Ses" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ses"></a>

```csharp
public string Ses { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ses AwsProvider#ses}

---

##### `Sesv2`<sup>Optional</sup> <a name="Sesv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sesv2"></a>

```csharp
public string Sesv2 { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sesv2 AwsProvider#sesv2}

---

##### `Sfn`<sup>Optional</sup> <a name="Sfn" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sfn"></a>

```csharp
public string Sfn { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sfn AwsProvider#sfn}

---

##### `Shield`<sup>Optional</sup> <a name="Shield" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.shield"></a>

```csharp
public string Shield { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shield AwsProvider#shield}

---

##### `Signer`<sup>Optional</sup> <a name="Signer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.signer"></a>

```csharp
public string Signer { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#signer AwsProvider#signer}

---

##### `Simpledb`<sup>Optional</sup> <a name="Simpledb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.simpledb"></a>

```csharp
public string Simpledb { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#simpledb AwsProvider#simpledb}

---

##### `Sms`<sup>Optional</sup> <a name="Sms" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sms"></a>

```csharp
public string Sms { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sms AwsProvider#sms}

---

##### `Snowball`<sup>Optional</sup> <a name="Snowball" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.snowball"></a>

```csharp
public string Snowball { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#snowball AwsProvider#snowball}

---

##### `Snowdevicemanagement`<sup>Optional</sup> <a name="Snowdevicemanagement" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.snowdevicemanagement"></a>

```csharp
public string Snowdevicemanagement { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#snowdevicemanagement AwsProvider#snowdevicemanagement}

---

##### `Sns`<sup>Optional</sup> <a name="Sns" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sns"></a>

```csharp
public string Sns { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sns AwsProvider#sns}

---

##### `Sqs`<sup>Optional</sup> <a name="Sqs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sqs"></a>

```csharp
public string Sqs { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sqs AwsProvider#sqs}

---

##### `Ssm`<sup>Optional</sup> <a name="Ssm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssm"></a>

```csharp
public string Ssm { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssm AwsProvider#ssm}

---

##### `Ssmcontacts`<sup>Optional</sup> <a name="Ssmcontacts" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssmcontacts"></a>

```csharp
public string Ssmcontacts { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssmcontacts AwsProvider#ssmcontacts}

---

##### `Ssmincidents`<sup>Optional</sup> <a name="Ssmincidents" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssmincidents"></a>

```csharp
public string Ssmincidents { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssmincidents AwsProvider#ssmincidents}

---

##### `Sso`<sup>Optional</sup> <a name="Sso" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sso"></a>

```csharp
public string Sso { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sso AwsProvider#sso}

---

##### `Ssoadmin`<sup>Optional</sup> <a name="Ssoadmin" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssoadmin"></a>

```csharp
public string Ssoadmin { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssoadmin AwsProvider#ssoadmin}

---

##### `Ssooidc`<sup>Optional</sup> <a name="Ssooidc" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssooidc"></a>

```csharp
public string Ssooidc { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssooidc AwsProvider#ssooidc}

---

##### `Stepfunctions`<sup>Optional</sup> <a name="Stepfunctions" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.stepfunctions"></a>

```csharp
public string Stepfunctions { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#stepfunctions AwsProvider#stepfunctions}

---

##### `Storagegateway`<sup>Optional</sup> <a name="Storagegateway" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.storagegateway"></a>

```csharp
public string Storagegateway { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#storagegateway AwsProvider#storagegateway}

---

##### `Sts`<sup>Optional</sup> <a name="Sts" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sts"></a>

```csharp
public string Sts { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sts AwsProvider#sts}

---

##### `Support`<sup>Optional</sup> <a name="Support" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.support"></a>

```csharp
public string Support { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#support AwsProvider#support}

---

##### `Swf`<sup>Optional</sup> <a name="Swf" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.swf"></a>

```csharp
public string Swf { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#swf AwsProvider#swf}

---

##### `Synthetics`<sup>Optional</sup> <a name="Synthetics" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.synthetics"></a>

```csharp
public string Synthetics { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#synthetics AwsProvider#synthetics}

---

##### `Textract`<sup>Optional</sup> <a name="Textract" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.textract"></a>

```csharp
public string Textract { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#textract AwsProvider#textract}

---

##### `Timestreamquery`<sup>Optional</sup> <a name="Timestreamquery" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.timestreamquery"></a>

```csharp
public string Timestreamquery { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#timestreamquery AwsProvider#timestreamquery}

---

##### `Timestreamwrite`<sup>Optional</sup> <a name="Timestreamwrite" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.timestreamwrite"></a>

```csharp
public string Timestreamwrite { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#timestreamwrite AwsProvider#timestreamwrite}

---

##### `Transcribe`<sup>Optional</sup> <a name="Transcribe" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribe"></a>

```csharp
public string Transcribe { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transcribe AwsProvider#transcribe}

---

##### `Transcribeservice`<sup>Optional</sup> <a name="Transcribeservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribeservice"></a>

```csharp
public string Transcribeservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transcribeservice AwsProvider#transcribeservice}

---

##### `Transcribestreaming`<sup>Optional</sup> <a name="Transcribestreaming" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribestreaming"></a>

```csharp
public string Transcribestreaming { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transcribestreaming AwsProvider#transcribestreaming}

---

##### `Transcribestreamingservice`<sup>Optional</sup> <a name="Transcribestreamingservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribestreamingservice"></a>

```csharp
public string Transcribestreamingservice { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transcribestreamingservice AwsProvider#transcribestreamingservice}

---

##### `Transfer`<sup>Optional</sup> <a name="Transfer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transfer"></a>

```csharp
public string Transfer { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transfer AwsProvider#transfer}

---

##### `Translate`<sup>Optional</sup> <a name="Translate" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.translate"></a>

```csharp
public string Translate { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#translate AwsProvider#translate}

---

##### `Voiceid`<sup>Optional</sup> <a name="Voiceid" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.voiceid"></a>

```csharp
public string Voiceid { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#voiceid AwsProvider#voiceid}

---

##### `Waf`<sup>Optional</sup> <a name="Waf" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.waf"></a>

```csharp
public string Waf { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#waf AwsProvider#waf}

---

##### `Wafregional`<sup>Optional</sup> <a name="Wafregional" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wafregional"></a>

```csharp
public string Wafregional { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#wafregional AwsProvider#wafregional}

---

##### `Wafv2`<sup>Optional</sup> <a name="Wafv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wafv2"></a>

```csharp
public string Wafv2 { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#wafv2 AwsProvider#wafv2}

---

##### `Wellarchitected`<sup>Optional</sup> <a name="Wellarchitected" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wellarchitected"></a>

```csharp
public string Wellarchitected { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#wellarchitected AwsProvider#wellarchitected}

---

##### `Wisdom`<sup>Optional</sup> <a name="Wisdom" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wisdom"></a>

```csharp
public string Wisdom { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#wisdom AwsProvider#wisdom}

---

##### `Workdocs`<sup>Optional</sup> <a name="Workdocs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workdocs"></a>

```csharp
public string Workdocs { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workdocs AwsProvider#workdocs}

---

##### `Worklink`<sup>Optional</sup> <a name="Worklink" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.worklink"></a>

```csharp
public string Worklink { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#worklink AwsProvider#worklink}

---

##### `Workmail`<sup>Optional</sup> <a name="Workmail" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workmail"></a>

```csharp
public string Workmail { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workmail AwsProvider#workmail}

---

##### `Workmailmessageflow`<sup>Optional</sup> <a name="Workmailmessageflow" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workmailmessageflow"></a>

```csharp
public string Workmailmessageflow { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workmailmessageflow AwsProvider#workmailmessageflow}

---

##### `Workspaces`<sup>Optional</sup> <a name="Workspaces" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workspaces"></a>

```csharp
public string Workspaces { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workspaces AwsProvider#workspaces}

---

##### `Workspacesweb`<sup>Optional</sup> <a name="Workspacesweb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workspacesweb"></a>

```csharp
public string Workspacesweb { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workspacesweb AwsProvider#workspacesweb}

---

##### `Xray`<sup>Optional</sup> <a name="Xray" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.xray"></a>

```csharp
public string Xray { get; set; }
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#xray AwsProvider#xray}

---

### AwsProviderIgnoreTags <a name="AwsProviderIgnoreTags" id="@cdktf/provider-aws.provider.AwsProviderIgnoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderIgnoreTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AwsProviderIgnoreTags {
    string[] KeyPrefixes = null,
    string[] Keys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags.property.keyPrefixes">KeyPrefixes</a></code> | <code>string[]</code> | Resource tag key prefixes to ignore across all resources. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags.property.keys">Keys</a></code> | <code>string[]</code> | Resource tag keys to ignore across all resources. |

---

##### `KeyPrefixes`<sup>Optional</sup> <a name="KeyPrefixes" id="@cdktf/provider-aws.provider.AwsProviderIgnoreTags.property.keyPrefixes"></a>

```csharp
public string[] KeyPrefixes { get; set; }
```

- *Type:* string[]

Resource tag key prefixes to ignore across all resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#key_prefixes AwsProvider#key_prefixes}

---

##### `Keys`<sup>Optional</sup> <a name="Keys" id="@cdktf/provider-aws.provider.AwsProviderIgnoreTags.property.keys"></a>

```csharp
public string[] Keys { get; set; }
```

- *Type:* string[]

Resource tag keys to ignore across all resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#keys AwsProvider#keys}

---



