# `storagegatewayGateway` Submodule <a name="`storagegatewayGateway` Submodule" id="@cdktf/provider-aws.storagegatewayGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayGateway <a name="StoragegatewayGateway" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway aws_storagegateway_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer"></a>

```typescript
import { storagegatewayGateway } from '@cdktf/provider-aws'

new storagegatewayGateway.StoragegatewayGateway(scope: Construct, id: string, config: StoragegatewayGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig">StoragegatewayGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig">StoragegatewayGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putMaintenanceStartTime">putMaintenanceStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putSmbActiveDirectorySettings">putSmbActiveDirectorySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetActivationKey">resetActivationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetAverageDownloadRateLimitInBitsPerSec">resetAverageDownloadRateLimitInBitsPerSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetAverageUploadRateLimitInBitsPerSec">resetAverageUploadRateLimitInBitsPerSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetCloudwatchLogGroupArn">resetCloudwatchLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayIpAddress">resetGatewayIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayType">resetGatewayType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayVpcEndpoint">resetGatewayVpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetMaintenanceStartTime">resetMaintenanceStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetMediumChangerType">resetMediumChangerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbActiveDirectorySettings">resetSmbActiveDirectorySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbFileShareVisibility">resetSmbFileShareVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbGuestPassword">resetSmbGuestPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbSecurityStrategy">resetSmbSecurityStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTapeDriveType">resetTapeDriveType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMaintenanceStartTime` <a name="putMaintenanceStartTime" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putMaintenanceStartTime"></a>

