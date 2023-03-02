# `vpcIpamPoolCidr` Submodule <a name="`vpcIpamPoolCidr` Submodule" id="@cdktf/provider-aws.vpcIpamPoolCidr"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpamPoolCidr <a name="VpcIpamPoolCidr" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr aws_vpc_ipam_pool_cidr}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer"></a>

```typescript
import { vpcIpamPoolCidr } from '@cdktf/provider-aws'

new vpcIpamPoolCidr.VpcIpamPoolCidr(scope: Construct, id: string, config: VpcIpamPoolCidrConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig">VpcIpamPoolCidrConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig">VpcIpamPoolCidrConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.putCidrAuthorizationContext">putCidrAuthorizationContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetCidr">resetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetCidrAuthorizationContext">resetCidrAuthorizationContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetNetmaskLength">resetNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCidrAuthorizationContext` <a name="putCidrAuthorizationContext" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.putCidrAuthorizationContext"></a>

```typescript
public putCidrAuthorizationContext(value: VpcIpamPoolCidrCidrAuthorizationContext): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.putCidrAuthorizationContext.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.putTimeouts"></a>

```typescript
public putTimeouts(value: VpcIpamPoolCidrTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts">VpcIpamPoolCidrTimeouts</a>

---

##### `resetCidr` <a name="resetCidr" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetCidr"></a>

```typescript
public resetCidr(): void
```

##### `resetCidrAuthorizationContext` <a name="resetCidrAuthorizationContext" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetCidrAuthorizationContext"></a>

```typescript
public resetCidrAuthorizationContext(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetmaskLength` <a name="resetNetmaskLength" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetNetmaskLength"></a>

```typescript
public resetNetmaskLength(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isConstruct"></a>

```typescript
import { vpcIpamPoolCidr } from '@cdktf/provider-aws'

vpcIpamPoolCidr.VpcIpamPoolCidr.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isTerraformElement"></a>

```typescript
import { vpcIpamPoolCidr } from '@cdktf/provider-aws'

vpcIpamPoolCidr.VpcIpamPoolCidr.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isTerraformResource"></a>

```typescript
import { vpcIpamPoolCidr } from '@cdktf/provider-aws'

vpcIpamPoolCidr.VpcIpamPoolCidr.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidrAuthorizationContext">cidrAuthorizationContext</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference">VpcIpamPoolCidrCidrAuthorizationContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.ipamPoolCidrId">ipamPoolCidrId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference">VpcIpamPoolCidrTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidrAuthorizationContextInput">cidrAuthorizationContextInput</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.ipamPoolIdInput">ipamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.netmaskLengthInput">netmaskLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts">VpcIpamPoolCidrTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.ipamPoolId">ipamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.netmaskLength">netmaskLength</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cidrAuthorizationContext`<sup>Required</sup> <a name="cidrAuthorizationContext" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidrAuthorizationContext"></a>

```typescript
public readonly cidrAuthorizationContext: VpcIpamPoolCidrCidrAuthorizationContextOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference">VpcIpamPoolCidrCidrAuthorizationContextOutputReference</a>

---

##### `ipamPoolCidrId`<sup>Required</sup> <a name="ipamPoolCidrId" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.ipamPoolCidrId"></a>

```typescript
public readonly ipamPoolCidrId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.timeouts"></a>

```typescript
public readonly timeouts: VpcIpamPoolCidrTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference">VpcIpamPoolCidrTimeoutsOutputReference</a>

---

##### `cidrAuthorizationContextInput`<sup>Optional</sup> <a name="cidrAuthorizationContextInput" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidrAuthorizationContextInput"></a>

```typescript
public readonly cidrAuthorizationContextInput: VpcIpamPoolCidrCidrAuthorizationContext;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a>

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipamPoolIdInput`<sup>Optional</sup> <a name="ipamPoolIdInput" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.ipamPoolIdInput"></a>

```typescript
public readonly ipamPoolIdInput: string;
```

- *Type:* string

---

##### `netmaskLengthInput`<sup>Optional</sup> <a name="netmaskLengthInput" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.netmaskLengthInput"></a>

```typescript
public readonly netmaskLengthInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: VpcIpamPoolCidrTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts">VpcIpamPoolCidrTimeouts</a> | cdktf.IResolvable

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.ipamPoolId"></a>

```typescript
public readonly ipamPoolId: string;
```

- *Type:* string

---

##### `netmaskLength`<sup>Required</sup> <a name="netmaskLength" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.netmaskLength"></a>

```typescript
public readonly netmaskLength: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpamPoolCidrCidrAuthorizationContext <a name="VpcIpamPoolCidrCidrAuthorizationContext" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext.Initializer"></a>

```typescript
import { vpcIpamPoolCidr } from '@cdktf/provider-aws'

const vpcIpamPoolCidrCidrAuthorizationContext: vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext.property.message">message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#message VpcIpamPoolCidr#message}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext.property.signature">signature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#signature VpcIpamPoolCidr#signature}. |

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#message VpcIpamPoolCidr#message}.

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#signature VpcIpamPoolCidr#signature}.

---

### VpcIpamPoolCidrConfig <a name="VpcIpamPoolCidrConfig" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.Initializer"></a>

```typescript
import { vpcIpamPoolCidr } from '@cdktf/provider-aws'

const vpcIpamPoolCidrConfig: vpcIpamPoolCidr.VpcIpamPoolCidrConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.ipamPoolId">ipamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#ipam_pool_id VpcIpamPoolCidr#ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#cidr VpcIpamPoolCidr#cidr}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.cidrAuthorizationContext">cidrAuthorizationContext</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a></code> | cidr_authorization_context block. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#id VpcIpamPoolCidr#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.netmaskLength">netmaskLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#netmask_length VpcIpamPoolCidr#netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts">VpcIpamPoolCidrTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.ipamPoolId"></a>

```typescript
public readonly ipamPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#ipam_pool_id VpcIpamPoolCidr#ipam_pool_id}.

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#cidr VpcIpamPoolCidr#cidr}.

---

##### `cidrAuthorizationContext`<sup>Optional</sup> <a name="cidrAuthorizationContext" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.cidrAuthorizationContext"></a>

```typescript
public readonly cidrAuthorizationContext: VpcIpamPoolCidrCidrAuthorizationContext;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a>

cidr_authorization_context block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#cidr_authorization_context VpcIpamPoolCidr#cidr_authorization_context}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#id VpcIpamPoolCidr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `netmaskLength`<sup>Optional</sup> <a name="netmaskLength" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.netmaskLength"></a>

```typescript
public readonly netmaskLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#netmask_length VpcIpamPoolCidr#netmask_length}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpcIpamPoolCidrTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts">VpcIpamPoolCidrTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#timeouts VpcIpamPoolCidr#timeouts}

---

### VpcIpamPoolCidrTimeouts <a name="VpcIpamPoolCidrTimeouts" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts.Initializer"></a>

```typescript
import { vpcIpamPoolCidr } from '@cdktf/provider-aws'

const vpcIpamPoolCidrTimeouts: vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#create VpcIpamPoolCidr#create}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#delete VpcIpamPoolCidr#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#create VpcIpamPoolCidr#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#delete VpcIpamPoolCidr#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcIpamPoolCidrCidrAuthorizationContextOutputReference <a name="VpcIpamPoolCidrCidrAuthorizationContextOutputReference" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.Initializer"></a>

```typescript
import { vpcIpamPoolCidr } from '@cdktf/provider-aws'

new vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resetSignature">resetSignature</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetSignature` <a name="resetSignature" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resetSignature"></a>

```typescript
public resetSignature(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.signatureInput">signatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `signatureInput`<sup>Optional</sup> <a name="signatureInput" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.signatureInput"></a>

```typescript
public readonly signatureInput: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpcIpamPoolCidrCidrAuthorizationContext;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a>

---


### VpcIpamPoolCidrTimeoutsOutputReference <a name="VpcIpamPoolCidrTimeoutsOutputReference" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpcIpamPoolCidr } from '@cdktf/provider-aws'

new vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts">VpcIpamPoolCidrTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpcIpamPoolCidrTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts">VpcIpamPoolCidrTimeouts</a> | cdktf.IResolvable

---



