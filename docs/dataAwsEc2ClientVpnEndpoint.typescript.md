# `dataAwsEc2ClientVpnEndpoint` Submodule <a name="`dataAwsEc2ClientVpnEndpoint` Submodule" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2ClientVpnEndpoint <a name="DataAwsEc2ClientVpnEndpoint" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint aws_ec2_client_vpn_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

new dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint(scope: Construct, id: string, config?: DataAwsEc2ClientVpnEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig">DataAwsEc2ClientVpnEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig">DataAwsEc2ClientVpnEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetClientVpnEndpointId">resetClientVpnEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsEc2ClientVpnEndpointFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAwsEc2ClientVpnEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a>

---

##### `resetClientVpnEndpointId` <a name="resetClientVpnEndpointId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetClientVpnEndpointId"></a>

```typescript
public resetClientVpnEndpointId(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isConstruct"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformElement"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformDataSource"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.authenticationOptions">authenticationOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList">DataAwsEc2ClientVpnEndpointAuthenticationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientCidrBlock">clientCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientConnectOptions">clientConnectOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList">DataAwsEc2ClientVpnEndpointClientConnectOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientLoginBannerOptions">clientLoginBannerOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList">DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.connectionLogOptions">connectionLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList">DataAwsEc2ClientVpnEndpointConnectionLogOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dnsServers">dnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList">DataAwsEc2ClientVpnEndpointFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.selfServicePortal">selfServicePortal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.serverCertificateArn">serverCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.sessionTimeoutHours">sessionTimeoutHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.splitTunnel">splitTunnel</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference">DataAwsEc2ClientVpnEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.transportProtocol">transportProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.vpnPort">vpnPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientVpnEndpointIdInput">clientVpnEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientVpnEndpointId">clientVpnEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `authenticationOptions`<sup>Required</sup> <a name="authenticationOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.authenticationOptions"></a>

```typescript
public readonly authenticationOptions: DataAwsEc2ClientVpnEndpointAuthenticationOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList">DataAwsEc2ClientVpnEndpointAuthenticationOptionsList</a>

---

##### `clientCidrBlock`<sup>Required</sup> <a name="clientCidrBlock" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientCidrBlock"></a>

```typescript
public readonly clientCidrBlock: string;
```

- *Type:* string

---

##### `clientConnectOptions`<sup>Required</sup> <a name="clientConnectOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientConnectOptions"></a>

```typescript
public readonly clientConnectOptions: DataAwsEc2ClientVpnEndpointClientConnectOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList">DataAwsEc2ClientVpnEndpointClientConnectOptionsList</a>

---

##### `clientLoginBannerOptions`<sup>Required</sup> <a name="clientLoginBannerOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientLoginBannerOptions"></a>

```typescript
public readonly clientLoginBannerOptions: DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList">DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList</a>

---

##### `connectionLogOptions`<sup>Required</sup> <a name="connectionLogOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.connectionLogOptions"></a>

```typescript
public readonly connectionLogOptions: DataAwsEc2ClientVpnEndpointConnectionLogOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList">DataAwsEc2ClientVpnEndpointConnectionLogOptionsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dnsServers"></a>

```typescript
public readonly dnsServers: string[];
```

- *Type:* string[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.filter"></a>

```typescript
public readonly filter: DataAwsEc2ClientVpnEndpointFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList">DataAwsEc2ClientVpnEndpointFilterList</a>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `selfServicePortal`<sup>Required</sup> <a name="selfServicePortal" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.selfServicePortal"></a>

```typescript
public readonly selfServicePortal: string;
```

- *Type:* string

---

##### `serverCertificateArn`<sup>Required</sup> <a name="serverCertificateArn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.serverCertificateArn"></a>

```typescript
public readonly serverCertificateArn: string;
```

- *Type:* string

---

##### `sessionTimeoutHours`<sup>Required</sup> <a name="sessionTimeoutHours" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.sessionTimeoutHours"></a>

```typescript
public readonly sessionTimeoutHours: number;
```

- *Type:* number

---

##### `splitTunnel`<sup>Required</sup> <a name="splitTunnel" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.splitTunnel"></a>

```typescript
public readonly splitTunnel: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsEc2ClientVpnEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference">DataAwsEc2ClientVpnEndpointTimeoutsOutputReference</a>

---

##### `transportProtocol`<sup>Required</sup> <a name="transportProtocol" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.transportProtocol"></a>

```typescript
public readonly transportProtocol: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `vpnPort`<sup>Required</sup> <a name="vpnPort" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.vpnPort"></a>

```typescript
public readonly vpnPort: number;
```

- *Type:* number

---

##### `clientVpnEndpointIdInput`<sup>Optional</sup> <a name="clientVpnEndpointIdInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientVpnEndpointIdInput"></a>

```typescript
public readonly clientVpnEndpointIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsEc2ClientVpnEndpointFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAwsEc2ClientVpnEndpointTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a> | cdktf.IResolvable

---

##### `clientVpnEndpointId`<sup>Required</sup> <a name="clientVpnEndpointId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientVpnEndpointId"></a>

```typescript
public readonly clientVpnEndpointId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2ClientVpnEndpointAuthenticationOptions <a name="DataAwsEc2ClientVpnEndpointAuthenticationOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptions.Initializer"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

const dataAwsEc2ClientVpnEndpointAuthenticationOptions: dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptions = { ... }
```


### DataAwsEc2ClientVpnEndpointClientConnectOptions <a name="DataAwsEc2ClientVpnEndpointClientConnectOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptions.Initializer"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

const dataAwsEc2ClientVpnEndpointClientConnectOptions: dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptions = { ... }
```


### DataAwsEc2ClientVpnEndpointClientLoginBannerOptions <a name="DataAwsEc2ClientVpnEndpointClientLoginBannerOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptions.Initializer"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

const dataAwsEc2ClientVpnEndpointClientLoginBannerOptions: dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptions = { ... }
```


### DataAwsEc2ClientVpnEndpointConfig <a name="DataAwsEc2ClientVpnEndpointConfig" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.Initializer"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

const dataAwsEc2ClientVpnEndpointConfig: dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.clientVpnEndpointId">clientVpnEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#client_vpn_endpoint_id DataAwsEc2ClientVpnEndpoint#client_vpn_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#id DataAwsEc2ClientVpnEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#tags DataAwsEc2ClientVpnEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientVpnEndpointId`<sup>Optional</sup> <a name="clientVpnEndpointId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.clientVpnEndpointId"></a>

```typescript
public readonly clientVpnEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#client_vpn_endpoint_id DataAwsEc2ClientVpnEndpoint#client_vpn_endpoint_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsEc2ClientVpnEndpointFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#filter DataAwsEc2ClientVpnEndpoint#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#id DataAwsEc2ClientVpnEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#tags DataAwsEc2ClientVpnEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsEc2ClientVpnEndpointTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#timeouts DataAwsEc2ClientVpnEndpoint#timeouts}

---

### DataAwsEc2ClientVpnEndpointConnectionLogOptions <a name="DataAwsEc2ClientVpnEndpointConnectionLogOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptions.Initializer"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

const dataAwsEc2ClientVpnEndpointConnectionLogOptions: dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptions = { ... }
```


### DataAwsEc2ClientVpnEndpointFilter <a name="DataAwsEc2ClientVpnEndpointFilter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter.Initializer"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

const dataAwsEc2ClientVpnEndpointFilter: dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#name DataAwsEc2ClientVpnEndpoint#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#values DataAwsEc2ClientVpnEndpoint#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#name DataAwsEc2ClientVpnEndpoint#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#values DataAwsEc2ClientVpnEndpoint#values}.

---

### DataAwsEc2ClientVpnEndpointTimeouts <a name="DataAwsEc2ClientVpnEndpointTimeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts.Initializer"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

const dataAwsEc2ClientVpnEndpointTimeouts: dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#read DataAwsEc2ClientVpnEndpoint#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#read DataAwsEc2ClientVpnEndpoint#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2ClientVpnEndpointAuthenticationOptionsList <a name="DataAwsEc2ClientVpnEndpointAuthenticationOptionsList" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

new dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.get"></a>

```typescript
public get(index: number): DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference <a name="DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

new dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryId">activeDirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.rootCertificateChainArn">rootCertificateChainArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.samlProviderArn">samlProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.selfServiceSamlProviderArn">selfServiceSamlProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptions">DataAwsEc2ClientVpnEndpointAuthenticationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDirectoryId`<sup>Required</sup> <a name="activeDirectoryId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryId"></a>

```typescript
public readonly activeDirectoryId: string;
```

- *Type:* string

---

##### `rootCertificateChainArn`<sup>Required</sup> <a name="rootCertificateChainArn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.rootCertificateChainArn"></a>

```typescript
public readonly rootCertificateChainArn: string;
```

- *Type:* string

---

##### `samlProviderArn`<sup>Required</sup> <a name="samlProviderArn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.samlProviderArn"></a>

```typescript
public readonly samlProviderArn: string;
```

- *Type:* string

---

##### `selfServiceSamlProviderArn`<sup>Required</sup> <a name="selfServiceSamlProviderArn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.selfServiceSamlProviderArn"></a>

```typescript
public readonly selfServiceSamlProviderArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2ClientVpnEndpointAuthenticationOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptions">DataAwsEc2ClientVpnEndpointAuthenticationOptions</a>

---


### DataAwsEc2ClientVpnEndpointClientConnectOptionsList <a name="DataAwsEc2ClientVpnEndpointClientConnectOptionsList" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

new dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.get"></a>

```typescript
public get(index: number): DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference <a name="DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

new dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptions">DataAwsEc2ClientVpnEndpointClientConnectOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="lambdaFunctionArn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArn"></a>

```typescript
public readonly lambdaFunctionArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2ClientVpnEndpointClientConnectOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptions">DataAwsEc2ClientVpnEndpointClientConnectOptions</a>

---


### DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList <a name="DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

new dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.get"></a>

```typescript
public get(index: number): DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference <a name="DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

new dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerText">bannerText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptions">DataAwsEc2ClientVpnEndpointClientLoginBannerOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bannerText`<sup>Required</sup> <a name="bannerText" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerText"></a>

```typescript
public readonly bannerText: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2ClientVpnEndpointClientLoginBannerOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptions">DataAwsEc2ClientVpnEndpointClientLoginBannerOptions</a>

---


### DataAwsEc2ClientVpnEndpointConnectionLogOptionsList <a name="DataAwsEc2ClientVpnEndpointConnectionLogOptionsList" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

new dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.get"></a>

```typescript
public get(index: number): DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference <a name="DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

new dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroup">cloudwatchLogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStream">cloudwatchLogStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptions">DataAwsEc2ClientVpnEndpointConnectionLogOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogGroup`<sup>Required</sup> <a name="cloudwatchLogGroup" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroup"></a>

```typescript
public readonly cloudwatchLogGroup: string;
```

- *Type:* string

---

##### `cloudwatchLogStream`<sup>Required</sup> <a name="cloudwatchLogStream" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStream"></a>

```typescript
public readonly cloudwatchLogStream: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2ClientVpnEndpointConnectionLogOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptions">DataAwsEc2ClientVpnEndpointConnectionLogOptions</a>

---


### DataAwsEc2ClientVpnEndpointFilterList <a name="DataAwsEc2ClientVpnEndpointFilterList" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

new dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.get"></a>

```typescript
public get(index: number): DataAwsEc2ClientVpnEndpointFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEc2ClientVpnEndpointFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>[]

---


### DataAwsEc2ClientVpnEndpointFilterOutputReference <a name="DataAwsEc2ClientVpnEndpointFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

new dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2ClientVpnEndpointFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a> | cdktf.IResolvable

---


### DataAwsEc2ClientVpnEndpointTimeoutsOutputReference <a name="DataAwsEc2ClientVpnEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2ClientVpnEndpoint } from '@cdktf/provider-aws'

new dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2ClientVpnEndpointTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a> | cdktf.IResolvable

---



