# `launchConfiguration` Submodule <a name="`launchConfiguration` Submodule" id="@cdktf/provider-aws.launchConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LaunchConfiguration <a name="LaunchConfiguration" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration aws_launch_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer"></a>

```typescript
import { launchConfiguration } from '@cdktf/provider-aws'

new launchConfiguration.LaunchConfiguration(scope: Construct, id: string, config: LaunchConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig">LaunchConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig">LaunchConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putEbsBlockDevice">putEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putEphemeralBlockDevice">putEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putMetadataOptions">putMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putRootBlockDevice">putRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetAssociatePublicIpAddress">resetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetEbsBlockDevice">resetEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetEbsOptimized">resetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetEnableMonitoring">resetEnableMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetEphemeralBlockDevice">resetEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetIamInstanceProfile">resetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetMetadataOptions">resetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetPlacementTenancy">resetPlacementTenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetRootBlockDevice">resetRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetSpotPrice">resetSpotPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetUserDataBase64">resetUserDataBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetVpcClassicLinkId">resetVpcClassicLinkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetVpcClassicLinkSecurityGroups">resetVpcClassicLinkSecurityGroups</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEbsBlockDevice` <a name="putEbsBlockDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putEbsBlockDevice"></a>

```typescript
public putEbsBlockDevice(value: IResolvable | LaunchConfigurationEbsBlockDevice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putEbsBlockDevice.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice">LaunchConfigurationEbsBlockDevice</a>[]

---

##### `putEphemeralBlockDevice` <a name="putEphemeralBlockDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putEphemeralBlockDevice"></a>

```typescript
public putEphemeralBlockDevice(value: IResolvable | LaunchConfigurationEphemeralBlockDevice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice">LaunchConfigurationEphemeralBlockDevice</a>[]

---

##### `putMetadataOptions` <a name="putMetadataOptions" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putMetadataOptions"></a>

```typescript
public putMetadataOptions(value: LaunchConfigurationMetadataOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions">LaunchConfigurationMetadataOptions</a>

---

##### `putRootBlockDevice` <a name="putRootBlockDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putRootBlockDevice"></a>

```typescript
public putRootBlockDevice(value: LaunchConfigurationRootBlockDevice): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putRootBlockDevice.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice">LaunchConfigurationRootBlockDevice</a>

---

##### `resetAssociatePublicIpAddress` <a name="resetAssociatePublicIpAddress" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetAssociatePublicIpAddress"></a>

```typescript
public resetAssociatePublicIpAddress(): void
```

##### `resetEbsBlockDevice` <a name="resetEbsBlockDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetEbsBlockDevice"></a>

```typescript
public resetEbsBlockDevice(): void
```

##### `resetEbsOptimized` <a name="resetEbsOptimized" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetEbsOptimized"></a>

```typescript
public resetEbsOptimized(): void
```

##### `resetEnableMonitoring` <a name="resetEnableMonitoring" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetEnableMonitoring"></a>

```typescript
public resetEnableMonitoring(): void
```

##### `resetEphemeralBlockDevice` <a name="resetEphemeralBlockDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetEphemeralBlockDevice"></a>

```typescript
public resetEphemeralBlockDevice(): void
```

##### `resetIamInstanceProfile` <a name="resetIamInstanceProfile" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetIamInstanceProfile"></a>

```typescript
public resetIamInstanceProfile(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetKeyName"></a>

```typescript
public resetKeyName(): void
```

##### `resetMetadataOptions` <a name="resetMetadataOptions" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetMetadataOptions"></a>

```typescript
public resetMetadataOptions(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetPlacementTenancy` <a name="resetPlacementTenancy" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetPlacementTenancy"></a>

```typescript
public resetPlacementTenancy(): void
```

##### `resetRootBlockDevice` <a name="resetRootBlockDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetRootBlockDevice"></a>

```typescript
public resetRootBlockDevice(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetSpotPrice` <a name="resetSpotPrice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetSpotPrice"></a>

```typescript
public resetSpotPrice(): void
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetUserData"></a>

```typescript
public resetUserData(): void
```

##### `resetUserDataBase64` <a name="resetUserDataBase64" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetUserDataBase64"></a>

```typescript
public resetUserDataBase64(): void
```

##### `resetVpcClassicLinkId` <a name="resetVpcClassicLinkId" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetVpcClassicLinkId"></a>

```typescript
public resetVpcClassicLinkId(): void
```

##### `resetVpcClassicLinkSecurityGroups` <a name="resetVpcClassicLinkSecurityGroups" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetVpcClassicLinkSecurityGroups"></a>

```typescript
public resetVpcClassicLinkSecurityGroups(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.isConstruct"></a>

```typescript
import { launchConfiguration } from '@cdktf/provider-aws'

launchConfiguration.LaunchConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.isTerraformElement"></a>

```typescript
import { launchConfiguration } from '@cdktf/provider-aws'

launchConfiguration.LaunchConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.isTerraformResource"></a>

```typescript
import { launchConfiguration } from '@cdktf/provider-aws'

launchConfiguration.LaunchConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ebsBlockDevice">ebsBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList">LaunchConfigurationEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList">LaunchConfigurationEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference">LaunchConfigurationMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.rootBlockDevice">rootBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference">LaunchConfigurationRootBlockDeviceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.associatePublicIpAddressInput">associatePublicIpAddressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ebsBlockDeviceInput">ebsBlockDeviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice">LaunchConfigurationEbsBlockDevice</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ebsOptimizedInput">ebsOptimizedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.enableMonitoringInput">enableMonitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ephemeralBlockDeviceInput">ephemeralBlockDeviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice">LaunchConfigurationEphemeralBlockDevice</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.iamInstanceProfileInput">iamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.metadataOptionsInput">metadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions">LaunchConfigurationMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.placementTenancyInput">placementTenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.rootBlockDeviceInput">rootBlockDeviceInput</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice">LaunchConfigurationRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.spotPriceInput">spotPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.userDataBase64Input">userDataBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.vpcClassicLinkIdInput">vpcClassicLinkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.vpcClassicLinkSecurityGroupsInput">vpcClassicLinkSecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.enableMonitoring">enableMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.placementTenancy">placementTenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.spotPrice">spotPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.userDataBase64">userDataBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.vpcClassicLinkId">vpcClassicLinkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.vpcClassicLinkSecurityGroups">vpcClassicLinkSecurityGroups</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `ebsBlockDevice`<sup>Required</sup> <a name="ebsBlockDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ebsBlockDevice"></a>

```typescript
public readonly ebsBlockDevice: LaunchConfigurationEbsBlockDeviceList;
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList">LaunchConfigurationEbsBlockDeviceList</a>

---

##### `ephemeralBlockDevice`<sup>Required</sup> <a name="ephemeralBlockDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ephemeralBlockDevice"></a>

```typescript
public readonly ephemeralBlockDevice: LaunchConfigurationEphemeralBlockDeviceList;
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList">LaunchConfigurationEphemeralBlockDeviceList</a>

---

##### `metadataOptions`<sup>Required</sup> <a name="metadataOptions" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: LaunchConfigurationMetadataOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference">LaunchConfigurationMetadataOptionsOutputReference</a>

---

##### `rootBlockDevice`<sup>Required</sup> <a name="rootBlockDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.rootBlockDevice"></a>

```typescript
public readonly rootBlockDevice: LaunchConfigurationRootBlockDeviceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference">LaunchConfigurationRootBlockDeviceOutputReference</a>

---

##### `associatePublicIpAddressInput`<sup>Optional</sup> <a name="associatePublicIpAddressInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.associatePublicIpAddressInput"></a>

```typescript
public readonly associatePublicIpAddressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ebsBlockDeviceInput`<sup>Optional</sup> <a name="ebsBlockDeviceInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ebsBlockDeviceInput"></a>

```typescript
public readonly ebsBlockDeviceInput: IResolvable | LaunchConfigurationEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice">LaunchConfigurationEbsBlockDevice</a>[]

---

##### `ebsOptimizedInput`<sup>Optional</sup> <a name="ebsOptimizedInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ebsOptimizedInput"></a>

```typescript
public readonly ebsOptimizedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableMonitoringInput`<sup>Optional</sup> <a name="enableMonitoringInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.enableMonitoringInput"></a>

```typescript
public readonly enableMonitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ephemeralBlockDeviceInput`<sup>Optional</sup> <a name="ephemeralBlockDeviceInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ephemeralBlockDeviceInput"></a>

```typescript
public readonly ephemeralBlockDeviceInput: IResolvable | LaunchConfigurationEphemeralBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice">LaunchConfigurationEphemeralBlockDevice</a>[]

---

##### `iamInstanceProfileInput`<sup>Optional</sup> <a name="iamInstanceProfileInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.iamInstanceProfileInput"></a>

```typescript
public readonly iamInstanceProfileInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `metadataOptionsInput`<sup>Optional</sup> <a name="metadataOptionsInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.metadataOptionsInput"></a>

```typescript
public readonly metadataOptionsInput: LaunchConfigurationMetadataOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions">LaunchConfigurationMetadataOptions</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `placementTenancyInput`<sup>Optional</sup> <a name="placementTenancyInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.placementTenancyInput"></a>

```typescript
public readonly placementTenancyInput: string;
```

- *Type:* string

---

##### `rootBlockDeviceInput`<sup>Optional</sup> <a name="rootBlockDeviceInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.rootBlockDeviceInput"></a>

```typescript
public readonly rootBlockDeviceInput: LaunchConfigurationRootBlockDevice;
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice">LaunchConfigurationRootBlockDevice</a>

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `spotPriceInput`<sup>Optional</sup> <a name="spotPriceInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.spotPriceInput"></a>

```typescript
public readonly spotPriceInput: string;
```

- *Type:* string

---

##### `userDataBase64Input`<sup>Optional</sup> <a name="userDataBase64Input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.userDataBase64Input"></a>

```typescript
public readonly userDataBase64Input: string;
```

- *Type:* string

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `vpcClassicLinkIdInput`<sup>Optional</sup> <a name="vpcClassicLinkIdInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.vpcClassicLinkIdInput"></a>

```typescript
public readonly vpcClassicLinkIdInput: string;
```

- *Type:* string

---

##### `vpcClassicLinkSecurityGroupsInput`<sup>Optional</sup> <a name="vpcClassicLinkSecurityGroupsInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.vpcClassicLinkSecurityGroupsInput"></a>

```typescript
public readonly vpcClassicLinkSecurityGroupsInput: string[];
```

- *Type:* string[]

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableMonitoring`<sup>Required</sup> <a name="enableMonitoring" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.enableMonitoring"></a>

```typescript
public readonly enableMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `placementTenancy`<sup>Required</sup> <a name="placementTenancy" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.placementTenancy"></a>

```typescript
public readonly placementTenancy: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `spotPrice`<sup>Required</sup> <a name="spotPrice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.spotPrice"></a>

```typescript
public readonly spotPrice: string;
```

- *Type:* string

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `userDataBase64`<sup>Required</sup> <a name="userDataBase64" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.userDataBase64"></a>

```typescript
public readonly userDataBase64: string;
```

- *Type:* string

---

##### `vpcClassicLinkId`<sup>Required</sup> <a name="vpcClassicLinkId" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.vpcClassicLinkId"></a>

```typescript
public readonly vpcClassicLinkId: string;
```

- *Type:* string

---

##### `vpcClassicLinkSecurityGroups`<sup>Required</sup> <a name="vpcClassicLinkSecurityGroups" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.vpcClassicLinkSecurityGroups"></a>

```typescript
public readonly vpcClassicLinkSecurityGroups: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LaunchConfigurationConfig <a name="LaunchConfigurationConfig" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.Initializer"></a>

```typescript
import { launchConfiguration } from '@cdktf/provider-aws'

const launchConfigurationConfig: launchConfiguration.LaunchConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#image_id LaunchConfiguration#image_id}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#instance_type LaunchConfiguration#instance_type}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#associate_public_ip_address LaunchConfiguration#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.ebsBlockDevice">ebsBlockDevice</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice">LaunchConfigurationEbsBlockDevice</a>[]</code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#ebs_optimized LaunchConfiguration#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.enableMonitoring">enableMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#enable_monitoring LaunchConfiguration#enable_monitoring}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice">LaunchConfigurationEphemeralBlockDevice</a>[]</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#iam_instance_profile LaunchConfiguration#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#id LaunchConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.keyName">keyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#key_name LaunchConfiguration#key_name}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions">LaunchConfigurationMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#name LaunchConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#name_prefix LaunchConfiguration#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.placementTenancy">placementTenancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#placement_tenancy LaunchConfiguration#placement_tenancy}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.rootBlockDevice">rootBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice">LaunchConfigurationRootBlockDevice</a></code> | root_block_device block. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#security_groups LaunchConfiguration#security_groups}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.spotPrice">spotPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#spot_price LaunchConfiguration#spot_price}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.userData">userData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#user_data LaunchConfiguration#user_data}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.userDataBase64">userDataBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#user_data_base64 LaunchConfiguration#user_data_base64}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.vpcClassicLinkId">vpcClassicLinkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#vpc_classic_link_id LaunchConfiguration#vpc_classic_link_id}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.vpcClassicLinkSecurityGroups">vpcClassicLinkSecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#vpc_classic_link_security_groups LaunchConfiguration#vpc_classic_link_security_groups}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#image_id LaunchConfiguration#image_id}.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#instance_type LaunchConfiguration#instance_type}.

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#associate_public_ip_address LaunchConfiguration#associate_public_ip_address}.

---

##### `ebsBlockDevice`<sup>Optional</sup> <a name="ebsBlockDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.ebsBlockDevice"></a>

```typescript
public readonly ebsBlockDevice: IResolvable | LaunchConfigurationEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice">LaunchConfigurationEbsBlockDevice</a>[]

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#ebs_block_device LaunchConfiguration#ebs_block_device}

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#ebs_optimized LaunchConfiguration#ebs_optimized}.

---

##### `enableMonitoring`<sup>Optional</sup> <a name="enableMonitoring" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.enableMonitoring"></a>

```typescript
public readonly enableMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#enable_monitoring LaunchConfiguration#enable_monitoring}.

---

##### `ephemeralBlockDevice`<sup>Optional</sup> <a name="ephemeralBlockDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.ephemeralBlockDevice"></a>

```typescript
public readonly ephemeralBlockDevice: IResolvable | LaunchConfigurationEphemeralBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice">LaunchConfigurationEphemeralBlockDevice</a>[]

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#ephemeral_block_device LaunchConfiguration#ephemeral_block_device}

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#iam_instance_profile LaunchConfiguration#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#id LaunchConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#key_name LaunchConfiguration#key_name}.

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: LaunchConfigurationMetadataOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions">LaunchConfigurationMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#metadata_options LaunchConfiguration#metadata_options}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#name LaunchConfiguration#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#name_prefix LaunchConfiguration#name_prefix}.

---

##### `placementTenancy`<sup>Optional</sup> <a name="placementTenancy" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.placementTenancy"></a>

```typescript
public readonly placementTenancy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#placement_tenancy LaunchConfiguration#placement_tenancy}.

---

##### `rootBlockDevice`<sup>Optional</sup> <a name="rootBlockDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.rootBlockDevice"></a>

```typescript
public readonly rootBlockDevice: LaunchConfigurationRootBlockDevice;
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice">LaunchConfigurationRootBlockDevice</a>

root_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#root_block_device LaunchConfiguration#root_block_device}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#security_groups LaunchConfiguration#security_groups}.

---

##### `spotPrice`<sup>Optional</sup> <a name="spotPrice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.spotPrice"></a>

```typescript
public readonly spotPrice: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#spot_price LaunchConfiguration#spot_price}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#user_data LaunchConfiguration#user_data}.

---

##### `userDataBase64`<sup>Optional</sup> <a name="userDataBase64" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.userDataBase64"></a>

```typescript
public readonly userDataBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#user_data_base64 LaunchConfiguration#user_data_base64}.

---

##### `vpcClassicLinkId`<sup>Optional</sup> <a name="vpcClassicLinkId" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.vpcClassicLinkId"></a>

```typescript
public readonly vpcClassicLinkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#vpc_classic_link_id LaunchConfiguration#vpc_classic_link_id}.

---

##### `vpcClassicLinkSecurityGroups`<sup>Optional</sup> <a name="vpcClassicLinkSecurityGroups" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.vpcClassicLinkSecurityGroups"></a>

```typescript
public readonly vpcClassicLinkSecurityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#vpc_classic_link_security_groups LaunchConfiguration#vpc_classic_link_security_groups}.

---

### LaunchConfigurationEbsBlockDevice <a name="LaunchConfigurationEbsBlockDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.Initializer"></a>

```typescript
import { launchConfiguration } from '@cdktf/provider-aws'

const launchConfigurationEbsBlockDevice: launchConfiguration.LaunchConfigurationEbsBlockDevice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.deviceName">deviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#device_name LaunchConfiguration#device_name}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#delete_on_termination LaunchConfiguration#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#encrypted LaunchConfiguration#encrypted}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#iops LaunchConfiguration#iops}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.noDevice">noDevice</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#no_device LaunchConfiguration#no_device}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#snapshot_id LaunchConfiguration#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#throughput LaunchConfiguration#throughput}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#volume_size LaunchConfiguration#volume_size}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#volume_type LaunchConfiguration#volume_type}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#device_name LaunchConfiguration#device_name}.

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#delete_on_termination LaunchConfiguration#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#encrypted LaunchConfiguration#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#iops LaunchConfiguration#iops}.

---

##### `noDevice`<sup>Optional</sup> <a name="noDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.noDevice"></a>

```typescript
public readonly noDevice: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#no_device LaunchConfiguration#no_device}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#snapshot_id LaunchConfiguration#snapshot_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#throughput LaunchConfiguration#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#volume_size LaunchConfiguration#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#volume_type LaunchConfiguration#volume_type}.

---

### LaunchConfigurationEphemeralBlockDevice <a name="LaunchConfigurationEphemeralBlockDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice.Initializer"></a>

```typescript
import { launchConfiguration } from '@cdktf/provider-aws'

const launchConfigurationEphemeralBlockDevice: launchConfiguration.LaunchConfigurationEphemeralBlockDevice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice.property.deviceName">deviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#device_name LaunchConfiguration#device_name}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice.property.noDevice">noDevice</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#no_device LaunchConfiguration#no_device}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice.property.virtualName">virtualName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#virtual_name LaunchConfiguration#virtual_name}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#device_name LaunchConfiguration#device_name}.

---

##### `noDevice`<sup>Optional</sup> <a name="noDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice.property.noDevice"></a>

```typescript
public readonly noDevice: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#no_device LaunchConfiguration#no_device}.

---

##### `virtualName`<sup>Optional</sup> <a name="virtualName" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#virtual_name LaunchConfiguration#virtual_name}.

---

### LaunchConfigurationMetadataOptions <a name="LaunchConfigurationMetadataOptions" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions.Initializer"></a>

```typescript
import { launchConfiguration } from '@cdktf/provider-aws'

const launchConfigurationMetadataOptions: launchConfiguration.LaunchConfigurationMetadataOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions.property.httpEndpoint">httpEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#http_endpoint LaunchConfiguration#http_endpoint}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#http_put_response_hop_limit LaunchConfiguration#http_put_response_hop_limit}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions.property.httpTokens">httpTokens</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#http_tokens LaunchConfiguration#http_tokens}. |

---

##### `httpEndpoint`<sup>Optional</sup> <a name="httpEndpoint" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#http_endpoint LaunchConfiguration#http_endpoint}.

---

##### `httpPutResponseHopLimit`<sup>Optional</sup> <a name="httpPutResponseHopLimit" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#http_put_response_hop_limit LaunchConfiguration#http_put_response_hop_limit}.

---

##### `httpTokens`<sup>Optional</sup> <a name="httpTokens" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#http_tokens LaunchConfiguration#http_tokens}.

---

### LaunchConfigurationRootBlockDevice <a name="LaunchConfigurationRootBlockDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.Initializer"></a>

```typescript
import { launchConfiguration } from '@cdktf/provider-aws'

const launchConfigurationRootBlockDevice: launchConfiguration.LaunchConfigurationRootBlockDevice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#delete_on_termination LaunchConfiguration#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#encrypted LaunchConfiguration#encrypted}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#iops LaunchConfiguration#iops}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#throughput LaunchConfiguration#throughput}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#volume_size LaunchConfiguration#volume_size}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#volume_type LaunchConfiguration#volume_type}. |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#delete_on_termination LaunchConfiguration#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#encrypted LaunchConfiguration#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#iops LaunchConfiguration#iops}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#throughput LaunchConfiguration#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#volume_size LaunchConfiguration#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#volume_type LaunchConfiguration#volume_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LaunchConfigurationEbsBlockDeviceList <a name="LaunchConfigurationEbsBlockDeviceList" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.Initializer"></a>

```typescript
import { launchConfiguration } from '@cdktf/provider-aws'

new launchConfiguration.LaunchConfigurationEbsBlockDeviceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.get"></a>

```typescript
public get(index: number): LaunchConfigurationEbsBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice">LaunchConfigurationEbsBlockDevice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LaunchConfigurationEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice">LaunchConfigurationEbsBlockDevice</a>[]

---


### LaunchConfigurationEbsBlockDeviceOutputReference <a name="LaunchConfigurationEbsBlockDeviceOutputReference" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.Initializer"></a>

```typescript
import { launchConfiguration } from '@cdktf/provider-aws'

new launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetNoDevice">resetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetNoDevice` <a name="resetNoDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetNoDevice"></a>

```typescript
public resetNoDevice(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.noDeviceInput">noDeviceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.noDevice">noDevice</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice">LaunchConfigurationEbsBlockDevice</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `noDeviceInput`<sup>Optional</sup> <a name="noDeviceInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.noDeviceInput"></a>

```typescript
public readonly noDeviceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.noDevice"></a>

```typescript
public readonly noDevice: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LaunchConfigurationEbsBlockDevice | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice">LaunchConfigurationEbsBlockDevice</a> | cdktf.IResolvable

---


### LaunchConfigurationEphemeralBlockDeviceList <a name="LaunchConfigurationEphemeralBlockDeviceList" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.Initializer"></a>

```typescript
import { launchConfiguration } from '@cdktf/provider-aws'

new launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.get"></a>

```typescript
public get(index: number): LaunchConfigurationEphemeralBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice">LaunchConfigurationEphemeralBlockDevice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LaunchConfigurationEphemeralBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice">LaunchConfigurationEphemeralBlockDevice</a>[]

---


### LaunchConfigurationEphemeralBlockDeviceOutputReference <a name="LaunchConfigurationEphemeralBlockDeviceOutputReference" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.Initializer"></a>

```typescript
import { launchConfiguration } from '@cdktf/provider-aws'

new launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.resetNoDevice">resetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.resetVirtualName">resetVirtualName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNoDevice` <a name="resetNoDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.resetNoDevice"></a>

```typescript
public resetNoDevice(): void
```

##### `resetVirtualName` <a name="resetVirtualName" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.resetVirtualName"></a>

```typescript
public resetVirtualName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.noDeviceInput">noDeviceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.noDevice">noDevice</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice">LaunchConfigurationEphemeralBlockDevice</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `noDeviceInput`<sup>Optional</sup> <a name="noDeviceInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.noDeviceInput"></a>

```typescript
public readonly noDeviceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.virtualNameInput"></a>

```typescript
public readonly virtualNameInput: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.noDevice"></a>

```typescript
public readonly noDevice: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LaunchConfigurationEphemeralBlockDevice | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice">LaunchConfigurationEphemeralBlockDevice</a> | cdktf.IResolvable

---


### LaunchConfigurationMetadataOptionsOutputReference <a name="LaunchConfigurationMetadataOptionsOutputReference" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.Initializer"></a>

```typescript
import { launchConfiguration } from '@cdktf/provider-aws'

new launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.resetHttpEndpoint">resetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">resetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.resetHttpTokens">resetHttpTokens</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpEndpoint` <a name="resetHttpEndpoint" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```typescript
public resetHttpEndpoint(): void
```

##### `resetHttpPutResponseHopLimit` <a name="resetHttpPutResponseHopLimit" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```typescript
public resetHttpPutResponseHopLimit(): void
```

##### `resetHttpTokens` <a name="resetHttpTokens" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.resetHttpTokens"></a>

```typescript
public resetHttpTokens(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpEndpointInput">httpEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">httpPutResponseHopLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpTokensInput">httpTokensInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpEndpoint">httpEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions">LaunchConfigurationMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpEndpointInput`<sup>Optional</sup> <a name="httpEndpointInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```typescript
public readonly httpEndpointInput: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimitInput`<sup>Optional</sup> <a name="httpPutResponseHopLimitInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```typescript
public readonly httpPutResponseHopLimitInput: number;
```

- *Type:* number

---

##### `httpTokensInput`<sup>Optional</sup> <a name="httpTokensInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpTokensInput"></a>

```typescript
public readonly httpTokensInput: string;
```

- *Type:* string

---

##### `httpEndpoint`<sup>Required</sup> <a name="httpEndpoint" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LaunchConfigurationMetadataOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions">LaunchConfigurationMetadataOptions</a>

---


### LaunchConfigurationRootBlockDeviceOutputReference <a name="LaunchConfigurationRootBlockDeviceOutputReference" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.Initializer"></a>

```typescript
import { launchConfiguration } from '@cdktf/provider-aws'

new launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice">LaunchConfigurationRootBlockDevice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LaunchConfigurationRootBlockDevice;
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice">LaunchConfigurationRootBlockDevice</a>

---



