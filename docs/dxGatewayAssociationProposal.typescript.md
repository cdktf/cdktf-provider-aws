# `dxGatewayAssociationProposal` Submodule <a name="`dxGatewayAssociationProposal` Submodule" id="@cdktf/provider-aws.dxGatewayAssociationProposal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxGatewayAssociationProposal <a name="DxGatewayAssociationProposal" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal aws_dx_gateway_association_proposal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer"></a>

```typescript
import { dxGatewayAssociationProposal } from '@cdktf/provider-aws'

new dxGatewayAssociationProposal.DxGatewayAssociationProposal(scope: Construct, id: string, config: DxGatewayAssociationProposalConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig">DxGatewayAssociationProposalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig">DxGatewayAssociationProposalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetAllowedPrefixes">resetAllowedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAllowedPrefixes` <a name="resetAllowedPrefixes" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetAllowedPrefixes"></a>

```typescript
public resetAllowedPrefixes(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isConstruct"></a>

```typescript
import { dxGatewayAssociationProposal } from '@cdktf/provider-aws'

dxGatewayAssociationProposal.DxGatewayAssociationProposal.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformElement"></a>

```typescript
import { dxGatewayAssociationProposal } from '@cdktf/provider-aws'

dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformResource"></a>

```typescript
import { dxGatewayAssociationProposal } from '@cdktf/provider-aws'

dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayOwnerAccountId">associatedGatewayOwnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayType">associatedGatewayType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.allowedPrefixesInput">allowedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayIdInput">associatedGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayIdInput">dxGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayOwnerAccountIdInput">dxGatewayOwnerAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.allowedPrefixes">allowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayId">associatedGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayId">dxGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayOwnerAccountId">dxGatewayOwnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `associatedGatewayOwnerAccountId`<sup>Required</sup> <a name="associatedGatewayOwnerAccountId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayOwnerAccountId"></a>

```typescript
public readonly associatedGatewayOwnerAccountId: string;
```

- *Type:* string

---

##### `associatedGatewayType`<sup>Required</sup> <a name="associatedGatewayType" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayType"></a>

```typescript
public readonly associatedGatewayType: string;
```

- *Type:* string

---

##### `allowedPrefixesInput`<sup>Optional</sup> <a name="allowedPrefixesInput" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.allowedPrefixesInput"></a>

```typescript
public readonly allowedPrefixesInput: string[];
```

- *Type:* string[]

---

##### `associatedGatewayIdInput`<sup>Optional</sup> <a name="associatedGatewayIdInput" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayIdInput"></a>

```typescript
public readonly associatedGatewayIdInput: string;
```

- *Type:* string

---

##### `dxGatewayIdInput`<sup>Optional</sup> <a name="dxGatewayIdInput" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayIdInput"></a>

```typescript
public readonly dxGatewayIdInput: string;
```

- *Type:* string

---

##### `dxGatewayOwnerAccountIdInput`<sup>Optional</sup> <a name="dxGatewayOwnerAccountIdInput" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayOwnerAccountIdInput"></a>

```typescript
public readonly dxGatewayOwnerAccountIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `allowedPrefixes`<sup>Required</sup> <a name="allowedPrefixes" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.allowedPrefixes"></a>

```typescript
public readonly allowedPrefixes: string[];
```

- *Type:* string[]

---

##### `associatedGatewayId`<sup>Required</sup> <a name="associatedGatewayId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayId"></a>

```typescript
public readonly associatedGatewayId: string;
```

- *Type:* string

---

##### `dxGatewayId`<sup>Required</sup> <a name="dxGatewayId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayId"></a>

```typescript
public readonly dxGatewayId: string;
```

- *Type:* string

---

##### `dxGatewayOwnerAccountId`<sup>Required</sup> <a name="dxGatewayOwnerAccountId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayOwnerAccountId"></a>

```typescript
public readonly dxGatewayOwnerAccountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DxGatewayAssociationProposalConfig <a name="DxGatewayAssociationProposalConfig" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.Initializer"></a>

```typescript
import { dxGatewayAssociationProposal } from '@cdktf/provider-aws'

const dxGatewayAssociationProposalConfig: dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.associatedGatewayId">associatedGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#associated_gateway_id DxGatewayAssociationProposal#associated_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dxGatewayId">dxGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_id DxGatewayAssociationProposal#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dxGatewayOwnerAccountId">dxGatewayOwnerAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_owner_account_id DxGatewayAssociationProposal#dx_gateway_owner_account_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.allowedPrefixes">allowedPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#allowed_prefixes DxGatewayAssociationProposal#allowed_prefixes}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#id DxGatewayAssociationProposal#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `associatedGatewayId`<sup>Required</sup> <a name="associatedGatewayId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.associatedGatewayId"></a>

```typescript
public readonly associatedGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#associated_gateway_id DxGatewayAssociationProposal#associated_gateway_id}.

---

##### `dxGatewayId`<sup>Required</sup> <a name="dxGatewayId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dxGatewayId"></a>

```typescript
public readonly dxGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_id DxGatewayAssociationProposal#dx_gateway_id}.

---

##### `dxGatewayOwnerAccountId`<sup>Required</sup> <a name="dxGatewayOwnerAccountId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dxGatewayOwnerAccountId"></a>

```typescript
public readonly dxGatewayOwnerAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_owner_account_id DxGatewayAssociationProposal#dx_gateway_owner_account_id}.

---

##### `allowedPrefixes`<sup>Optional</sup> <a name="allowedPrefixes" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.allowedPrefixes"></a>

```typescript
public readonly allowedPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#allowed_prefixes DxGatewayAssociationProposal#allowed_prefixes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#id DxGatewayAssociationProposal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



