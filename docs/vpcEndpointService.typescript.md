# `vpcEndpointService` Submodule <a name="`vpcEndpointService` Submodule" id="@cdktf/provider-aws.vpcEndpointService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcEndpointService <a name="VpcEndpointService" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service aws_vpc_endpoint_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.Initializer"></a>

```typescript
import { vpcEndpointService } from '@cdktf/provider-aws'

new vpcEndpointService.VpcEndpointService(scope: Construct, id: string, config: VpcEndpointServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig">VpcEndpointServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig">VpcEndpointServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetAllowedPrincipals">resetAllowedPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetGatewayLoadBalancerArns">resetGatewayLoadBalancerArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetNetworkLoadBalancerArns">resetNetworkLoadBalancerArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetPrivateDnsName">resetPrivateDnsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetSupportedIpAddressTypes">resetSupportedIpAddressTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.putTimeouts"></a>

```typescript
public putTimeouts(value: VpcEndpointServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts">VpcEndpointServiceTimeouts</a>

---

##### `resetAllowedPrincipals` <a name="resetAllowedPrincipals" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetAllowedPrincipals"></a>

```typescript
public resetAllowedPrincipals(): void
```

##### `resetGatewayLoadBalancerArns` <a name="resetGatewayLoadBalancerArns" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetGatewayLoadBalancerArns"></a>

```typescript
public resetGatewayLoadBalancerArns(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworkLoadBalancerArns` <a name="resetNetworkLoadBalancerArns" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetNetworkLoadBalancerArns"></a>

```typescript
public resetNetworkLoadBalancerArns(): void
```

##### `resetPrivateDnsName` <a name="resetPrivateDnsName" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetPrivateDnsName"></a>

```typescript
public resetPrivateDnsName(): void
```

##### `resetSupportedIpAddressTypes` <a name="resetSupportedIpAddressTypes" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetSupportedIpAddressTypes"></a>

```typescript
public resetSupportedIpAddressTypes(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.isConstruct"></a>

```typescript
import { vpcEndpointService } from '@cdktf/provider-aws'

vpcEndpointService.VpcEndpointService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.isTerraformElement"></a>

```typescript
import { vpcEndpointService } from '@cdktf/provider-aws'

vpcEndpointService.VpcEndpointService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.isTerraformResource"></a>

```typescript
import { vpcEndpointService } from '@cdktf/provider-aws'

vpcEndpointService.VpcEndpointService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.baseEndpointDnsNames">baseEndpointDnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.managesVpcEndpoints">managesVpcEndpoints</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.privateDnsNameConfiguration">privateDnsNameConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList">VpcEndpointServicePrivateDnsNameConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference">VpcEndpointServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.acceptanceRequiredInput">acceptanceRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.allowedPrincipalsInput">allowedPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.gatewayLoadBalancerArnsInput">gatewayLoadBalancerArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.networkLoadBalancerArnsInput">networkLoadBalancerArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.privateDnsNameInput">privateDnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.supportedIpAddressTypesInput">supportedIpAddressTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts">VpcEndpointServiceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.acceptanceRequired">acceptanceRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.allowedPrincipals">allowedPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.gatewayLoadBalancerArns">gatewayLoadBalancerArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.networkLoadBalancerArns">networkLoadBalancerArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.privateDnsName">privateDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.supportedIpAddressTypes">supportedIpAddressTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `baseEndpointDnsNames`<sup>Required</sup> <a name="baseEndpointDnsNames" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.baseEndpointDnsNames"></a>

```typescript
public readonly baseEndpointDnsNames: string[];
```

- *Type:* string[]

---

##### `managesVpcEndpoints`<sup>Required</sup> <a name="managesVpcEndpoints" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.managesVpcEndpoints"></a>

```typescript
public readonly managesVpcEndpoints: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `privateDnsNameConfiguration`<sup>Required</sup> <a name="privateDnsNameConfiguration" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.privateDnsNameConfiguration"></a>

```typescript
public readonly privateDnsNameConfiguration: VpcEndpointServicePrivateDnsNameConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList">VpcEndpointServicePrivateDnsNameConfigurationList</a>

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.timeouts"></a>

```typescript
public readonly timeouts: VpcEndpointServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference">VpcEndpointServiceTimeoutsOutputReference</a>

---

##### `acceptanceRequiredInput`<sup>Optional</sup> <a name="acceptanceRequiredInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.acceptanceRequiredInput"></a>

```typescript
public readonly acceptanceRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedPrincipalsInput`<sup>Optional</sup> <a name="allowedPrincipalsInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.allowedPrincipalsInput"></a>

```typescript
public readonly allowedPrincipalsInput: string[];
```

- *Type:* string[]

---

##### `gatewayLoadBalancerArnsInput`<sup>Optional</sup> <a name="gatewayLoadBalancerArnsInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.gatewayLoadBalancerArnsInput"></a>

```typescript
public readonly gatewayLoadBalancerArnsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkLoadBalancerArnsInput`<sup>Optional</sup> <a name="networkLoadBalancerArnsInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.networkLoadBalancerArnsInput"></a>

```typescript
public readonly networkLoadBalancerArnsInput: string[];
```

- *Type:* string[]

---

##### `privateDnsNameInput`<sup>Optional</sup> <a name="privateDnsNameInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.privateDnsNameInput"></a>

```typescript
public readonly privateDnsNameInput: string;
```

- *Type:* string

---

##### `supportedIpAddressTypesInput`<sup>Optional</sup> <a name="supportedIpAddressTypesInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.supportedIpAddressTypesInput"></a>

```typescript
public readonly supportedIpAddressTypesInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: VpcEndpointServiceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts">VpcEndpointServiceTimeouts</a> | cdktf.IResolvable

---

##### `acceptanceRequired`<sup>Required</sup> <a name="acceptanceRequired" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.acceptanceRequired"></a>

```typescript
public readonly acceptanceRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedPrincipals`<sup>Required</sup> <a name="allowedPrincipals" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.allowedPrincipals"></a>

```typescript
public readonly allowedPrincipals: string[];
```

- *Type:* string[]

---

##### `gatewayLoadBalancerArns`<sup>Required</sup> <a name="gatewayLoadBalancerArns" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.gatewayLoadBalancerArns"></a>

```typescript
public readonly gatewayLoadBalancerArns: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkLoadBalancerArns`<sup>Required</sup> <a name="networkLoadBalancerArns" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.networkLoadBalancerArns"></a>

```typescript
public readonly networkLoadBalancerArns: string[];
```

- *Type:* string[]

---

##### `privateDnsName`<sup>Required</sup> <a name="privateDnsName" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.privateDnsName"></a>

```typescript
public readonly privateDnsName: string;
```

- *Type:* string

---

##### `supportedIpAddressTypes`<sup>Required</sup> <a name="supportedIpAddressTypes" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.supportedIpAddressTypes"></a>

```typescript
public readonly supportedIpAddressTypes: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcEndpointServiceConfig <a name="VpcEndpointServiceConfig" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.Initializer"></a>

```typescript
import { vpcEndpointService } from '@cdktf/provider-aws'

const vpcEndpointServiceConfig: vpcEndpointService.VpcEndpointServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.acceptanceRequired">acceptanceRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#acceptance_required VpcEndpointService#acceptance_required}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.allowedPrincipals">allowedPrincipals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#allowed_principals VpcEndpointService#allowed_principals}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.gatewayLoadBalancerArns">gatewayLoadBalancerArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#gateway_load_balancer_arns VpcEndpointService#gateway_load_balancer_arns}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#id VpcEndpointService#id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.networkLoadBalancerArns">networkLoadBalancerArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#network_load_balancer_arns VpcEndpointService#network_load_balancer_arns}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.privateDnsName">privateDnsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#private_dns_name VpcEndpointService#private_dns_name}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.supportedIpAddressTypes">supportedIpAddressTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#supported_ip_address_types VpcEndpointService#supported_ip_address_types}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#tags VpcEndpointService#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#tags_all VpcEndpointService#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts">VpcEndpointServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `acceptanceRequired`<sup>Required</sup> <a name="acceptanceRequired" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.acceptanceRequired"></a>

```typescript
public readonly acceptanceRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#acceptance_required VpcEndpointService#acceptance_required}.

---

##### `allowedPrincipals`<sup>Optional</sup> <a name="allowedPrincipals" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.allowedPrincipals"></a>

```typescript
public readonly allowedPrincipals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#allowed_principals VpcEndpointService#allowed_principals}.

---

##### `gatewayLoadBalancerArns`<sup>Optional</sup> <a name="gatewayLoadBalancerArns" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.gatewayLoadBalancerArns"></a>

```typescript
public readonly gatewayLoadBalancerArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#gateway_load_balancer_arns VpcEndpointService#gateway_load_balancer_arns}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#id VpcEndpointService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkLoadBalancerArns`<sup>Optional</sup> <a name="networkLoadBalancerArns" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.networkLoadBalancerArns"></a>

```typescript
public readonly networkLoadBalancerArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#network_load_balancer_arns VpcEndpointService#network_load_balancer_arns}.

---

##### `privateDnsName`<sup>Optional</sup> <a name="privateDnsName" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.privateDnsName"></a>

```typescript
public readonly privateDnsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#private_dns_name VpcEndpointService#private_dns_name}.

---

##### `supportedIpAddressTypes`<sup>Optional</sup> <a name="supportedIpAddressTypes" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.supportedIpAddressTypes"></a>

```typescript
public readonly supportedIpAddressTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#supported_ip_address_types VpcEndpointService#supported_ip_address_types}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#tags VpcEndpointService#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#tags_all VpcEndpointService#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpcEndpointServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts">VpcEndpointServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#timeouts VpcEndpointService#timeouts}

---

### VpcEndpointServicePrivateDnsNameConfiguration <a name="VpcEndpointServicePrivateDnsNameConfiguration" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfiguration.Initializer"></a>

```typescript
import { vpcEndpointService } from '@cdktf/provider-aws'

const vpcEndpointServicePrivateDnsNameConfiguration: vpcEndpointService.VpcEndpointServicePrivateDnsNameConfiguration = { ... }
```


### VpcEndpointServiceTimeouts <a name="VpcEndpointServiceTimeouts" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts.Initializer"></a>

```typescript
import { vpcEndpointService } from '@cdktf/provider-aws'

const vpcEndpointServiceTimeouts: vpcEndpointService.VpcEndpointServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#create VpcEndpointService#create}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#delete VpcEndpointService#delete}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#update VpcEndpointService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#create VpcEndpointService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#delete VpcEndpointService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#update VpcEndpointService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcEndpointServicePrivateDnsNameConfigurationList <a name="VpcEndpointServicePrivateDnsNameConfigurationList" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.Initializer"></a>

```typescript
import { vpcEndpointService } from '@cdktf/provider-aws'

new vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.get"></a>

```typescript
public get(index: number): VpcEndpointServicePrivateDnsNameConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VpcEndpointServicePrivateDnsNameConfigurationOutputReference <a name="VpcEndpointServicePrivateDnsNameConfigurationOutputReference" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer"></a>

```typescript
import { vpcEndpointService } from '@cdktf/provider-aws'

new vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfiguration">VpcEndpointServicePrivateDnsNameConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpcEndpointServicePrivateDnsNameConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServicePrivateDnsNameConfiguration">VpcEndpointServicePrivateDnsNameConfiguration</a>

---


### VpcEndpointServiceTimeoutsOutputReference <a name="VpcEndpointServiceTimeoutsOutputReference" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpcEndpointService } from '@cdktf/provider-aws'

new vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts">VpcEndpointServiceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpcEndpointServiceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointService.VpcEndpointServiceTimeouts">VpcEndpointServiceTimeouts</a> | cdktf.IResolvable

---



