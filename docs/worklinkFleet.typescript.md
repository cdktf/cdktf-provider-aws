# `worklinkFleet` Submodule <a name="`worklinkFleet` Submodule" id="@cdktf/provider-aws.worklinkFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorklinkFleet <a name="WorklinkFleet" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet aws_worklink_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer"></a>

```typescript
import { worklinkFleet } from '@cdktf/provider-aws'

new worklinkFleet.WorklinkFleet(scope: Construct, id: string, config: WorklinkFleetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig">WorklinkFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig">WorklinkFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putIdentityProvider">putIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetAuditStreamArn">resetAuditStreamArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetDeviceCaCertificate">resetDeviceCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetIdentityProvider">resetIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetOptimizeForEndUserLocation">resetOptimizeForEndUserLocation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIdentityProvider` <a name="putIdentityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putIdentityProvider"></a>

```typescript
public putIdentityProvider(value: WorklinkFleetIdentityProvider): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putIdentityProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putNetwork"></a>

```typescript
public putNetwork(value: WorklinkFleetNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

---

##### `resetAuditStreamArn` <a name="resetAuditStreamArn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetAuditStreamArn"></a>

```typescript
public resetAuditStreamArn(): void
```

##### `resetDeviceCaCertificate` <a name="resetDeviceCaCertificate" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetDeviceCaCertificate"></a>

```typescript
public resetDeviceCaCertificate(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentityProvider` <a name="resetIdentityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetIdentityProvider"></a>

```typescript
public resetIdentityProvider(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetOptimizeForEndUserLocation` <a name="resetOptimizeForEndUserLocation" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetOptimizeForEndUserLocation"></a>

```typescript
public resetOptimizeForEndUserLocation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isConstruct"></a>

```typescript
import { worklinkFleet } from '@cdktf/provider-aws'

worklinkFleet.WorklinkFleet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformElement"></a>

```typescript
import { worklinkFleet } from '@cdktf/provider-aws'

worklinkFleet.WorklinkFleet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformResource"></a>

```typescript
import { worklinkFleet } from '@cdktf/provider-aws'

worklinkFleet.WorklinkFleet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.companyCode">companyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.identityProvider">identityProvider</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference">WorklinkFleetIdentityProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.network">network</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference">WorklinkFleetNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.auditStreamArnInput">auditStreamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.deviceCaCertificateInput">deviceCaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.identityProviderInput">identityProviderInput</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.optimizeForEndUserLocationInput">optimizeForEndUserLocationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.auditStreamArn">auditStreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.deviceCaCertificate">deviceCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.optimizeForEndUserLocation">optimizeForEndUserLocation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `companyCode`<sup>Required</sup> <a name="companyCode" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.companyCode"></a>

```typescript
public readonly companyCode: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `identityProvider`<sup>Required</sup> <a name="identityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.identityProvider"></a>

```typescript
public readonly identityProvider: WorklinkFleetIdentityProviderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference">WorklinkFleetIdentityProviderOutputReference</a>

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.network"></a>

```typescript
public readonly network: WorklinkFleetNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference">WorklinkFleetNetworkOutputReference</a>

---

##### `auditStreamArnInput`<sup>Optional</sup> <a name="auditStreamArnInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.auditStreamArnInput"></a>

```typescript
public readonly auditStreamArnInput: string;
```

- *Type:* string

---

##### `deviceCaCertificateInput`<sup>Optional</sup> <a name="deviceCaCertificateInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.deviceCaCertificateInput"></a>

```typescript
public readonly deviceCaCertificateInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `identityProviderInput`<sup>Optional</sup> <a name="identityProviderInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.identityProviderInput"></a>

```typescript
public readonly identityProviderInput: WorklinkFleetIdentityProvider;
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.networkInput"></a>

```typescript
public readonly networkInput: WorklinkFleetNetwork;
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

---

##### `optimizeForEndUserLocationInput`<sup>Optional</sup> <a name="optimizeForEndUserLocationInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.optimizeForEndUserLocationInput"></a>

```typescript
public readonly optimizeForEndUserLocationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `auditStreamArn`<sup>Required</sup> <a name="auditStreamArn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.auditStreamArn"></a>

```typescript
public readonly auditStreamArn: string;
```

- *Type:* string

---

##### `deviceCaCertificate`<sup>Required</sup> <a name="deviceCaCertificate" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.deviceCaCertificate"></a>

```typescript
public readonly deviceCaCertificate: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `optimizeForEndUserLocation`<sup>Required</sup> <a name="optimizeForEndUserLocation" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.optimizeForEndUserLocation"></a>

```typescript
public readonly optimizeForEndUserLocation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorklinkFleetConfig <a name="WorklinkFleetConfig" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.Initializer"></a>

```typescript
import { worklinkFleet } from '@cdktf/provider-aws'

const worklinkFleetConfig: worklinkFleet.WorklinkFleetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#name WorklinkFleet#name}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.auditStreamArn">auditStreamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#audit_stream_arn WorklinkFleet#audit_stream_arn}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.deviceCaCertificate">deviceCaCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#device_ca_certificate WorklinkFleet#device_ca_certificate}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#display_name WorklinkFleet#display_name}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#id WorklinkFleet#id}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.identityProvider">identityProvider</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a></code> | identity_provider block. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.optimizeForEndUserLocation">optimizeForEndUserLocation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#optimize_for_end_user_location WorklinkFleet#optimize_for_end_user_location}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#name WorklinkFleet#name}.

---

##### `auditStreamArn`<sup>Optional</sup> <a name="auditStreamArn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.auditStreamArn"></a>

```typescript
public readonly auditStreamArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#audit_stream_arn WorklinkFleet#audit_stream_arn}.

---

##### `deviceCaCertificate`<sup>Optional</sup> <a name="deviceCaCertificate" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.deviceCaCertificate"></a>

```typescript
public readonly deviceCaCertificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#device_ca_certificate WorklinkFleet#device_ca_certificate}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#display_name WorklinkFleet#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#id WorklinkFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProvider`<sup>Optional</sup> <a name="identityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.identityProvider"></a>

```typescript
public readonly identityProvider: WorklinkFleetIdentityProvider;
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

identity_provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#identity_provider WorklinkFleet#identity_provider}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.network"></a>

```typescript
public readonly network: WorklinkFleetNetwork;
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

network block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#network WorklinkFleet#network}

---

##### `optimizeForEndUserLocation`<sup>Optional</sup> <a name="optimizeForEndUserLocation" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.optimizeForEndUserLocation"></a>

```typescript
public readonly optimizeForEndUserLocation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#optimize_for_end_user_location WorklinkFleet#optimize_for_end_user_location}.

---

### WorklinkFleetIdentityProvider <a name="WorklinkFleetIdentityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.Initializer"></a>

```typescript
import { worklinkFleet } from '@cdktf/provider-aws'

const worklinkFleetIdentityProvider: worklinkFleet.WorklinkFleetIdentityProvider = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.property.samlMetadata">samlMetadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#saml_metadata WorklinkFleet#saml_metadata}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#type WorklinkFleet#type}. |

---

##### `samlMetadata`<sup>Required</sup> <a name="samlMetadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.property.samlMetadata"></a>

```typescript
public readonly samlMetadata: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#saml_metadata WorklinkFleet#saml_metadata}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#type WorklinkFleet#type}.

---

### WorklinkFleetNetwork <a name="WorklinkFleetNetwork" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.Initializer"></a>

```typescript
import { worklinkFleet } from '@cdktf/provider-aws'

const worklinkFleetNetwork: worklinkFleet.WorklinkFleetNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#security_group_ids WorklinkFleet#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#subnet_ids WorklinkFleet#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#vpc_id WorklinkFleet#vpc_id}. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#security_group_ids WorklinkFleet#security_group_ids}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#subnet_ids WorklinkFleet#subnet_ids}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#vpc_id WorklinkFleet#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorklinkFleetIdentityProviderOutputReference <a name="WorklinkFleetIdentityProviderOutputReference" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer"></a>

```typescript
import { worklinkFleet } from '@cdktf/provider-aws'

new worklinkFleet.WorklinkFleetIdentityProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.samlMetadataInput">samlMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.samlMetadata">samlMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `samlMetadataInput`<sup>Optional</sup> <a name="samlMetadataInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.samlMetadataInput"></a>

```typescript
public readonly samlMetadataInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `samlMetadata`<sup>Required</sup> <a name="samlMetadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.samlMetadata"></a>

```typescript
public readonly samlMetadata: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorklinkFleetIdentityProvider;
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

---


### WorklinkFleetNetworkOutputReference <a name="WorklinkFleetNetworkOutputReference" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer"></a>

```typescript
import { worklinkFleet } from '@cdktf/provider-aws'

new worklinkFleet.WorklinkFleetNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorklinkFleetNetwork;
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

---



