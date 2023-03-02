# `ec2ClientVpnAuthorizationRule` Submodule <a name="`ec2ClientVpnAuthorizationRule` Submodule" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ClientVpnAuthorizationRule <a name="Ec2ClientVpnAuthorizationRule" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule aws_ec2_client_vpn_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer"></a>

```typescript
import { ec2ClientVpnAuthorizationRule } from '@cdktf/provider-aws'

new ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule(scope: Construct, id: string, config: Ec2ClientVpnAuthorizationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig">Ec2ClientVpnAuthorizationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig">Ec2ClientVpnAuthorizationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetAccessGroupId">resetAccessGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetAuthorizeAllGroups">resetAuthorizeAllGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.putTimeouts"></a>

```typescript
public putTimeouts(value: Ec2ClientVpnAuthorizationRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts">Ec2ClientVpnAuthorizationRuleTimeouts</a>

---

##### `resetAccessGroupId` <a name="resetAccessGroupId" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetAccessGroupId"></a>

```typescript
public resetAccessGroupId(): void
```

##### `resetAuthorizeAllGroups` <a name="resetAuthorizeAllGroups" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetAuthorizeAllGroups"></a>

```typescript
public resetAuthorizeAllGroups(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isConstruct"></a>

```typescript
import { ec2ClientVpnAuthorizationRule } from '@cdktf/provider-aws'

ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isTerraformElement"></a>

```typescript
import { ec2ClientVpnAuthorizationRule } from '@cdktf/provider-aws'

ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isTerraformResource"></a>

```typescript
import { ec2ClientVpnAuthorizationRule } from '@cdktf/provider-aws'

ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference">Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.accessGroupIdInput">accessGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.authorizeAllGroupsInput">authorizeAllGroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.clientVpnEndpointIdInput">clientVpnEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.targetNetworkCidrInput">targetNetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts">Ec2ClientVpnAuthorizationRuleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.accessGroupId">accessGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.authorizeAllGroups">authorizeAllGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.clientVpnEndpointId">clientVpnEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.targetNetworkCidr">targetNetworkCidr</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.timeouts"></a>

```typescript
public readonly timeouts: Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference">Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference</a>

---

##### `accessGroupIdInput`<sup>Optional</sup> <a name="accessGroupIdInput" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.accessGroupIdInput"></a>

```typescript
public readonly accessGroupIdInput: string;
```

- *Type:* string

---

##### `authorizeAllGroupsInput`<sup>Optional</sup> <a name="authorizeAllGroupsInput" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.authorizeAllGroupsInput"></a>

```typescript
public readonly authorizeAllGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientVpnEndpointIdInput`<sup>Optional</sup> <a name="clientVpnEndpointIdInput" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.clientVpnEndpointIdInput"></a>

```typescript
public readonly clientVpnEndpointIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `targetNetworkCidrInput`<sup>Optional</sup> <a name="targetNetworkCidrInput" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.targetNetworkCidrInput"></a>

```typescript
public readonly targetNetworkCidrInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: Ec2ClientVpnAuthorizationRuleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts">Ec2ClientVpnAuthorizationRuleTimeouts</a> | cdktf.IResolvable

---

##### `accessGroupId`<sup>Required</sup> <a name="accessGroupId" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.accessGroupId"></a>

```typescript
public readonly accessGroupId: string;
```

- *Type:* string

---

##### `authorizeAllGroups`<sup>Required</sup> <a name="authorizeAllGroups" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.authorizeAllGroups"></a>

```typescript
public readonly authorizeAllGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientVpnEndpointId`<sup>Required</sup> <a name="clientVpnEndpointId" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.clientVpnEndpointId"></a>

```typescript
public readonly clientVpnEndpointId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `targetNetworkCidr`<sup>Required</sup> <a name="targetNetworkCidr" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.targetNetworkCidr"></a>

```typescript
public readonly targetNetworkCidr: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ClientVpnAuthorizationRuleConfig <a name="Ec2ClientVpnAuthorizationRuleConfig" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.Initializer"></a>

```typescript
import { ec2ClientVpnAuthorizationRule } from '@cdktf/provider-aws'

const ec2ClientVpnAuthorizationRuleConfig: ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.clientVpnEndpointId">clientVpnEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#client_vpn_endpoint_id Ec2ClientVpnAuthorizationRule#client_vpn_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.targetNetworkCidr">targetNetworkCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#target_network_cidr Ec2ClientVpnAuthorizationRule#target_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.accessGroupId">accessGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#access_group_id Ec2ClientVpnAuthorizationRule#access_group_id}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.authorizeAllGroups">authorizeAllGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#authorize_all_groups Ec2ClientVpnAuthorizationRule#authorize_all_groups}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#description Ec2ClientVpnAuthorizationRule#description}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#id Ec2ClientVpnAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts">Ec2ClientVpnAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientVpnEndpointId`<sup>Required</sup> <a name="clientVpnEndpointId" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.clientVpnEndpointId"></a>

```typescript
public readonly clientVpnEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#client_vpn_endpoint_id Ec2ClientVpnAuthorizationRule#client_vpn_endpoint_id}.

---

##### `targetNetworkCidr`<sup>Required</sup> <a name="targetNetworkCidr" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.targetNetworkCidr"></a>

```typescript
public readonly targetNetworkCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#target_network_cidr Ec2ClientVpnAuthorizationRule#target_network_cidr}.

---

##### `accessGroupId`<sup>Optional</sup> <a name="accessGroupId" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.accessGroupId"></a>

```typescript
public readonly accessGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#access_group_id Ec2ClientVpnAuthorizationRule#access_group_id}.

---

##### `authorizeAllGroups`<sup>Optional</sup> <a name="authorizeAllGroups" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.authorizeAllGroups"></a>

```typescript
public readonly authorizeAllGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#authorize_all_groups Ec2ClientVpnAuthorizationRule#authorize_all_groups}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#description Ec2ClientVpnAuthorizationRule#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#id Ec2ClientVpnAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Ec2ClientVpnAuthorizationRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts">Ec2ClientVpnAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#timeouts Ec2ClientVpnAuthorizationRule#timeouts}

---

### Ec2ClientVpnAuthorizationRuleTimeouts <a name="Ec2ClientVpnAuthorizationRuleTimeouts" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts.Initializer"></a>

```typescript
import { ec2ClientVpnAuthorizationRule } from '@cdktf/provider-aws'

const ec2ClientVpnAuthorizationRuleTimeouts: ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#create Ec2ClientVpnAuthorizationRule#create}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#delete Ec2ClientVpnAuthorizationRule#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#create Ec2ClientVpnAuthorizationRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#delete Ec2ClientVpnAuthorizationRule#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference <a name="Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { ec2ClientVpnAuthorizationRule } from '@cdktf/provider-aws'

new ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts">Ec2ClientVpnAuthorizationRuleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2ClientVpnAuthorizationRuleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts">Ec2ClientVpnAuthorizationRuleTimeouts</a> | cdktf.IResolvable

---



