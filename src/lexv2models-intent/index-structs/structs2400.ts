/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationCustomPayload,
lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationCustomPayloadToTerraform,
lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationCustomPayloadToHclTerraform,
Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationCustomPayloadList,
Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationImageResponseCard,
lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationImageResponseCardToTerraform,
lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationImageResponseCardToHclTerraform,
Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationImageResponseCardList,
Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationPlainTextMessage,
lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationPlainTextMessageToTerraform,
lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationPlainTextMessageToHclTerraform,
Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationPlainTextMessageList,
Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessage,
lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageToTerraform,
lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageToHclTerraform,
Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageList,
Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditional,
lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalToTerraform,
lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalToHclTerraform,
Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalList,
Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStep,
lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepToTerraform,
lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepToHclTerraform,
Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepList,
Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponse,
lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseToTerraform,
lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseToHclTerraform,
Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseList,
Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditional,
lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalToTerraform,
lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalToHclTerraform,
Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalList,
Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStep,
lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepToTerraform,
lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepToHclTerraform,
Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepList } from './structs2000'
import { Lexv2ModelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecification,
lexv2ModelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationToTerraform,
lexv2ModelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationToHclTerraform,
Lexv2ModelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationList } from './structs1600'
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariation[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
  */
  readonly message?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessage[] | cdktf.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
  */
  readonly variation?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariation[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageList",
    },
    variation: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    if (this._variation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message.internalValue = undefined;
      this._variation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message.internalValue = value.message;
      this._variation.internalValue = value.variation;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupMessage[] | cdktf.IResolvable) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // variation - computed: false, optional: true, required: false
  private _variation = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupVariation[] | cdktf.IResolvable) {
    this._variation.internalValue = value;
  }
  public resetVariation() {
    this._variation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroup[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktf.IResolvable;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
  */
  readonly messageGroup?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroup[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_interrupt: cdktf.booleanToTerraform(struct!.allowInterrupt),
    message_group: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupToTerraform, true)(struct!.messageGroup),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktf.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_group: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInterrupt !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInterrupt = this._allowInterrupt;
    }
    if (this._messageGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroup = this._messageGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInterrupt = undefined;
      this._messageGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInterrupt = value.allowInterrupt;
      this._messageGroup.internalValue = value.messageGroup;
    }
  }

  // allow_interrupt - computed: false, optional: true, required: false
  private _allowInterrupt?: boolean | cdktf.IResolvable; 
  public get allowInterrupt() {
    return this.getBooleanAttribute('allow_interrupt');
  }
  public set allowInterrupt(value: boolean | cdktf.IResolvable) {
    this._allowInterrupt = value;
  }
  public resetAllowInterrupt() {
    this._allowInterrupt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInterruptInput() {
    return this._allowInterrupt;
  }

  // message_group - computed: false, optional: true, required: false
  private _messageGroup = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroup[] | cdktf.IResolvable) {
    this._messageGroup.internalValue = value;
  }
  public resetMessageGroup() {
    this._messageGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupInput() {
    return this._messageGroup.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#expression_string Lexv2ModelsIntent#expression_string}
  */
  readonly expressionString: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchConditionToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression_string: cdktf.stringToTerraform(struct!.expressionString),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchConditionToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression_string: {
      value: cdktf.stringToHclTerraform(struct!.expressionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionString = this._expressionString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expressionString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expressionString = value.expressionString;
    }
  }

  // expression_string - computed: false, optional: false, required: true
  private _expressionString?: string; 
  public get expressionString() {
    return this.getStringAttribute('expression_string');
  }
  public set expressionString(value: string) {
    this._expressionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionStringInput() {
    return this._expressionString;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchConditionList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchCondition[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchConditionOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
  */
  readonly slotToElicit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
  */
  readonly suppressNextMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
  */
  readonly type: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slot_to_elicit: cdktf.stringToTerraform(struct!.slotToElicit),
    suppress_next_message: cdktf.booleanToTerraform(struct!.suppressNextMessage),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slot_to_elicit: {
      value: cdktf.stringToHclTerraform(struct!.slotToElicit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppress_next_message: {
      value: cdktf.booleanToHclTerraform(struct!.suppressNextMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slotToElicit !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotToElicit = this._slotToElicit;
    }
    if (this._suppressNextMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressNextMessage = this._suppressNextMessage;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._slotToElicit = undefined;
      this._suppressNextMessage = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._slotToElicit = value.slotToElicit;
      this._suppressNextMessage = value.suppressNextMessage;
      this._type = value.type;
    }
  }

  // slot_to_elicit - computed: false, optional: true, required: false
  private _slotToElicit?: string; 
  public get slotToElicit() {
    return this.getStringAttribute('slot_to_elicit');
  }
  public set slotToElicit(value: string) {
    this._slotToElicit = value;
  }
  public resetSlotToElicit() {
    this._slotToElicit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotToElicitInput() {
    return this._slotToElicit;
  }

  // suppress_next_message - computed: false, optional: true, required: false
  private _suppressNextMessage?: boolean | cdktf.IResolvable; 
  public get suppressNextMessage() {
    return this.getBooleanAttribute('suppress_next_message');
  }
  public set suppressNextMessage(value: boolean | cdktf.IResolvable) {
    this._suppressNextMessage = value;
  }
  public resetSuppressNextMessage() {
    this._suppressNextMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressNextMessageInput() {
    return this._suppressNextMessage;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogActionList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogActionOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
  */
  readonly interpretedValue?: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interpreted_value: cdktf.stringToTerraform(struct!.interpretedValue),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interpreted_value: {
      value: cdktf.stringToHclTerraform(struct!.interpretedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interpretedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpretedValue = this._interpretedValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interpretedValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interpretedValue = value.interpretedValue;
    }
  }

  // interpreted_value - computed: false, optional: true, required: false
  private _interpretedValue?: string; 
  public get interpretedValue() {
    return this.getStringAttribute('interpreted_value');
  }
  public set interpretedValue(value: string) {
    this._interpretedValue = value;
  }
  public resetInterpretedValue() {
    this._interpretedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpretedValueInput() {
    return this._interpretedValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValueList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValueOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
  */
  readonly shape?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_block_key: cdktf.stringToTerraform(struct!.mapBlockKey),
    shape: cdktf.stringToTerraform(struct!.shape),
    value: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValueToTerraform, true)(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map_block_key: {
      value: cdktf.stringToHclTerraform(struct!.mapBlockKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapBlockKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapBlockKey = this._mapBlockKey;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapBlockKey = undefined;
      this._shape = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapBlockKey = value.mapBlockKey;
      this._shape = value.shape;
      this._value.internalValue = value.value;
    }
  }

  // map_block_key - computed: false, optional: false, required: true
  private _mapBlockKey?: string; 
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }
  public set mapBlockKey(value: string) {
    this._mapBlockKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapBlockKeyInput() {
    return this._mapBlockKey;
  }

  // shape - computed: false, optional: true, required: false
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  public resetShape() {
    this._shape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // value - computed: false, optional: true, required: false
  private _value = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name?: string;
  /**
  * slot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
  */
  readonly slot?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    slot: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotToTerraform, true)(struct!.slot),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotToHclTerraform, true)(struct!.slot),
      isBlock: true,
      type: "set",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._slot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slot = this._slot?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._slot.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._slot.internalValue = value.slot;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // slot - computed: false, optional: true, required: false
  private _slot = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotList(this, "slot", true);
  public get slot() {
    return this._slot;
  }
  public putSlot(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot[] | cdktf.IResolvable) {
    this._slot.internalValue = value;
  }
  public resetSlot() {
    this._slot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntent[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
  */
  readonly sessionAttributes?: { [key: string]: string };
  /**
  * dialog_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
  */
  readonly dialogAction?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction[] | cdktf.IResolvable;
  /**
  * intent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
  */
  readonly intent?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntent[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sessionAttributes),
    dialog_action: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogActionToTerraform, true)(struct!.dialogAction),
    intent: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentToTerraform, true)(struct!.intent),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sessionAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dialog_action: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogActionToHclTerraform, true)(struct!.dialogAction),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogActionList",
    },
    intent: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentToHclTerraform, true)(struct!.intent),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAttributes = this._sessionAttributes;
    }
    if (this._dialogAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialogAction = this._dialogAction?.internalValue;
    }
    if (this._intent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intent = this._intent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sessionAttributes = undefined;
      this._dialogAction.internalValue = undefined;
      this._intent.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sessionAttributes = value.sessionAttributes;
      this._dialogAction.internalValue = value.dialogAction;
      this._intent.internalValue = value.intent;
    }
  }

  // session_attributes - computed: false, optional: true, required: false
  private _sessionAttributes?: { [key: string]: string }; 
  public get sessionAttributes() {
    return this.getStringMapAttribute('session_attributes');
  }
  public set sessionAttributes(value: { [key: string]: string }) {
    this._sessionAttributes = value;
  }
  public resetSessionAttributes() {
    this._sessionAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAttributesInput() {
    return this._sessionAttributes;
  }

  // dialog_action - computed: false, optional: true, required: false
  private _dialogAction = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogActionList(this, "dialog_action", false);
  public get dialogAction() {
    return this._dialogAction;
  }
  public putDialogAction(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction[] | cdktf.IResolvable) {
    this._dialogAction.internalValue = value;
  }
  public resetDialogAction() {
    this._dialogAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogActionInput() {
    return this._dialogAction.internalValue;
  }

  // intent - computed: false, optional: true, required: false
  private _intent = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntentList(this, "intent", false);
  public get intent() {
    return this._intent;
  }
  public putIntent(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepIntent[] | cdktf.IResolvable) {
    this._intent.internalValue = value;
  }
  public resetIntent() {
    this._intent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intentInput() {
    return this._intent.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStep[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    button: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList",
    },
    image_response_card: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList",
    },
    plain_text_message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList",
    },
    ssml_message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    button: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
  */
  readonly message?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage[] | cdktf.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
  */
  readonly variation?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageList",
    },
    variation: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    if (this._variation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message.internalValue = undefined;
      this._variation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message.internalValue = value.message;
      this._variation.internalValue = value.variation;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage[] | cdktf.IResolvable) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // variation - computed: false, optional: true, required: false
  private _variation = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation[] | cdktf.IResolvable) {
    this._variation.internalValue = value;
  }
  public resetVariation() {
    this._variation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktf.IResolvable;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
  */
  readonly messageGroup?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_interrupt: cdktf.booleanToTerraform(struct!.allowInterrupt),
    message_group: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupToTerraform, true)(struct!.messageGroup),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktf.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_group: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInterrupt !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInterrupt = this._allowInterrupt;
    }
    if (this._messageGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroup = this._messageGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInterrupt = undefined;
      this._messageGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInterrupt = value.allowInterrupt;
      this._messageGroup.internalValue = value.messageGroup;
    }
  }

  // allow_interrupt - computed: false, optional: true, required: false
  private _allowInterrupt?: boolean | cdktf.IResolvable; 
  public get allowInterrupt() {
    return this.getBooleanAttribute('allow_interrupt');
  }
  public set allowInterrupt(value: boolean | cdktf.IResolvable) {
    this._allowInterrupt = value;
  }
  public resetAllowInterrupt() {
    this._allowInterrupt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInterruptInput() {
    return this._allowInterrupt;
  }

  // message_group - computed: false, optional: true, required: false
  private _messageGroup = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup[] | cdktf.IResolvable) {
    this._messageGroup.internalValue = value;
  }
  public resetMessageGroup() {
    this._messageGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupInput() {
    return this._messageGroup.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponse[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#condition Lexv2ModelsIntent#condition}
  */
  readonly condition?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchCondition[] | cdktf.IResolvable;
  /**
  * next_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#next_step Lexv2ModelsIntent#next_step}
  */
  readonly nextStep?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStep[] | cdktf.IResolvable;
  /**
  * response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#response Lexv2ModelsIntent#response}
  */
  readonly response?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponse[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    condition: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchConditionToTerraform, true)(struct!.condition),
    next_step: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepToTerraform, true)(struct!.nextStep),
    response: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseToTerraform, true)(struct!.response),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchConditionList",
    },
    next_step: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepToHclTerraform, true)(struct!.nextStep),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepList",
    },
    response: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseToHclTerraform, true)(struct!.response),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._nextStep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextStep = this._nextStep?.internalValue;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._condition.internalValue = undefined;
      this._nextStep.internalValue = undefined;
      this._response.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._condition.internalValue = value.condition;
      this._nextStep.internalValue = value.nextStep;
      this._response.internalValue = value.response;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // next_step - computed: false, optional: true, required: false
  private _nextStep = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStepList(this, "next_step", false);
  public get nextStep() {
    return this._nextStep;
  }
  public putNextStep(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchNextStep[] | cdktf.IResolvable) {
    this._nextStep.internalValue = value;
  }
  public resetNextStep() {
    this._nextStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextStepInput() {
    return this._nextStep.internalValue;
  }

  // response - computed: false, optional: true, required: false
  private _response = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponseList(this, "response", false);
  public get response() {
    return this._response;
  }
  public putResponse(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchResponse[] | cdktf.IResolvable) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranch[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
  */
  readonly slotToElicit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
  */
  readonly suppressNextMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
  */
  readonly type: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slot_to_elicit: cdktf.stringToTerraform(struct!.slotToElicit),
    suppress_next_message: cdktf.booleanToTerraform(struct!.suppressNextMessage),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slot_to_elicit: {
      value: cdktf.stringToHclTerraform(struct!.slotToElicit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppress_next_message: {
      value: cdktf.booleanToHclTerraform(struct!.suppressNextMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slotToElicit !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotToElicit = this._slotToElicit;
    }
    if (this._suppressNextMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressNextMessage = this._suppressNextMessage;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._slotToElicit = undefined;
      this._suppressNextMessage = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._slotToElicit = value.slotToElicit;
      this._suppressNextMessage = value.suppressNextMessage;
      this._type = value.type;
    }
  }

  // slot_to_elicit - computed: false, optional: true, required: false
  private _slotToElicit?: string; 
  public get slotToElicit() {
    return this.getStringAttribute('slot_to_elicit');
  }
  public set slotToElicit(value: string) {
    this._slotToElicit = value;
  }
  public resetSlotToElicit() {
    this._slotToElicit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotToElicitInput() {
    return this._slotToElicit;
  }

  // suppress_next_message - computed: false, optional: true, required: false
  private _suppressNextMessage?: boolean | cdktf.IResolvable; 
  public get suppressNextMessage() {
    return this.getBooleanAttribute('suppress_next_message');
  }
  public set suppressNextMessage(value: boolean | cdktf.IResolvable) {
    this._suppressNextMessage = value;
  }
  public resetSuppressNextMessage() {
    this._suppressNextMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressNextMessageInput() {
    return this._suppressNextMessage;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogActionList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogActionOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
  */
  readonly interpretedValue?: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interpreted_value: cdktf.stringToTerraform(struct!.interpretedValue),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interpreted_value: {
      value: cdktf.stringToHclTerraform(struct!.interpretedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interpretedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpretedValue = this._interpretedValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interpretedValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interpretedValue = value.interpretedValue;
    }
  }

  // interpreted_value - computed: false, optional: true, required: false
  private _interpretedValue?: string; 
  public get interpretedValue() {
    return this.getStringAttribute('interpreted_value');
  }
  public set interpretedValue(value: string) {
    this._interpretedValue = value;
  }
  public resetInterpretedValue() {
    this._interpretedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpretedValueInput() {
    return this._interpretedValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValueList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValueOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
  */
  readonly shape?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_block_key: cdktf.stringToTerraform(struct!.mapBlockKey),
    shape: cdktf.stringToTerraform(struct!.shape),
    value: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValueToTerraform, true)(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map_block_key: {
      value: cdktf.stringToHclTerraform(struct!.mapBlockKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapBlockKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapBlockKey = this._mapBlockKey;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapBlockKey = undefined;
      this._shape = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapBlockKey = value.mapBlockKey;
      this._shape = value.shape;
      this._value.internalValue = value.value;
    }
  }

  // map_block_key - computed: false, optional: false, required: true
  private _mapBlockKey?: string; 
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }
  public set mapBlockKey(value: string) {
    this._mapBlockKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapBlockKeyInput() {
    return this._mapBlockKey;
  }

  // shape - computed: false, optional: true, required: false
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  public resetShape() {
    this._shape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // value - computed: false, optional: true, required: false
  private _value = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name?: string;
  /**
  * slot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
  */
  readonly slot?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    slot: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotToTerraform, true)(struct!.slot),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotToHclTerraform, true)(struct!.slot),
      isBlock: true,
      type: "set",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._slot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slot = this._slot?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._slot.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._slot.internalValue = value.slot;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // slot - computed: false, optional: true, required: false
  private _slot = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotList(this, "slot", true);
  public get slot() {
    return this._slot;
  }
  public putSlot(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot[] | cdktf.IResolvable) {
    this._slot.internalValue = value;
  }
  public resetSlot() {
    this._slot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntent[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
  */
  readonly sessionAttributes?: { [key: string]: string };
  /**
  * dialog_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
  */
  readonly dialogAction?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction[] | cdktf.IResolvable;
  /**
  * intent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
  */
  readonly intent?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntent[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sessionAttributes),
    dialog_action: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogActionToTerraform, true)(struct!.dialogAction),
    intent: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentToTerraform, true)(struct!.intent),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sessionAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dialog_action: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogActionToHclTerraform, true)(struct!.dialogAction),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogActionList",
    },
    intent: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentToHclTerraform, true)(struct!.intent),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAttributes = this._sessionAttributes;
    }
    if (this._dialogAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialogAction = this._dialogAction?.internalValue;
    }
    if (this._intent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intent = this._intent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sessionAttributes = undefined;
      this._dialogAction.internalValue = undefined;
      this._intent.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sessionAttributes = value.sessionAttributes;
      this._dialogAction.internalValue = value.dialogAction;
      this._intent.internalValue = value.intent;
    }
  }

  // session_attributes - computed: false, optional: true, required: false
  private _sessionAttributes?: { [key: string]: string }; 
  public get sessionAttributes() {
    return this.getStringMapAttribute('session_attributes');
  }
  public set sessionAttributes(value: { [key: string]: string }) {
    this._sessionAttributes = value;
  }
  public resetSessionAttributes() {
    this._sessionAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAttributesInput() {
    return this._sessionAttributes;
  }

  // dialog_action - computed: false, optional: true, required: false
  private _dialogAction = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogActionList(this, "dialog_action", false);
  public get dialogAction() {
    return this._dialogAction;
  }
  public putDialogAction(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction[] | cdktf.IResolvable) {
    this._dialogAction.internalValue = value;
  }
  public resetDialogAction() {
    this._dialogAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogActionInput() {
    return this._dialogAction.internalValue;
  }

  // intent - computed: false, optional: true, required: false
  private _intent = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntentList(this, "intent", false);
  public get intent() {
    return this._intent;
  }
  public putIntent(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepIntent[] | cdktf.IResolvable) {
    this._intent.internalValue = value;
  }
  public resetIntent() {
    this._intent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intentInput() {
    return this._intent.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStep[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    button: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList",
    },
    image_response_card: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList",
    },
    plain_text_message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList",
    },
    ssml_message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    button: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
  */
  readonly message?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage[] | cdktf.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
  */
  readonly variation?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageList",
    },
    variation: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    if (this._variation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message.internalValue = undefined;
      this._variation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message.internalValue = value.message;
      this._variation.internalValue = value.variation;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage[] | cdktf.IResolvable) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // variation - computed: false, optional: true, required: false
  private _variation = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation[] | cdktf.IResolvable) {
    this._variation.internalValue = value;
  }
  public resetVariation() {
    this._variation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktf.IResolvable;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
  */
  readonly messageGroup?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_interrupt: cdktf.booleanToTerraform(struct!.allowInterrupt),
    message_group: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupToTerraform, true)(struct!.messageGroup),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktf.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_group: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInterrupt !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInterrupt = this._allowInterrupt;
    }
    if (this._messageGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroup = this._messageGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInterrupt = undefined;
      this._messageGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInterrupt = value.allowInterrupt;
      this._messageGroup.internalValue = value.messageGroup;
    }
  }

  // allow_interrupt - computed: false, optional: true, required: false
  private _allowInterrupt?: boolean | cdktf.IResolvable; 
  public get allowInterrupt() {
    return this.getBooleanAttribute('allow_interrupt');
  }
  public set allowInterrupt(value: boolean | cdktf.IResolvable) {
    this._allowInterrupt = value;
  }
  public resetAllowInterrupt() {
    this._allowInterrupt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInterruptInput() {
    return this._allowInterrupt;
  }

  // message_group - computed: false, optional: true, required: false
  private _messageGroup = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup[] | cdktf.IResolvable) {
    this._messageGroup.internalValue = value;
  }
  public resetMessageGroup() {
    this._messageGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupInput() {
    return this._messageGroup.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponse[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranch {
  /**
  * next_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#next_step Lexv2ModelsIntent#next_step}
  */
  readonly nextStep?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStep[] | cdktf.IResolvable;
  /**
  * response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#response Lexv2ModelsIntent#response}
  */
  readonly response?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponse[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_step: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepToTerraform, true)(struct!.nextStep),
    response: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseToTerraform, true)(struct!.response),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_step: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepToHclTerraform, true)(struct!.nextStep),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepList",
    },
    response: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseToHclTerraform, true)(struct!.response),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextStep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextStep = this._nextStep?.internalValue;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nextStep.internalValue = undefined;
      this._response.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nextStep.internalValue = value.nextStep;
      this._response.internalValue = value.response;
    }
  }

  // next_step - computed: false, optional: true, required: false
  private _nextStep = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStepList(this, "next_step", false);
  public get nextStep() {
    return this._nextStep;
  }
  public putNextStep(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchNextStep[] | cdktf.IResolvable) {
    this._nextStep.internalValue = value;
  }
  public resetNextStep() {
    this._nextStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextStepInput() {
    return this._nextStep.internalValue;
  }

  // response - computed: false, optional: true, required: false
  private _response = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponseList(this, "response", false);
  public get response() {
    return this._response;
  }
  public putResponse(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchResponse[] | cdktf.IResolvable) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranch[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditional {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#active Lexv2ModelsIntent#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * conditional_branch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#conditional_branch Lexv2ModelsIntent#conditional_branch}
  */
  readonly conditionalBranch?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranch[] | cdktf.IResolvable;
  /**
  * default_branch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#default_branch Lexv2ModelsIntent#default_branch}
  */
  readonly defaultBranch?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranch[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditional | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    conditional_branch: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchToTerraform, true)(struct!.conditionalBranch),
    default_branch: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchToTerraform, true)(struct!.defaultBranch),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditional | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conditional_branch: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchToHclTerraform, true)(struct!.conditionalBranch),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchList",
    },
    default_branch: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchToHclTerraform, true)(struct!.defaultBranch),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditional | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._conditionalBranch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalBranch = this._conditionalBranch?.internalValue;
    }
    if (this._defaultBranch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBranch = this._defaultBranch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditional | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._conditionalBranch.internalValue = undefined;
      this._defaultBranch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._conditionalBranch.internalValue = value.conditionalBranch;
      this._defaultBranch.internalValue = value.defaultBranch;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // conditional_branch - computed: false, optional: true, required: false
  private _conditionalBranch = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranchList(this, "conditional_branch", false);
  public get conditionalBranch() {
    return this._conditionalBranch;
  }
  public putConditionalBranch(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalConditionalBranch[] | cdktf.IResolvable) {
    this._conditionalBranch.internalValue = value;
  }
  public resetConditionalBranch() {
    this._conditionalBranch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalBranchInput() {
    return this._conditionalBranch.internalValue;
  }

  // default_branch - computed: false, optional: true, required: false
  private _defaultBranch = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranchList(this, "default_branch", false);
  public get defaultBranch() {
    return this._defaultBranch;
  }
  public putDefaultBranch(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalDefaultBranch[] | cdktf.IResolvable) {
    this._defaultBranch.internalValue = value;
  }
  public resetDefaultBranch() {
    this._defaultBranch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchInput() {
    return this._defaultBranch.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditional[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
  */
  readonly slotToElicit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
  */
  readonly suppressNextMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
  */
  readonly type: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slot_to_elicit: cdktf.stringToTerraform(struct!.slotToElicit),
    suppress_next_message: cdktf.booleanToTerraform(struct!.suppressNextMessage),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slot_to_elicit: {
      value: cdktf.stringToHclTerraform(struct!.slotToElicit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppress_next_message: {
      value: cdktf.booleanToHclTerraform(struct!.suppressNextMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slotToElicit !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotToElicit = this._slotToElicit;
    }
    if (this._suppressNextMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressNextMessage = this._suppressNextMessage;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._slotToElicit = undefined;
      this._suppressNextMessage = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._slotToElicit = value.slotToElicit;
      this._suppressNextMessage = value.suppressNextMessage;
      this._type = value.type;
    }
  }

  // slot_to_elicit - computed: false, optional: true, required: false
  private _slotToElicit?: string; 
  public get slotToElicit() {
    return this.getStringAttribute('slot_to_elicit');
  }
  public set slotToElicit(value: string) {
    this._slotToElicit = value;
  }
  public resetSlotToElicit() {
    this._slotToElicit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotToElicitInput() {
    return this._slotToElicit;
  }

  // suppress_next_message - computed: false, optional: true, required: false
  private _suppressNextMessage?: boolean | cdktf.IResolvable; 
  public get suppressNextMessage() {
    return this.getBooleanAttribute('suppress_next_message');
  }
  public set suppressNextMessage(value: boolean | cdktf.IResolvable) {
    this._suppressNextMessage = value;
  }
  public resetSuppressNextMessage() {
    this._suppressNextMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressNextMessageInput() {
    return this._suppressNextMessage;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogActionList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogAction[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogActionOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
  */
  readonly interpretedValue?: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interpreted_value: cdktf.stringToTerraform(struct!.interpretedValue),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interpreted_value: {
      value: cdktf.stringToHclTerraform(struct!.interpretedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interpretedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpretedValue = this._interpretedValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interpretedValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interpretedValue = value.interpretedValue;
    }
  }

  // interpreted_value - computed: false, optional: true, required: false
  private _interpretedValue?: string; 
  public get interpretedValue() {
    return this.getStringAttribute('interpreted_value');
  }
  public set interpretedValue(value: string) {
    this._interpretedValue = value;
  }
  public resetInterpretedValue() {
    this._interpretedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpretedValueInput() {
    return this._interpretedValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValueList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValue[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValueOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
  */
  readonly shape?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValue[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_block_key: cdktf.stringToTerraform(struct!.mapBlockKey),
    shape: cdktf.stringToTerraform(struct!.shape),
    value: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValueToTerraform, true)(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map_block_key: {
      value: cdktf.stringToHclTerraform(struct!.mapBlockKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapBlockKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapBlockKey = this._mapBlockKey;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapBlockKey = undefined;
      this._shape = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapBlockKey = value.mapBlockKey;
      this._shape = value.shape;
      this._value.internalValue = value.value;
    }
  }

  // map_block_key - computed: false, optional: false, required: true
  private _mapBlockKey?: string; 
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }
  public set mapBlockKey(value: string) {
    this._mapBlockKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapBlockKeyInput() {
    return this._mapBlockKey;
  }

  // shape - computed: false, optional: true, required: false
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  public resetShape() {
    this._shape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // value - computed: false, optional: true, required: false
  private _value = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlot[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name?: string;
  /**
  * slot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
  */
  readonly slot?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlot[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    slot: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotToTerraform, true)(struct!.slot),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotToHclTerraform, true)(struct!.slot),
      isBlock: true,
      type: "set",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._slot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slot = this._slot?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._slot.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._slot.internalValue = value.slot;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // slot - computed: false, optional: true, required: false
  private _slot = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlotList(this, "slot", true);
  public get slot() {
    return this._slot;
  }
  public putSlot(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentSlot[] | cdktf.IResolvable) {
    this._slot.internalValue = value;
  }
  public resetSlot() {
    this._slot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntent[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
  */
  readonly sessionAttributes?: { [key: string]: string };
  /**
  * dialog_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
  */
  readonly dialogAction?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogAction[] | cdktf.IResolvable;
  /**
  * intent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
  */
  readonly intent?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntent[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sessionAttributes),
    dialog_action: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogActionToTerraform, true)(struct!.dialogAction),
    intent: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentToTerraform, true)(struct!.intent),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sessionAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dialog_action: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogActionToHclTerraform, true)(struct!.dialogAction),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogActionList",
    },
    intent: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentToHclTerraform, true)(struct!.intent),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAttributes = this._sessionAttributes;
    }
    if (this._dialogAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialogAction = this._dialogAction?.internalValue;
    }
    if (this._intent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intent = this._intent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sessionAttributes = undefined;
      this._dialogAction.internalValue = undefined;
      this._intent.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sessionAttributes = value.sessionAttributes;
      this._dialogAction.internalValue = value.dialogAction;
      this._intent.internalValue = value.intent;
    }
  }

  // session_attributes - computed: false, optional: true, required: false
  private _sessionAttributes?: { [key: string]: string }; 
  public get sessionAttributes() {
    return this.getStringMapAttribute('session_attributes');
  }
  public set sessionAttributes(value: { [key: string]: string }) {
    this._sessionAttributes = value;
  }
  public resetSessionAttributes() {
    this._sessionAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAttributesInput() {
    return this._sessionAttributes;
  }

  // dialog_action - computed: false, optional: true, required: false
  private _dialogAction = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogActionList(this, "dialog_action", false);
  public get dialogAction() {
    return this._dialogAction;
  }
  public putDialogAction(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepDialogAction[] | cdktf.IResolvable) {
    this._dialogAction.internalValue = value;
  }
  public resetDialogAction() {
    this._dialogAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogActionInput() {
    return this._dialogAction.internalValue;
  }

  // intent - computed: false, optional: true, required: false
  private _intent = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntentList(this, "intent", false);
  public get intent() {
    return this._intent;
  }
  public putIntent(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepIntent[] | cdktf.IResolvable) {
    this._intent.internalValue = value;
  }
  public resetIntent() {
    this._intent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intentInput() {
    return this._intent.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStep[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    button: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessageOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessage {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayloadList",
    },
    image_response_card: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardList",
    },
    plain_text_message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessageList",
    },
    ssml_message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    button: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessageOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariation[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
  */
  readonly message?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessage[] | cdktf.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
  */
  readonly variation?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariation[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageList",
    },
    variation: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    if (this._variation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message.internalValue = undefined;
      this._variation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message.internalValue = value.message;
      this._variation.internalValue = value.variation;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupMessage[] | cdktf.IResolvable) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // variation - computed: false, optional: true, required: false
  private _variation = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupVariation[] | cdktf.IResolvable) {
    this._variation.internalValue = value;
  }
  public resetVariation() {
    this._variation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroup[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktf.IResolvable;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
  */
  readonly messageGroup?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroup[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_interrupt: cdktf.booleanToTerraform(struct!.allowInterrupt),
    message_group: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupToTerraform, true)(struct!.messageGroup),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktf.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_group: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInterrupt !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInterrupt = this._allowInterrupt;
    }
    if (this._messageGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroup = this._messageGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInterrupt = undefined;
      this._messageGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInterrupt = value.allowInterrupt;
      this._messageGroup.internalValue = value.messageGroup;
    }
  }

  // allow_interrupt - computed: false, optional: true, required: false
  private _allowInterrupt?: boolean | cdktf.IResolvable; 
  public get allowInterrupt() {
    return this.getBooleanAttribute('allow_interrupt');
  }
  public set allowInterrupt(value: boolean | cdktf.IResolvable) {
    this._allowInterrupt = value;
  }
  public resetAllowInterrupt() {
    this._allowInterrupt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInterruptInput() {
    return this._allowInterrupt;
  }

  // message_group - computed: false, optional: true, required: false
  private _messageGroup = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroup[] | cdktf.IResolvable) {
    this._messageGroup.internalValue = value;
  }
  public resetMessageGroup() {
    this._messageGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupInput() {
    return this._messageGroup.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecification {
  /**
  * failure_conditional block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#failure_conditional Lexv2ModelsIntent#failure_conditional}
  */
  readonly failureConditional?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditional[] | cdktf.IResolvable;
  /**
  * failure_next_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#failure_next_step Lexv2ModelsIntent#failure_next_step}
  */
  readonly failureNextStep?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStep[] | cdktf.IResolvable;
  /**
  * failure_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#failure_response Lexv2ModelsIntent#failure_response}
  */
  readonly failureResponse?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponse[] | cdktf.IResolvable;
  /**
  * success_conditional block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#success_conditional Lexv2ModelsIntent#success_conditional}
  */
  readonly successConditional?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditional[] | cdktf.IResolvable;
  /**
  * success_next_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#success_next_step Lexv2ModelsIntent#success_next_step}
  */
  readonly successNextStep?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStep[] | cdktf.IResolvable;
  /**
  * success_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#success_response Lexv2ModelsIntent#success_response}
  */
  readonly successResponse?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse[] | cdktf.IResolvable;
  /**
  * timeout_conditional block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#timeout_conditional Lexv2ModelsIntent#timeout_conditional}
  */
  readonly timeoutConditional?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditional[] | cdktf.IResolvable;
  /**
  * timeout_next_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#timeout_next_step Lexv2ModelsIntent#timeout_next_step}
  */
  readonly timeoutNextStep?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStep[] | cdktf.IResolvable;
  /**
  * timeout_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#timeout_response Lexv2ModelsIntent#timeout_response}
  */
  readonly timeoutResponse?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_conditional: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalToTerraform, true)(struct!.failureConditional),
    failure_next_step: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepToTerraform, true)(struct!.failureNextStep),
    failure_response: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseToTerraform, true)(struct!.failureResponse),
    success_conditional: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalToTerraform, true)(struct!.successConditional),
    success_next_step: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepToTerraform, true)(struct!.successNextStep),
    success_response: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseToTerraform, true)(struct!.successResponse),
    timeout_conditional: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalToTerraform, true)(struct!.timeoutConditional),
    timeout_next_step: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepToTerraform, true)(struct!.timeoutNextStep),
    timeout_response: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseToTerraform, true)(struct!.timeoutResponse),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_conditional: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalToHclTerraform, true)(struct!.failureConditional),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalList",
    },
    failure_next_step: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepToHclTerraform, true)(struct!.failureNextStep),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepList",
    },
    failure_response: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseToHclTerraform, true)(struct!.failureResponse),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseList",
    },
    success_conditional: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalToHclTerraform, true)(struct!.successConditional),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalList",
    },
    success_next_step: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepToHclTerraform, true)(struct!.successNextStep),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepList",
    },
    success_response: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseToHclTerraform, true)(struct!.successResponse),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseList",
    },
    timeout_conditional: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalToHclTerraform, true)(struct!.timeoutConditional),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalList",
    },
    timeout_next_step: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepToHclTerraform, true)(struct!.timeoutNextStep),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepList",
    },
    timeout_response: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseToHclTerraform, true)(struct!.timeoutResponse),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureConditional?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureConditional = this._failureConditional?.internalValue;
    }
    if (this._failureNextStep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureNextStep = this._failureNextStep?.internalValue;
    }
    if (this._failureResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureResponse = this._failureResponse?.internalValue;
    }
    if (this._successConditional?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.successConditional = this._successConditional?.internalValue;
    }
    if (this._successNextStep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.successNextStep = this._successNextStep?.internalValue;
    }
    if (this._successResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.successResponse = this._successResponse?.internalValue;
    }
    if (this._timeoutConditional?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutConditional = this._timeoutConditional?.internalValue;
    }
    if (this._timeoutNextStep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutNextStep = this._timeoutNextStep?.internalValue;
    }
    if (this._timeoutResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutResponse = this._timeoutResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureConditional.internalValue = undefined;
      this._failureNextStep.internalValue = undefined;
      this._failureResponse.internalValue = undefined;
      this._successConditional.internalValue = undefined;
      this._successNextStep.internalValue = undefined;
      this._successResponse.internalValue = undefined;
      this._timeoutConditional.internalValue = undefined;
      this._timeoutNextStep.internalValue = undefined;
      this._timeoutResponse.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureConditional.internalValue = value.failureConditional;
      this._failureNextStep.internalValue = value.failureNextStep;
      this._failureResponse.internalValue = value.failureResponse;
      this._successConditional.internalValue = value.successConditional;
      this._successNextStep.internalValue = value.successNextStep;
      this._successResponse.internalValue = value.successResponse;
      this._timeoutConditional.internalValue = value.timeoutConditional;
      this._timeoutNextStep.internalValue = value.timeoutNextStep;
      this._timeoutResponse.internalValue = value.timeoutResponse;
    }
  }

  // failure_conditional - computed: false, optional: true, required: false
  private _failureConditional = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditionalList(this, "failure_conditional", false);
  public get failureConditional() {
    return this._failureConditional;
  }
  public putFailureConditional(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditional[] | cdktf.IResolvable) {
    this._failureConditional.internalValue = value;
  }
  public resetFailureConditional() {
    this._failureConditional.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureConditionalInput() {
    return this._failureConditional.internalValue;
  }

  // failure_next_step - computed: false, optional: true, required: false
  private _failureNextStep = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStepList(this, "failure_next_step", false);
  public get failureNextStep() {
    return this._failureNextStep;
  }
  public putFailureNextStep(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStep[] | cdktf.IResolvable) {
    this._failureNextStep.internalValue = value;
  }
  public resetFailureNextStep() {
    this._failureNextStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureNextStepInput() {
    return this._failureNextStep.internalValue;
  }

  // failure_response - computed: false, optional: true, required: false
  private _failureResponse = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseList(this, "failure_response", false);
  public get failureResponse() {
    return this._failureResponse;
  }
  public putFailureResponse(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponse[] | cdktf.IResolvable) {
    this._failureResponse.internalValue = value;
  }
  public resetFailureResponse() {
    this._failureResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureResponseInput() {
    return this._failureResponse.internalValue;
  }

  // success_conditional - computed: false, optional: true, required: false
  private _successConditional = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditionalList(this, "success_conditional", false);
  public get successConditional() {
    return this._successConditional;
  }
  public putSuccessConditional(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditional[] | cdktf.IResolvable) {
    this._successConditional.internalValue = value;
  }
  public resetSuccessConditional() {
    this._successConditional.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successConditionalInput() {
    return this._successConditional.internalValue;
  }

  // success_next_step - computed: false, optional: true, required: false
  private _successNextStep = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStepList(this, "success_next_step", false);
  public get successNextStep() {
    return this._successNextStep;
  }
  public putSuccessNextStep(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStep[] | cdktf.IResolvable) {
    this._successNextStep.internalValue = value;
  }
  public resetSuccessNextStep() {
    this._successNextStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successNextStepInput() {
    return this._successNextStep.internalValue;
  }

  // success_response - computed: false, optional: true, required: false
  private _successResponse = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseList(this, "success_response", false);
  public get successResponse() {
    return this._successResponse;
  }
  public putSuccessResponse(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse[] | cdktf.IResolvable) {
    this._successResponse.internalValue = value;
  }
  public resetSuccessResponse() {
    this._successResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successResponseInput() {
    return this._successResponse.internalValue;
  }

  // timeout_conditional - computed: false, optional: true, required: false
  private _timeoutConditional = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditionalList(this, "timeout_conditional", false);
  public get timeoutConditional() {
    return this._timeoutConditional;
  }
  public putTimeoutConditional(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditional[] | cdktf.IResolvable) {
    this._timeoutConditional.internalValue = value;
  }
  public resetTimeoutConditional() {
    this._timeoutConditional.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutConditionalInput() {
    return this._timeoutConditional.internalValue;
  }

  // timeout_next_step - computed: false, optional: true, required: false
  private _timeoutNextStep = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStepList(this, "timeout_next_step", false);
  public get timeoutNextStep() {
    return this._timeoutNextStep;
  }
  public putTimeoutNextStep(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStep[] | cdktf.IResolvable) {
    this._timeoutNextStep.internalValue = value;
  }
  public resetTimeoutNextStep() {
    this._timeoutNextStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutNextStepInput() {
    return this._timeoutNextStep.internalValue;
  }

  // timeout_response - computed: false, optional: true, required: false
  private _timeoutResponse = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseList(this, "timeout_response", false);
  public get timeoutResponse() {
    return this._timeoutResponse;
  }
  public putTimeoutResponse(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse[] | cdktf.IResolvable) {
    this._timeoutResponse.internalValue = value;
  }
  public resetTimeoutResponse() {
    this._timeoutResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutResponseInput() {
    return this._timeoutResponse.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecification[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentFulfillmentCodeHook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#active Lexv2ModelsIntent#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#enabled Lexv2ModelsIntent#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * fulfillment_updates_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#fulfillment_updates_specification Lexv2ModelsIntent#fulfillment_updates_specification}
  */
  readonly fulfillmentUpdatesSpecification?: Lexv2ModelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecification[] | cdktf.IResolvable;
  /**
  * post_fulfillment_status_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#post_fulfillment_status_specification Lexv2ModelsIntent#post_fulfillment_status_specification}
  */
  readonly postFulfillmentStatusSpecification?: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecification[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentFulfillmentCodeHookToTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fulfillment_updates_specification: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationToTerraform, true)(struct!.fulfillmentUpdatesSpecification),
    post_fulfillment_status_specification: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationToTerraform, true)(struct!.postFulfillmentStatusSpecification),
  }
}


export function lexv2ModelsIntentFulfillmentCodeHookToHclTerraform(struct?: Lexv2ModelsIntentFulfillmentCodeHook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fulfillment_updates_specification: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationToHclTerraform, true)(struct!.fulfillmentUpdatesSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationList",
    },
    post_fulfillment_status_specification: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationToHclTerraform, true)(struct!.postFulfillmentStatusSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentFulfillmentCodeHookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentFulfillmentCodeHook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fulfillmentUpdatesSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fulfillmentUpdatesSpecification = this._fulfillmentUpdatesSpecification?.internalValue;
    }
    if (this._postFulfillmentStatusSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postFulfillmentStatusSpecification = this._postFulfillmentStatusSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentFulfillmentCodeHook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._enabled = undefined;
      this._fulfillmentUpdatesSpecification.internalValue = undefined;
      this._postFulfillmentStatusSpecification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._enabled = value.enabled;
      this._fulfillmentUpdatesSpecification.internalValue = value.fulfillmentUpdatesSpecification;
      this._postFulfillmentStatusSpecification.internalValue = value.postFulfillmentStatusSpecification;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // fulfillment_updates_specification - computed: false, optional: true, required: false
  private _fulfillmentUpdatesSpecification = new Lexv2ModelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationList(this, "fulfillment_updates_specification", false);
  public get fulfillmentUpdatesSpecification() {
    return this._fulfillmentUpdatesSpecification;
  }
  public putFulfillmentUpdatesSpecification(value: Lexv2ModelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecification[] | cdktf.IResolvable) {
    this._fulfillmentUpdatesSpecification.internalValue = value;
  }
  public resetFulfillmentUpdatesSpecification() {
    this._fulfillmentUpdatesSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fulfillmentUpdatesSpecificationInput() {
    return this._fulfillmentUpdatesSpecification.internalValue;
  }

  // post_fulfillment_status_specification - computed: false, optional: true, required: false
  private _postFulfillmentStatusSpecification = new Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationList(this, "post_fulfillment_status_specification", false);
  public get postFulfillmentStatusSpecification() {
    return this._postFulfillmentStatusSpecification;
  }
  public putPostFulfillmentStatusSpecification(value: Lexv2ModelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecification[] | cdktf.IResolvable) {
    this._postFulfillmentStatusSpecification.internalValue = value;
  }
  public resetPostFulfillmentStatusSpecification() {
    this._postFulfillmentStatusSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postFulfillmentStatusSpecificationInput() {
    return this._postFulfillmentStatusSpecification.internalValue;
  }
}

export class Lexv2ModelsIntentFulfillmentCodeHookList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentFulfillmentCodeHook[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentFulfillmentCodeHookOutputReference {
    return new Lexv2ModelsIntentFulfillmentCodeHookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#expression_string Lexv2ModelsIntent#expression_string}
  */
  readonly expressionString: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchConditionToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression_string: cdktf.stringToTerraform(struct!.expressionString),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchConditionToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression_string: {
      value: cdktf.stringToHclTerraform(struct!.expressionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionString = this._expressionString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expressionString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expressionString = value.expressionString;
    }
  }

  // expression_string - computed: false, optional: false, required: true
  private _expressionString?: string; 
  public get expressionString() {
    return this.getStringAttribute('expression_string');
  }
  public set expressionString(value: string) {
    this._expressionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionStringInput() {
    return this._expressionString;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchConditionList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchCondition[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchConditionOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
  */
  readonly slotToElicit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
  */
  readonly suppressNextMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
  */
  readonly type: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slot_to_elicit: cdktf.stringToTerraform(struct!.slotToElicit),
    suppress_next_message: cdktf.booleanToTerraform(struct!.suppressNextMessage),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slot_to_elicit: {
      value: cdktf.stringToHclTerraform(struct!.slotToElicit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppress_next_message: {
      value: cdktf.booleanToHclTerraform(struct!.suppressNextMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slotToElicit !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotToElicit = this._slotToElicit;
    }
    if (this._suppressNextMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressNextMessage = this._suppressNextMessage;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._slotToElicit = undefined;
      this._suppressNextMessage = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._slotToElicit = value.slotToElicit;
      this._suppressNextMessage = value.suppressNextMessage;
      this._type = value.type;
    }
  }

  // slot_to_elicit - computed: false, optional: true, required: false
  private _slotToElicit?: string; 
  public get slotToElicit() {
    return this.getStringAttribute('slot_to_elicit');
  }
  public set slotToElicit(value: string) {
    this._slotToElicit = value;
  }
  public resetSlotToElicit() {
    this._slotToElicit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotToElicitInput() {
    return this._slotToElicit;
  }

  // suppress_next_message - computed: false, optional: true, required: false
  private _suppressNextMessage?: boolean | cdktf.IResolvable; 
  public get suppressNextMessage() {
    return this.getBooleanAttribute('suppress_next_message');
  }
  public set suppressNextMessage(value: boolean | cdktf.IResolvable) {
    this._suppressNextMessage = value;
  }
  public resetSuppressNextMessage() {
    this._suppressNextMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressNextMessageInput() {
    return this._suppressNextMessage;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogActionList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogActionOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
  */
  readonly interpretedValue?: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interpreted_value: cdktf.stringToTerraform(struct!.interpretedValue),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interpreted_value: {
      value: cdktf.stringToHclTerraform(struct!.interpretedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interpretedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpretedValue = this._interpretedValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interpretedValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interpretedValue = value.interpretedValue;
    }
  }

  // interpreted_value - computed: false, optional: true, required: false
  private _interpretedValue?: string; 
  public get interpretedValue() {
    return this.getStringAttribute('interpreted_value');
  }
  public set interpretedValue(value: string) {
    this._interpretedValue = value;
  }
  public resetInterpretedValue() {
    this._interpretedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpretedValueInput() {
    return this._interpretedValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValueList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValueOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
  */
  readonly shape?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_block_key: cdktf.stringToTerraform(struct!.mapBlockKey),
    shape: cdktf.stringToTerraform(struct!.shape),
    value: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValueToTerraform, true)(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map_block_key: {
      value: cdktf.stringToHclTerraform(struct!.mapBlockKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapBlockKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapBlockKey = this._mapBlockKey;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapBlockKey = undefined;
      this._shape = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapBlockKey = value.mapBlockKey;
      this._shape = value.shape;
      this._value.internalValue = value.value;
    }
  }

  // map_block_key - computed: false, optional: false, required: true
  private _mapBlockKey?: string; 
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }
  public set mapBlockKey(value: string) {
    this._mapBlockKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapBlockKeyInput() {
    return this._mapBlockKey;
  }

  // shape - computed: false, optional: true, required: false
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  public resetShape() {
    this._shape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // value - computed: false, optional: true, required: false
  private _value = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlot[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name?: string;
  /**
  * slot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
  */
  readonly slot?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlot[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    slot: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotToTerraform, true)(struct!.slot),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotToHclTerraform, true)(struct!.slot),
      isBlock: true,
      type: "set",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._slot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slot = this._slot?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._slot.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._slot.internalValue = value.slot;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // slot - computed: false, optional: true, required: false
  private _slot = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotList(this, "slot", true);
  public get slot() {
    return this._slot;
  }
  public putSlot(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlot[] | cdktf.IResolvable) {
    this._slot.internalValue = value;
  }
  public resetSlot() {
    this._slot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
  */
  readonly sessionAttributes?: { [key: string]: string };
  /**
  * dialog_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
  */
  readonly dialogAction?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction[] | cdktf.IResolvable;
  /**
  * intent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
  */
  readonly intent?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sessionAttributes),
    dialog_action: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogActionToTerraform, true)(struct!.dialogAction),
    intent: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentToTerraform, true)(struct!.intent),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sessionAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dialog_action: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogActionToHclTerraform, true)(struct!.dialogAction),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogActionList",
    },
    intent: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentToHclTerraform, true)(struct!.intent),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAttributes = this._sessionAttributes;
    }
    if (this._dialogAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialogAction = this._dialogAction?.internalValue;
    }
    if (this._intent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intent = this._intent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sessionAttributes = undefined;
      this._dialogAction.internalValue = undefined;
      this._intent.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sessionAttributes = value.sessionAttributes;
      this._dialogAction.internalValue = value.dialogAction;
      this._intent.internalValue = value.intent;
    }
  }

  // session_attributes - computed: false, optional: true, required: false
  private _sessionAttributes?: { [key: string]: string }; 
  public get sessionAttributes() {
    return this.getStringMapAttribute('session_attributes');
  }
  public set sessionAttributes(value: { [key: string]: string }) {
    this._sessionAttributes = value;
  }
  public resetSessionAttributes() {
    this._sessionAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAttributesInput() {
    return this._sessionAttributes;
  }

  // dialog_action - computed: false, optional: true, required: false
  private _dialogAction = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogActionList(this, "dialog_action", false);
  public get dialogAction() {
    return this._dialogAction;
  }
  public putDialogAction(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepDialogAction[] | cdktf.IResolvable) {
    this._dialogAction.internalValue = value;
  }
  public resetDialogAction() {
    this._dialogAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogActionInput() {
    return this._dialogAction.internalValue;
  }

  // intent - computed: false, optional: true, required: false
  private _intent = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentList(this, "intent", false);
  public get intent() {
    return this._intent;
  }
  public putIntent(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntent[] | cdktf.IResolvable) {
    this._intent.internalValue = value;
  }
  public resetIntent() {
    this._intent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intentInput() {
    return this._intent.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStep[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    button: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessage {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList",
    },
    image_response_card: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList",
    },
    plain_text_message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList",
    },
    ssml_message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    button: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariation[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
  */
  readonly message?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessage[] | cdktf.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
  */
  readonly variation?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariation[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageList",
    },
    variation: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    if (this._variation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message.internalValue = undefined;
      this._variation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message.internalValue = value.message;
      this._variation.internalValue = value.variation;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupMessage[] | cdktf.IResolvable) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // variation - computed: false, optional: true, required: false
  private _variation = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupVariation[] | cdktf.IResolvable) {
    this._variation.internalValue = value;
  }
  public resetVariation() {
    this._variation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroup[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktf.IResolvable;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
  */
  readonly messageGroup?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroup[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_interrupt: cdktf.booleanToTerraform(struct!.allowInterrupt),
    message_group: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupToTerraform, true)(struct!.messageGroup),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktf.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_group: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInterrupt !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInterrupt = this._allowInterrupt;
    }
    if (this._messageGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroup = this._messageGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInterrupt = undefined;
      this._messageGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInterrupt = value.allowInterrupt;
      this._messageGroup.internalValue = value.messageGroup;
    }
  }

  // allow_interrupt - computed: false, optional: true, required: false
  private _allowInterrupt?: boolean | cdktf.IResolvable; 
  public get allowInterrupt() {
    return this.getBooleanAttribute('allow_interrupt');
  }
  public set allowInterrupt(value: boolean | cdktf.IResolvable) {
    this._allowInterrupt = value;
  }
  public resetAllowInterrupt() {
    this._allowInterrupt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInterruptInput() {
    return this._allowInterrupt;
  }

  // message_group - computed: false, optional: true, required: false
  private _messageGroup = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseMessageGroup[] | cdktf.IResolvable) {
    this._messageGroup.internalValue = value;
  }
  public resetMessageGroup() {
    this._messageGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupInput() {
    return this._messageGroup.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponse[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#condition Lexv2ModelsIntent#condition}
  */
  readonly condition?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchCondition[] | cdktf.IResolvable;
  /**
  * next_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#next_step Lexv2ModelsIntent#next_step}
  */
  readonly nextStep?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStep[] | cdktf.IResolvable;
  /**
  * response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#response Lexv2ModelsIntent#response}
  */
  readonly response?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponse[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    condition: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchConditionToTerraform, true)(struct!.condition),
    next_step: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepToTerraform, true)(struct!.nextStep),
    response: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseToTerraform, true)(struct!.response),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchConditionList",
    },
    next_step: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepToHclTerraform, true)(struct!.nextStep),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepList",
    },
    response: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseToHclTerraform, true)(struct!.response),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._nextStep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextStep = this._nextStep?.internalValue;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._condition.internalValue = undefined;
      this._nextStep.internalValue = undefined;
      this._response.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._condition.internalValue = value.condition;
      this._nextStep.internalValue = value.nextStep;
      this._response.internalValue = value.response;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // next_step - computed: false, optional: true, required: false
  private _nextStep = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepList(this, "next_step", false);
  public get nextStep() {
    return this._nextStep;
  }
  public putNextStep(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStep[] | cdktf.IResolvable) {
    this._nextStep.internalValue = value;
  }
  public resetNextStep() {
    this._nextStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextStepInput() {
    return this._nextStep.internalValue;
  }

  // response - computed: false, optional: true, required: false
  private _response = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponseList(this, "response", false);
  public get response() {
    return this._response;
  }
  public putResponse(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchResponse[] | cdktf.IResolvable) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranch[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
  */
  readonly slotToElicit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
  */
  readonly suppressNextMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
  */
  readonly type: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slot_to_elicit: cdktf.stringToTerraform(struct!.slotToElicit),
    suppress_next_message: cdktf.booleanToTerraform(struct!.suppressNextMessage),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slot_to_elicit: {
      value: cdktf.stringToHclTerraform(struct!.slotToElicit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppress_next_message: {
      value: cdktf.booleanToHclTerraform(struct!.suppressNextMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slotToElicit !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotToElicit = this._slotToElicit;
    }
    if (this._suppressNextMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressNextMessage = this._suppressNextMessage;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._slotToElicit = undefined;
      this._suppressNextMessage = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._slotToElicit = value.slotToElicit;
      this._suppressNextMessage = value.suppressNextMessage;
      this._type = value.type;
    }
  }

  // slot_to_elicit - computed: false, optional: true, required: false
  private _slotToElicit?: string; 
  public get slotToElicit() {
    return this.getStringAttribute('slot_to_elicit');
  }
  public set slotToElicit(value: string) {
    this._slotToElicit = value;
  }
  public resetSlotToElicit() {
    this._slotToElicit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotToElicitInput() {
    return this._slotToElicit;
  }

  // suppress_next_message - computed: false, optional: true, required: false
  private _suppressNextMessage?: boolean | cdktf.IResolvable; 
  public get suppressNextMessage() {
    return this.getBooleanAttribute('suppress_next_message');
  }
  public set suppressNextMessage(value: boolean | cdktf.IResolvable) {
    this._suppressNextMessage = value;
  }
  public resetSuppressNextMessage() {
    this._suppressNextMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressNextMessageInput() {
    return this._suppressNextMessage;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogActionList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogAction[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogActionOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
  */
  readonly interpretedValue?: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interpreted_value: cdktf.stringToTerraform(struct!.interpretedValue),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interpreted_value: {
      value: cdktf.stringToHclTerraform(struct!.interpretedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interpretedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpretedValue = this._interpretedValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interpretedValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interpretedValue = value.interpretedValue;
    }
  }

  // interpreted_value - computed: false, optional: true, required: false
  private _interpretedValue?: string; 
  public get interpretedValue() {
    return this.getStringAttribute('interpreted_value');
  }
  public set interpretedValue(value: string) {
    this._interpretedValue = value;
  }
  public resetInterpretedValue() {
    this._interpretedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpretedValueInput() {
    return this._interpretedValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValueList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValue[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValueOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
  */
  readonly shape?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValue[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_block_key: cdktf.stringToTerraform(struct!.mapBlockKey),
    shape: cdktf.stringToTerraform(struct!.shape),
    value: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValueToTerraform, true)(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map_block_key: {
      value: cdktf.stringToHclTerraform(struct!.mapBlockKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapBlockKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapBlockKey = this._mapBlockKey;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapBlockKey = undefined;
      this._shape = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapBlockKey = value.mapBlockKey;
      this._shape = value.shape;
      this._value.internalValue = value.value;
    }
  }

  // map_block_key - computed: false, optional: false, required: true
  private _mapBlockKey?: string; 
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }
  public set mapBlockKey(value: string) {
    this._mapBlockKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapBlockKeyInput() {
    return this._mapBlockKey;
  }

  // shape - computed: false, optional: true, required: false
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  public resetShape() {
    this._shape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // value - computed: false, optional: true, required: false
  private _value = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlot[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name?: string;
  /**
  * slot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
  */
  readonly slot?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlot[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    slot: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotToTerraform, true)(struct!.slot),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotToHclTerraform, true)(struct!.slot),
      isBlock: true,
      type: "set",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._slot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slot = this._slot?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._slot.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._slot.internalValue = value.slot;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // slot - computed: false, optional: true, required: false
  private _slot = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlotList(this, "slot", true);
  public get slot() {
    return this._slot;
  }
  public putSlot(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentSlot[] | cdktf.IResolvable) {
    this._slot.internalValue = value;
  }
  public resetSlot() {
    this._slot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntent[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
  */
  readonly sessionAttributes?: { [key: string]: string };
  /**
  * dialog_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
  */
  readonly dialogAction?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogAction[] | cdktf.IResolvable;
  /**
  * intent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
  */
  readonly intent?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntent[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sessionAttributes),
    dialog_action: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogActionToTerraform, true)(struct!.dialogAction),
    intent: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentToTerraform, true)(struct!.intent),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sessionAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dialog_action: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogActionToHclTerraform, true)(struct!.dialogAction),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogActionList",
    },
    intent: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentToHclTerraform, true)(struct!.intent),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAttributes = this._sessionAttributes;
    }
    if (this._dialogAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialogAction = this._dialogAction?.internalValue;
    }
    if (this._intent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intent = this._intent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sessionAttributes = undefined;
      this._dialogAction.internalValue = undefined;
      this._intent.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sessionAttributes = value.sessionAttributes;
      this._dialogAction.internalValue = value.dialogAction;
      this._intent.internalValue = value.intent;
    }
  }

  // session_attributes - computed: false, optional: true, required: false
  private _sessionAttributes?: { [key: string]: string }; 
  public get sessionAttributes() {
    return this.getStringMapAttribute('session_attributes');
  }
  public set sessionAttributes(value: { [key: string]: string }) {
    this._sessionAttributes = value;
  }
  public resetSessionAttributes() {
    this._sessionAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAttributesInput() {
    return this._sessionAttributes;
  }

  // dialog_action - computed: false, optional: true, required: false
  private _dialogAction = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogActionList(this, "dialog_action", false);
  public get dialogAction() {
    return this._dialogAction;
  }
  public putDialogAction(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepDialogAction[] | cdktf.IResolvable) {
    this._dialogAction.internalValue = value;
  }
  public resetDialogAction() {
    this._dialogAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogActionInput() {
    return this._dialogAction.internalValue;
  }

  // intent - computed: false, optional: true, required: false
  private _intent = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntentList(this, "intent", false);
  public get intent() {
    return this._intent;
  }
  public putIntent(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepIntent[] | cdktf.IResolvable) {
    this._intent.internalValue = value;
  }
  public resetIntent() {
    this._intent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intentInput() {
    return this._intent.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStep[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    button: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList",
    },
    image_response_card: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList",
    },
    plain_text_message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList",
    },
    ssml_message: {
      value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
