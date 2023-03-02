# `ec2LocalGatewayRouteTableVpcAssociation` Submodule <a name="`ec2LocalGatewayRouteTableVpcAssociation` Submodule" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2LocalGatewayRouteTableVpcAssociation <a name="Ec2LocalGatewayRouteTableVpcAssociation" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association aws_ec2_local_gateway_route_table_vpc_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer"></a>

```typescript
import { ec2LocalGatewayRouteTableVpcAssociation } from '@cdktf/provider-aws'

new ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation(scope: Construct, id: string, config: Ec2LocalGatewayRouteTableVpcAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig">Ec2LocalGatewayRouteTableVpcAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig">Ec2LocalGatewayRouteTableVpcAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isConstruct"></a>

```typescript
import { ec2LocalGatewayRouteTableVpcAssociation } from '@cdktf/provider-aws'

ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformElement"></a>

```typescript
import { ec2LocalGatewayRouteTableVpcAssociation } from '@cdktf/provider-aws'

ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformResource"></a>

```typescript
import { ec2LocalGatewayRouteTableVpcAssociation } from '@cdktf/provider-aws'

ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayId">localGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableIdInput">localGatewayRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `localGatewayId`<sup>Required</sup> <a name="localGatewayId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayId"></a>

```typescript
public readonly localGatewayId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localGatewayRouteTableIdInput`<sup>Optional</sup> <a name="localGatewayRouteTableIdInput" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableIdInput"></a>

```typescript
public readonly localGatewayRouteTableIdInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localGatewayRouteTableId`<sup>Required</sup> <a name="localGatewayRouteTableId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableId"></a>

```typescript
public readonly localGatewayRouteTableId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2LocalGatewayRouteTableVpcAssociationConfig <a name="Ec2LocalGatewayRouteTableVpcAssociationConfig" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.Initializer"></a>

```typescript
import { ec2LocalGatewayRouteTableVpcAssociation } from '@cdktf/provider-aws'

const ec2LocalGatewayRouteTableVpcAssociationConfig: ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#local_gateway_route_table_id Ec2LocalGatewayRouteTableVpcAssociation#local_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#vpc_id Ec2LocalGatewayRouteTableVpcAssociation#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#id Ec2LocalGatewayRouteTableVpcAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#tags Ec2LocalGatewayRouteTableVpcAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#tags_all Ec2LocalGatewayRouteTableVpcAssociation#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `localGatewayRouteTableId`<sup>Required</sup> <a name="localGatewayRouteTableId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.localGatewayRouteTableId"></a>

```typescript
public readonly localGatewayRouteTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#local_gateway_route_table_id Ec2LocalGatewayRouteTableVpcAssociation#local_gateway_route_table_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#vpc_id Ec2LocalGatewayRouteTableVpcAssociation#vpc_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#id Ec2LocalGatewayRouteTableVpcAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#tags Ec2LocalGatewayRouteTableVpcAssociation#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#tags_all Ec2LocalGatewayRouteTableVpcAssociation#tags_all}.

---



