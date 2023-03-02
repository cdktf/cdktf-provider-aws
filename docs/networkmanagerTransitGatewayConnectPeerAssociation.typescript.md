# `networkmanagerTransitGatewayConnectPeerAssociation` Submodule <a name="`networkmanagerTransitGatewayConnectPeerAssociation` Submodule" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerTransitGatewayConnectPeerAssociation <a name="NetworkmanagerTransitGatewayConnectPeerAssociation" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association aws_networkmanager_transit_gateway_connect_peer_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer"></a>

```typescript
import { networkmanagerTransitGatewayConnectPeerAssociation } from '@cdktf/provider-aws'

new networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation(scope: Construct, id: string, config: NetworkmanagerTransitGatewayConnectPeerAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig">NetworkmanagerTransitGatewayConnectPeerAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig">NetworkmanagerTransitGatewayConnectPeerAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.resetLinkId">resetLinkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts">NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLinkId` <a name="resetLinkId" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.resetLinkId"></a>

```typescript
public resetLinkId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isConstruct"></a>

```typescript
import { networkmanagerTransitGatewayConnectPeerAssociation } from '@cdktf/provider-aws'

networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isTerraformElement"></a>

```typescript
import { networkmanagerTransitGatewayConnectPeerAssociation } from '@cdktf/provider-aws'

networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isTerraformResource"></a>

```typescript
import { networkmanagerTransitGatewayConnectPeerAssociation } from '@cdktf/provider-aws'

networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference">NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.deviceIdInput">deviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.globalNetworkIdInput">globalNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.linkIdInput">linkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts">NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.transitGatewayConnectPeerArnInput">transitGatewayConnectPeerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.deviceId">deviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.linkId">linkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.transitGatewayConnectPeerArn">transitGatewayConnectPeerArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference">NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference</a>

---

##### `deviceIdInput`<sup>Optional</sup> <a name="deviceIdInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.deviceIdInput"></a>

```typescript
public readonly deviceIdInput: string;
```

- *Type:* string

---

##### `globalNetworkIdInput`<sup>Optional</sup> <a name="globalNetworkIdInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.globalNetworkIdInput"></a>

```typescript
public readonly globalNetworkIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `linkIdInput`<sup>Optional</sup> <a name="linkIdInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.linkIdInput"></a>

```typescript
public readonly linkIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts">NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts</a> | cdktf.IResolvable

---

##### `transitGatewayConnectPeerArnInput`<sup>Optional</sup> <a name="transitGatewayConnectPeerArnInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.transitGatewayConnectPeerArnInput"></a>

```typescript
public readonly transitGatewayConnectPeerArnInput: string;
```

- *Type:* string

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

---

##### `transitGatewayConnectPeerArn`<sup>Required</sup> <a name="transitGatewayConnectPeerArn" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.transitGatewayConnectPeerArn"></a>

```typescript
public readonly transitGatewayConnectPeerArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerTransitGatewayConnectPeerAssociationConfig <a name="NetworkmanagerTransitGatewayConnectPeerAssociationConfig" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.Initializer"></a>

```typescript
import { networkmanagerTransitGatewayConnectPeerAssociation } from '@cdktf/provider-aws'

const networkmanagerTransitGatewayConnectPeerAssociationConfig: networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.deviceId">deviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#device_id NetworkmanagerTransitGatewayConnectPeerAssociation#device_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#global_network_id NetworkmanagerTransitGatewayConnectPeerAssociation#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.transitGatewayConnectPeerArn">transitGatewayConnectPeerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#transit_gateway_connect_peer_arn NetworkmanagerTransitGatewayConnectPeerAssociation#transit_gateway_connect_peer_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#id NetworkmanagerTransitGatewayConnectPeerAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.linkId">linkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#link_id NetworkmanagerTransitGatewayConnectPeerAssociation#link_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts">NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#device_id NetworkmanagerTransitGatewayConnectPeerAssociation#device_id}.

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#global_network_id NetworkmanagerTransitGatewayConnectPeerAssociation#global_network_id}.

---

##### `transitGatewayConnectPeerArn`<sup>Required</sup> <a name="transitGatewayConnectPeerArn" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.transitGatewayConnectPeerArn"></a>

```typescript
public readonly transitGatewayConnectPeerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#transit_gateway_connect_peer_arn NetworkmanagerTransitGatewayConnectPeerAssociation#transit_gateway_connect_peer_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#id NetworkmanagerTransitGatewayConnectPeerAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `linkId`<sup>Optional</sup> <a name="linkId" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#link_id NetworkmanagerTransitGatewayConnectPeerAssociation#link_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts">NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#timeouts NetworkmanagerTransitGatewayConnectPeerAssociation#timeouts}

---

### NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts <a name="NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts.Initializer"></a>

```typescript
import { networkmanagerTransitGatewayConnectPeerAssociation } from '@cdktf/provider-aws'

const networkmanagerTransitGatewayConnectPeerAssociationTimeouts: networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#create NetworkmanagerTransitGatewayConnectPeerAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#delete NetworkmanagerTransitGatewayConnectPeerAssociation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#create NetworkmanagerTransitGatewayConnectPeerAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#delete NetworkmanagerTransitGatewayConnectPeerAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference <a name="NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkmanagerTransitGatewayConnectPeerAssociation } from '@cdktf/provider-aws'

new networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts">NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts">NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts</a> | cdktf.IResolvable

---



