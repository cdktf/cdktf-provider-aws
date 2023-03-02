# `networkmanagerTransitGatewayRegistration` Submodule <a name="`networkmanagerTransitGatewayRegistration` Submodule" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerTransitGatewayRegistration <a name="NetworkmanagerTransitGatewayRegistration" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration aws_networkmanager_transit_gateway_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer"></a>

```typescript
import { networkmanagerTransitGatewayRegistration } from '@cdktf/provider-aws'

new networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration(scope: Construct, id: string, config: NetworkmanagerTransitGatewayRegistrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig">NetworkmanagerTransitGatewayRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig">NetworkmanagerTransitGatewayRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkmanagerTransitGatewayRegistrationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isConstruct"></a>

```typescript
import { networkmanagerTransitGatewayRegistration } from '@cdktf/provider-aws'

networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformElement"></a>

```typescript
import { networkmanagerTransitGatewayRegistration } from '@cdktf/provider-aws'

networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformResource"></a>

```typescript
import { networkmanagerTransitGatewayRegistration } from '@cdktf/provider-aws'

networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference">NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.globalNetworkIdInput">globalNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.transitGatewayArnInput">transitGatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.transitGatewayArn">transitGatewayArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference">NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference</a>

---

##### `globalNetworkIdInput`<sup>Optional</sup> <a name="globalNetworkIdInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.globalNetworkIdInput"></a>

```typescript
public readonly globalNetworkIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: NetworkmanagerTransitGatewayRegistrationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a> | cdktf.IResolvable

---

##### `transitGatewayArnInput`<sup>Optional</sup> <a name="transitGatewayArnInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.transitGatewayArnInput"></a>

```typescript
public readonly transitGatewayArnInput: string;
```

- *Type:* string

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `transitGatewayArn`<sup>Required</sup> <a name="transitGatewayArn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.transitGatewayArn"></a>

```typescript
public readonly transitGatewayArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerTransitGatewayRegistrationConfig <a name="NetworkmanagerTransitGatewayRegistrationConfig" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.Initializer"></a>

```typescript
import { networkmanagerTransitGatewayRegistration } from '@cdktf/provider-aws'

const networkmanagerTransitGatewayRegistrationConfig: networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#global_network_id NetworkmanagerTransitGatewayRegistration#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.transitGatewayArn">transitGatewayArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#transit_gateway_arn NetworkmanagerTransitGatewayRegistration#transit_gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#id NetworkmanagerTransitGatewayRegistration#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#global_network_id NetworkmanagerTransitGatewayRegistration#global_network_id}.

---

##### `transitGatewayArn`<sup>Required</sup> <a name="transitGatewayArn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.transitGatewayArn"></a>

```typescript
public readonly transitGatewayArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#transit_gateway_arn NetworkmanagerTransitGatewayRegistration#transit_gateway_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#id NetworkmanagerTransitGatewayRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkmanagerTransitGatewayRegistrationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#timeouts NetworkmanagerTransitGatewayRegistration#timeouts}

---

### NetworkmanagerTransitGatewayRegistrationTimeouts <a name="NetworkmanagerTransitGatewayRegistrationTimeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts.Initializer"></a>

```typescript
import { networkmanagerTransitGatewayRegistration } from '@cdktf/provider-aws'

const networkmanagerTransitGatewayRegistrationTimeouts: networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#create NetworkmanagerTransitGatewayRegistration#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#delete NetworkmanagerTransitGatewayRegistration#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#create NetworkmanagerTransitGatewayRegistration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#delete NetworkmanagerTransitGatewayRegistration#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference <a name="NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkmanagerTransitGatewayRegistration } from '@cdktf/provider-aws'

new networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkmanagerTransitGatewayRegistrationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a> | cdktf.IResolvable

---