```typescript
public putMaintenanceStartTime(value: StoragegatewayGatewayMaintenanceStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putMaintenanceStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a>

---

##### `putSmbActiveDirectorySettings` <a name="putSmbActiveDirectorySettings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putSmbActiveDirectorySettings"></a>

```typescript
public putSmbActiveDirectorySettings(value: StoragegatewayGatewaySmbActiveDirectorySettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putSmbActiveDirectorySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putTimeouts"></a>

```typescript
public putTimeouts(value: StoragegatewayGatewayTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a>

---

##### `resetActivationKey` <a name="resetActivationKey" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetActivationKey"></a>

```typescript
public resetActivationKey(): void
```

##### `resetAverageDownloadRateLimitInBitsPerSec` <a name="resetAverageDownloadRateLimitInBitsPerSec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetAverageDownloadRateLimitInBitsPerSec"></a>

```typescript
public resetAverageDownloadRateLimitInBitsPerSec(): void
```

##### `resetAverageUploadRateLimitInBitsPerSec` <a name="resetAverageUploadRateLimitInBitsPerSec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetAverageUploadRateLimitInBitsPerSec"></a>

```typescript
public resetAverageUploadRateLimitInBitsPerSec(): void
```

##### `resetCloudwatchLogGroupArn` <a name="resetCloudwatchLogGroupArn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetCloudwatchLogGroupArn"></a>

```typescript
public resetCloudwatchLogGroupArn(): void
```

##### `resetGatewayIpAddress` <a name="resetGatewayIpAddress" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayIpAddress"></a>

```typescript
public resetGatewayIpAddress(): void
```

##### `resetGatewayType` <a name="resetGatewayType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayType"></a>

```typescript
public resetGatewayType(): void
```

##### `resetGatewayVpcEndpoint` <a name="resetGatewayVpcEndpoint" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayVpcEndpoint"></a>

```typescript
public resetGatewayVpcEndpoint(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaintenanceStartTime` <a name="resetMaintenanceStartTime" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetMaintenanceStartTime"></a>

```typescript
public resetMaintenanceStartTime(): void
```

##### `resetMediumChangerType` <a name="resetMediumChangerType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetMediumChangerType"></a>

```typescript
public resetMediumChangerType(): void
```

##### `resetSmbActiveDirectorySettings` <a name="resetSmbActiveDirectorySettings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbActiveDirectorySettings"></a>

```typescript
public resetSmbActiveDirectorySettings(): void
```

##### `resetSmbFileShareVisibility` <a name="resetSmbFileShareVisibility" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbFileShareVisibility"></a>

```typescript
public resetSmbFileShareVisibility(): void
```

##### `resetSmbGuestPassword` <a name="resetSmbGuestPassword" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbGuestPassword"></a>

```typescript
public resetSmbGuestPassword(): void
```

##### `resetSmbSecurityStrategy` <a name="resetSmbSecurityStrategy" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbSecurityStrategy"></a>

```typescript
public resetSmbSecurityStrategy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTapeDriveType` <a name="resetTapeDriveType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTapeDriveType"></a>

```typescript
public resetTapeDriveType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isConstruct"></a>

```typescript
import { storagegatewayGateway } from '@cdktf/provider-aws'

storagegatewayGateway.StoragegatewayGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformElement"></a>

```typescript
import { storagegatewayGateway } from '@cdktf/provider-aws'

storagegatewayGateway.StoragegatewayGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformResource"></a>

```typescript
import { storagegatewayGateway } from '@cdktf/provider-aws'

storagegatewayGateway.StoragegatewayGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.ec2InstanceId">ec2InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayNetworkInterface">gatewayNetworkInterface</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList">StoragegatewayGatewayGatewayNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.hostEnvironment">hostEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.maintenanceStartTime">maintenanceStartTime</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference">StoragegatewayGatewayMaintenanceStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbActiveDirectorySettings">smbActiveDirectorySettings</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference">StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference">StoragegatewayGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.activationKeyInput">activationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageDownloadRateLimitInBitsPerSecInput">averageDownloadRateLimitInBitsPerSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageUploadRateLimitInBitsPerSecInput">averageUploadRateLimitInBitsPerSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cloudwatchLogGroupArnInput">cloudwatchLogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayIpAddressInput">gatewayIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayNameInput">gatewayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTimezoneInput">gatewayTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTypeInput">gatewayTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayVpcEndpointInput">gatewayVpcEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.maintenanceStartTimeInput">maintenanceStartTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.mediumChangerTypeInput">mediumChangerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbActiveDirectorySettingsInput">smbActiveDirectorySettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbFileShareVisibilityInput">smbFileShareVisibilityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbGuestPasswordInput">smbGuestPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbSecurityStrategyInput">smbSecurityStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tapeDriveTypeInput">tapeDriveTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.activationKey">activationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageDownloadRateLimitInBitsPerSec">averageDownloadRateLimitInBitsPerSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageUploadRateLimitInBitsPerSec">averageUploadRateLimitInBitsPerSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayIpAddress">gatewayIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayName">gatewayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTimezone">gatewayTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayType">gatewayType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayVpcEndpoint">gatewayVpcEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.mediumChangerType">mediumChangerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbFileShareVisibility">smbFileShareVisibility</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbGuestPassword">smbGuestPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbSecurityStrategy">smbSecurityStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tapeDriveType">tapeDriveType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `ec2InstanceId`<sup>Required</sup> <a name="ec2InstanceId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.ec2InstanceId"></a>

```typescript
public readonly ec2InstanceId: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `gatewayNetworkInterface`<sup>Required</sup> <a name="gatewayNetworkInterface" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayNetworkInterface"></a>

```typescript
public readonly gatewayNetworkInterface: StoragegatewayGatewayGatewayNetworkInterfaceList;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList">StoragegatewayGatewayGatewayNetworkInterfaceList</a>

---

##### `hostEnvironment`<sup>Required</sup> <a name="hostEnvironment" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.hostEnvironment"></a>

```typescript
public readonly hostEnvironment: string;
```

- *Type:* string

---

##### `maintenanceStartTime`<sup>Required</sup> <a name="maintenanceStartTime" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.maintenanceStartTime"></a>

```typescript
public readonly maintenanceStartTime: StoragegatewayGatewayMaintenanceStartTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference">StoragegatewayGatewayMaintenanceStartTimeOutputReference</a>

---

##### `smbActiveDirectorySettings`<sup>Required</sup> <a name="smbActiveDirectorySettings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbActiveDirectorySettings"></a>

```typescript
public readonly smbActiveDirectorySettings: StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference">StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.timeouts"></a>

```typescript
public readonly timeouts: StoragegatewayGatewayTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference">StoragegatewayGatewayTimeoutsOutputReference</a>

---

##### `activationKeyInput`<sup>Optional</sup> <a name="activationKeyInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.activationKeyInput"></a>

```typescript
public readonly activationKeyInput: string;
```

- *Type:* string

---

##### `averageDownloadRateLimitInBitsPerSecInput`<sup>Optional</sup> <a name="averageDownloadRateLimitInBitsPerSecInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageDownloadRateLimitInBitsPerSecInput"></a>

```typescript
public readonly averageDownloadRateLimitInBitsPerSecInput: number;
```

- *Type:* number

---

##### `averageUploadRateLimitInBitsPerSecInput`<sup>Optional</sup> <a name="averageUploadRateLimitInBitsPerSecInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageUploadRateLimitInBitsPerSecInput"></a>

```typescript
public readonly averageUploadRateLimitInBitsPerSecInput: number;
```

- *Type:* number

---

##### `cloudwatchLogGroupArnInput`<sup>Optional</sup> <a name="cloudwatchLogGroupArnInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cloudwatchLogGroupArnInput"></a>

```typescript
public readonly cloudwatchLogGroupArnInput: string;
```

- *Type:* string

---

##### `gatewayIpAddressInput`<sup>Optional</sup> <a name="gatewayIpAddressInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayIpAddressInput"></a>

```typescript
public readonly gatewayIpAddressInput: string;
```

- *Type:* string

---

##### `gatewayNameInput`<sup>Optional</sup> <a name="gatewayNameInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayNameInput"></a>

```typescript
public readonly gatewayNameInput: string;
```

- *Type:* string

---

##### `gatewayTimezoneInput`<sup>Optional</sup> <a name="gatewayTimezoneInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTimezoneInput"></a>

```typescript
public readonly gatewayTimezoneInput: string;
```

- *Type:* string

---

##### `gatewayTypeInput`<sup>Optional</sup> <a name="gatewayTypeInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTypeInput"></a>

```typescript
public readonly gatewayTypeInput: string;
```

- *Type:* string

---

##### `gatewayVpcEndpointInput`<sup>Optional</sup> <a name="gatewayVpcEndpointInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayVpcEndpointInput"></a>

```typescript
public readonly gatewayVpcEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maintenanceStartTimeInput`<sup>Optional</sup> <a name="maintenanceStartTimeInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.maintenanceStartTimeInput"></a>

```typescript
public readonly maintenanceStartTimeInput: StoragegatewayGatewayMaintenanceStartTime;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a>

---

##### `mediumChangerTypeInput`<sup>Optional</sup> <a name="mediumChangerTypeInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.mediumChangerTypeInput"></a>

```typescript
public readonly mediumChangerTypeInput: string;
```

- *Type:* string

---

##### `smbActiveDirectorySettingsInput`<sup>Optional</sup> <a name="smbActiveDirectorySettingsInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbActiveDirectorySettingsInput"></a>

```typescript
public readonly smbActiveDirectorySettingsInput: StoragegatewayGatewaySmbActiveDirectorySettings;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a>

---

##### `smbFileShareVisibilityInput`<sup>Optional</sup> <a name="smbFileShareVisibilityInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbFileShareVisibilityInput"></a>

```typescript
public readonly smbFileShareVisibilityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `smbGuestPasswordInput`<sup>Optional</sup> <a name="smbGuestPasswordInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbGuestPasswordInput"></a>

```typescript
public readonly smbGuestPasswordInput: string;
```

- *Type:* string

---

##### `smbSecurityStrategyInput`<sup>Optional</sup> <a name="smbSecurityStrategyInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbSecurityStrategyInput"></a>

```typescript
public readonly smbSecurityStrategyInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tapeDriveTypeInput`<sup>Optional</sup> <a name="tapeDriveTypeInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tapeDriveTypeInput"></a>

```typescript
public readonly tapeDriveTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: StoragegatewayGatewayTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a> | cdktf.IResolvable

---

##### `activationKey`<sup>Required</sup> <a name="activationKey" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.activationKey"></a>

```typescript
public readonly activationKey: string;
```

- *Type:* string

---

##### `averageDownloadRateLimitInBitsPerSec`<sup>Required</sup> <a name="averageDownloadRateLimitInBitsPerSec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageDownloadRateLimitInBitsPerSec"></a>

```typescript
public readonly averageDownloadRateLimitInBitsPerSec: number;
```

- *Type:* number

---

##### `averageUploadRateLimitInBitsPerSec`<sup>Required</sup> <a name="averageUploadRateLimitInBitsPerSec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageUploadRateLimitInBitsPerSec"></a>

```typescript
public readonly averageUploadRateLimitInBitsPerSec: number;
```

- *Type:* number

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cloudwatchLogGroupArn"></a>

```typescript
public readonly cloudwatchLogGroupArn: string;
```

- *Type:* string

---

##### `gatewayIpAddress`<sup>Required</sup> <a name="gatewayIpAddress" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayIpAddress"></a>

```typescript
public readonly gatewayIpAddress: string;
```

- *Type:* string

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayName"></a>

```typescript
public readonly gatewayName: string;
```

- *Type:* string

---

##### `gatewayTimezone`<sup>Required</sup> <a name="gatewayTimezone" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTimezone"></a>

```typescript
public readonly gatewayTimezone: string;
```

- *Type:* string

---

##### `gatewayType`<sup>Required</sup> <a name="gatewayType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayType"></a>

```typescript
public readonly gatewayType: string;
```

- *Type:* string

---

##### `gatewayVpcEndpoint`<sup>Required</sup> <a name="gatewayVpcEndpoint" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayVpcEndpoint"></a>

```typescript
public readonly gatewayVpcEndpoint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mediumChangerType`<sup>Required</sup> <a name="mediumChangerType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.mediumChangerType"></a>

```typescript
public readonly mediumChangerType: string;
```

- *Type:* string

---

##### `smbFileShareVisibility`<sup>Required</sup> <a name="smbFileShareVisibility" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbFileShareVisibility"></a>

```typescript
public readonly smbFileShareVisibility: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `smbGuestPassword`<sup>Required</sup> <a name="smbGuestPassword" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbGuestPassword"></a>

```typescript
public readonly smbGuestPassword: string;
```

- *Type:* string

---

##### `smbSecurityStrategy`<sup>Required</sup> <a name="smbSecurityStrategy" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbSecurityStrategy"></a>

```typescript
public readonly smbSecurityStrategy: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tapeDriveType`<sup>Required</sup> <a name="tapeDriveType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tapeDriveType"></a>

```typescript
public readonly tapeDriveType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayGatewayConfig <a name="StoragegatewayGatewayConfig" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.Initializer"></a>

```typescript
import { storagegatewayGateway } from '@cdktf/provider-aws'

const storagegatewayGatewayConfig: storagegatewayGateway.StoragegatewayGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayName">gatewayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_name StoragegatewayGateway#gateway_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayTimezone">gatewayTimezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_timezone StoragegatewayGateway#gateway_timezone}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.activationKey">activationKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#activation_key StoragegatewayGateway#activation_key}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.averageDownloadRateLimitInBitsPerSec">averageDownloadRateLimitInBitsPerSec</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_download_rate_limit_in_bits_per_sec StoragegatewayGateway#average_download_rate_limit_in_bits_per_sec}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.averageUploadRateLimitInBitsPerSec">averageUploadRateLimitInBitsPerSec</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_upload_rate_limit_in_bits_per_sec StoragegatewayGateway#average_upload_rate_limit_in_bits_per_sec}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#cloudwatch_log_group_arn StoragegatewayGateway#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayIpAddress">gatewayIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_ip_address StoragegatewayGateway#gateway_ip_address}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayType">gatewayType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_type StoragegatewayGateway#gateway_type}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayVpcEndpoint">gatewayVpcEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_vpc_endpoint StoragegatewayGateway#gateway_vpc_endpoint}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#id StoragegatewayGateway#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.maintenanceStartTime">maintenanceStartTime</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a></code> | maintenance_start_time block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.mediumChangerType">mediumChangerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#medium_changer_type StoragegatewayGateway#medium_changer_type}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbActiveDirectorySettings">smbActiveDirectorySettings</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a></code> | smb_active_directory_settings block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbFileShareVisibility">smbFileShareVisibility</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_file_share_visibility StoragegatewayGateway#smb_file_share_visibility}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbGuestPassword">smbGuestPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_guest_password StoragegatewayGateway#smb_guest_password}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbSecurityStrategy">smbSecurityStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_security_strategy StoragegatewayGateway#smb_security_strategy}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags StoragegatewayGateway#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags_all StoragegatewayGateway#tags_all}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tapeDriveType">tapeDriveType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tape_drive_type StoragegatewayGateway#tape_drive_type}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayName"></a>

```typescript
public readonly gatewayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_name StoragegatewayGateway#gateway_name}.

---

##### `gatewayTimezone`<sup>Required</sup> <a name="gatewayTimezone" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayTimezone"></a>

```typescript
public readonly gatewayTimezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_timezone StoragegatewayGateway#gateway_timezone}.

---

##### `activationKey`<sup>Optional</sup> <a name="activationKey" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.activationKey"></a>

```typescript
public readonly activationKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#activation_key StoragegatewayGateway#activation_key}.

---

##### `averageDownloadRateLimitInBitsPerSec`<sup>Optional</sup> <a name="averageDownloadRateLimitInBitsPerSec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.averageDownloadRateLimitInBitsPerSec"></a>

```typescript
public readonly averageDownloadRateLimitInBitsPerSec: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_download_rate_limit_in_bits_per_sec StoragegatewayGateway#average_download_rate_limit_in_bits_per_sec}.

---

##### `averageUploadRateLimitInBitsPerSec`<sup>Optional</sup> <a name="averageUploadRateLimitInBitsPerSec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.averageUploadRateLimitInBitsPerSec"></a>

```typescript
public readonly averageUploadRateLimitInBitsPerSec: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_upload_rate_limit_in_bits_per_sec StoragegatewayGateway#average_upload_rate_limit_in_bits_per_sec}.

---

##### `cloudwatchLogGroupArn`<sup>Optional</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.cloudwatchLogGroupArn"></a>

```typescript
public readonly cloudwatchLogGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#cloudwatch_log_group_arn StoragegatewayGateway#cloudwatch_log_group_arn}.

---

##### `gatewayIpAddress`<sup>Optional</sup> <a name="gatewayIpAddress" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayIpAddress"></a>

```typescript
public readonly gatewayIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_ip_address StoragegatewayGateway#gateway_ip_address}.

---

##### `gatewayType`<sup>Optional</sup> <a name="gatewayType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayType"></a>

```typescript
public readonly gatewayType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_type StoragegatewayGateway#gateway_type}.

---

##### `gatewayVpcEndpoint`<sup>Optional</sup> <a name="gatewayVpcEndpoint" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayVpcEndpoint"></a>

```typescript
public readonly gatewayVpcEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_vpc_endpoint StoragegatewayGateway#gateway_vpc_endpoint}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#id StoragegatewayGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceStartTime`<sup>Optional</sup> <a name="maintenanceStartTime" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.maintenanceStartTime"></a>

```typescript
public readonly maintenanceStartTime: StoragegatewayGatewayMaintenanceStartTime;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a>

maintenance_start_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#maintenance_start_time StoragegatewayGateway#maintenance_start_time}

---

##### `mediumChangerType`<sup>Optional</sup> <a name="mediumChangerType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.mediumChangerType"></a>

```typescript
public readonly mediumChangerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#medium_changer_type StoragegatewayGateway#medium_changer_type}.

---

##### `smbActiveDirectorySettings`<sup>Optional</sup> <a name="smbActiveDirectorySettings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbActiveDirectorySettings"></a>

```typescript
public readonly smbActiveDirectorySettings: StoragegatewayGatewaySmbActiveDirectorySettings;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a>

smb_active_directory_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_active_directory_settings StoragegatewayGateway#smb_active_directory_settings}

---

##### `smbFileShareVisibility`<sup>Optional</sup> <a name="smbFileShareVisibility" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbFileShareVisibility"></a>

```typescript
public readonly smbFileShareVisibility: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_file_share_visibility StoragegatewayGateway#smb_file_share_visibility}.

---

##### `smbGuestPassword`<sup>Optional</sup> <a name="smbGuestPassword" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbGuestPassword"></a>

```typescript
public readonly smbGuestPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_guest_password StoragegatewayGateway#smb_guest_password}.

---

##### `smbSecurityStrategy`<sup>Optional</sup> <a name="smbSecurityStrategy" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbSecurityStrategy"></a>

```typescript
public readonly smbSecurityStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_security_strategy StoragegatewayGateway#smb_security_strategy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags StoragegatewayGateway#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags_all StoragegatewayGateway#tags_all}.

---

##### `tapeDriveType`<sup>Optional</sup> <a name="tapeDriveType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tapeDriveType"></a>

```typescript
public readonly tapeDriveType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tape_drive_type StoragegatewayGateway#tape_drive_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StoragegatewayGatewayTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#timeouts StoragegatewayGateway#timeouts}

---

### StoragegatewayGatewayGatewayNetworkInterface <a name="StoragegatewayGatewayGatewayNetworkInterface" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterface.Initializer"></a>

```typescript
import { storagegatewayGateway } from '@cdktf/provider-aws'

const storagegatewayGatewayGatewayNetworkInterface: storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterface = { ... }
```


### StoragegatewayGatewayMaintenanceStartTime <a name="StoragegatewayGatewayMaintenanceStartTime" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.Initializer"></a>

```typescript
import { storagegatewayGateway } from '@cdktf/provider-aws'

const storagegatewayGatewayMaintenanceStartTime: storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#hour_of_day StoragegatewayGateway#hour_of_day}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.dayOfMonth">dayOfMonth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#day_of_month StoragegatewayGateway#day_of_month}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#day_of_week StoragegatewayGateway#day_of_week}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.minuteOfHour">minuteOfHour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#minute_of_hour StoragegatewayGateway#minute_of_hour}. |

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#hour_of_day StoragegatewayGateway#hour_of_day}.

---

##### `dayOfMonth`<sup>Optional</sup> <a name="dayOfMonth" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.dayOfMonth"></a>

```typescript
public readonly dayOfMonth: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#day_of_month StoragegatewayGateway#day_of_month}.

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#day_of_week StoragegatewayGateway#day_of_week}.

---

##### `minuteOfHour`<sup>Optional</sup> <a name="minuteOfHour" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.minuteOfHour"></a>

```typescript
public readonly minuteOfHour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#minute_of_hour StoragegatewayGateway#minute_of_hour}.

---

### StoragegatewayGatewaySmbActiveDirectorySettings <a name="StoragegatewayGatewaySmbActiveDirectorySettings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.Initializer"></a>

```typescript
import { storagegatewayGateway } from '@cdktf/provider-aws'

const storagegatewayGatewaySmbActiveDirectorySettings: storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#domain_name StoragegatewayGateway#domain_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#password StoragegatewayGateway#password}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#username StoragegatewayGateway#username}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.domainControllers">domainControllers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#domain_controllers StoragegatewayGateway#domain_controllers}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#organizational_unit StoragegatewayGateway#organizational_unit}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#timeout_in_seconds StoragegatewayGateway#timeout_in_seconds}. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#domain_name StoragegatewayGateway#domain_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#password StoragegatewayGateway#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#username StoragegatewayGateway#username}.

---

##### `domainControllers`<sup>Optional</sup> <a name="domainControllers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.domainControllers"></a>

```typescript
public readonly domainControllers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#domain_controllers StoragegatewayGateway#domain_controllers}.

---

##### `organizationalUnit`<sup>Optional</sup> <a name="organizationalUnit" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#organizational_unit StoragegatewayGateway#organizational_unit}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#timeout_in_seconds StoragegatewayGateway#timeout_in_seconds}.

---

### StoragegatewayGatewayTimeouts <a name="StoragegatewayGatewayTimeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts.Initializer"></a>

```typescript
import { storagegatewayGateway } from '@cdktf/provider-aws'

const storagegatewayGatewayTimeouts: storagegatewayGateway.StoragegatewayGatewayTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#create StoragegatewayGateway#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#create StoragegatewayGateway#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayGatewayGatewayNetworkInterfaceList <a name="StoragegatewayGatewayGatewayNetworkInterfaceList" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer"></a>

```typescript
import { storagegatewayGateway } from '@cdktf/provider-aws'

new storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.get"></a>

```typescript
public get(index: number): StoragegatewayGatewayGatewayNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StoragegatewayGatewayGatewayNetworkInterfaceOutputReference <a name="StoragegatewayGatewayGatewayNetworkInterfaceOutputReference" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer"></a>

```typescript
import { storagegatewayGateway } from '@cdktf/provider-aws'

new storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.ipv4Address">ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterface">StoragegatewayGatewayGatewayNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.ipv4Address"></a>

```typescript
public readonly ipv4Address: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StoragegatewayGatewayGatewayNetworkInterface;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterface">StoragegatewayGatewayGatewayNetworkInterface</a>

---


### StoragegatewayGatewayMaintenanceStartTimeOutputReference <a name="StoragegatewayGatewayMaintenanceStartTimeOutputReference" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.Initializer"></a>

```typescript
import { storagegatewayGateway } from '@cdktf/provider-aws'

new storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetDayOfMonth">resetDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetMinuteOfHour">resetMinuteOfHour</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDayOfMonth` <a name="resetDayOfMonth" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetDayOfMonth"></a>

```typescript
public resetDayOfMonth(): void
```

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetDayOfWeek"></a>

```typescript
public resetDayOfWeek(): void
```

##### `resetMinuteOfHour` <a name="resetMinuteOfHour" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetMinuteOfHour"></a>

```typescript
public resetMinuteOfHour(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfMonthInput">dayOfMonthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.hourOfDayInput">hourOfDayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.minuteOfHourInput">minuteOfHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfMonth">dayOfMonth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.minuteOfHour">minuteOfHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfMonthInput`<sup>Optional</sup> <a name="dayOfMonthInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfMonthInput"></a>

```typescript
public readonly dayOfMonthInput: string;
```

- *Type:* string

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `hourOfDayInput`<sup>Optional</sup> <a name="hourOfDayInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.hourOfDayInput"></a>

```typescript
public readonly hourOfDayInput: number;
```

- *Type:* number

---

##### `minuteOfHourInput`<sup>Optional</sup> <a name="minuteOfHourInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.minuteOfHourInput"></a>

```typescript
public readonly minuteOfHourInput: number;
```

- *Type:* number

---

##### `dayOfMonth`<sup>Required</sup> <a name="dayOfMonth" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfMonth"></a>

```typescript
public readonly dayOfMonth: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

---

##### `minuteOfHour`<sup>Required</sup> <a name="minuteOfHour" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.minuteOfHour"></a>

```typescript
public readonly minuteOfHour: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StoragegatewayGatewayMaintenanceStartTime;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a>

---


### StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference <a name="StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.Initializer"></a>

```typescript
import { storagegatewayGateway } from '@cdktf/provider-aws'

new storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetDomainControllers">resetDomainControllers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetOrganizationalUnit">resetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomainControllers` <a name="resetDomainControllers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetDomainControllers"></a>

```typescript
public resetDomainControllers(): void
```

##### `resetOrganizationalUnit` <a name="resetOrganizationalUnit" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetOrganizationalUnit"></a>

```typescript
public resetOrganizationalUnit(): void
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetTimeoutInSeconds"></a>

```typescript
public resetTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.activeDirectoryStatus">activeDirectoryStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainControllersInput">domainControllersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.organizationalUnitInput">organizationalUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainControllers">domainControllers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDirectoryStatus`<sup>Required</sup> <a name="activeDirectoryStatus" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.activeDirectoryStatus"></a>

```typescript
public readonly activeDirectoryStatus: string;
```

- *Type:* string

---

##### `domainControllersInput`<sup>Optional</sup> <a name="domainControllersInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainControllersInput"></a>

```typescript
public readonly domainControllersInput: string[];
```

- *Type:* string[]

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `organizationalUnitInput`<sup>Optional</sup> <a name="organizationalUnitInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.organizationalUnitInput"></a>

```typescript
public readonly organizationalUnitInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.timeoutInSecondsInput"></a>

```typescript
public readonly timeoutInSecondsInput: number;
```

- *Type:* number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `domainControllers`<sup>Required</sup> <a name="domainControllers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainControllers"></a>

```typescript
public readonly domainControllers: string[];
```

- *Type:* string[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StoragegatewayGatewaySmbActiveDirectorySettings;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a>

---


### StoragegatewayGatewayTimeoutsOutputReference <a name="StoragegatewayGatewayTimeoutsOutputReference" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.Initializer"></a>

```typescript
import { storagegatewayGateway } from '@cdktf/provider-aws'

new storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StoragegatewayGatewayTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a> | cdktf.IResolvable

---



