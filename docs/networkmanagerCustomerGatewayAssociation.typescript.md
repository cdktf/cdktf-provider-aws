# `networkmanagerCustomerGatewayAssociation` Submodule <a name="`networkmanagerCustomerGatewayAssociation` Submodule" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerCustomerGatewayAssociation <a name="NetworkmanagerCustomerGatewayAssociation" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association aws_networkmanager_customer_gateway_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer"></a>

```typescript
import { networkmanagerCustomerGatewayAssociation } from '@cdktf/provider-aws'

new networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation(scope: Construct, id: string, config: NetworkmanagerCustomerGatewayAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig">NetworkmanagerCustomerGatewayAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig">NetworkmanagerCustomerGatewayAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetLinkId">resetLinkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkmanagerCustomerGatewayAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLinkId` <a name="resetLinkId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetLinkId"></a>

```typescript
public resetLinkId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isConstruct"></a>

```typescript
import { networkmanagerCustomerGatewayAssociation } from '@cdktf/provider-aws'

networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformElement"></a>

```typescript
import { networkmanagerCustomerGatewayAssociation } from '@cdktf/provider-aws'

networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformResource"></a>

```typescript
import { networkmanagerCustomerGatewayAssociation } from '@cdktf/provider-aws'

networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference">NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.customerGatewayArnInput">customerGatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.deviceIdInput">deviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.globalNetworkIdInput">globalNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.linkIdInput">linkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.customerGatewayArn">customerGatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.deviceId">deviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.linkId">linkId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference">NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference</a>

---

##### `customerGatewayArnInput`<sup>Optional</sup> <a name="customerGatewayArnInput" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.customerGatewayArnInput"></a>

```typescript
public readonly customerGatewayArnInput: string;
```

- *Type:* string

---

##### `deviceIdInput`<sup>Optional</sup> <a name="deviceIdInput" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.deviceIdInput"></a>

```typescript
public readonly deviceIdInput: string;
```

- *Type:* string

---

##### `globalNetworkIdInput`<sup>Optional</sup> <a name="globalNetworkIdInput" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.globalNetworkIdInput"></a>

```typescript
public readonly globalNetworkIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `linkIdInput`<sup>Optional</sup> <a name="linkIdInput" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.linkIdInput"></a>

```typescript
public readonly linkIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: NetworkmanagerCustomerGatewayAssociationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a> | cdktf.IResolvable

---

##### `customerGatewayArn`<sup>Required</sup> <a name="customerGatewayArn" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.customerGatewayArn"></a>

```typescript
public readonly customerGatewayArn: string;
```

- *Type:* string

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerCustomerGatewayAssociationConfig <a name="NetworkmanagerCustomerGatewayAssociationConfig" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.Initializer"></a>

```typescript
import { networkmanagerCustomerGatewayAssociation } from '@cdktf/provider-aws'

const networkmanagerCustomerGatewayAssociationConfig: networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.customerGatewayArn">customerGatewayArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#customer_gateway_arn NetworkmanagerCustomerGatewayAssociation#customer_gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.deviceId">deviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#device_id NetworkmanagerCustomerGatewayAssociation#device_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#global_network_id NetworkmanagerCustomerGatewayAssociation#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#id NetworkmanagerCustomerGatewayAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.linkId">linkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#link_id NetworkmanagerCustomerGatewayAssociation#link_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customerGatewayArn`<sup>Required</sup> <a name="customerGatewayArn" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.customerGatewayArn"></a>

```typescript
public readonly customerGatewayArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#customer_gateway_arn NetworkmanagerCustomerGatewayAssociation#customer_gateway_arn}.

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#device_id NetworkmanagerCustomerGatewayAssociation#device_id}.

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#global_network_id NetworkmanagerCustomerGatewayAssociation#global_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#id NetworkmanagerCustomerGatewayAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `linkId`<sup>Optional</sup> <a name="linkId" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#link_id NetworkmanagerCustomerGatewayAssociation#link_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkmanagerCustomerGatewayAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#timeouts NetworkmanagerCustomerGatewayAssociation#timeouts}

---

### NetworkmanagerCustomerGatewayAssociationTimeouts <a name="NetworkmanagerCustomerGatewayAssociationTimeouts" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts.Initializer"></a>

```typescript
import { networkmanagerCustomerGatewayAssociation } from '@cdktf/provider-aws'

const networkmanagerCustomerGatewayAssociationTimeouts: networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#create NetworkmanagerCustomerGatewayAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#delete NetworkmanagerCustomerGatewayAssociation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#create NetworkmanagerCustomerGatewayAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#delete NetworkmanagerCustomerGatewayAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference <a name="NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkmanagerCustomerGatewayAssociation } from '@cdktf/provider-aws'

new networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkmanagerCustomerGatewayAssociationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a> | cdktf.IResolvable

---



